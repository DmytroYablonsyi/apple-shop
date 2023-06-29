import React, { useState } from "react";

import ProductListItem from "../../components/puchaseElements/productList";
import "./style.css"


const initialAirPodsData = [
    {   
    name: "Apple Watch Series 6",
    price: "180 $",
    img:"https://www.istore.ua/upload/iblock/ab5/thf511lcbrhhsknuwpmsge79sy12tob0/MNP23_2_is.png",
    id: "5" 
} ,
    {
    name: "Apple Watch Series 7",
    price: "200 $",
    img:"https://www.istore.ua/upload/iblock/96b/apple_watch_45_black_3_is.jpg",
    id: "6" 
},
     {
    name: "Apple Watch Series 8",
    price: "220 $",
    img:"https://www.istore.ua/upload/iblock/e84/uck5d5oyd4ryh2mtokrhc6k1qiuq8nm9/MNP13_2_is.png",
    id: "7" 
},
     {
    name: "Apple Watch SE",
    price: "220 $",
    img:"https://www.istore.ua/upload/iblock/896/r5sytfptbxjfd3hx03a5nga41mehgcmd/MNJP3_2_is.png",
    id: "8" },
     {
    name: "Apple Watch SE 2",
    price: "660 $",
    img:"https://www.istore.ua/upload/iblock/f44/o6jvqsqb7aaa7uqc7l28ypzflz0u8oza/MNJT3_3_is.png",
    id: "9" 
},
{
    name: "Apple Watch Ultra",
    price: "660 $",
    img:"https://www.istore.ua/upload/iblock/861/ehxaaepn56ab2349u9lg3ce8t56rorql/MNHF3_3_is.png",
    id: "10" 
}
]
const AppleWatch = ({setProductData, deleteProductItem}) => {

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

export default AppleWatch