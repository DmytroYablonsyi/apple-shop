import React,{useState} from "react"
import "./style.css"
import CartList from "../../puchaseElements/cartList"

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


const ProductCart = ({productData}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
    <div className="basketBlock">
         <div>
         <div className="counter">{productData.length}</div>
        <Button onClick={handleShow} className="menuButton" variant="light">
        <img className="basketIcon" src="https://www.iconpacks.net/icons/2/free-add-to-basket-icon-3042-thumb.png"></img>
        </Button>

        <Offcanvas placement="end" show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="offcanvas-body ">
            <CartList setClose={handleClose} productData={productData}/>
            </Offcanvas.Body>
        </Offcanvas>
    </div>
    </div>
            )
}

export default ProductCart