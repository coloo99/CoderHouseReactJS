import './Navbar.css'
import CartWidget from '../CartWidget/Cartwidget'

const Navbar = () => {
    return (
        <nav>
            <div>
                <h1 className="namepage">Todo3D</h1>
            </div>
            <div className="divbot">
                <button>Chucherias</button>
                <button>Coleccionables</button>
                <button>Pesca</button>
            </div>
        </nav>
    )
}

export default Navbar