import './Navbar.css'
import CartWidget from '../CartWidget/Cartwidget'

const Navbar = () => {
    return (
        <nav>
            <div className="contmenuburger">
                <img src='images/navbar/menuburger2.png' alt='CartWidget'/>
            </div>
            <div className="contnamepage">
                <h1 className="namepage">Todo3D</h1>
            </div>
            <div className="contbutt">
                <button>Chucherias</button>
                <button>Coleccionables</button>
                <button>Pesca</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar