import type {UnknownAction } from "redux";
import {} from "../actions";
import type { Show } from "../models/shows";
import { produce } from "immer";
import { normalize, schema } from "normalizr";

export type State={
    shows:{[show_id:number]:Show};
    query_shows:{[query:string]:number[]}//For chaching purpose
    query:string,
    loading:boolean,
    show_loading:{[showId:number]:boolean}
}
export const InitialState={
    shows:{},
    query_shows:{},
    query:"",
    loading:false,
    show_loading:{}
}
function showReducer(state:State=InitialState,action:UnknownAction){ //AnyAction deprecated
    switch(action.type){
        // case SHOWS_LOADED:
        //     return produce(state,(draft)=>{
        //         const shows=action.payload as Show[];
        //         const showEntity=new schema.Entity("shows");
        //         const normalizedShows=normalize(shows,[showEntity]); //normalize gives undefined if shows is an empty array

        //         draft.loading=false;
        //         draft.query_shows[draft.query]=normalizedShows.result;
        //         draft.shows={...draft.shows,...normalizedShows.entities.shows};
        //     })
        // case QUERY_CHANGED:
        //     return produce(state,(draft)=>{
        //         draft.loading=true;
        //         draft.query=action.payload as string;
        //     })
        // case SHOW_DETAIL_LOADED:
        //     return produce(state,(draft)=>{
        //         const show=action.payload as Show;
        //         draft.shows[show.id]=show;
        //     })
        default:
            return state;
    }
    
}
export default showReducer;