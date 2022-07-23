import { useEffect, useState } from "react";
import { preuzmiProizvode } from "../api/proizvodi-api";
import { proizvod } from "../models/proizvod";
import useDebounce from "./useDebounce";


function useSearchHook() {

    const [searchText,setSearchText] = useState<string>("");
    
    const searchTextDebounced = useDebounce(searchText);
    const [searchActive,setSearchActive] = useState<boolean>(false);
    const [products,setProducts] = useState<proizvod[]>([]);
    const [loading,setLoading] = useState<boolean>(false);
    useEffect(()=>{
        let get = async ()=>{
            setLoading(true);
            setProducts(await preuzmiProizvode(searchText));
            setLoading(false);
            
        }
        if(searchText !== "") get()
        if(searchText == "") {
            setProducts([])
            setLoading(false)
        }
    },[searchTextDebounced]);

    let classList:string = "";
    if(searchActive) classList = "NavExtended" 

    return ( {
        searchActive,
        setSearchActive,
        classList,
        searchText,
        setSearchText,
        products,
        loading
    } );
}

export default useSearchHook;