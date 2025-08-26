import { call, put } from "redux-saga/effects";
import { showDetail, showsSearch } from "../api";
import type { AnyAction } from "redux-saga";
import { showsLoadedAction } from "../slices/shows";
import { showDetailLoadedAction } from "../slices/shows";
export function* fetchShows(action:AnyAction): Generator<any,any,any>{
    const shows=yield call(showsSearch,action.payload);
    yield put(showsLoadedAction(shows));
}
export function* fetchShowDetails(action:AnyAction): Generator<any,any,any>{
    console.log("Show ID is",action.payload)
    const show=yield call(showDetail,action.payload);
    yield put(showDetailLoadedAction(show));
}
//downsides of not using yield
//1. Unit testing becomes difficult
//2. Process cant be stopped midway