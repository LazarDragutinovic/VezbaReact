import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faNavicon,faDoorOpen} from "@fortawesome/free-solid-svg-icons"
import Logo from "../Logo/Logo";
import NavButtons from "../NavButtons/NavButtons";
import Search from "../Search/Search";
import "./Nav.css"
import { useState } from "react";
import useSearchHook from "../../hooks/useSearchHook";
import Categories from "../Categories/Categories";
import CategoriesSidebar from "../CategoriesSidebar/CategoriesSidebar";

function Nav() {

    const [displayCategories,setDisplayCategories] = useState<boolean>(false);
    const {searchActive,setSearchActive,classList,searchText,setSearchText,products,loading}=useSearchHook();
    const [showCategoriesSidebar,setShowCategoriesSidebar] = useState<boolean>(false);
    return ( <nav className={classList}>
        <div className="NavInnerContener">
            <div className="LogoAccountButton">
                <Logo/>
                <button className="AccountButton"><FontAwesomeIcon icon={faDoorOpen} fontSize={22}/>.Nalog</button>
            </div>
            
            <div className="NavControlls">
                <button className="NavButton" onClick={()=>{setShowCategoriesSidebar(true)}}>
                    <FontAwesomeIcon fontSize={22} icon={faNavicon}/>
                </button>
                <Search loading={loading} products={products} searchText={searchText} setSearchText={setSearchText}/>
                <NavButtons active={searchActive} searchSetActive={setSearchActive} />
            </div>
        </div>    
        {searchActive && 
        <div className="subNavSearch">
            <Search loading={loading} products={products} searchText={searchText} setSearchText={setSearchText} uvekPrikazi={true} />
        </div>
        }
        {
            showCategoriesSidebar && 
            <CategoriesSidebar setShow={setShowCategoriesSidebar} />
        }
    </nav> );
}

export default Nav;