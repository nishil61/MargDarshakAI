import { getInterventionRecommendations } from './interventionDatabase';
import { getInfrastructureInterventions } from './infrastructureInterventionDatabase';

function getGroqApiKey(): string | null {
  const envKey = (import.meta.env.VITE_GROQ_API_KEY || import.meta.env.GROQ_API_KEY) as string;
  if (envKey) return envKey;
  
  if (typeof window !== 'undefined') {
    return localStorage.getItem('groq_api_key');
  }
  
  return null;
}

function getOpenRouterApiKey(): string | null {
  const envKey = (import.meta.env.VITE_OPENROUTER_API_KEY || import.meta.env.OPENROUTER_API_KEY) as string;
  if (envKey) return envKey;
  
  if (typeof window !== 'undefined') {
    return localStorage.getItem('openrouter_api_key');
  }
  
  return null;
}

async function queryOpenRouterDirect(messages: Array<{ role: string; content: string }>): Promise<string> {
  const apiKey = getOpenRouterApiKey();
  
  if (!apiKey) {
    throw new Error('API key not configured');
  }

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': window.location.origin,
        'X-Title': 'Road Safety Intervention GPT'
      },
      body: JSON.stringify({
        model: 'minimax/minimax-01',
        messages: messages,
        temperature: 0.7,
        max_tokens: 4000
      })
    });

    if (!response.ok) {
      await response.json().catch(() => ({}));
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.choices && Array.isArray(data.choices) && data.choices[0]) {
      if (data.choices[0].message && data.choices[0].message.content) {
        return data.choices[0].message.content;
      }
    }
    
    throw new Error('Invalid response format');
    
  } catch (error) {
    throw error;
  }
}

async function queryGroqDirect(messages: Array<{ role: string; content: string }>): Promise<string> {
  const apiKey = getGroqApiKey();
  
  if (!apiKey) {
    throw new Error('API key not configured');
  }

  const models = [
    'openai/gpt-oss-120b',
    'llama3-70b-8192',
    'llama3.1-405b-instruct',
    'llama3.1-70b-versatile',
    'llama3.1-8b-instant',
    'llama3-8b-8192'
  ];

  let lastError: Error | null = null;

  for (const model of models) {
    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: model,
          messages: messages,
          temperature: 0.7,
          max_tokens: 800
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        
        if (errorData.error?.code === 'model_decommissioned') {
          continue;
        }
        
        throw new Error('API error');
      }

      const data = await response.json();
      
      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        throw new Error('Invalid response');
      }

      return data.choices[0].message.content;
      
    } catch (error) {
      lastError = error as Error;
      
      if ((error as Error).message.includes('model_decommissioned') || 
          (error as Error).message.includes('model not found')) {
        continue;
      }
      
      throw error;
    }
  }

  // If all models failed, throw the last error
  throw lastError || new Error('All Groq models failed');
}

/**
 * Detect infrastructure maintenance issues from user prompt
 */
