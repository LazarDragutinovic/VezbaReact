import { FC } from "react";
import { proizvod } from "../../models/proizvod";
import ProductInDropdown from "../ProductInDropdown/ProductInDropdown";
import "./ProductDropdown.css"

interface ProductDropdownProps {
    products:proizvod[]
}

let ProductDropdown: FC<ProductDropdownProps> = ({products})=> {
    return ( <div className="ProductDropdown Shadow">
        <div className="TriangleAtTop"></div>
        {products.map(p=><ProductInDropdown product={p} key={p.id}/>)}
    </div> );
}

export default ProductDropdown;