import './Cartwidget.css'

const CartWidget = () => {
    return (
        <div className="carwid">
            <img className='cart' src={`${process.env.PUBLIC_URL}/images/navbar/carrito2.png`} alt='CartWidget'/>
            <p className='countCart'>5</p>
        </div>
    )
}

export default CartWidget