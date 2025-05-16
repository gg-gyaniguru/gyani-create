import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: 'secret'
}

const accessToken = createSlice({
    name: 'accessToken',
    initialState,
    reducers: {
        setAccessToken: (state, action) => {},
        removeAccessToken: (state, action) => {}
    }
});

export const {setAccessToken, removeAccessToken} = accessToken.actions;
export default accessToken.reducer;