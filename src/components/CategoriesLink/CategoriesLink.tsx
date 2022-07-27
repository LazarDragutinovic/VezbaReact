
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { category } from "../../models/category";
import "./CategoriesLink.css"
interface CategoriesLinkProps {
    category: category,
    setCategory: (category: category | null)=>void
}

let CategoriesLink : FC<CategoriesLinkProps> = ({category,setCategory})=> {

    return ( <Link onMouseEnter={()=>{setCategory(category)}} to={"Category/"+category.id} className="CategoriesLink Hoverable">
                {category.name}<span>{">"}</span>
             </Link> 
            );
}

export default CategoriesLink;