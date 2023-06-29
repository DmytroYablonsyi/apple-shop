import React, { useState } from "react";

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


import "./style.css"
import ProductNav from "../../../Navigations/Product/productNav";
import Logo from "../logo";

const Menu = () => {  

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
    <div>
        <Button className="menuButton" variant="black" onClick={handleShow}>
            <img className="menuButtonIcon" src="https://icon-library.com/images/white-menu-icon/white-menu-icon-4.jpg"></img>
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title><Logo/></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="offCanvas">
                <ProductNav setClose={handleClose} />
            </Offcanvas.Body>
        </Offcanvas>
    </div>
    )
}

export default Menu