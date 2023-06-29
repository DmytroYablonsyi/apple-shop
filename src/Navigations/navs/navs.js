import React from "react";

import "./navs.css"

import { Link } from "react-router-dom";
import Logo from "../../components/headerComponent/logo";

import ProductCart from "../../components/headerComponent/productCart";
import Menu from "../../components/headerComponent/menu";
import UserName from "../../components/headerComponent/userName";
import SignIn from "../../components/headerComponent/signIn";

const Navs = ({name,productListData}) => {
    
    return (
        <div className="navigationBlock">
            <Menu/>
            <Link className="logoNav" to="/"><Logo/></Link>
            <UserName nameUser={name}/>
            <ProductCart productData={productListData}/>
            <Link to="/signin"><SignIn/></Link>
        </div>
    )
}

export default Navs