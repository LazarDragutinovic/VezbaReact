import { category } from "../models/category";

interface appState {
    categories: category[];
    selectedCategory: category | null;
}

export type {appState}
let initialState : appState = {
    categories: [],
    selectedCategory: null
}

export default initialState;