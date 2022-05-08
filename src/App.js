import React from "react";
import Info from "./Info";
import About from "./About";
import Interest from "./Interests";
import Footer from "./Footer";

const App = () =>{
    return(
        <div className="container">
            <Info/>
            <About/>
            <Interest/>
            <Footer/>
        </div>
    )
}

export default App