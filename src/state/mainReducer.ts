import action from "./action";
import {appState} from "./appState";
import categoriesReducer, { categoriesType } from "./categoriesReducer";







function mainReducer(state:appState,action:action) {
    console.log(action)
    switch(action.type) {
        case categoriesType:
            return categoriesReducer(state,action);
        default:
            return state;
    }
}


export default mainReducer;