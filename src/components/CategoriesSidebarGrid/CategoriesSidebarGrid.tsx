import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import "./CategoriesSidebarGrid.css"
import { FC } from "react";

interface CategoriesSidebarGridProps {
    deactivate: ()=>void
}


let CategoriesSidebarGrid : FC<CategoriesSidebarGridProps> = ({deactivate})=> {

    let fontSizeX : number = 14.5;

    return ( 
            <div className="CategoriesSidebarGrid">
                <div className="CloseBar" onClick={deactivate}>
                    <span>Zatvorite Meni</span><FontAwesomeIcon icon={faX} fontSize={fontSizeX} />
                </div>
            </div> 
           );
}

export default CategoriesSidebarGrid;