function detectInfrastructureIssues(prompt: string): {
  problemCategories: string[];
  infrastructureTypes: string[];
} {
  const lowerPrompt = prompt.toLowerCase();
  
  const problemCategories: string[] = [];
  const infrastructureTypes: string[] = [];

  // Detect problem categories
  if (lowerPrompt.includes('damaged') || lowerPrompt.includes('damage') || lowerPrompt.includes('broken')) {
    problemCategories.push('Damaged');
  }
  if (lowerPrompt.includes('faded') || lowerPrompt.includes('fading') || lowerPrompt.includes('worn')) {
    problemCategories.push('Faded');
  }
  if (lowerPrompt.includes('missing') || lowerPrompt.includes('absent')) {
    problemCategories.push('Missing');
  }
  if (lowerPrompt.includes('improper') || lowerPrompt.includes('incorrect') || lowerPrompt.includes('wrongly placed')) {
    problemCategories.push('Improper Placement');
  }
  if (lowerPrompt.includes('cracked') || lowerPrompt.includes('crack')) {
    problemCategories.push('Cracked/Deteriorated');
  }
  if (lowerPrompt.includes('loose') || lowerPrompt.includes('separated')) {
    problemCategories.push('Loose/Separated Components');
  }
  if (lowerPrompt.includes('corroded') || lowerPrompt.includes('corrosion') || lowerPrompt.includes('rust')) {
    problemCategories.push('Corrosion');
  }
  if (lowerPrompt.includes('obscured') || lowerPrompt.includes('obstruct') || lowerPrompt.includes('blocked')) {
    problemCategories.push('Obscured');
  }

  // Detect infrastructure types
  if (lowerPrompt.includes('sign') || lowerPrompt.includes('signage') || lowerPrompt.includes('stop sign') || 
      lowerPrompt.includes('warning sign') || lowerPrompt.includes('directional sign')) {
    infrastructureTypes.push('Road Sign');
  }
  if (lowerPrompt.includes('marking') || lowerPrompt.includes('line') || lowerPrompt.includes('paint') || 
      lowerPrompt.includes('zebra crossing') || lowerPrompt.includes('road marking')) {
    infrastructureTypes.push('Road Marking');
  }
  if (lowerPrompt.includes('speed hump') || lowerPrompt.includes('bump') || lowerPrompt.includes('traffic calming') || 
      lowerPrompt.includes('rumble strip') || lowerPrompt.includes('stud')) {
    infrastructureTypes.push('Traffic Calming Measures');
  }

  return { problemCategories, infrastructureTypes };
}

/**
 * Detect road safety issues from user prompt
 */
function detectSafetyIssues(prompt: string): {
  issueTypes: string[];
  roadTypes: string[];
  conditions: string[];
} {
  const lowerPrompt = prompt.toLowerCase();
  
  const issueTypes: string[] = [];
  const roadTypes: string[] = [];
  const conditions: string[] = [];

  // Detect issue types
  if (lowerPrompt.includes('speed') || lowerPrompt.includes('speeding')) issueTypes.push('speeding');
  if (lowerPrompt.includes('collision') || lowerPrompt.includes('crash')) issueTypes.push('intersection_collision');
  if (lowerPrompt.includes('lane') || lowerPrompt.includes('overtake')) issueTypes.push('lane_indiscipline');
  if (lowerPrompt.includes('visibility') || lowerPrompt.includes('visibility')) issueTypes.push('low_visibility_accident');
  if (lowerPrompt.includes('pedestrian')) issueTypes.push('pedestrian_accident');
  if (lowerPrompt.includes('truck') || lowerPrompt.includes('heavy vehicle')) issueTypes.push('truck_accident');
  if (lowerPrompt.includes('weather') || lowerPrompt.includes('monsoon') || lowerPrompt.includes('fog')) issueTypes.push('weather_related_accident');
  if (lowerPrompt.includes('defect') || lowerPrompt.includes('brake') || lowerPrompt.includes('tire')) issueTypes.push('vehicle_defect');
  if (lowerPrompt.includes('rash') || lowerPrompt.includes('dangerous')) issueTypes.push('rash_driving');
  if (lowerPrompt.includes('drowsy') || lowerPrompt.includes('fatigue')) issueTypes.push('drowsy_driving');

  // Detect road types
  if (lowerPrompt.includes('nh') || lowerPrompt.includes('national highway')) roadTypes.push('NH');
  if (lowerPrompt.includes('sh') || lowerPrompt.includes('state highway')) roadTypes.push('SH');
  if (lowerPrompt.includes('urban') || lowerPrompt.includes('city')) roadTypes.push('Urban');
  if (lowerPrompt.includes('rural') || lowerPrompt.includes('village')) roadTypes.push('Rural_Road');
  if (lowerPrompt.includes('mountain') || lowerPrompt.includes('hill')) roadTypes.push('NH'); // Mountain roads typically on NH

  // Detect conditions
  if (lowerPrompt.includes('night') || lowerPrompt.includes('dark')) conditions.push('night_driving');
  if (lowerPrompt.includes('fog') || lowerPrompt.includes('foggy')) conditions.push('fog');
  if (lowerPrompt.includes('monsoon') || lowerPrompt.includes('rain')) conditions.push('monsoon');
  if (lowerPrompt.includes('wet')) conditions.push('wet_road');
  if (lowerPrompt.includes('traffic') || lowerPrompt.includes('congestion')) conditions.push('high_traffic_volume');
  if (lowerPrompt.includes('hotspot') || lowerPrompt.includes('accident prone')) conditions.push('accident_hotspot');
  if (lowerPrompt.includes('mountain') || lowerPrompt.includes('hill')) conditions.push('mountainous_terrain');

  return { issueTypes, roadTypes, conditions };
}

