export interface AccidentData {
  location: string;
  latitude: number;
  longitude: number;
  accidents: number;
  fatalities: number;
  cause: string;
  time_of_day: string;
}

export interface WeatherData {
  temp: number;
  feels_like: number;
  humidity: number;
  description: string;
  icon: string;
  wind_speed: number;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface Insight {
  location: string;
  riskLevel: 'low' | 'medium' | 'high';
  riskFactor: string;
  intervention: string;
  confidence?: number;
}

export interface HotspotData extends AccidentData {
  weather?: WeatherData;
  riskScore: number;
}
