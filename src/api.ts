import axios from 'axios';
import type { Show } from './models/shows';
export const showsSearch=(query:string)=>{
    return axios.get<{shows:Show}[]>("https://api.tvmaze.com/search/shows?q="+query).then((response)=>response.data.map((item:any)=>item.show));
}
export const showDetail=(id:number)=>{
    return axios.get("https://api.tvmaze.com/shows/"+id).then((response)=>response.data);
}
export const getCast= async (showId:number):Promise<number[]>=>{
    const response= await axios.get("https://api.tvmaze.com/shows/"+showId+"/cast");

    return response.data.map((c:any)=>c.person);
}