/**
 * Filter out meta-commentary and keep only actionable analysis
 */
function filterOutMetaCommentary(response: string, state: string): string {
  // If response contains table/data structure, it's good - keep it
  if (response.includes('|') || response.includes('#') || response.includes('Location')) {
    return response;
  }
  
  // If response talks about "data collection", "provide data", "I do not have", etc - skip it
  const metaIndicators = [
    'do not have the exact counts',
    'do not have the data',
    'please provide',
    'you need to provide',
    'if you have the raw',
    'import the data',
    'below i outline',
    'two ways to move forward',
    'step by step',
    'how to generate',
    'i do not have'
  ];
  
  const lowerResponse = response.toLowerCase();
  const hasMetaCommentary = metaIndicators.some(indicator => lowerResponse.includes(indicator));
  
  // If it's purely meta-commentary without actual data, return a prompt for user to ask again
  if (hasMetaCommentary && !response.includes('NH') && !response.includes('hotspot')) {
    return `I need access to more specific ${state} accident data. Let me provide you with known high-risk corridors and common accident patterns in ${state} based on available reports. Please ask me to provide the top hotspots in ${state} with known risk factors, and I'll give you specific locations and interventions.`;
  }
  
  // Otherwise return the full response as it has useful data
  return response;
}

/**
 * Build intervention-aware system prompt with database references
 */
/**
 * Query AI through backend proxy, with direct Groq fallback
 * Backend runs on http://localhost:3000 (optional)
 * Falls back to direct Groq API if backend unavailable
 */
