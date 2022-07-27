import "./HomePage.css"
import LaptopsAndPCS  from "../../images/desktop-tablet-laptop.jpg"
import { useContext } from "react";
import appContext from "../../state/appContext";
import { category } from "../../models/category";
import { selectCategories } from "../../state/categoriesReducer";
import CategoryHomePage from "../CategoryHomePage/CategoryHomePage";

function HomePage() {

    const context = useContext(appContext);
    let categories: category[] = [];
    if(context) {
        categories = selectCategories(context.state);
    }

    return ( 
        <div className="HomePage Page">
            <div className="HomePageImageDisplay">
                <img src={LaptopsAndPCS} />
            </div>
            <div className="HomePageCategories">
                {categories.map(cat=><CategoryHomePage category={cat} key={cat.id} />)}
            </div>
        </div> 
        );
}

export default HomePage;