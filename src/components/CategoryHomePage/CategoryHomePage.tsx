import { FC } from "react";
import { category } from "../../models/category";
import "./CategoryHomePage.css"
import LaptopsAndPCS  from "../../images/desktop-tablet-laptop.jpg"

interface CategoryHomePageProps {
    category: category;
}

let CategoryHomePage : FC<CategoryHomePageProps> = ({category})=> {
    return ( 
        <div className="CategoryHomePage">
            <img src={LaptopsAndPCS}/>
            <div className="CategoryHomePageName">
                {category.name}
            </div>
        </div> 
        );
}

export default CategoryHomePage;