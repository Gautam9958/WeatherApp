export interface Location { name:string; latitude:number; longitude:number; country?:string; admin1?:string; }
export interface WeatherData {
 latitude:number; longitude:number; timezone:string; current:{temperature_2m:number; relative_humidity_2m:number; apparent_temperature:number; is_day:number; precipitation:number; rain:number; weather_code:number; wind_speed_10m:number; wind_direction_10m:number;};
 hourly:{time:string[]; temperature_2m:number[]; precipitation_probability:number[]; relative_humidity_2m:number[]; wind_speed_10m:number[]; weather_code:number[]};
 daily:{time:string[]; weather_code:number[]; temperature_2m_max:number[]; temperature_2m_min:number[]; precipitation_probability_max:number[]; sunrise:string[]; sunset:string[]; uv_index_max:number[]};
}
export interface ChatMessage { role:'user'|'assistant'; content:string; }
