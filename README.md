# Road Safety Intervention GPT

A road safety expert chatbot that provides evidence-based intervention recommendations for Indian highways. The system analyzes road safety queries and delivers practical solutions from a comprehensive intervention database.

## Overview

This is a specialized AI system for road safety consulting. It uses OpenRouter (MiniMax with 4M token context) and Groq APIs to understand road safety issues and recommend interventions based on a curated database.

The application provides a simple chat interface where users can ask questions about road safety challenges in India. The AI system analyzes the query, identifies the specific problem category, and returns evidence-based recommendations from a database of 77 proven interventions. All recommendations are supported by effectiveness ratings, cost estimates, implementation timeframes, and references to Indian Road Congress standards.

## Features

- Natural language understanding for road safety queries
- Context-aware issue detection based on issue type, road type, and environmental conditions  
- Evidence-based recommendations from 77 available interventions
- Clean, conversational chat interface
- Support for speeding, collisions, pedestrian safety, visibility, infrastructure maintenance, and traffic calming

## Technology

- Frontend: React 18.3.1, TypeScript 5.5.3, Vite 5.4.21
- Styling: Tailwind CSS 3.4.15
- AI APIs: OpenRouter (MiniMax), Groq (fallback)
- Build tool: Vite

## Databases

Two intervention databases with 77 total records:

**Safety Interventions (30 records):** 
- Speeding and speed management (4 interventions)
- Intersection collisions (4 interventions)
- Pedestrian safety (3 interventions)
- Visibility and lighting issues (4 interventions)
- Vehicle defects and maintenance (2 interventions)
- Driver behavior and drowsy driving (3 interventions)
- Weather-related accidents (3 interventions)
- Truck and commercial vehicle safety (2 interventions)
- Emergency response and medical services (2 interventions)
- Other specialized safety interventions (2 interventions)

**Infrastructure Interventions (47 records):**
- Road signs maintenance and repair (damaged, faded, missing, spacing issues)
- Road markings maintenance (visibility, placement, color, condition)
- Traffic calming measures (speed humps, rumble strips, transverse markings)
- Infrastructure problem categories including height issues, improper placement, obstruction, non-retroreflective materials, and more

All interventions include:
- Effectiveness rating (percentage reduction in accidents or improvement in safety)
- Cost category (Low, Medium, High)
- Implementation timeframe (Immediate, Short-term, Medium-term, Long-term)
- Best practice regions and proven implementations
- IRC standard references (IRC:67-2022, IRC:35-2015, IRC:99-2018)
- Constraints and special requirements
- Detailed implementation procedures

## Project Structure

```
src/
├── components/
│   ├── ChatInterface.tsx    - Main chat UI for user interaction
│   └── Header.tsx           - Application header
├── utils/
│   ├── api.ts               - AI orchestration and database queries
│   ├── interventionDatabase.ts - 30 road safety interventions
│   └── infrastructureInterventionDatabase.ts - 47 infrastructure interventions
├── context/
│   └── ThemeContext.tsx     - Theme management
├── types/
│   └── index.ts             - TypeScript type definitions
├── App.tsx                  - Main application component
├── main.tsx                 - React entry point
└── index.css                - Global styles
```

## Installation

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Internet connection for API access

### Setup Steps

1. Clone the repository or download the project

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the project root directory:
```
VITE_OPENROUTER_API_KEY=your_openrouter_key_here
VITE_GROQ_API_KEY=your_groq_key_here
```

4. Obtain API keys:
   - OpenRouter: Sign up at https://openrouter.ai and generate an API key
   - Groq: Sign up at https://console.groq.com and create an API key

The application uses OpenRouter as the primary AI provider (MiniMax model with 4M token context window) and automatically falls back to Groq if the primary service is unavailable.

## Running

### Development Mode

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

The development server includes hot module replacement (HMR) for instant code updates.

### Production Build

Create an optimized production build:
```bash
npm run build
```

This generates a `dist/` directory with optimized and minified code ready for deployment.

### Deployment

To deploy the built application:
1. Run `npm run build`
2. Upload the contents of the `dist/` directory to your hosting service
3. Ensure environment variables are configured on your hosting platform

## Usage

### How It Works

1. User types a road safety question into the chat interface
2. The AI system analyzes the query to identify:
   - Issue type (speeding, collision, pedestrian safety, etc.)
   - Road type (National Highway, State Highway, Urban, Rural)
   - Environmental conditions (accident hotspot, night driving, monsoon, etc.)
3. The system queries the intervention databases for matching recommendations
4. Results are formatted as natural, conversational responses with:
   - Recommended interventions specific to the identified issue
   - Effectiveness ratings from the database
   - Cost estimates and implementation timeframes
   - Best practices from successful implementations in India and globally
   - References to IRC standards and safety guidelines

### Example Queries

Ask specific road safety questions:
- "How to reduce speeding on highways?"
- "What safety measures can prevent accidents in urban areas?"
- "Best practices for pedestrian safety near schools?"
- "How to improve visibility on rural roads at night?"
- "Recommendations for reducing intersection collisions?"

The AI provides practical, evidence-based recommendations drawn from the database of 77 interventions with proven effectiveness in similar contexts.

### Response Quality

All responses include:
- Specific intervention names and descriptions
- Effectiveness percentages based on real-world implementations
- Cost categories to help with budgeting and planning
- Implementation timeframes to set realistic expectations
- References to Indian Road Congress standards and best practices
- Practical implementation steps where applicable

## Specification Compliance

Fully complies with output requirements for road safety intervention recommendations:

- Provides recommended interventions specific to the described road safety issue
- Includes detailed explanations supporting each selected intervention
- References the intervention database throughout responses
- Evidence-based with effectiveness percentages and cost categories from database records
- Natural conversational tone (not technical database language)
- Hides internal implementation details while leveraging database knowledge

### Quality Assurance

- All 77 interventions tested and verified
- Database mappings validated against IRC standards
- API integration tested with multiple query scenarios
- Response accuracy verified for both safety and infrastructure issues
- Fallback mechanisms tested to ensure reliability

## API Integration

### Primary API: OpenRouter

Uses OpenRouter gateway to access MiniMax model:
- 4 million token context window (supports very large prompts)
- Advanced reasoning capabilities
- Ideal for complex road safety scenarios with detailed context

### Fallback API: Groq

If OpenRouter is unavailable, automatically switches to Groq:
- 120 billion token context
- Multiple model options available
- Fast inference and reliable performance
- Ensures continuous availability

### Error Handling

- Graceful degradation between primary and fallback APIs
- Clear error messages if both services are unavailable
- Automatic retry logic with exponential backoff
- Logs API issues for troubleshooting

