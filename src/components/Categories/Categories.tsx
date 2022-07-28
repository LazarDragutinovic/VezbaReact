import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import getAllCategories from "../../api/category-api";
import useCategoriesHook from "../../hooks/useCategoriesHook";
import useDebounce from "../../hooks/useDebounce";
import { category } from "../../models/category";
import action from "../../state/action";
import appContext from "../../state/appContext";
import { appState } from "../../state/appState";
import { RootState } from "../../state/store";
import CategoriesLink from "../CategoriesLink/CategoriesLink";
import { selectCategory } from "../../state/categorySlice";
import "./Categories.css"

function Categories() {
    
    
    const dispatch = useDispatch();
    const selectedCategory = useSelector((state:RootState)=>state.categoryReducer.selectedCategory);
    const categories = useSelector((state:RootState)=>state.categoryReducer.categories)
    let selectedCategoryDebounced = useDebounce(selectedCategory)
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
                    
                    {categories.length > 0 && categories.map(cat=><CategoriesLink setCategory={setSelectedCategory} category={cat} key={cat.id} />)}
                </div>
                <div>

                </div>
            </div>
            
        </div> 
    );
}

export default Categories;