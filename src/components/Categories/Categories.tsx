import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getAllCategories from "../../api/category-api";
import useCategoriesHook from "../../hooks/useCategoriesHook";
import useDebounce from "../../hooks/useDebounce";
import { category } from "../../models/category";
import action from "../../state/action";
import appContext from "../../state/appContext";
import { appState } from "../../state/appState";
import { selectCategory } from "../../state/categoriesReducer";
import CategoriesLink from "../CategoriesLink/CategoriesLink";
import "./Categories.css"

function Categories() {
    
    
    const context = useContext(appContext);
    let state :appState | null = null,dispatch:React.Dispatch<action>;
    let selectedCategoryDebounced: category | null = null;
    if(context) {
        state = context.state;
        dispatch = context.dispatch;
        
    }
    selectedCategoryDebounced = useDebounce(state?.selectedCategory || null)
    const setSelectedCategory = (category: category | null)=>{
        dispatch(selectCategory(category))
    }

    let classListCategoriesTab = "CategoriesTab"
    if(selectedCategoryDebounced) classListCategoriesTab+=" CategoriesTabExtended"
    return ( 
        <div className={classListCategoriesTab} onMouseLeave={()=>setSelectedCategory(null)}>
            <div className="CategoriesHeader">
                <span>Kategorije</span>
                {selectedCategoryDebounced && <span className="Hoverable">{selectedCategoryDebounced.name}</span>}
            </div>
            <div className="CategoriesLinksAndMore">
                <div className="CategoriesLinks">
                    
                    {state && state.categories.length > 0 && state.categories.map(cat=><CategoriesLink setCategory={setSelectedCategory} category={cat} key={cat.id} />)}
                </div>
                <div>

                </div>
            </div>
            
        </div> 
    );
}

export default Categories;