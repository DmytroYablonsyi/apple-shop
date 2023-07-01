import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import "./style.css"
import { Link } from "react-router-dom";

const OrderPage = ({orderData, deleteList}) => {

    const [active, setActive] = useState(false)

    const changeContent = () => {
        setActive((prev) => !prev)
        deleteList()
    }

    return(
        <div className={active ? "orderBlock" : "content"}>

           

 { active ? <div><h2>Замовлення прийнято!</h2><button className="btn btn-secondary"><Link to={"/"}>Повернутись до покупок</Link> </button> </div>
 : orderData.length 
    ?
  <div>
        <h1>Ваше замовлення:</h1>
        <div className="orderList">
        {orderData.map((value) => {
    return  <div>
        <div><img src={value.image}></img></div>
        <div>{value.name}</div>
        <div>{value.price}</div>
        </div>
     })}</div>
         <label>Виберіть відділення Нової пошти:</label>
         
         <Form.Select className="select">
             <option>відділення №1</option>
             <option>відділення №2</option>
             <option>відділення №3</option>
             <option>відділення №4</option>
             <option>відділення №5</option>
         </Form.Select>
         <br />
         <label>Виберіть місто доставки:</label>

         <Form.Select className="select">
             <option>Львів</option>
             <option>Київ</option>
             <option>Харків</option>
             <option>Тернопіль</option>
             <option>Жашків</option>
             <option>Жмеринка</option>
         </Form.Select>
 <button onClick={changeContent} className="btn btn-secondary confirm">Підтвердити</button>

     </div> : <div className="emptyCartBlock">your shoping cart is empty</div>
 }
        </div>
    )
}

export default OrderPage