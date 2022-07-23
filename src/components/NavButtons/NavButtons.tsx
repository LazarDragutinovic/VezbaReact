import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavButtons.css"
import {faHeart,faUser,faBagShopping, faSearch} from "@fortawesome/free-solid-svg-icons"
import { Style } from "util";
import { CSSProperties, FC, StyleHTMLAttributes, useState } from "react";


interface NavButtonsProps {
    active:boolean,
    searchSetActive:(state:boolean)=>void
}

let NavButtons : FC<NavButtonsProps> = ({searchSetActive,active})=> {
    
    let din: number = 0;
    let fontSize: number = 20;
    let style: CSSProperties = {
        backgroundColor:"white"
    }

    const toggle=()=>{
        if(active)
            searchSetActive(false)
        else searchSetActive(true)
    }

    return ( <div className="NavButtons">
        <button className="MinimizedSearch" onClick={toggle}><FontAwesomeIcon icon={faSearch} style={style} fontSize={23} /></button>
        <button><FontAwesomeIcon icon={faHeart} fontSize={fontSize} style={style} /></button>
        <button><FontAwesomeIcon icon={faUser} fontSize={fontSize} style={style}/></button>
        <button><FontAwesomeIcon icon={faBagShopping} fontSize={fontSize} style={style}/></button>
        <span className="DinUKorpi">Din {din}</span>
    </div> );
}

export default NavButtons;