export interface InterventionRecord {
  id: string;
  issueType: string;
  roadType: string;
  environmentalCondition: string;
  interventionName: string;
  description: string;
  implementation: string;
  effectiveness: number;
  cost: string;
  timeframe: string;
  references?: string[];
  bestPracticeRegion?: string;
  constraints?: string;
}

export const interventionDatabase: InterventionRecord[] = [
  {
    id: "INT_001",
    issueType: "speeding",
    roadType: "NH",
    environmentalCondition: "high_traffic_corridor",
    interventionName: "Variable Speed Limits with Dynamic Signage",
    description: "Speed limits that change based on real-time traffic conditions, weather, and time of day",
    implementation: "Install LED speed limit signs connected to traffic monitoring systems. Adjust limits during peak hours and adverse weather",
    effectiveness: 85,
    cost: "High",
    timeframe: "Medium-term",
    references: ["WHO Road Safety Guidelines", "NHAI Safety Audit 2024", "European Speed Limit Study"],
    bestPracticeRegion: "Netherlands, Germany",
    constraints: "Requires initial capital investment and system maintenance"
  },
  {
    id: "INT_002",
    issueType: "speeding",
    roadType: "NH",
    environmentalCondition: "accident_hotspot",
    interventionName: "Automated Speed Enforcement (Radar/Camera)",
    description: "Automated detection and penalization of speeding vehicles through radar or CCTV",
    implementation: "Deploy speed cameras at identified hotspots with clear signage. Revenue from fines supports road safety programs",
    effectiveness: 80,
    cost: "High",
    timeframe: "Immediate",
    references: ["NHAI Enforcement Guidelines", "CCTV Safety Audit"],
    bestPracticeRegion: "India (Delhi, Mumbai), Singapore"
  },
  {
    id: "INT_003",
    issueType: "speeding",
    roadType: "NH",
    environmentalCondition: "all",
    interventionName: "Road Markings with Speed Perception Lines",
    description: "Psychological traffic calming using convergent line markings to create speed perception",
    implementation: "Paint converging white lines on road surface that create optical illusion of narrowing road, naturally slowing drivers",
    effectiveness: 35,
    cost: "Low",
    timeframe: "Immediate",
    references: ["Traffic Calming Guidelines", "Psychological Road Safety"],
    bestPracticeRegion: "India (some highways), UK"
  },
  {
    id: "INT_004",
    issueType: "speeding",
    roadType: "Rural_Road",
    environmentalCondition: "all",
    interventionName: "Gateway Treatments and Entrance Treatments",
    description: "Visual and physical modifications at village/town entrances to signal speed reduction",
    implementation: "Install decorative welcome signs, reduce lane width visually, add vegetation. Communicate entry to lower-speed zone",
    effectiveness: 45,
    cost: "Medium",
    timeframe: "Immediate",
    references: ["Rural Road Safety Guidelines"]
  },


  {
    id: "INT_005",
    issueType: "intersection_collision",
    roadType: "NH",
    environmentalCondition: "high_traffic_volume",
    interventionName: "Grade Separation (Overpass/Underpass)",
    description: "Complete separation of traffic streams to eliminate intersection conflicts",
    implementation: "Construct overpass or underpass to eliminate at-grade intersection. Provide on/off ramps with proper sight distance",
    effectiveness: 95,
    cost: "Very High",
    timeframe: "Long-term",
    references: ["NHAI Grade Separation Standards", "International Highway Design"],
    bestPracticeRegion: "India (NH on major corridors)"
  },
  {
    id: "INT_006",
    issueType: "intersection_collision",
    roadType: "NH",
    environmentalCondition: "medium_traffic",
    interventionName: "Roundabout Implementation",
    description: "Replace traditional intersection with modern roundabout design",
    implementation: "Convert T-junction or cross-intersection to roundabout with proper splitter islands, lane markings, and signage",
    effectiveness: 80,
    cost: "High",
    timeframe: "Medium-term",
    references: ["Roundabout Design Manual", "NHAI Guidelines"],
    bestPracticeRegion: "India (Jaipur, Bangalore), Europe"
  },
  {
    id: "INT_007",
    issueType: "intersection_collision",
    roadType: "Urban",
    environmentalCondition: "pedestrian_activity",
    interventionName: "Signal Coordination and Adaptive Signal Control",
    description: "Synchronized traffic signals that adapt to real-time traffic flow",
    implementation: "Install SCATS/SCOTS systems with sensors that detect traffic volume and adjust signal timing dynamically",
    effectiveness: 75,
    cost: "High",
    timeframe: "Medium-term",
    references: ["Urban Traffic Management"]
  },
  {
    id: "INT_008",
    issueType: "intersection_collision",
    roadType: "NH",
    environmentalCondition: "low_visibility",
    interventionName: "Enhanced Lane Markings and Chevron Signage",
    description: "High-visibility lane markings and directional signage to guide traffic",
    implementation: "Use retro-reflective paint for lane markings, install chevron signs for curve indication, add center line markers",
    effectiveness: 60,
    cost: "Low",
    timeframe: "Immediate",
    references: ["Road Marking Standards"]
  },


  {
    id: "INT_009",
    issueType: "lane_indiscipline",
    roadType: "NH",
    environmentalCondition: "high_traffic_volume",
    interventionName: "Rumble Strips (Tactile Warning)",
    description: "Textured road surface that creates noise and vibration when crossed unintentionally",
    implementation: "Install rumble strips on lane boundaries and road edges. Creates feedback to drowsy or inattentive drivers",
    effectiveness: 70,
    cost: "Medium",
    timeframe: "Immediate",
    references: ["Lane Discipline Guidelines", "Driver Fatigue Research"]
  },
  {
    id: "INT_010",
    issueType: "unsafe_overtaking",
    roadType: "NH",
    environmentalCondition: "high_traffic_corridor",
    interventionName: "Clear Lane Demarcation with Restricted Overtaking Zones",
    description: "Distinct visual marking of overtaking prohibition zones",
    implementation: "Paint solid yellow lines in no-overtake zones (curves, hills), broken white lines in safe zones. Reinforce with signage",
    effectiveness: 65,
    cost: "Low",
    timeframe: "Immediate",
    references: ["Lane Marking Conventions"]
  },
  {
    id: "INT_011",
    issueType: "unsafe_overtaking",
    roadType: "NH",
    environmentalCondition: "mountainous_terrain",
    interventionName: "Dedicated Slow-Moving Vehicle Lanes",
    description: "Separate lanes for heavy vehicles and slow traffic",
    implementation: "Designate rightmost lane exclusively for trucks/buses on uphill sections. Provides safe passing for other vehicles",
    effectiveness: 75,
    cost: "Medium",
    timeframe: "Medium-term"
  },


  {
    id: "INT_012",
    issueType: "low_visibility_accident",
    roadType: "NH",
    environmentalCondition: "night_driving",
    interventionName: "Road Lighting (LED Street Lights)",
    description: "High-quality LED lighting on accident-prone stretches",
    implementation: "Install energy-efficient LED lights at 40-50m intervals on hotspot sections. Maintain consistent illumination (50+ lux)",
    effectiveness: 80,
    cost: "High",
    timeframe: "Medium-term",
    references: ["Lighting Standards for Roads", "Energy Efficiency Guidelines"],
    bestPracticeRegion: "India (Delhi, Bangalore highways)"
  },
  {
    id: "INT_013",
    issueType: "low_visibility_accident",
    roadType: "NH",
    environmentalCondition: "fog_monsoon",
    interventionName: "Retro-Reflective Barriers and Edge Lines",
    description: "Highly visible markers for road edges during low-visibility conditions",
    implementation: "Install retro-reflective delineators every 25m on both sides. Use cat-eye reflectors on center lines",
    effectiveness: 50,
    cost: "Low",
    timeframe: "Immediate",
    references: ["Visibility Enhancement Standards"]
  },
  {
    id: "INT_014",
    issueType: "low_visibility_accident",
    roadType: "NH",
    environmentalCondition: "all",
    interventionName: "Information Gantry Signs (Electronic)",
    description: "Large overhead signs displaying real-time alerts about hazards, weather, accidents",
    implementation: "Install electronic gantries at key locations. Display alerts about speed, weather, accidents, traffic density",
    effectiveness: 70,
    cost: "High",
    timeframe: "Medium-term"
  },


  {
    id: "INT_015",
    issueType: "pedestrian_accident",
    roadType: "Urban",
    environmentalCondition: "high_pedestrian_activity",
    interventionName: "Pedestrian Crossing with Signals",
    description: "Dedicated pedestrian crossing with traffic signals and clear markings",
    implementation: "Paint zebra crossing, install pedestrian traffic signals with countdown timers, add refuge islands for safety",
    effectiveness: 85,
    cost: "Medium",
    timeframe: "Immediate",
    references: ["Pedestrian Safety Guidelines", "Urban Design Standards"]
  },
  {
    id: "INT_016",
    issueType: "pedestrian_accident",
    roadType: "NH",
    environmentalCondition: "village_markets",
    interventionName: "Speed Reduction Zone with Physical Barriers",
    description: "Physical calming measures to reduce vehicle speed in pedestrian zones",
    implementation: "Install speed humps, chicanes, bollards to naturally slow traffic. Combine with speed limit signage",
    effectiveness: 80,
    cost: "Medium",
    timeframe: "Immediate"
  },
  {
    id: "INT_017",
    issueType: "pedestrian_accident",
    roadType: "Rural_Road",
    environmentalCondition: "all",
    interventionName: "Separated Pedestrian Pathway",
    description: "Physical separation of pedestrians from vehicle traffic",
    implementation: "Construct 1-2m wide pathway on road shoulder with guard rails where necessary. Provide adequate width for 2-way traffic",
    effectiveness: 90,
    cost: "Medium",
    timeframe: "Long-term"
  },


  {
    id: "INT_018",
    issueType: "vehicle_defect",
    roadType: "all",
    environmentalCondition: "all",
    interventionName: "Mandatory Vehicle Inspection Program",
    description: "Regular vehicle inspections to ensure roadworthiness",
    implementation: "Enforce quarterly/annual vehicle inspections. Check brakes, tires, lights, steering. Issue permits only after clearance",
    effectiveness: 75,
    cost: "Medium",
    timeframe: "Immediate",
    references: ["Vehicle Roadworthiness Standards", "Registration Guidelines"]
  },
  {
    id: "INT_019",
    issueType: "brake_failure",
    roadType: "NH",
    environmentalCondition: "mountainous_terrain",
    interventionName: "Emergency Escape Ramps",
    description: "Safe runout areas for vehicles with brake failure on downhill sections",
    implementation: "Construct gravel/sand-filled ramps on long downhill sections. Design with adequate length (50-100m) to safely stop vehicles",
    effectiveness: 95,
    cost: "High",
    timeframe: "Medium-term",
    references: ["Mountain Road Safety Standards"]
  },


  {
    id: "INT_020",
    issueType: "rash_driving",
    roadType: "all",
    environmentalCondition: "all",
    interventionName: "Aggressive Enforcement with Penalties",
    description: "Strict enforcement of traffic rules with proportionate penalties",
    implementation: "Deploy traffic police, conduct surprise checks, strict penalties for violations. Focus on high-risk behaviors",
    effectiveness: 70,
    cost: "Medium",
    timeframe: "Immediate",
    references: ["Traffic Law Enforcement"]
  },
  {
    id: "INT_021",
    issueType: "drowsy_driving",
    roadType: "NH",
    environmentalCondition: "night_driving",
    interventionName: "Designated Rest Areas with Facilities",
    description: "Safe rest stops for drivers to recover from fatigue",
    implementation: "Establish rest areas every 50-60km with basic facilities (water, seating, clean toilets). Encourage 15-20min rest",
    effectiveness: 65,
    cost: "High",
    timeframe: "Medium-term"
  },
  {
    id: "INT_022",
    issueType: "impaired_driving",
    roadType: "all",
    environmentalCondition: "night_driving",
    interventionName: "Sobriety Checkpoints",
    description: "Random alcohol breath testing at strategic locations",
    implementation: "Set up checkpoints at night and weekends. Use breathalyzers, conduct tests, severe penalties for violations",
    effectiveness: 80,
    cost: "Medium",
    timeframe: "Immediate"
  },


  {
    id: "INT_023",
    issueType: "weather_related_accident",
    roadType: "NH",
    environmentalCondition: "monsoon",
    interventionName: "Improved Drainage and Surface Maintenance",
    description: "Enhanced road drainage to prevent water accumulation and skidding",
    implementation: "Clean/upgrade drainage systems, fill potholes, improve surface texture. Regular maintenance during monsoon",
    effectiveness: 70,
    cost: "Medium",
    timeframe: "Immediate",
    references: ["Road Maintenance Standards"]
  },
  {
    id: "INT_024",
    issueType: "weather_related_accident",
    roadType: "NH",
    environmentalCondition: "fog",
    interventionName: "Fog Detection System with Warning",
    description: "Automated system to detect fog and alert drivers",
    implementation: "Install fog detection sensors with automatic speed reduction signage and SMS alerts to drivers",
    effectiveness: 85,
    cost: "Very High",
    timeframe: "Long-term",
    bestPracticeRegion: "Himalayas, Deccan plateau"
  },
  {
    id: "INT_025",
    issueType: "skidding",
    roadType: "NH",
    environmentalCondition: "wet_road",
    interventionName: "High-Friction Surface (Skid-Resistant Pavement)",
    description: "Special pavement surface with improved grip in wet conditions",
    implementation: "Apply high-friction friction course on accident-prone sections. Texture improves traction up to 30%",
    effectiveness: 75,
    cost: "High",
    timeframe: "Medium-term"
  },


  {
    id: "INT_026",
    issueType: "unsafe_behavior",
    roadType: "all",
    environmentalCondition: "all",
    interventionName: "Public Awareness Campaigns",
    description: "Educational campaigns about road safety",
    implementation: "Mass media campaigns (TV, radio, social media) on specific hazards. Focus on high-risk periods/locations",
    effectiveness: 40,
    cost: "Low",
    timeframe: "Immediate"
  },
  {
    id: "INT_027",
    issueType: "unsafe_behavior",
    roadType: "all",
    environmentalCondition: "all",
    interventionName: "Driver Education and Training Programs",
    description: "Comprehensive driver training on road safety",
    implementation: "Mandate defensive driving courses for commercial drivers. Provide training on hazard recognition, vehicle control",
    effectiveness: 60,
    cost: "Medium",
    timeframe: "Medium-term"
  },
  {
    id: "INT_028",
    issueType: "occupant_protection",
    roadType: "all",
    environmentalCondition: "all",
    interventionName: "Seatbelt and Helmet Enforcement",
    description: "Strict enforcement of occupant protection requirements",
    implementation: "Check seatbelt/helmet usage at checkpoints. Penalty for violations. Awareness about injury reduction",
    effectiveness: 90,
    cost: "Low",
    timeframe: "Immediate"
  },


  {
    id: "INT_029",
    issueType: "truck_accident",
    roadType: "NH",
    environmentalCondition: "all",
    interventionName: "Designated Truck Routes",
    description: "Restrict heavy vehicles to specific highways",
    implementation: "Designate NH routes for trucks, restrict from urban/residential areas. Enforce with toll/penalty systems",
    effectiveness: 70,
    cost: "Medium",
    timeframe: "Medium-term"
  },
  {
    id: "INT_030",
    issueType: "blind_spot_accident",
    roadType: "NH",
    environmentalCondition: "all",
    interventionName: "Truck Mirror Improvements and Blind Spot Mirrors",
    description: "Mandated additional mirrors to eliminate blind spots",
    implementation: "Mandate convex mirrors on both sides and rear. Provide training on mirror checking before lane changes",
    effectiveness: 60,
    cost: "Low",
    timeframe: "Immediate"
  }
];

