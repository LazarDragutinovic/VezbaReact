import { Link } from "react-router-dom";
import CategoryButton from "../CategoryButton/CategoryButton";
import "./SubNav.css"


function SubNav() {
    return ( <div className="SubNav">
        <div className="InnerSubNav">
            <CategoryButton />
            <div className="SubNavLinks">
                <Link to="Prijava">Prijava</Link>
                <Link to="Registracija">Registracija</Link>
                <Link to="NacinPlacanja">Način plaćanja</Link>
                <Link to="Porudzbine">Porudžbine</Link>
            </div>
        </div>
    </div> );
}

export default SubNav;