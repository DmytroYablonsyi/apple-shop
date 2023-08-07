
import React, {useState} from "react";
import { Route,HashRouter, Routes as ReactRouterRoutes } from "react-router-dom";

import Iphone from "../pages/iphone";
import Ipad from "../pages/ipad";
import MacBook from "../pages/macbook";
import AirPods from "../pages/airpods";
import AppleWatch from "../pages/applewatch";
import Header from "../components/headerComponent/header";
import Home from "../pages/home";
import SignInForm from "../components/headerComponent/signInForm";
import OrderPage from "../pages/orderPage";


const Routes = () => {
    const [nameUser, setNameUser] = useState("");
    const [state, setState] = useState([]);

    const handleName = (n) => {
        setNameUser(n)
    }
    const addCartListItem = (item) => {
        setState((prev) => [...prev, item])
    }
    const deleteItem = (name) => {
        const index = state.findIndex((el) => el.name === name);
      setState([
            ...state.slice(0,index),
            ...state.slice(index + 1)
        ])
    }
    const deleteOrderList = () => {
        setState([])
    }    
    return (
        <div>
            <HashRouter>
                <div>
                    <Header nameUser={nameUser} productData={state}/>
                </div>
                <div>
                    <ReactRouterRoutes>
                        <Route path="/iphone" element={<Iphone  deleteProductItem={deleteItem} setProductData={addCartListItem}/>}/>
                        <Route path="/ipad" element={<Ipad  deleteProductItem={deleteItem} setProductData={addCartListItem}/>}/>
                        <Route path="/macbook" element={<MacBook  deleteProductItem={deleteItem} setProductData={addCartListItem}/>}/>
                        <Route path="/airpods" element={<AirPods deleteProductItem={deleteItem} setProductData={addCartListItem}/>}/>
                        <Route path="/applewatch" element={<AppleWatch  deleteProductItem={deleteItem} setProductData={addCartListItem}/>}/>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/order-page" element={<OrderPage deleteList={deleteOrderList} orderData={state}/>}/>
                        <Route path="/signin" element={<SignInForm handleName={handleName}/>}/>
                    </ReactRouterRoutes>
                </div>
            </HashRouter>
        </div>
    )
}

export default Routes