import "./HomePage.css"
import LaptopsAndPCS  from "../../images/desktop-tablet-laptop.jpg"
import { useContext, useEffect, useState } from "react";
import appContext from "../../state/appContext";
import { category } from "../../models/category";
import { selectCategories } from "../../state/categoriesReducer";
import CategoryHomePage from "../CategoryHomePage/CategoryHomePage";
import { useSelector } from "react-redux";
import type {RootState} from "../../state/store"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { proizvod } from "../../models/proizvod";
import { getAllProducts } from "../../api/proizvodi-api";
import Product from "../Product/Product";
function HomePage() {

    const categories: category[] = useSelector((state: RootState)=>state.categoryReducer.categories)
    const [products,setProducts] = useState<proizvod[]>([]);
    useEffect(()=>{
        let getProducts = async ()=>{
            setProducts(await getAllProducts());
        }
        getProducts();
    },[]);

    const settings = {
        
        infinite: true,
        speed: 500,
        slidesToShow:4,
        slidesToScroll:4,
        autoPlay:true,
        autoPlaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 0
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
                breakpoint: 375,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 2
                }
              }
            
          ]
    };

    return ( 
        <div className="HomePage Page">
            <div className="HomePageImageDisplay">
                <img src={LaptopsAndPCS} />
            </div>
            <div className="HomePageCategories">
                {categories.map(cat=><CategoryHomePage category={cat} key={cat.id} />)}
            </div>
            <div className="SliderContainer">
                <h1>Ponuda meseca</h1>
                {
                    <Slider {...settings} className="ProductsSliderHomePage">
                        {products.map(product=><Product product={product}  key={product.id}/>)}
                    </Slider>
                }
            </div>
        </div> 
        );
}


 

export default HomePage;