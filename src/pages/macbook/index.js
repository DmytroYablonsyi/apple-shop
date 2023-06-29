import React, { useState } from "react";

import ProductListItem from "../../components/puchaseElements/productList";
import "./style.css"


const initialAirPodsData = [
    {   
    name: "MacBook Pro13 M1",
    price: "1800 $",
    img:"https://www.istore.ua/upload/resize_cache/iblock/689/920_600_1/apple_macbook_pro_13_touch_bar_m1_2020_256gb_space_gray.jpeg",
    id: "26" 
} ,
    {
    name: "MacBook Pro13 M2",
    price: "1950 $",
    img:"https://www.istore.ua/upload/iblock/966/macbook_pro_13_m2_silver_5_is.jpg",
    id: "27" 
},
     {
    name: "MacBook Pro14 M1",
    price: "2100 $",
    img:"https://www.istore.ua/upload/iblock/aae/c1e1l1zw5w2pz5573ex7r83pfh6cl33m/3_macbook_14_16_pro_max_m1_is.jpeg",
    id: "28" 
},
     {
    name: "MacBook Pro14 M2",
    price: "2200 $",
    img:"https://www.istore.ua/upload/iblock/e19/l14glzmte77keikh2y0432s0uqx3xm4v/MPHF3_8_is.png",
    id: "29" },
     {
    name: "MacBook Pro16 M1",
    price: "2700 $",
    img:"https://www.istore.ua/upload/iblock/153/l4etze8hwzo42sj2c0m40acewh8s3raf/16_space_gray_is.jpeg",
    id: "30" 
},
{
    name: "MacBook Pro16 M2",
    price: "3000 $",
    img:"https://www.istore.ua/upload/iblock/e98/cds84rjdj9u3kjdeb3zo0genj7sn3bpy/MNW83_3_is.png",
    id: "31" 
},
{
    name: "MacBook Air 13 M1",
    price: "970 $",
    img:"https://www.istore.ua/upload/iblock/70c/xc7jbuit5efm2iiefuz2spblomfsazrg/apple_macbook_air_m1_2020_256gb_space_gray.jpeg",
    id: "32" 
},
{
    name: "MacBook Air 13 M2",
    price: "1120 $",
    img:"https://www.istore.ua/upload/iblock/6c8/i6ct6b7v1d8i6x38dfsrcbelgak3bjm5/apple_macbook_air_m2_22_midnight_5_is.jpeg",
    id: "33" 
},
{
    name: "MacBook Air 15 M1",
    price: "1400 $",
    img:"https://www.istore.ua/upload/iblock/655/qmw9j7vyq023he8fw3wpkj384s975ew3/MQKT3_7_is.png",
    id: "34" 
}
]
const MacBook = ({setProductData, deleteProductItem}) => {

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

export default MacBook