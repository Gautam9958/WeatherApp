import {create} from 'zustand';
import type {Location,WeatherData} from '../types/weather';
interface State{location:Location; weather:WeatherData|null; unit:'C'|'F'; favorites:Location[]; setLocation:(x:Location)=>void; setWeather:(x:WeatherData)=>void; toggleUnit:()=>void; toggleFavorite:(x:Location)=>void;}
const defaultLocation={name:'Delhi',latitude:28.6139,longitude:77.2090,country:'India'};
export const useWeatherStore=create<State>((set)=>({location:defaultLocation,weather:null,unit:'C',favorites:[],setLocation:location=>set({location}),setWeather:weather=>set({weather}),toggleUnit:()=>set(s=>({unit:s.unit==='C'?'F':'C'})),toggleFavorite:x=>set(s=>({favorites:s.favorites.some(f=>f.name===x.name)?s.favorites.filter(f=>f.name!==x.name):[...s.favorites,x]}))}));
export const temp=(c:number,u:'C'|'F')=>u==='C'?Math.round(c):Math.round(c*9/5+32);
