import React, { useState } from "react";

import "./productList.css"

const ProductListItem = ({name, price,image,buyProduct,id, deleteProduct}) => { 

    const [active,setActive] = useState(false)

    const deleteProductData = () => {
        setActive((prev) => !prev);
        deleteProduct(id);
    }

    const addProductData = () => {
        buyProduct({name,price,image,id});
        setActive((prev) => !prev);
    }

    return (
        <div className="productListItem">
            <div className="imageBlock">{<img src={image}></img>}</div>
            <div className="infoBlock">
                <div>{name}</div>
                <div>{price}</div>
                <button className={`btn ${active ? "cancelButton" : "btn-success"} addToCartBtn`} onClick={!active ? addProductData : deleteProductData}>{active ? "Cancel" : "Add to cart"}</button>
    
                    <div className="statusBlock">{ active && `${name} added to cart`}</div>
                
            </div>
           
        </div>
    )
}

export default ProductListItem