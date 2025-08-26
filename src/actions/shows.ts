import type { ActionCreator } from ".";
import type { Show } from "../models/shows";

export const SHOWS_LOADED="SHOWS_LOADED";

// export const showsLoadedAction:ActionCreator<Show[]>=(shows)=>({
//     type:SHOWS_LOADED,
//     payload:shows
// })
// export const QUERY_CHANGED="QUERY_CHANGED";

// export const queryChangedAction:ActionCreator<string>=(query)=>({
//     type:QUERY_CHANGED,
//     payload:query
// })
// export const SHOW_LOAD="SHOW_LOAD";
// export const loadShowAction:ActionCreator<number>=(showId:number)=>({
//     type:SHOW_LOAD,
//     payload:showId
// })

// export const SHOW_DETAIL_LOADED="SHOW_DETAIL_LOADED";

// export const showDetailLoadedAction:ActionCreator<Show>=(show:Show)=>({
//     type:SHOW_DETAIL_LOADED,
//     payload:show
// })  