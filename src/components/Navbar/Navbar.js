import './Navbar.css'
import { useState } from "react";
import CartWidget from '../CartWidget/Cartwidget'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav>
            <div className={`contmenuburger ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <img className="menuBurger" src={`${process.env.PUBLIC_URL}/images/navbar/menuburger2.png`} alt='CartWidget'/>
            </div>
            <div className="contnamepage">
                <h1 className="namepage"><Link className="linkName" to='/'>Todo3D</Link></h1>
            </div>
            <div className={`contbutt ${isOpen && "open"}`}>
                <Link to='/category/' className="buttonNav">Chucherias</Link>
                <Link to='/category/coleccionable' className="buttonNav">Coleccionables</Link>
                <Link to='/category/senuelo' className="buttonNav">Pesca</Link>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar