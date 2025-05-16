import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState:{value:string} = {
    value: 'secret'
}

const accessToken = createSlice({
    name: 'accessToken',
    initialState,
    reducers: {
        setAccessToken: (state, action: PayloadAction<string>) => {},
        removeAccessToken: (state, action) => {}
    }
});

export const {setAccessToken, removeAccessToken} = accessToken.actions;
export default accessToken.reducer;