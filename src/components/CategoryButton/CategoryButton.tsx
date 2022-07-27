import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNavicon } from "@fortawesome/free-solid-svg-icons"
import "./CategoryButton.css"
import Categories from "../Categories/Categories";
import { FC, useState } from "react";


let CategoryButton = ()=> {
    

    return ( <div className="CategoryButton">
        <div className="CategoryButtonInner">
            <FontAwesomeIcon icon={faNavicon} className="CategoryNavIcon" />
            <span>Kategorije</span>
        </div>
        <div className="HoverShow">
            <Categories />
        </div>
    </div> );
}

export default CategoryButton;