import React from "react";
import "./cartList.css"

const purchaseData = [];

const CartList = ({productData}) => { 
    return (
        <div>
            {productData.map((item) => {
                return <div className="cartListItem" key={item.key}>
                            <div className="imageBlock">{<img src={item.image}></img>}</div>
                                <div className="infoBlock">
                                    <div>{item.name}</div>
                                    <div>{item.price}</div>
                            </div> 
                        </div>
            }) }
            
            <button className="btn btn-secondary purchaseButton">Complete purchase</button>
        </div>
    )
}

export default CartList