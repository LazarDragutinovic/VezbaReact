import { FC } from "react";
import { proizvod } from "../../models/proizvod";
import "./Product.css"
import Slika from "../../images/desktop-tablet-laptop.jpg";

interface ProductProps {
    product: proizvod;
}

let Product : FC<ProductProps> = ({product}) => {

    type stringReducer = (inp:string)=>string;
    let first40:stringReducer = (description:string)=>{
        let newString:string = "";
        for(let i = 0; i < 40 ; i++) {
            newString+=description[i];
        }
        newString+="...";
        return newString;
    }

    return ( 
        <div className="Product">
            <img src={Slika} />
            <div className="ProductInfo">
                <div className="ProductName">
                    {product.naziv}
                </div>
                <div className="ProductDescription">
                    {product.opis.length > 40? first40(product.opis) : product.opis}
                </div>
                <div className="ProductPrice">
                    {"Din "+product.cena+"*"}
                </div>
                <button className="Details">Detalji</button>
            </div>
        </div> 
        );
}

export default Product;