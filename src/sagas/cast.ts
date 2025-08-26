import { getCast } from "../api";
import { call, put } from "redux-saga/effects";
import { castLoadedAction } from "../slices/cast";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { person } from "../models/cast";
import { castLinkToShowAction } from "../slices/shows";

export function* fetchCast(action:PayloadAction<number>):Generator<any,any,any>{
    const cast:person[]=yield call(getCast,action.payload);
    const castIds=cast.map((person)=>person.id);
    yield put(castLoadedAction(cast));
    yield put(castLinkToShowAction({showId:action.payload,castIds}));
}