import { createSelector } from "reselect";
import type { State } from "../store";

export const castStateSelector=(state:State)=>(state.cast);

export const personMapSelector=createSelector(castStateSelector,(castState)=>castState.entities);

export const personSelector=createSelector(personMapSelector,castStateSelector,(personMap,castState)=>castState.ids.map((id)=>personMap[id]));