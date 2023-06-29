import React from "react"
import "./style.css"
import CartList from "../../puchaseElements/cartList"


const ProductCart = ({productData}) => {
    return (
    <div className="basketBlock">
        <div className="counter">{productData.length}</div>
        <button className="btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><img className="basketIcon" src="https://www.iconpacks.net/icons/2/free-add-to-basket-icon-3042-thumb.png"></img></button>
        <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div> 
                <div className="offcanvas-body">
                    <CartList productData={productData}/>
                </div>
        </div>
    </div>
            )
}

export default ProductCart