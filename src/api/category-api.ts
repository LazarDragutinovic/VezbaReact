import axios from "axios";
import Categories from "../components/Categories/Categories";
import environment from "../environment";
import { category } from "../models/category";




async function getAllCategories() {
    let catgories: category[] = [];
    try {
        let resp = await axios.get(environment.api+"Categories");
        catgories = resp.data;
    }catch(e) {
        alert("Error");
    }
    
    return catgories ;
}

export default getAllCategories;