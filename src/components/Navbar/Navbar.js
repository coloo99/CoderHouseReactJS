import React, { useState } from "react";
import './Navbar.css'
import CartWidget from '../CartWidget/Cartwidget'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav>
            <div className={`contmenuburger ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <img className="menuBurger" src='images/navbar/menuburger2.png' alt='CartWidget'/>
            </div>
            <div className="contnamepage">
                <h1 className="namepage">Todo3D</h1>
            </div>
            <div className={`contbutt ${isOpen && "open"}`}>
                <button>Chucherias</button>
                <button>Coleccionables</button>
                <button>Pesca</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar