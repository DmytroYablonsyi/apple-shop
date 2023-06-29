import React, { useState } from "react";

import ProductListItem from "../../components/puchaseElements/productList";
import "./style.css"


const initialAirPodsData = [
    {   
    name: "Ipad Mini 8,3",
    price: "180 $",
    img:"https://t3.ftcdn.net/jpg/04/08/38/46/360_F_408384606_CocvDPtOfuI8MORS8DpRFMn71TNtWdDZ.jpg",
    id: "11" 
} ,
    {
    name: "Ipad Air 10,9",
    price: "200 $",
    img:"https://www.istore.ua/upload/iblock/06c/y6gy7mb5nkj14ijpck7vfa9xb41b727t/apple_airpods_3_11_is.jpg",
    id: "12" 
},
     {
    name: "Ipad Pro 11",
    price: "220 $",
    img:"https://www.istore.ua/upload/iblock/381/apple_airpods_pro_bluetooth_qi_1_.jpeg",
    id: "13" 
},
     {
    name: "Ipad Pro 12,9",
    price: "220 $",
    img:"https://www.istore.ua/upload/iblock/34e/g75oa5p9qkc9i01oic5xyb2mymewbes0/MQD83_5_is.png",
    id: "14" },
]
const Ipad = ({setProductData,deleteProductItem}) => {

    const [state, setState] = useState(initialAirPodsData);

    const addProductData = (productData) => {
        setProductData(productData);
    }
    
    return (
        <div className="itemCard">
            {state.map((item) => {
              return <ProductListItem id={item.id} key={item.name} name={item.name} price={item.price} image={item.img} deleteProduct={deleteProductItem} buyProduct={addProductData} />
            })}
        </div>
    )
}

export default Ipad