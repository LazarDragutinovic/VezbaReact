import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Search.css"
import {faSearch} from "@fortawesome/free-solid-svg-icons"
import { FC, FormEvent, HTMLAttributes, useState } from "react";
import { proizvod } from "../../models/proizvod";
import ProductDropdown from "../ProductDropdown/ProductDropdown";
import LoadingElement from "../LoadingElement/LoadingElement";

interface SearchProps {
    uvekPrikazi?: boolean,
    searchText: string;
    setSearchText:(text:string)=>void;
    products:proizvod[],
    loading: boolean
}

let Search : FC<SearchProps> = ({uvekPrikazi=false,searchText,setSearchText, products, loading})=>{

    const [focused,setFocused] = useState<boolean>(false);

    let classList = focused ? "Search SearchFocus": "Search";
    if(uvekPrikazi) classList += " SearchAlwaysActive";

    const setText = (e:FormEvent<HTMLInputElement>)=>{
        
        setSearchText((e.target as HTMLInputElement).value)
    }

    return ( <div className={classList}>
        <div className="SearchControlls">
            <input placeholder="Pretrazite..." onInput={setText} onFocus={()=>{setFocused(true)}} onBlur={()=>setFocused(false)}></input>
            {!loading && <span><FontAwesomeIcon icon={faSearch} fontSize={25} /></span>}
            {loading && <LoadingElement/>}
        </div>
        
        { products.length > 0 && <ProductDropdown products={products}/>}
    </div> );
}

export default Search;