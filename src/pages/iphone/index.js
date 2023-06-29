import React, { useState } from "react";

import ProductListItem from "../../components/puchaseElements/productList";
import "./style.css"


const initialAirPodsData = [
    {   
    name: "Iphone XR",
    price: "180 $",
    img:"https://www.istore.ua/upload/iblock/6c6/7qbb9nejtc0zrupz4ugyrx0w4uxpxnav/apple_iphone_xr_128gb_black.jpeg",
    id: "15" 
} ,
    {
    name: "Iphone 11",
    price: "550 $",
    img:"https://www.istore.ua/upload/iblock/a96/guy8mhywivq7o276sxhwi7hmb7xx4lpr/iphone_11_black_6_is.png",
    id: "16" 
},
     {
    name: "Iphone 12",
    price: "650 $",
    img:"https://www.istore.ua/upload/iblock/b99/i8jalvro5uzgeiv2oia56bcosxztw3a0/apple_iphone_12_64gb_black.jpeg",
    id: "17" 
},
     {
    name: "Iphone 13",
    price: "750 $",
    img:"https://www.istore.ua/upload/iblock/9c1/4k4pzn39fuxrrht4ytm96ck305yne7ky/apple_iphone_13_blu_5_is.jpg",
    id: "18" },
     {
    name: "Iphone 13 mini",
    price: "600 $",
    img:"https://www.istore.ua/upload/iblock/092/apple_iphone_mini_blu_1_is.jpg",
    id: "19" 
},
{
    name: "Iphone 13 Pro",
    price: "850 $",
    img:"https://www.istore.ua/upload/iblock/af2/apple_iphone_13_pro_blu_2_is.jpg",
    id: "20" 
},
{
    name: "Iphone 13 Pro Max",
    price: "1050 $",
    img:"https://www.istore.ua/upload/iblock/e94/apple_iphone_13_pro_max_blu_1_is.jpg",
    id: "21" 
},
{
    name: "Iphone 14",
    price: "800 $",
    img:"https://www.istore.ua/upload/iblock/3de/1p3ro2jclzupun58n79r34lz2y0sjc1n/MR3P3_5_is.png",
    id: "22" 
},
{
    name: "Iphone 14 Pro",
    price: "900 $",
    img:"https://www.istore.ua/upload/iblock/82a/ci54pig7x2o4kny4lakg17rh9madn2pm/14_pro_spaceblack_3_is.png",
    id: "23" 
},
{
    name: "Iphone 14 Pro Max",
    price: "1200 $",
    img:"https://www.istore.ua/upload/iblock/62c/mc2ypvh79r3y0babv45u0usdmtgljbga/14_pro_max_silver_3_is.png",
    id: "24" 
},{
    name: "Iphone SE",
    price: "660 $",
    img:"https://www.istore.ua/upload/iblock/b11/iphone_SE_midnight_2022_2_is.jpg",
    id: "25" 
}

]
const Iphone = ({setProductData,deleteProductItem}) => {

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

export default Iphone