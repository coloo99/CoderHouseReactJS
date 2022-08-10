import './Cartwidget.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()

    return (
        <div className="carwid">
            <img className='cart' src={`${process.env.PUBLIC_URL}/images/navbar/carrito2.png`} alt='CartWidget'/>
            {<p className='countCart'>{quantity}</p>}
        </div>
    )
}

export default CartWidget