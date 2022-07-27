import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import NotFound from "../NotFound/NotFound";
import "./Pages.css"


function Pages() {
    return ( 
            <div className="Pages">
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div> 
        );
}

export default Pages;