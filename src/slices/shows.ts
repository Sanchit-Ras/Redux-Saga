import { createEntityAdapter, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Show } from "../models/shows";
import type { person } from "../models/cast";


const showsAdapter=createEntityAdapter<Show>();

const initialState = showsAdapter.getInitialState({
    query_shows: {} as {[query:string]:number[]},
    query: "",
    loading: false,
    show_loading: {} as {[id:number]:boolean},
})
export type State=typeof initialState
const showsSlice = createSlice({
    name: "shows",
    initialState,
    reducers: {
        loaded,
        queryChange,
        loadShow,
        detailLoaded:showsAdapter.addOne,
        castLinkToShow 
    }
})
const {actions,reducer:showsReducer}=showsSlice;



function loaded(state:State, action: PayloadAction<Show[]>) {
    const shows = action.payload as Show[];
    // const showEntity = new schema.Entity("shows");
    // const normalizedShows = normalize(shows, [showEntity]); //normalize gives undefined if shows is an empty array


    state.loading = false;
    state.query_shows[state.query] = shows.map((show)=>show.id);
    // state.shows = { ...state.shows, ...normalizedShows.entities.shows };

    showsAdapter.addMany(state,action);
}
function queryChange(state:State,action:PayloadAction<string>){
    state.loading=true;
    state.query=action.payload as string;
}
function loadShow(state:State,action:PayloadAction<number>){
    return state;
}
function castLinkToShow(state:State,action:PayloadAction<{showId:number,castIds:number[]}>){
    state.entities[action.payload.showId].cast=action.payload.castIds;
}
export const {loaded:showsLoadedAction,queryChange:queryChangeAction,loadShow:loadShowAction,detailLoaded:showDetailLoadedAction,castLinkToShow:castLinkToShowAction}=actions
export default showsReducer;