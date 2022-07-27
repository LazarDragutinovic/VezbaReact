import { useEffect, useState } from "react";
import getAllCategories from "../api/category-api";
import { category } from "../models/category";
import useDebounce from "./useDebounce";



function useCategoriesHook() {
    const [selectedCategory,setSelectedCategory] = useState<category | null>(null);
    const [categories, setCategories] = useState<category[]>([]);
    const selectedCategoryDebounced = useDebounce(selectedCategory);
    useEffect(()=>{
        let getCategories = async ()=>{
            let categories = await getAllCategories();
            console.log(categories)
            setCategories(categories)
        }
        getCategories()
    },[])

    return ( {
        selectedCategoryDebounced,
        setSelectedCategory,
        categories
    } );
}

export default useCategoriesHook;