import { createEntityAdapter, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { person } from "../models/cast";
const castAdapter=createEntityAdapter<person>();
const initialState=castAdapter.getInitialState({
    person:{}
})

export type State=typeof initialState;
const castSlice=createSlice({
    name:"cast",
    initialState,
    reducers:{
        loadCast,
        castLoaded,
    }
})

function loadCast(state:State,action:PayloadAction<number>){
    return state;

}
function castLoaded(state:State,action:PayloadAction<person[]>){
    castAdapter.addMany(state,action);
}
const {actions,reducer:castReducer}=castSlice;

export const {loadCast:loadCastAction,castLoaded:castLoadedAction}=actions;
export default castReducer;
