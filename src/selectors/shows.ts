import { createSelector } from "reselect";
import type { State } from "../store";
import type { Show } from "../models/shows";

export const showsStateSelector=(State:State)=>{
    return State.shows;
}
export const showsMapSelector=createSelector(showsStateSelector,(showsState)=>showsState.entities);

export const querySelector=createSelector(showsStateSelector,(showsState)=>showsState.query);

export const queryMapSelector=createSelector(showsStateSelector,(showsState)=>showsState.query_shows);

export const showsSelector=createSelector(showsMapSelector,querySelector,queryMapSelector,(showsMap,query,queryMap)=>{
    return queryMap[query]?.map((showId)=>showsMap[+showId]);
})

export const showsLoadingSelector=createSelector(showsStateSelector,(showsState)=>showsState.loading);