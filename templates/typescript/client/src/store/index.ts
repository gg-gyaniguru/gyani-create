import {configureStore} from "@reduxjs/toolkit";
import accessToken from "./features/accessToken.ts";

const store = configureStore({
    reducer: {
        accessToken
    }
});

type State = ReturnType<typeof store.getState>;
type Dispatch = typeof store.dispatch;

export type {State, Dispatch};
export default store;