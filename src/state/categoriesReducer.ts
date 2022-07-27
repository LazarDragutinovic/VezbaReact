import { category } from "../models/category";
import action from "./action";
import { appState } from "./appState";

const categoriesType: string = "categories";  

export {categoriesType}

const loadCategoriesType = "loadCategories";

const selectCategoryType = "selectCategoryType";

const loadCategories = (categories:category[])=>{
    let action : action = {
        type:categoriesType,
        reducerType: loadCategoriesType,
        props: categories
    }
    return action;
}

const selectCategory = (category: category | null) =>{
    let action: action = {
        type: categoriesType,
        reducerType: selectCategoryType,
        props: category
    }
    return action;
}

export {loadCategories, selectCategory}

function categoriesReducer(state:appState,action:action) {
    let newState;
    console.log(action)
    switch(action.reducerType) {
        case loadCategoriesType:
            newState = {...state};
            newState.categories = action.props;
            return newState;
        case selectCategoryType:
            newState = {...state};
            newState.selectedCategory = action.props;
            return newState;
        default:
            return state;
    }
}

function selectCategories(state:appState) {
    return state.categories;
}

export {selectCategories}

export default categoriesReducer;