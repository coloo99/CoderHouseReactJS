import './Navbar.css'
import CartWidget from '../CartWidget/Cartwidget'

const Navbar = () => {
    return (
        <nav>
            <div>
                <h1 className="namepage">Todo3D</h1>
            </div>
            <div>
                <button>Chucherias</button>
                <button>Coleccionables</button>
                <button>Pesca</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar