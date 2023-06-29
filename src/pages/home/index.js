import React from "react";

import "./style.css"

const Home = () => {
    return (
        <div className="homePage">
            <img src={require ("../../pictures/picture1.png")}></img>
            <img src={require ("../../pictures/picture2.png")}></img>
            <img src={require ("../../pictures/picture3.png")}></img>
            <img src={require ("../../pictures/picture4.png")}></img>
            <img src={require ("../../pictures/picture5.png")}></img>
        </div>
    )
}

export default Home