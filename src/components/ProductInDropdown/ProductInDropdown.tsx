import { FC } from "react";
import { proizvod } from "../../models/proizvod";
import "./ProductInDropdown.css"
interface ProductInDropdownProps {
    product: proizvod
}
let ProductInDropdown : FC<ProductInDropdownProps> = ({product})=> {

    return ( <div className="ProductDropdownInfo">
                <div>{product.naziv}</div>
                <div>Din {product.cena}</div>
            </div>
        );
}

export default ProductInDropdown;