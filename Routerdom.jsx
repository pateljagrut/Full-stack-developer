import React from "react";
import { BrowserRouter,Router,Route } from "react-router-dom";
const Approuter=()=>{

    return(
        <BrowserRouter>
            <Router>
                <Route path="/"element={<div>Home</div>}></Route>
                <Route path="/about"element={<div>AboutUs</div>}></Route>
                <Route path="/contact"element={<div>ContactUs</div>}></Route>
            </Router>
        </BrowserRouter>
    )
}