import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import { category } from "../models/category";





interface categoryState {
    categories: category[];
    selectedCategory: category | null;
}

let initialState : categoryState = {
    categories: [],
    selectedCategory: null
}


let categorySlice = createSlice({
    name:"category",
    initialState,
    reducers:{
        loadCategories: (state,action:PayloadAction<category[]>)=>{
            state.categories = action.payload;
        },
        selectCategory: (state,action: PayloadAction<category | null>)=>{
            state.selectedCategory = action.payload
        }
    }
})

let {loadCategories, selectCategory} = categorySlice.actions;
export {loadCategories, selectCategory}

export default categorySlice.reducer;