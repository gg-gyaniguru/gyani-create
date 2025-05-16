import {configureStore} from "@reduxjs/toolkit";
import accessToken from "./features/accessToken.js";

const store = configureStore({
    reducer: {
        accessToken
    }
});

export default store;