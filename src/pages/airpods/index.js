import React, { useState } from "react";

import ProductListItem from "../../components/puchaseElements/productList";
import "./style.css"
import { key } from "localforage";


const initialAirPodsData = [
    {   
    name: "Airpods 2",
    price: "180 $",
    img:"https://t3.ftcdn.net/jpg/04/08/38/46/360_F_408384606_CocvDPtOfuI8MORS8DpRFMn71TNtWdDZ.jpg",
    id: "0" 
} ,
    {
    name: "Airpods 3",
    price: "200 $",
    img:"https://www.istore.ua/upload/iblock/06c/y6gy7mb5nkj14ijpck7vfa9xb41b727t/apple_airpods_3_11_is.jpg",
    id: "1" 
},
     {
    name: "Airpods Pro",
    price: "220 $",
    img:"https://www.istore.ua/upload/iblock/381/apple_airpods_pro_bluetooth_qi_1_.jpeg",
    id: "2" 
},
     {
    name: "Airpods Pro2",
    price: "220 $",
    img:"https://www.istore.ua/upload/iblock/34e/g75oa5p9qkc9i01oic5xyb2mymewbes0/MQD83_5_is.png",
    id: "3" },
     {
    name: "Airpods Max",
    price: "660 $",
    img:"https://www.istore.ua/upload/iblock/458/apple_airpods_max_silver.jpg",
    id: "4" 
}
]
const AirPods = ({setProductData, deleteProductItem}) => {

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

export default AirPods