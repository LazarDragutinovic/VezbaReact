import { proizvod } from "../models/proizvod"
import axios from "axios"
import environment from "../environment";

let preuzmiProizvode = async (naziv:string)=>{
    let products:proizvod[] = [];
    try {
        let response = await axios.get(environment.api+"proizvodi/?naziv="+naziv);
        products = response.data;
    }
    catch(e) {
        alert("Doslo je do greske");
    }
    return products;
}

let getAllProducts = async ()=>{
    let products: proizvod[] = [];
    try {
        let response = await axios.get(environment.api+"proizvodi");
        products = response.data;
    }
    catch(e) {
        alert("Doslo je do greske");
    }
    return products;
}

export {preuzmiProizvode, getAllProducts}