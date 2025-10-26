/**
 * Infrastructure & Maintenance Intervention Database
 * Based on IRC:67-2022 (Road Signs), IRC:35-2015 (Road Markings), IRC:99-2018 (Traffic Calming)
 * 
 * This database provides solutions for infrastructure maintenance problems identified in road networks
 * Maps problem categories to appropriate interventions with repair/replacement procedures
 */

export interface InfrastructureIntervention {
  id: string;
  problemCategory: string; // e.g., "Damaged", "Faded", "Missing", "Improper Placement", etc.
  infrastructureType: string; // Road Sign, Road Marking, Traffic Calming Measure
  specificProblem: string; // e.g., STOP Sign, Zebra Crossing, Speed Hump
  description: string;
  rootCause: string;
  solution: string;
  implementation: string;
  repairProcedure: string;
  replacementCriteria: string;
  estimatedCost: string; // Low, Medium, High
  timeframe: string; // Immediate, Short-term (1-3 months), Medium-term (3-6 months), Long-term
  preventiveMaintenance: string;
  references?: string[];
  irc_clause?: string;
  priority: string; // Critical, High, Medium, Low
}

export const infrastructureInterventionDatabase: InfrastructureIntervention[] = [
  // DAMAGED ROAD SIGNS - Category: Damaged
  {
    id: "INFRA_001",
    problemCategory: "Damaged",
    infrastructureType: "Road Sign",
    specificProblem: "STOP Sign (Damaged)",
    description: "STOP sign structure compromised, dents, cracks, or structural damage affecting visibility and integrity",
    rootCause: "Weather exposure, vehicle impact, poor maintenance, age-related deterioration",
    solution: "Complete replacement of damaged sign with new octagonal sign meeting IRC:67-2022 specifications",
    implementation: "Remove old sign structure and post. Install new sign with retroreflective sheeting. Ensure proper orientation and placement.",
    repairProcedure: "Minor dents can be repaired if < 50% of sign area. Major structural damage requires replacement.",
    replacementCriteria: "Replace when damage affects > 50% of sign surface area or structural integrity is compromised. Retroreflectivity < 80% requires replacement.",
    estimatedCost: "Medium",
    timeframe: "Immediate",
    preventiveMaintenance: "Quarterly inspection for corrosion and damage. Annual retroreflectivity testing. Paint touch-ups as needed.",
    references: ["IRC:67-2022 Section 14.4", "IRC Sign Maintenance Guidelines"],
    irc_clause: "14.4",
    priority: "Critical"
  },
  {
    id: "INFRA_002",
    problemCategory: "Damaged",
    infrastructureType: "Road Marking",
    specificProblem: "Box Marking (Damaged)",
    description: "Box marking paint worn off, chipped, or severely faded affecting visibility and enforcement",
    rootCause: "High traffic volume, weather exposure, inadequate paint quality, age (> 3 years)",
    solution: "Complete repainting of box marking using thermoplastic or durable paint material",
    implementation: "Clean surface thoroughly. Apply retroreflective thermoplastic marking in 2m x 2m yellow box with standard dimensions.",
    repairProcedure: "If damage < 30%, can be patched. If > 30%, repaint entire box marking.",
    replacementCriteria: "Repaint when visibility reduced to < 5 meters. Use thermoplastic for longer durability (5-7 years vs 2-3 years for paint).",
    estimatedCost: "Low",
    timeframe: "Short-term (1-3 months)",
    preventiveMaintenance: "Quarterly visual inspection. Annual retroreflectivity measurement. Dust removal and cleaning every 6 months.",
    references: ["IRC:35-2015 Section 9.1.11", "Table A.4 - Box Marking Dimensions"],
    irc_clause: "9.1.11",
    priority: "High"
  },
  {
    id: "INFRA_003",
    problemCategory: "Damaged",
    infrastructureType: "Traffic Calming Measures",
    specificProblem: "Rumble Strip (Damaged)",
    description: "Rumble strip segments missing, cracked, or separated from pavement causing reduced effectiveness",
    rootCause: "High traffic volume, poor installation, material deterioration, settlement",
    solution: "Replace damaged rumble strip sections. Maintain 20-30mm height and 200-300mm width specifications.",
    implementation: "Remove damaged sections. Re-cast with cement concrete or premix bituminous material. Ensure proper spacing (1m center-to-center).",
    repairProcedure: "Partial replacement of damaged sections. Ensure continuity with existing strips. Test surface profile.",
    replacementCriteria: "Replace sections when height < 15mm or width < 150mm. Replace if separation from pavement > 10mm.",
    estimatedCost: "High",
    timeframe: "Medium-term (3-6 months)",
    preventiveMaintenance: "Monthly visual inspection for damage. Check surface profile quarterly. Fill small cracks immediately.",
    references: ["IRC:99-2018 Section 2.3.3.3", "IRC:SP:87-2019"],
    irc_clause: "2.3.3.3",
    priority: "High"
  },
  {
    id: "INFRA_004",
    problemCategory: "Damaged",
    infrastructureType: "Traffic Calming Measures",
    specificProblem: "Bi-Directional Road Studs (Damaged)",
    description: "Road studs missing, cracked, or crushed affecting delineation and night visibility",
    rootCause: "High traffic volume, poor installation, material defect, vandalism",
    solution: "Replace damaged studs with new bi-directional studs matching existing color configuration",
    implementation: "Remove damaged stud. Clean mounting area. Install new stud ensuring proper seating and retroreflectivity.",
    repairProcedure: "Replace individual damaged studs. No repair possible - replacement only.",
    replacementCriteria: "Replace when stud missing, crushed, or retroreflectivity < 80%. Check all adjacent studs.",
    estimatedCost: "Low",
    timeframe: "Immediate",
    preventiveMaintenance: "Monthly visual inspection. Check retroreflectivity every 6 months. Repair loose mounting immediately.",
    references: ["IRC:35-2015 Section 5.3", "Table 5.2 - Road Stud Specifications"],
    irc_clause: "5.3",
    priority: "High"
  },

  // FADED ROAD SIGNS - Category: Faded
  {
    id: "INFRA_005",
    problemCategory: "Faded",
    infrastructureType: "Road Sign",
    specificProblem: "Hospital Sign (Faded)",
    description: "Hospital sign retroreflectivity severely degraded, blue background and white symbol faded, poor night visibility",
    rootCause: "UV exposure, age (retroreflective sheeting lifetime expired), poor quality material, inadequate maintenance",
    solution: "Replace retroreflective sheeting or entire sign. Upgrade to high-performance retroreflective material.",
    implementation: "Remove old retroreflective sheeting or sign. Install new sign with high-performance retroreflective sheeting (3000+ cd/lux/m²).",
    repairProcedure: "If retroreflectivity > 80% of original, can re-coat. Otherwise, complete replacement needed.",
    replacementCriteria: "Replace when retroreflectivity < 80% of initial value or fading visible to naked eye. Replace sheeting at warranty end (typically 5-10 years).",
    estimatedCost: "Medium",
    timeframe: "Short-term (1-3 months)",
    preventiveMaintenance: "Annual retroreflectivity testing. Bi-annual cleaning. Monitor for fading signs.",
    references: ["IRC:67-2022 Section 17.8", "ASTM D 4956 - Retroreflectivity Standards"],
    irc_clause: "17.8",
    priority: "Medium"
  },
  {
    id: "INFRA_006",
    problemCategory: "Faded",
    infrastructureType: "Road Sign",
    specificProblem: "Single Chevron Sign (Faded)",
    description: "Chevron marking paint faded, retroreflective properties degraded, poor visibility for curve guidance",
    rootCause: "UV exposure, age, inadequate paint quality, weather erosion",
    solution: "Repaint or replace retroreflective coating on chevron signs",
    implementation: "Clean sign surface. Apply new retroreflective paint or adhesive sheeting. Ensure 500mm x 600mm dimensions maintained.",
    repairProcedure: "If fading < 40%, can re-coat. If > 40%, replace entire sheeting or sign.",
    replacementCriteria: "Replace when fading reduces visibility < 100m (for typical speeds). Retroreflectivity < 80% of minimum standard.",
    estimatedCost: "Medium",
    timeframe: "Short-term (1-3 months)",
    preventiveMaintenance: "Semi-annual visual inspection. Annual retroreflectivity testing. Quarterly cleaning.",
    references: ["IRC:67-2022 Section 15.65"],
    irc_clause: "15.65",
    priority: "Medium"
  },
  {
    id: "INFRA_007",
    problemCategory: "Faded",
    infrastructureType: "Road Marking",
    specificProblem: "Box Marking (Faded)",
    description: "Yellow box marking color faded, visibility severely reduced, enforcement difficult",
    rootCause: "Traffic wear, age (> 2 years), inadequate paint quality, high UV exposure",
    solution: "Repaint box marking with durable thermoplastic or high-quality road marking paint",
    implementation: "Clean surface. Apply retroreflective thermoplastic in standard 2m x 2m pattern with yellow color (code per Table A.4).",
    repairProcedure: "Patch faded areas if isolated. Repaint entire box if > 40% faded.",
    replacementCriteria: "Repaint when visibility reduced to < 5 meters in normal light. Use thermoplastic for improved longevity.",
    estimatedCost: "Low",
    timeframe: "Short-term (1-3 months)",
    preventiveMaintenance: "Quarterly inspection. Annual retroreflectivity testing. Dust/debris removal every 6 months.",
    references: ["IRC:35-2015 Section 9.1.11", "Retroreflectivity Standards"],
    irc_clause: "9.1.11",
    priority: "High"
  },
  {
    id: "INFRA_008",
    problemCategory: "Faded",
    infrastructureType: "Road Marking",
    specificProblem: "Chequer Block Marking (Faded)",
    description: "Checkered black and white block marking for speed breaker faded, pattern indistinct",
    rootCause: "Age, high traffic volume, inadequate paint adhesion, UV degradation",
    solution: "Repaint chequer blocks with retroreflective thermoplastic for enhanced durability",
    implementation: "Clean surface thoroughly. Apply retroreflective thermoplastic in standard 500mm x 500mm blocks with 500mm spacing.",
    repairProcedure: "If < 50% faded, can repaint. If > 50%, requires complete repainting.",
    replacementCriteria: "Repaint when block pattern no longer clearly distinguishable. Use thermoplastic for 5-7 year lifespan.",
    estimatedCost: "Low",
    timeframe: "Short-term (1-3 months)",
    preventiveMaintenance: "Quarterly visual inspection. Semi-annual cleaning. Annual retroreflectivity check.",
    references: ["IRC:35-2015 Section 11.1.2", "Traffic Calming Standards"],
    irc_clause: "11.1.2",
    priority: "High"
  },
  {
    id: "INFRA_009",
    problemCategory: "Faded",
    infrastructureType: "Traffic Calming Measures",
    specificProblem: "Transverse Bar Marking (Faded)",
    description: "Transverse bar marking paint faded, bars no longer visible, speed reduction effectiveness compromised",
    rootCause: "Age (> 2 years), high traffic volume, inadequate paint quality, weather exposure",
    solution: "Repaint transverse bars with thermoplastic or durable paint material",
    implementation: "Clean pavement surface. Apply 6 bars per set, 200-300mm wide, 600mm spacing for 5mm high. Or 300mm wide, 1000mm spacing for 15mm high.",
    repairProcedure: "If < 50% of bars faded, repaint all bars. If > 50%, repaint entire section.",
    replacementCriteria: "Repaint when bars not clearly visible from approaching vehicles. Use thermoplastic for improved longevity (5-7 years).",
    estimatedCost: "Low",
    timeframe: "Short-term (1-3 months)",
    preventiveMaintenance: "Monthly visual inspection. Quarterly retroreflectivity check. Annual cleaning.",
    references: ["IRC:99-2018 Section 2.3.3.4"],
    irc_clause: "2.3.3.4",
    priority: "High"
  },

  // HEIGHT ISSUES - Category: Height Issue
  {
    id: "INFRA_010",
    problemCategory: "Height Issue",
    infrastructureType: "Road Sign",
    specificProblem: "Minimum Speed Limit Sign (Height Issue)",
    description: "Sign clearance less than required, obstructing traffic or posing hazard to vehicles/pedestrians",
    rootCause: "Improper installation, ground settlement, pavement raising, debris accumulation",
    solution: "Adjust sign height to meet IRC:67-2022 clearance specifications",
    implementation: "Required heights: Kerbed roads 2.1-2.5m from kerb, non-kerbed roads 2.0-2.5m from pavement, median signs 2.5m minimum.",
    repairProcedure: "Remove sign and post. Re-install at correct height with proper support structure.",
    replacementCriteria: "If clearance cannot be achieved at location, relocate sign to compliant location or use different sign type.",
    estimatedCost: "Medium",
    timeframe: "Short-term (1-3 months)",
    preventiveMaintenance: "Semi-annual height verification. Check for ground settlement. Ensure vegetation doesn't interfere.",
    references: ["IRC:67-2022 Clauses 4.3, 4.4", "Height Clearance Standards"],
    irc_clause: "4.3, 4.4",
    priority: "High"
  },
  {
    id: "INFRA_011",
    problemCategory: "Height Issue",
    infrastructureType: "Road Sign",
    specificProblem: "Object Hazard (Left) Sign (Height Issue)",
    description: "Object hazard marker not at sufficient height for proper visibility to approaching traffic",
    rootCause: "Incorrect installation height, sign deterioration, post settlement, obstruction accumulation",
    solution: "Raise marker to height ensuring visibility to approaching traffic before hazard",
    implementation: "Striped marker (300mm x 900mm) must be erected immediately ahead of obstruction line at sufficient visible height.",
    repairProcedure: "Reposition marker to optimal height. Ensure black-yellow stripes at 45° angle are clearly visible.",
    replacementCriteria: "If visibility < 100m, increase height. If > 150m visibility achievable, height is adequate.",
    estimatedCost: "Low",
    timeframe: "Short-term (1-3 months)",
    preventiveMaintenance: "Quarterly height and visibility checks. Monitor for obstruction blockage.",
    references: ["IRC:67-2022 Section 15.66", "IRC:79-2019 Clauses 5.1, 5.2"],
    irc_clause: "15.66",
    priority: "High"
  },

  // SPACING ISSUES - Category: Spacing Issue
  {
    id: "INFRA_012",
    problemCategory: "Spacing Issue",
    infrastructureType: "Road Sign",
    specificProblem: "U-Turn Ahead Sign (Spacing Issue)",
    description: "Signs spaced too close or too far, causing either visual clutter or inadequate warning",
    rootCause: "Non-standard installation, lack of planned sign positioning, unclear guidelines implementation",
    solution: "Reinstall signs at proper spacing intervals per IRC:67-2022 specifications",
    implementation: "Interurban roads: minimum 0.6 x V meters (V = design speed km/h). Urban roads: minimum 20 meters between signs.",
    repairProcedure: "Identify all existing signs. Create spacing plan. Remove/relocate as needed.",
    replacementCriteria: "If spacing < minimum, relocate signs. If spacing too large (> 2x minimum), add intermediate signs if warranted.",
    estimatedCost: "Medium",
    timeframe: "Medium-term (3-6 months)",
    preventiveMaintenance: "Annual spacing audit. Update plan if new signs added. Monitor for sign displacement.",
    references: ["IRC:67-2022 Section 4.8", "Sign Spacing Guidelines"],
    irc_clause: "4.8",
    priority: "Medium"
  },
  {
    id: "INFRA_013",
    problemCategory: "Spacing Issue",
    infrastructureType: "Road Marking",
    specificProblem: "Uni-Directional Road Studs (Spacing Issue)",
    description: "Road studs placed at incorrect intervals, visibility and delineation guidance inadequate",
    rootCause: "Installation error, unclear specifications, stud loss over time",
    solution: "Reinstall studs at standard 18m intervals for normal sections (9m for warning, 6m for no-overtaking)",
    implementation: "For 2-lane roads: Normal section 18m white-white, Warning section 9m white-white, No-overtaking 6m yellow-yellow.",
    repairProcedure: "Survey existing stud locations. Remove studs at incorrect spacing. Reinstall at proper intervals.",
    replacementCriteria: "If spacing variance > ±2m, relocate to standard intervals. If studs missing, install replacements.",
    estimatedCost: "Medium",
    timeframe: "Medium-term (3-6 months)",
    preventiveMaintenance: "Quarterly stud count verification. Annual spacing audit. Replace damaged studs immediately.",
    references: ["IRC:35-2015 Section 5.3", "Table 5.2 - Stud Spacing Standards"],
    irc_clause: "5.3",
    priority: "Medium"
  },
  {
    id: "INFRA_014",
    problemCategory: "Spacing Issue",
    infrastructureType: "Road Marking",
    specificProblem: "Bi-Directional Road Studs (Spacing Issue)",
    description: "Bi-directional studs incorrectly spaced, lane delineation compromised, driver guidance unclear",
    rootCause: "Installation error, stud loss/theft, lack of maintenance surveys",
    solution: "Reinstall studs at correct spacing: 18m (normal), 9m (warning), 6m (no-overtaking sections)",
    implementation: "Four-lane divided roads: Yellow-yellow 18m center, Red-white 18m edge (normal section). Adjust for warning/no-overtaking.",
    repairProcedure: "GPS survey of existing studs. Remove misaligned studs. Reinstall at standard intervals.",
    replacementCriteria: "Any stud spacing variance > 1.5m should be corrected. Missing studs replaced immediately.",
    estimatedCost: "High",
    timeframe: "Medium-term (3-6 months)",
    preventiveMaintenance: "Quarterly visual inspection. Semi-annual GPS survey. Annual stud replacement cycle.",
    references: ["IRC:35-2015 Section 5.5", "Table 5.2 - Bi-directional Specifications"],
    irc_clause: "5.5",
    priority: "High"
  },

  // IMPROPER PLACEMENT - Category: Improper Placement
  {
    id: "INFRA_015",
    problemCategory: "Improper Placement",
    infrastructureType: "Road Sign",
    specificProblem: "Gap in Median Sign (Improper Placement)",
    description: "Sign not placed at optimal location for visibility, driver reaction time inadequate",
    rootCause: "Installation error, lack of speed-based positioning knowledge, site constraints ignored",
    solution: "Relocate sign to speed-appropriate distance as per IRC:67-2022 Section 15.2",
    implementation: "50 km/h: 45m from hazard, 60m visibility. 51-65 km/h: 45-110m from hazard. 81-120 km/h: 180-245m from hazard.",
    repairProcedure: "Remove sign. Reinstall at correct distance accounting for approach speed and visibility.",
    replacementCriteria: "If current visibility < required for speed, relocate further upstream. Verify driver reaction time adequate.",
    estimatedCost: "Low",
    timeframe: "Short-term (1-3 months)",
    preventiveMaintenance: "Annual audit of all sign placements. Review after accidents. Update for speed limit changes.",
    references: ["IRC:67-2022 Section 15.2", "Visibility Distance Standards"],
    irc_clause: "15.2",
    priority: "High"
  },

  // OBSTRUCTION - Category: Obstruction
  {
    id: "INFRA_016",
    problemCategory: "Obstruction",
    infrastructureType: "Road Sign",
    specificProblem: "Crash Prone Area Ahead Sign (Obstruction)",
    description: "Sign blocked by vegetation, other objects, or advertisements. Clear visibility distance compromised.",
    rootCause: "Vegetation overgrowth, encroaching structures, poor maintenance, improper advertisements on sign",
    solution: "Clear all obstructions. Ensure clear visibility distance maintained as per standard.",
    implementation: "Remove vegetation (trim/clear). Remove unauthorized structures/advertisements. Maintain clear sight line zone.",
    repairProcedure: "Cut vegetation. Remove obstructions. Clean sign face. Reapply road safety markings if needed.",
    replacementCriteria: "If obstruction cannot be removed, relocate sign to unobstructed location with adequate visibility distance.",
    estimatedCost: "Low",
    timeframe: "Immediate",
    preventiveMaintenance: "Monthly vegetation trimming. Quarterly obstruction audits. Enforce no-advertisement policy.",
    references: ["IRC:67-2022 Section 2.3", "Clear Visibility Distance Standards"],
    irc_clause: "2.3",
    priority: "Critical"
  },
  {
    id: "INFRA_017",
    problemCategory: "Obstruction",
    infrastructureType: "Road Sign",
    specificProblem: "Bus Stop Sign (Obstruction)",
    description: "Bus stop sign blocked by vegetation, poles, or other structures reducing visibility",
    rootCause: "Vegetation growth, urban clutter, poor sign placement, maintenance neglect",
    solution: "Clear obstructions and ensure clear visibility zone around sign",
    implementation: "Remove vegetation, move obstructing objects, clean sign face, ensure sight lines clear.",
    repairProcedure: "Regular maintenance trimming. Remove temporary obstructions immediately.",
    replacementCriteria: "If visibility cannot be achieved at location, relocate sign to clear location.",
    estimatedCost: "Low",
    timeframe: "Immediate",
    preventiveMaintenance: "Bi-monthly obstruction checks. Seasonal vegetation trimming.",
    references: ["IRC:67-2022 Section 11.2"],
    irc_clause: "11.2",
    priority: "High"
  },

  // NON-RETROREFLECTIVE - Category: Non-Retroreflective
  {
    id: "INFRA_018",
    problemCategory: "Non-Retroreflective",
    infrastructureType: "Road Sign",
    specificProblem: "U-Turn Prohibited Sign (Non-Retroreflective)",
    description: "Sign retroreflective properties degraded or absent, night visibility severely compromised",
    rootCause: "Age, poor quality retroreflective material, inadequate maintenance, damaged sheeting",
    solution: "Replace retroreflective sheeting or entire sign with high-quality retroreflective material",
    implementation: "Install ASTM D 4956 compliant retroreflective sheeting. Circular sign, red border, white background, minimum coefficient per standard.",
    repairProcedure: "If retroreflectivity > 80%, can re-coat. If < 80%, replace sheeting immediately.",
    replacementCriteria: "Replace retroreflective sheeting at warranty end (typically 5-10 years) or when retroreflectivity < 80% of initial value.",
    estimatedCost: "Medium",
    timeframe: "Short-term (1-3 months)",
    preventiveMaintenance: "Annual retroreflectivity testing. Bi-annual inspection for sheeting damage. Cleaning every 6 months.",
    references: ["IRC:67-2022 Clauses 6.7, 13.3", "ASTM D 4956 Standards"],
    irc_clause: "13.3",
    priority: "Critical"
  },

  // WRONGLY PLACED - Category: Wrongly Placed
  {
    id: "INFRA_019",
    problemCategory: "Wrongly Placed",
    infrastructureType: "Road Sign",
    specificProblem: "Compulsory Turn Left Sign (Wrongly Placed)",
    description: "Sign positioned at incorrect location relative to junction, creating driver confusion",
    rootCause: "Installation error, lack of clear positioning guidelines, site changes after installation",
    solution: "Relocate sign to appropriate position corresponding to location/situation it applies to",
    implementation: "Place sign at junction where turn is required. Align with traffic flow. Ensure adequate visibility distance.",
    repairProcedure: "Remove sign. Reinstall at correct location. Verify driver sightline and reaction time adequate.",
    replacementCriteria: "If correct location not available, use supplementary road markings or multiple sign locations.",
    estimatedCost: "Low",
    timeframe: "Short-term (1-3 months)",
    preventiveMaintenance: "Annual audit of all sign locations. Verify consistency with traffic rules. Update after changes.",
    references: ["IRC:67-2022 Section 2.3"],
    irc_clause: "2.3",
    priority: "High"
  },
  {
    id: "INFRA_020",
    problemCategory: "Wrongly Placed",
    infrastructureType: "Road Sign",
    specificProblem: "Pedestrian Crossing Informatory Signs (Wrongly Placed)",
    description: "Pedestrian crossing sign not positioned at actual crossing location, creating hazard",
    rootCause: "Installation error, crossing relocated after sign placed, inadequate planning",
    solution: "Relocate sign to exact crossing location as per IRC:67-2022 guidelines",
    implementation: "Place sign directly above or adjacent to zebra crossing. Ensure visibility for both pedestrians and drivers.",
    repairProcedure: "Remove sign. Verify crossing location. Reinstall at proper position.",
    replacementCriteria: "If crossing no longer used, remove sign. If relocated, move sign to new crossing.",
    estimatedCost: "Low",
    timeframe: "Immediate",
    preventiveMaintenance: "Quarterly verification of sign-crossing alignment. Update after crossing relocations.",
    references: ["IRC:67-2022 Section 2.3"],
    irc_clause: "2.3",
    priority: "Critical"
  },

  // MISSING - Category: Missing
  {
    id: "INFRA_021",
    problemCategory: "Missing",
    infrastructureType: "Road Sign",
    specificProblem: "Emergency SOS Facility Sign (Missing)",
    description: "Emergency SOS sign not installed where emergency phones available, drivers unaware of facilities",
    rootCause: "Non-installation, sign removal, inadequate maintenance monitoring",
    solution: "Install emergency SOS facility signs at regular intervals where emergency services available",
    implementation: "Blue background, 600mm x 800mm (normal) or 450mm x 600mm (small), white square with black symbol.",
    repairProcedure: "Manufacture new signs. Install at all emergency service locations per specifications.",
    replacementCriteria: "All emergency services must be marked with signs. Install within 100m of facility.",
    estimatedCost: "Medium",
    timeframe: "Medium-term (3-6 months)",
    preventiveMaintenance: "Annual audit of emergency services. Verify all are signed. Quarterly inspection.",
    references: ["IRC:67-2022 Section 17.9"],
    irc_clause: "17.9",
    priority: "High"
  },
  {
    id: "INFRA_022",
    problemCategory: "Missing",
    infrastructureType: "Road Sign",
    specificProblem: "Narrow Bridge Ahead Sign (Missing)",
    description: "Cautionary sign missing at narrow bridge, drivers unwarned, collision risk high",
    rootCause: "Sign not installed initially, removed for maintenance, theft, or deterioration beyond repair",
    solution: "Install new equilateral triangle cautionary sign with red border and appropriate dimensions",
    implementation: "Equilateral triangle, white background, red border. Size per speed: 50 km/h = 600mm side, 51-65 km/h = 750mm, etc.",
    repairProcedure: "Install new sign at distance per speed: 50 km/h @ 45m, 51-65 km/h @ 45-110m, 81-120 km/h @ 180-245m.",
    replacementCriteria: "Install on both approaches. Ensure visibility distance meets speed requirement.",
    estimatedCost: "Medium",
    timeframe: "Short-term (1-3 months)",
    preventiveMaintenance: "Annual inspection of all bridges. Verify all narrow bridges signed. Check sign condition.",
    references: ["IRC:67-2022 Section 15.2"],
    irc_clause: "15.2",
    priority: "Critical"
  },
  {
    id: "INFRA_023",
    problemCategory: "Missing",
    infrastructureType: "Road Sign",
    specificProblem: "STOP Sign (Missing)",
    description: "STOP sign not installed at minor road-major road intersection, no traffic control",
    rootCause: "Non-installation, removal, deterioration beyond repair, inadequate planning",
    solution: "Install STOP sign at minor-major road intersection per IRC:67-2022 Section 14.4",
    implementation: "Octagonal sign, red background, white border and text. Install on left side of approach, 1.5m before stop line.",
    repairProcedure: "Install new sign meeting specifications. Ensure proper post and foundation.",
    replacementCriteria: "Required at all minor-major road intersections. Essential for traffic safety.",
    estimatedCost: "Medium",
    timeframe: "Immediate",
    preventiveMaintenance: "Annual inventory of all STOP signs. Verify compliance at intersections.",
    references: ["IRC:67-2022 Section 14.4"],
    irc_clause: "14.4",
    priority: "Critical"
  },
  {
    id: "INFRA_024",
    problemCategory: "Missing",
    infrastructureType: "Road Sign",
    specificProblem: "Height Limit Sign (Missing)",
    description: "Height limit sign not installed at overhead structures, tall vehicles risk collision",
    rootCause: "Non-installation, sign removed, inadequate maintenance, poor awareness",
    solution: "Install prohibitory height limit sign at all overhead structures with restricted clearance",
    implementation: "Circular sign, red border, 300-1500mm diameter based on speed. Install 50-100m before structure.",
    repairProcedure: "Install new sign ensuring proper placement distance for driver reaction time.",
    replacementCriteria: "Required at all structures with < 4.5m clearance. Install on all approaches.",
    estimatedCost: "Medium",
    timeframe: "Immediate",
    preventiveMaintenance: "Annual audit of overhead structures. Verify all properly signed.",
    references: ["IRC:67-2022 Section 14.8.4"],
    irc_clause: "14.8.4",
    priority: "Critical"
  },
  {
    id: "INFRA_025",
    problemCategory: "Missing",
    infrastructureType: "Road Marking",
    specificProblem: "Uni-Directional Road Studs (Missing)",
    description: "Road studs missing or gaps in delineation, night navigation and lane guidance compromised",
    rootCause: "Installation incomplete, stud loss/theft over time, inadequate maintenance",
    solution: "Install complete uni-directional stud system at specified intervals",
    implementation: "One-directional carriage: Single color face. 18m spacing (normal), 9m (warning), 6m (no-overtaking).",
    repairProcedure: "Survey existing studs. Identify gaps. Install replacement studs at standard intervals.",
    replacementCriteria: "If gap > 2 studs, install replacements. Maintain continuous visual delineation.",
    estimatedCost: "Medium",
    timeframe: "Medium-term (3-6 months)",
    preventiveMaintenance: "Quarterly stud count. Semi-annual gap survey. Annual replacement cycle.",
    references: ["IRC:35-2015 Section 5.3"],
    irc_clause: "5.3",
    priority: "High"
  },
  {
    id: "INFRA_026",
    problemCategory: "Missing",
    infrastructureType: "Road Marking",
    specificProblem: "Broken Line Marking (Missing)",
    description: "Give way line markings missing at intersection without traffic signals, unclear priority",
    rootCause: "Non-installation, marking worn off, inadequate maintenance",
    solution: "Install broken line markings at intersection with corresponding give way sign",
    implementation: "Broken white lines, 600mm segments, 300mm gaps, 100-200mm width. Accompany with give way sign.",
    repairProcedure: "Repaint complete broken line marking system at intersection.",
    replacementCriteria: "Required at all unsignalized intersections. Install with corresponding signage.",
    estimatedCost: "Low",
    timeframe: "Short-term (1-3 months)",
    preventiveMaintenance: "Annual inspection. Repaint when visibility < standard. Check sign correspondence.",
    references: ["IRC:35-2015 Section 3.2"],
    irc_clause: "3.2",
    priority: "High"
  },
  {
    id: "INFRA_027",
    problemCategory: "Missing",
    infrastructureType: "Road Marking",
    specificProblem: "Giveway Marking (Missing)",
    description: "Give way line markings and signs not installed at intersection, unclear priority rules",
    rootCause: "Non-installation, marking deterioration, poor maintenance awareness",
    solution: "Install give way markings and signs at all intersection approaches requiring give way",
    implementation: "Two broken white lines (600mm segments, 300mm gaps) spaced 300mm apart, 200mm width. Place 2.5-12m before intersection.",
    repairProcedure: "Repaint complete give way marking. Install corresponding triangular give way sign.",
    replacementCriteria: "Required at minor road-major road intersections without stop control where visibility adequate.",
    estimatedCost: "Low",
    timeframe: "Short-term (1-3 months)",
    preventiveMaintenance: "Quarterly inspection. Repaint when faded. Verify sign presence.",
    references: ["IRC:35-2015 Section 6.2"],
    irc_clause: "6.2",
    priority: "High"
  },
  {
    id: "INFRA_028",
    problemCategory: "Missing",
    infrastructureType: "Road Marking",
    specificProblem: "Objects within Carriageway (Missing)",
    description: "Obstruction warning markings missing for underpass piers, abutments within carriageway",
    rootCause: "Non-installation, worn off markings, inadequate maintenance",
    solution: "Install diagonal stripe markings (black and yellow) on obstructions within carriageway",
    implementation: "6+ alternating black-yellow stripes, 45° angle toward traffic, minimum 300mm width. Total width >= obstruction width.",
    repairProcedure: "Paint or repaint diagonal stripes on all carriage-way obstructions.",
    replacementCriteria: "Required on all obstructions. Repaint when stripes faded or worn.",
    estimatedCost: "Low",
    timeframe: "Short-term (1-3 months)",
    preventiveMaintenance: "Quarterly inspection of all obstructions. Repaint as needed.",
    references: ["IRC:35-2015 Section 14.2"],
    irc_clause: "14.2",
    priority: "Critical"
  },
  {
    id: "INFRA_029",
    problemCategory: "Missing",
    infrastructureType: "Traffic Calming Measures",
    specificProblem: "Transverse Bar Marking (Missing)",
    description: "Transverse bar markings not installed at hazardous locations, speed reduction not indicated",
    rootCause: "Non-installation, worn off, poor maintenance",
    solution: "Install transverse bar markings at approach to hazardous locations per speed requirements",
    implementation: "6 bars per set, 200-300mm wide, 600mm spacing (5mm high) or 300mm wide, 1000mm spacing (15mm high).",
    repairProcedure: "Paint complete set of transverse bars at specified distances before hazard.",
    replacementCriteria: "Number of sets per speed: 50 km/h=1 set@50m, 51-65 km/h=2 sets@50m,80m, 81-100 km/h=4 sets.",
    estimatedCost: "Low",
    timeframe: "Short-term (1-3 months)",
    preventiveMaintenance: "Semi-annual inspection. Repaint when faded.",
    references: ["IRC:99-2018 Section 2.3.3.4"],
    irc_clause: "2.3.3.4",
    priority: "High"
  },
  {
    id: "INFRA_030",
    problemCategory: "Missing",
    infrastructureType: "Traffic Calming Measures",
    specificProblem: "Speed Hump (Missing)",
    description: "Speed hump not provided where needed at hazardous locations, speed not controlled",
    rootCause: "Non-installation, removal, inadequate planning",
    solution: "Install speed hump with circular arc profile at location to achieve target speed reduction",
    implementation: "Circular profile: 20 km/h target=11m radius, 3m chord; 50 km/h target=113m radius, 9.5m chord. Height 10cm for standard vehicle impact.",
    repairProcedure: "Cast in situ with cement concrete or install precast hump. Ensure proper compaction.",
    replacementCriteria: "Required at minor road approaches and high pedestrian activity zones. Install 5-6m before stop line.",
    estimatedCost: "High",
    timeframe: "Medium-term (3-6 months)",
    preventiveMaintenance: "Quarterly inspection for damage. Maintain 10cm height. Repair cracks immediately.",
    references: ["IRC:99-2018 Section 3.1.1.1"],
    irc_clause: "3.1.1.1",
    priority: "Medium"
  },
  {
    id: "INFRA_031",
    problemCategory: "Missing",
    infrastructureType: "Traffic Calming Measures",
    specificProblem: "Rumble Strip (Missing)",
    description: "Rumble strip not installed at location where speed control needed, alerting function absent",
    rootCause: "Non-installation, poor awareness of benefits, planning omission",
    solution: "Install rumble strip across carriageway and shoulders where speed reduction critical",
    implementation: "20-30mm height, 200-300mm width, 1m center-to-center spacing, ~6 strips per location. Install 10-20m before zebra crossing.",
    repairProcedure: "Cast in situ with concrete or bituminous. Ensure proper profile and spacing.",
    replacementCriteria: "Install at accident-prone locations and high-risk sections.",
    estimatedCost: "High",
    timeframe: "Medium-term (3-6 months)",
    preventiveMaintenance: "Quarterly inspection. Fill cracks. Maintain height. Replace if height < 15mm.",
    references: ["IRC:99-2018 Section 2.3.3.3"],
    irc_clause: "2.3.3.3",
    priority: "High"
  },

  // VISIBILITY ISSUES - Category: Visibility Issue
  {
    id: "INFRA_032",
    problemCategory: "Visibility Issue",
    infrastructureType: "Road Marking",
    specificProblem: "Word Message TRAM & BUS ONLY Marking (Visibility Issue)",
    description: "Message marking not clearly visible from required preview distance, drivers unable to read",
    rootCause: "Poor retroreflectivity, age, inadequate contrast, worn paint, low visibility conditions",
    solution: "Repaint with high-quality retroreflective thermoplastic material ensuring visibility per preview distance",
    implementation: "Preview distance per speed: 50 km/h=36m, 100-110 km/h=61m, 120 km/h=67m. Ensure white lettering on dark background.",
    repairProcedure: "Clean surface thoroughly. Apply retroreflective thermoplastic with standard letter height (700mm).",
    replacementCriteria: "Repaint when visibility < required preview distance. Replace all worn markings.",
    estimatedCost: "Low",
    timeframe: "Short-term (1-3 months)",
    preventiveMaintenance: "Quarterly visibility checks. Semi-annual retroreflectivity testing. Annual cleaning.",
    references: ["IRC:35-2015 Section 2.7"],
    irc_clause: "2.7",
    priority: "High"
  },
  {
    id: "INFRA_033",
    problemCategory: "Visibility Issue",
    infrastructureType: "Road Marking",
    specificProblem: "Direction Information NO ENTRY Marking (Visibility Issue)",
    description: "NO ENTRY marking not visible from required preview distance, drivers unable to see restriction",
    rootCause: "Fading, poor retroreflectivity, inadequate paint quality, age > 2 years",
    solution: "Repaint NO ENTRY marking with high-contrast retroreflective material",
    implementation: "Red background with white 'NO ENTRY' text. Visibility distance per speed: 50 km/h=36m, 120 km/h=67m.",
    repairProcedure: "Clean surface. Apply retroreflective marking ensuring minimum 5m preview visibility.",
    replacementCriteria: "Repaint when visibility < required distance. Use thermoplastic for improved longevity.",
    estimatedCost: "Low",
    timeframe: "Short-term (1-3 months)",
    preventiveMaintenance: "Monthly visual checks. Quarterly retroreflectivity testing. Cleaning every 6 months.",
    references: ["IRC:35-2015 Section 2.7"],
    irc_clause: "2.7",
    priority: "High"
  },

  // NON-STANDARD - Category: Non-Standard
  {
    id: "INFRA_034",
    problemCategory: "Non-Standard",
    infrastructureType: "Road Sign",
    specificProblem: "Cattle Crossing Sign (Non-Standard)",
    description: "Sign dimensions, colors, or design not conforming to IRC:67-2022 specifications",
    rootCause: "Custom design, incorrect specifications, misunderstanding of standards, older non-compliant signs",
    solution: "Replace with standard equilateral triangle sign meeting all IRC specifications",
    implementation: "Equilateral triangle, white background, red border. Size: 50 km/h=600mm, 51-65 km/h=750mm, 66-80 km/h=900mm, etc.",
    repairProcedure: "Remove non-standard sign. Install new sign meeting all IRC:67-2022 specifications.",
    replacementCriteria: "All signs must meet current IRC standards. Replace non-standard immediately.",
    estimatedCost: "Medium",
    timeframe: "Short-term (1-3 months)",
    preventiveMaintenance: "Annual audit of all signs for standards compliance. Document any deviations.",
    references: ["IRC:67-2022 Section 15.57"],
    irc_clause: "15.57",
    priority: "High"
  },
  {
    id: "INFRA_035",
    problemCategory: "Non-Standard",
    infrastructureType: "Road Marking",
    specificProblem: "Straight Arrow Marking (Non-Standard)",
    description: "Arrow marking dimensions, length, or specifications not per IRC:35-2015 standard",
    rootCause: "Installation error, custom design, misunderstanding of speed-based requirements",
solution: "Replace with standard arrow marking matching road speed: 3.5m (< 50 km/h), 5m (51-100 km/h), 9m (> 100 km/h)",
implementation: "White color, 500mm width. Length per speed requirement. Ensure mandatory straight direction indication.",
repairProcedure: "Repaint arrow with correct length and dimensions per speed.",
    replacementCriteria: "All markings must meet current IRC standards. Correct any deviations.",
    estimatedCost: "Low",
    timeframe: "Short-term (1-3 months)",
    preventiveMaintenance: "Quarterly inspection for compliance. Ensure consistency across road section.",
    references: ["IRC:35-2015 Sections 3.5, 8.1.2"],
    irc_clause: "3.5, 8.1.2",
    priority: "Medium"
  },
  {
    id: "INFRA_036",
    problemCategory: "Non-Standard",
    infrastructureType: "Road Marking",
    specificProblem: "Word Message DISABLED Marking (Non-Standard)",
    description: "DISABLED marking dimensions, color, or format not meeting IRC:35-2015 specifications",
    rootCause: "Non-standard installation, custom design, misunderstanding of standard requirements",
    solution: "Replace with standard DISABLED marking: 700mm width, white color, proper placement",
    implementation: "White FM18 marking, 700mm width. Place in designated disabled parking areas. Ensure visibility.",
    repairProcedure: "Repaint or replace with standard marking meeting all specifications.",
    replacementCriteria: "All markings must conform to current standards. Audit and correct deviations.",
    estimatedCost: "Low",
    timeframe: "Short-term (1-3 months)",
    preventiveMaintenance: "Quarterly inspection. Ensure consistency with other locations.",
    references: ["IRC:35-2015 Section 3.7"],
    irc_clause: "3.7",
    priority: "Medium"
  },
  {
    id: "INFRA_037",
    problemCategory: "Non-Standard",
    infrastructureType: "Traffic Calming Measures",
    specificProblem: "Speed Bump (Non-Standard)",
    description: "Speed bump design or dimensions not meeting IRC:99-2018 standards for safe vehicle passage",
    rootCause: "Non-standard design, old bumps predating standards, poor installation",
    solution: "Replace with standard circular or trapezoidal hump meeting IRC specifications",
    implementation: "Circular hump: 11-113m radius per target speed. Trapezoidal: 50-100mm raised flat section with ramps.",
    repairProcedure: "Remove non-standard bump. Install proper hump with correct profile.",
    replacementCriteria: "All bumps must meet current specifications. Non-standard bumps cause vehicle damage.",
    estimatedCost: "High",
    timeframe: "Medium-term (3-6 months)",
    preventiveMaintenance: "Quarterly inspection for damage. Maintain proper profile. Monitor vehicle impacts.",
    references: ["IRC:99-2018 Section 3.1.2"],
    irc_clause: "3.1.2",
    priority: "High"
  },
  {
    id: "INFRA_038",
    problemCategory: "Non-Standard",
    infrastructureType: "Traffic Calming Measures",
    specificProblem: "Speed Hump (Non-Standard)",
    description: "Speed hump profile or dimensions not meeting IRC:99-2018 circular arc specifications",
    rootCause: "Non-standard design, improper installation, wear changing profile",
    solution: "Replace with standard circular arc hump matching target speed profile",
    implementation: "Circular arc: 20 km/h=11m radius (3m chord), 50 km/h=113m radius (9.5m chord), height 10cm.",
    repairProcedure: "Rebuild hump with proper circular arc profile. Ensure height and shape correct.",
    replacementCriteria: "Non-standard humps cause excessive vehicle damage. Replace immediately.",
    estimatedCost: "High",
    timeframe: "Medium-term (3-6 months)",
    preventiveMaintenance: "Quarterly profile inspection. Maintain height. Repair deformation quickly.",
    references: ["IRC:99-2018 Section 3.1.1.1"],
    irc_clause: "3.1.1.1",
    priority: "High"
  },

  // PLACEMENT ISSUES - Category: Placement Issue
  {
    id: "INFRA_039",
    problemCategory: "Placement Issue",
    infrastructureType: "Road Marking",
    specificProblem: "Direction Information SCHOOL KEEP CLEAR Marking (Placement Issue)",
    description: "SCHOOL KEEP CLEAR marking not placed optimally, insufficient warning distance",
    rootCause: "Installation error, inadequate distance from school entrance, visibility blocked",
    solution: "Reposition marking to ensure adequate warning distance and clear visibility",
    implementation: "Place at minimum 50m before school entrance. Height 700mm yellow lettering. Ensure visibility day/night.",
    repairProcedure: "Repaint marking at correct position with optimal visibility.",
    replacementCriteria: "If placement inadequate, relocate to position providing proper warning distance.",
    estimatedCost: "Low",
    timeframe: "Short-term (1-3 months)",
    preventiveMaintenance: "Quarterly inspection of position. Verify warning distance adequate.",
    references: ["IRC:35-2015 Section 8.6"],
    irc_clause: "8.6",
    priority: "High"
  },
  {
    id: "INFRA_040",
    problemCategory: "Placement Issue",
    infrastructureType: "Road Marking",
    specificProblem: "Chevron Diverging Marking (Placement Issue)",
    description: "Chevron diverging markings not properly positioned for traffic delineation, spacing incorrect",
    rootCause: "Installation error, improper spacing calculation, unclear implementation",
    solution: "Reposition chevron markings at correct intervals: 2m (< 10m marking), 4m (10-22m), 6m (> 22m)",
    implementation: "Chevrons point toward approaching traffic. Spacing per length. Gap between chevron and boundary = 100mm.",
    repairProcedure: "Survey existing chevrons. Remove misaligned markings. Repaint at correct intervals.",
    replacementCriteria: "Ensure proper spacing for safe lane divergence. Adjust if spacing incorrect.",
    estimatedCost: "Low",
    timeframe: "Short-term (1-3 months)",
    preventiveMaintenance: "Quarterly spacing verification. Check for wear and repaint.",
    references: ["IRC:35-2015 Section 7.2"],
    irc_clause: "7.2",
    priority: "High"
  },
  {
    id: "INFRA_041",
    problemCategory: "Placement Issue",
    infrastructureType: "Road Marking",
    specificProblem: "Broken Traffic Lane Line Marking (Placement Issue)",
    description: "Lane markings placed at inadequate width, creating safety hazard through side-swipe accidents",
    rootCause: "Inadequate lane width, poor planning, non-compliance with minimum width standards",
    solution: "Verify lane width meets IRC standards before applying markings. Use continuous lines if < minimum width.",
    implementation: "Broken traffic lanes (LM31): 15000mm length, 3000mm gap, 200mm width. Minimum lane width = 3m for 2-lane roads.",
    repairProcedure: "If lane width inadequate, convert to continuous line. If adequate, reposition marks to center of lane.",
    replacementCriteria: "Do not apply broken lane lines if lane width < minimum. Install continuous lines instead.",
    estimatedCost: "Low",
    timeframe: "Short-term (1-3 months)",
    preventiveMaintenance: "Annual audit of lane widths. Ensure compliance before markings applied.",
    references: ["IRC:35-2015 Section 4.2"],
    irc_clause: "4.2",
    priority: "High"
  },
  {
    id: "INFRA_042",
    problemCategory: "Placement Issue",
    infrastructureType: "Traffic Calming Measures",
    specificProblem: "Transverse Bar Marking (Placement Issue)",
    description: "Transverse bars not placed at correct distance from hazard, inadequate warning effectiveness",
    rootCause: "Installation error, unclear distance calculation, site constraints ignored",
    solution: "Reposition transverse bars at speed-appropriate distance: 50 km/h @ 50m, 51-65 km/h @ 50m+80m, etc.",
    implementation: "Multiple sets placed at increasing distances before hazard. Each set = 6 bars, spacing per IRC:99-2018.",
    repairProcedure: "Repaint bars at correct distances. Verify distance measurement before installation.",
    replacementCriteria: "If positioning incorrect, adjust to meet warning distance requirements.",
    estimatedCost: "Low",
    timeframe: "Short-term (1-3 months)",
    preventiveMaintenance: "Quarterly verification of distances. Ensure bars visible and effective.",
    references: ["IRC:99-2018 Section 3.7"],
    irc_clause: "3.7",
    priority: "High"
  },
  {
    id: "INFRA_043",
    problemCategory: "Placement Issue",
    infrastructureType: "Traffic Calming Measures",
    specificProblem: "Speed Hump (Placement Issue)",
    description: "Speed hump location not optimal, either ineffective at controlling speed or creating hazard",
    rootCause: "Placement away from hazard, inadequate distance before crossing, poor site analysis",
    solution: "Relocate hump to optimal position: 5-6m before minor road stop line or zebra crossing",
    implementation: "For through roads: 5.5m from junction point. For minor approaches: 5-6m from stop line.",
    repairProcedure: "Remove existing hump. Prepare surface. Install at correct distance with proper profile.",
    replacementCriteria: "If placement ineffective at speed control, relocate. If creating hazard, reposition.",
    estimatedCost: "High",
    timeframe: "Medium-term (3-6 months)",
    preventiveMaintenance: "Quarterly effectiveness monitoring. Adjust if needed for optimal impact.",
    references: ["IRC:SP:84-2019 Clauses 9.3.11, 9.2.11"],
    irc_clause: "9.3.11, 9.2.11",
    priority: "High"
  },

  // WRONG COLOUR SELECTION - Category: Wrong Colour Selection
  {
    id: "INFRA_044",
    problemCategory: "Wrong Colour Selection",
    infrastructureType: "Road Marking",
    specificProblem: "Continuous Center Line Marking (Wrong Colour)",
    description: "Center line not white as required by IRC:35-2015, causing driver confusion",
    rootCause: "Installation error, using wrong marking material, misunderstanding of specifications",
    solution: "Repaint center line with correct white color per IRC:35-2015 Section 4.1",
    implementation: "Continuous center line must be white for two-way roads. Cannot use other colors.",
    repairProcedure: "Remove colored marking. Repaint with white retroreflective material.",
    replacementCriteria: "All continuous center lines must be white. Correct immediately.",
    estimatedCost: "Low",
    timeframe: "Short-term (1-3 months)",
    preventiveMaintenance: "Regular inspection to ensure color standards maintained.",
    references: ["IRC:35-2015 Section 4.1"],
    irc_clause: "4.1",
    priority: "High"
  },
  {
    id: "INFRA_045",
    problemCategory: "Wrong Colour Selection",
    infrastructureType: "Road Marking",
    specificProblem: "Ladder Hatching Marking (Wrong Colour)",
    description: "Hatching marking not using correct color per section type, causing misinterpretation",
    rootCause: "Installation error, unclear specifications, material availability issues",
    solution: "Repaint hatching with correct color: White (HM10/HM11) normal/warning, Yellow (HM12/HM13) no-overtaking",
    implementation: "Normal section: white ladder hatching. Warning section: white. No-overtaking: yellow ladder hatching.",
    repairProcedure: "Remove incorrect marking. Repaint with correct color.",
    replacementCriteria: "All hatching must use correct color per zone type. Correct immediately.",
    estimatedCost: "Low",
    timeframe: "Short-term (1-3 months)",
    preventiveMaintenance: "Quarterly color verification. Ensure consistency across road section.",
    references: ["IRC:35-2015 Section 7.6.3"],
    irc_clause: "7.6.3",
    priority: "High"
  },
  {
    id: "INFRA_046",
    problemCategory: "Wrong Colour Selection",
    infrastructureType: "Road Marking",
    specificProblem: "Objects adjacent / near to carriageway (Wrong Colour)",
    description: "Object markers/stripes not using correct colors, visibility and identification compromised",
    rootCause: "Installation error, misunderstanding of standards, custom marking choices",
    solution: "Repaint with correct colors: Black-white stripes (45° for hazards), white markings (guard rails), white with black band (trees)",
    implementation: "Subway/abutments: Black-white diagonal stripes 45° toward traffic. Poles: Horizontal black-white up to 1.25m high.",
    repairProcedure: "Remove incorrect markings. Repaint with correct color scheme.",
    replacementCriteria: "All object markings must use standard colors. Correct deviations immediately.",
    estimatedCost: "Low",
    timeframe: "Short-term (1-3 months)",
    preventiveMaintenance: "Quarterly color inspection. Repaint faded markings.",
    references: ["IRC:35-2015 Section 14.3"],
    irc_clause: "14.3",
    priority: "High"
  },

  // NON-RETRO REFLECTIVE (different from Non-Retroreflective category) - Category: Non-Retro Reflective
  {
    id: "INFRA_047",
    problemCategory: "Non-Retro Reflective",
    infrastructureType: "Road Marking",
    specificProblem: "Straight Arrow Marking (Non-Retro Reflective)",
    description: "Arrow marking lacking retroreflectivity, night visibility extremely poor, driver guidance compromised",
    rootCause: "Using non-retroreflective paint, poor material quality, inadequate maintenance",
    solution: "Replace with highly durable thermoplastic material offering superior retroreflective performance",
    implementation: "Use thermoplastic pavement material instead of ordinary paint. Provides 5-7 year lifespan vs 2-3 years.",
    repairProcedure: "Replace arrow marking with retroreflective thermoplastic. Ensure proper material specification.",
    replacementCriteria: "All mandatory markings must have retroreflectivity. Use thermoplastic for critical locations.",
    estimatedCost: "Low",
    timeframe: "Short-term (1-3 months)",
    preventiveMaintenance: "Annual retroreflectivity testing. Monitor material degradation.",
    references: ["IRC:35-2015 Section 2.2"],
    irc_clause: "2.2",
    priority: "High"
  }
];

/**
 * Get intervention recommendations for infrastructure problem
 */
export function getInfrastructureInterventions(
  problemCategory: string,
  infrastructureType?: string,
  specificProblem?: string
): InfrastructureIntervention[] {
  let matches = infrastructureInterventionDatabase.filter(item => 
    item.problemCategory.toLowerCase() === problemCategory.toLowerCase()
  );

  if (infrastructureType) {
    matches = matches.filter(item => 
      item.infrastructureType.toLowerCase() === infrastructureType.toLowerCase()
    );
  }

  if (specificProblem) {
    matches = matches.filter(item => 
      item.specificProblem.toLowerCase().includes(specificProblem.toLowerCase())
    );
  }

  return matches;
}

/**
 * Get all problem categories covered
 */
export function getProblemCategories(): string[] {
  const categories = new Set(infrastructureInterventionDatabase.map(item => item.problemCategory));
  return Array.from(categories).sort();
}

/**
 * Get all infrastructure types covered
 */
export function getInfrastructureTypes(): string[] {
  const types = new Set(infrastructureInterventionDatabase.map(item => item.infrastructureType));
  return Array.from(types).sort();
}

export default infrastructureInterventionDatabase;
