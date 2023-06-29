import React from "react";

import "./productNav.css"

import { Link } from "react-router-dom";

const ProductNav = ({setClose}) => {

    return (
        <div className="productList">
            <Link onClick={setClose} to="/iphone">Iphone</Link>
            <Link onClick={setClose} to="/ipad">IPad</Link>
            <Link onClick={setClose} to="/macbook">MacBook</Link>
            <Link onClick={setClose} to="/airpods">Airpods</Link>
            <Link onClick={setClose} to="/applewatch">AppleWatch</Link>
        </div>
    )
}

export default ProductNav