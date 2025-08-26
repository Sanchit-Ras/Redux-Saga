import showReducer from "./slices/shows";
import createSagaMiddleware from "redux-saga";
import { debounce, takeEvery } from "redux-saga/effects";
import { fetchShowDetails, fetchShows } from "./sagas/shows";
import { configureStore } from "@reduxjs/toolkit";
import { queryChangeAction,loadShowAction } from "./slices/shows";
import castReducer, { loadCastAction } from "./slices/cast";
import { fetchCast } from "./sagas/cast";

const sagaMiddleware=createSagaMiddleware();

function* rootSaga(){
    yield debounce(330,queryChangeAction,fetchShows);
    yield takeEvery(loadShowAction,fetchShowDetails);
    yield takeEvery(loadCastAction,fetchCast);
}

export const store=configureStore({
    reducer:{
        shows:showReducer,
        cast:castReducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})
// middleware expects a callback function
// Calls getDefaultMiddleware() to get the default middleware array.
// Uses .concat() to append sagaMiddleware to the end of that array.
// Returns the new, combined array of middleware to the store.

sagaMiddleware.run(rootSaga);
export type State=ReturnType<typeof store.getState>