export async function queryOpenAI(prompt: string, context?: string): Promise<string> {
  try {
    // Detect if this is a state-specific query
    const stateNames = [
      'Gujarat', 'Maharashtra', 'Karnataka', 'Andhra Pradesh', 'Uttar Pradesh', 'Punjab',
      'Tamil Nadu', 'Telangana', 'Delhi', 'Rajasthan', 'Madhya Pradesh',
      'Haryana', 'Bihar', 'West Bengal', 'Assam', 'Kerala', 'Chhattisgarh',
      'Jharkhand', 'Uttarakhand', 'Himachal', 'Goa', 'Tripura'
    ];
    
    const mentionedState = stateNames.find(state => 
      prompt.toLowerCase().includes(state.toLowerCase())
    );

    // Detect safety issues and get intervention recommendations
    const { issueTypes, roadTypes, conditions } = detectSafetyIssues(prompt);
    let interventionContext = '';
    let infrastructureContext = '';
    
    // Check for SAFETY ISSUES and get safety interventions
    if (issueTypes.length > 0) {
      try {
        const safetyIssue = issueTypes[0] || 'general_safety';
        const roadType = roadTypes[0] || 'NH';
        const condition = conditions[0] || 'normal_conditions';
        
        const result = getInterventionRecommendations(safetyIssue, roadType, condition);
        
        if (result.interventions && result.interventions.length > 0) {
          interventionContext = `\n\nRECOMMENDED SAFETY INTERVENTIONS FROM GLOBAL BEST PRACTICES DATABASE:\n\n${result.recommendations}`;
        }
      } catch (e) {
        // Silently handle error
      }
    }

    // Check for INFRASTRUCTURE ISSUES and get infrastructure interventions
    const { problemCategories, infrastructureTypes } = detectInfrastructureIssues(prompt);
    if (problemCategories.length > 0 || infrastructureTypes.length > 0) {
      try {
        const problemCategory = problemCategories[0] || 'Damaged';
        const infrastructureType = infrastructureTypes[0] || 'Road Sign';
        
        const infrastructureMatches = getInfrastructureInterventions(problemCategory, infrastructureType);
        
        if (infrastructureMatches && infrastructureMatches.length > 0) {
          // Format infrastructure interventions for context
          const infrastructureRecommendations = infrastructureMatches
            .slice(0, 3) // Use top 3 matches
            .map((item: any) => {
              return `**${item.specificProblem}** (${item.problemCategory} - ${item.infrastructureType})\n` +
                     `Priority: ${item.priority} | Timeframe: ${item.timeframe}\n` +
                     `Problem: ${item.description}\n` +
                     `Solution: ${item.solution}\n` +
                     `Implementation: ${item.implementation}`;
            })
            .join('\n\n');
          
          infrastructureContext = `\n\nRECOMMENDED INFRASTRUCTURE INTERVENTIONS:\n\n${infrastructureRecommendations}`;
        }
      } catch (e) {
        // Silently handle error
      }
    }

    // Build specialized system prompt (Spec 1.3.4: show database info but hide internal IDs from user)
    let systemPrompt = `You are a road safety expert specializing in Indian road conditions.

You have access to a comprehensive road safety intervention database. When providing recommendations:
- Draw from the database interventions provided below
- Present interventions with their effectiveness, cost, and timeframe naturally
- DO NOT mention "Intervention ID" or "INT_XXX" format to users
- DO NOT mention "Safety Intervention Database" explicitly to users
- Use natural, conversational language focused on solutions, not database mechanics
- Frame interventions as practical solutions, not database records
- Include effectiveness %, cost category, and timeframe as supporting evidence
- Reference real-world examples and best practices from the database context

Focus on helping the user understand WHAT to do and WHY it works, using database-backed information.

${interventionContext}${infrastructureContext}`;

    if (mentionedState) {
      systemPrompt = `You are a road safety expert specializing in ${mentionedState}.

You have access to a comprehensive road safety intervention database. When providing recommendations:
- Draw from the database interventions provided below
- Present interventions with their effectiveness, cost, and timeframe naturally
- DO NOT mention "Intervention ID" or "INT_XXX" format to users
- DO NOT mention "Safety Intervention Database" explicitly to users
- Use natural, conversational language focused on solutions, not database mechanics
- Frame interventions as practical solutions, not database records
- Tailor recommendations to ${mentionedState}-specific context
- Include effectiveness %, cost category, and timeframe as supporting evidence
- Reference real-world examples and best practices from ${mentionedState}

Focus on helping the user understand WHAT to do and WHY it works using database-backed information.

${interventionContext}${infrastructureContext}`;
    }

    const messages = [
      {
        role: 'system' as const,
        content: systemPrompt
      },
      ...(context ? [{
        role: 'system' as const,
        content: `Context data: ${context}`
      }] : []),
      {
        role: 'user' as const,
        content: prompt
      }
    ];

    // Try OpenRouter API (for MiniMax via OpenRouter)
    const openRouterKey = getOpenRouterApiKey();
    if (openRouterKey) {
      try {
        let openRouterResponse = await queryOpenRouterDirect(messages);
        
        // Filter out meta-commentary for state queries
        if (mentionedState && openRouterResponse) {
          openRouterResponse = filterOutMetaCommentary(openRouterResponse, mentionedState);
        }
        
        return openRouterResponse;
      } catch (openRouterError) {
        // Fall through to Groq if OpenRouter fails
      }
    }

    // Fallback to direct Groq API
    let groqResponse = await queryGroqDirect(messages);
    
    // Filter out meta-commentary for state queries
    if (mentionedState && groqResponse) {
      groqResponse = filterOutMetaCommentary(groqResponse, mentionedState);
    }
    
    return groqResponse;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    
    if (errorMessage.includes('API key not found')) {
      return 'Please configure API keys:\n\nOption 1: Add OPENROUTER_API_KEY to .env (Recommended - 4M tokens)\nGet key from: https://openrouter.ai\n\nOption 2: Add GROQ_API_KEY to .env\nGet key from: https://console.groq.com/keys';
    }
    
    return 'Unable to process request. Please check:\n1. API keys are configured in .env\n2. Your internet connection\n3. API service availability';
  }
}