/**
 * Find relevant interventions for a given safety issue
 */
export function findInterventions(
  issueType: string,
  roadType: string,
  environmentalCondition: string
): InterventionRecord[] {
  return interventionDatabase.filter(intervention => {
    const issueMatch = intervention.issueType.toLowerCase().includes(issueType.toLowerCase());
    const roadMatch = intervention.roadType.toLowerCase() === 'all' || 
                      intervention.roadType.toLowerCase().includes(roadType.toLowerCase());
    const envMatch = intervention.environmentalCondition === 'all' || 
                     intervention.environmentalCondition.toLowerCase().includes(environmentalCondition.toLowerCase());
    
    return issueMatch && roadMatch && envMatch;
  });
}

/**
 * Get intervention recommendations with reasoning
 */
export function getInterventionRecommendations(
  safetyIssue: string,
  roadType: string,
  environmentalCondition: string,
  additionalContext?: string
): {
  interventions: InterventionRecord[];
  reasoning: string;
  recommendations: string;
} {
  const relevantInterventions = findInterventions(safetyIssue, roadType, environmentalCondition);
  
  if (relevantInterventions.length === 0) {
    return {
      interventions: [],
      reasoning: `No specific interventions found for ${safetyIssue} on ${roadType} roads in ${environmentalCondition} conditions.`,
      recommendations: "Consider consulting road safety audit guidelines or expert consultation."
    };
  }


  relevantInterventions.sort((a, b) => b.effectiveness - a.effectiveness);

  let reasoning = `For the identified safety issue of "${safetyIssue}" on ${roadType} roads under ${environmentalCondition} conditions, `;
  reasoning += `the following interventions are recommended based on global best practices and safety audit standards:\n\n`;

  let recommendations = `**Recommended Interventions (in order of effectiveness):**\n\n`;
  
  relevantInterventions.forEach((intervention, index) => {
    recommendations += `${index + 1}. **${intervention.interventionName}** (${intervention.effectiveness}% effectiveness)\n`;
    recommendations += `   - Description: ${intervention.description}\n`;
    recommendations += `   - Implementation: ${intervention.implementation}\n`;
    recommendations += `   - Cost: ${intervention.cost} | Timeframe: ${intervention.timeframe}\n`;
    if (intervention.bestPracticeRegion) {
      recommendations += `   - Best Practice: Successfully implemented in ${intervention.bestPracticeRegion}\n`;
    }
    recommendations += `\n`;
  });

  recommendations += `**Supporting Evidence:**\n`;
  relevantInterventions.forEach(intervention => {
    if (intervention.references && intervention.references.length > 0) {
      recommendations += `- ${intervention.interventionName}: ${intervention.references.join(', ')}\n`;
    }
  });

  if (additionalContext) {
    recommendations += `\n**Additional Context Considered:** ${additionalContext}`;
  }

  return {
    interventions: relevantInterventions,
    reasoning,
    recommendations
  };
}

export default interventionDatabase;
