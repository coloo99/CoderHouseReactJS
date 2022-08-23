import './Cart.css'
import CartContext from "../../context/CartContext";
import { useContext } from 'react'
import { Link } from 'react-router-dom';

const Cart = () =>{
    const { cart, removeItem, clearCart, precioTotal, precioParcial } = useContext(CartContext)

    return(
        cart.length === 0 ? <div className='cart'>
                                <h1 className='tituloCarrito'>Carrito Vacio</h1>
                                <div className='volverTienda'><Link className='link' to={`/`}>Ir a la tienda</Link></div>
                            </div> :
                                    <div className='cart'>
                                        <h1  className='tituloCarrito'>Carrito</h1>
                                        <div className='nombresItem effect5'>
                                            <div>Imagen</div>
                                            <div>Nombre</div>
                                            <div>Cantidad</div>
                                            <div>Unidad</div>
                                            <div>Subtotal</div>
                                            <div></div>
                                        </div>
                                        
                                        {cart.map(produ => 
                                            <div className='contenidoItem' key={produ.id}>
                                                <div className='divImg'><Link to={`/detail/${produ.id}`}><img src={produ.img} alt={produ.description}/></Link></div>
                                                <div>{produ.name}</div>
                                                <div>{produ.quantity}</div>
                                                <div>${produ.price}</div>
                                                <div>${precioParcial(produ)}</div>
                                                <div onClick={() => removeItem(produ.id)}><img className='delete-icono' src='/images/delete-icono.png' alt='icono para borrar'></img></div>
                                            </div>    
                                        )}
                                        
                                        <div className='pieCarrito'>
                                            <div className='vaciarCarrito' onClick={() => clearCart()}><div className='vaciarCarrito2'>Vaciar</div></div>
                                            <div></div>
                                            <div></div>
                                            <div className='precioTotal'>Precio Total</div>
                                            <div className='precioTotal'> ${precioTotal()}</div>
                                            <Link to={'/pago'} className='comprar'><div className='comprar2'>Comprar</div></Link>
                                        </div>
                                    </div>
    )
}

export default Cart