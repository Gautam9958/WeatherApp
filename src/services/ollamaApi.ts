import type { ChatMessage, WeatherData } from '../types/weather';
const URL=import.meta.env.VITE_OLLAMA_URL||'http://localhost:11434';
const MODEL=import.meta.env.VITE_OLLAMA_MODEL||'llama3.2';
export async function askOllama(question:string, weather:WeatherData, history:ChatMessage[]=[]){
 const context={current:weather.current,daily:weather.daily,hourly:{time:weather.hourly.time.slice(0,24),temperature:weather.hourly.temperature_2m.slice(0,24),rainProbability:weather.hourly.precipitation_probability.slice(0,24)}};
 const prompt=`You are Weather AI. Answer only using the supplied weather data. Do not invent live weather data. Be concise and useful. Weather JSON: ${JSON.stringify(context)}\nUser question: ${question}`;
 const r=await fetch(`${URL}/api/chat`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:MODEL,stream:false,messages:[{role:'system',content:prompt},...history.slice(-6),{role:'user',content:question}]})});
 if(!r.ok) throw new Error('Ollama is not reachable. Start Ollama and pull the configured model.'); const d=await r.json(); return d.message?.content||'No response from Ollama.';
}
