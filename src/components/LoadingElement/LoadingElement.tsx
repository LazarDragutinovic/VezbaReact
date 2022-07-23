import "./LoadingElement.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner} from "@fortawesome/free-solid-svg-icons"
import { FC } from "react";

interface LoadingElementProps {
    fontSize?:number
}

let LoadingElement : FC<LoadingElementProps> = ({fontSize})=> {
    return ( <div className="LoadingElement">
        <FontAwesomeIcon icon={faSpinner} spin fontSize={fontSize? fontSize : 20} />
    </div> );
}

export default LoadingElement;