import React,{ useState } from "react";

import "./style.css"
import Navs from "../../../Navigations/navs/navs";


const Header = ({nameUser,productData}) => {

    return (
        <div>
            <header  className=" header">
                <Navs name={nameUser} productListData={productData}/>
            </header>
        </div>
        

       
    )
}

export default Header