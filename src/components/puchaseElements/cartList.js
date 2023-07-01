import React from "react";
import "./cartList.css"
import OrderNav from "../../Navigations/OrderNav/orderNav";

const CartList = ({productData, setClose}) => { 
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
            
            <button onClick={setClose} className="btn btn-secondary purchaseButton"><OrderNav/></button>
        </div>
    )
}

export default CartList