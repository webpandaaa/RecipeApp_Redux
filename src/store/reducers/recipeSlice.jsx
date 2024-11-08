import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

export const recipeSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        addrecipe: (state,action) =>{
            state.recipes = action.payload;
        }
    },
});

export const { addrecipe } = recipeSlice.actions

export default recipeSlice.reducer;
