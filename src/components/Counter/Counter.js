import './Counter.css'
import { useState, useEffect } from "react";

const Counter = ({ stock = 0, initial = 1, onAdd }) =>{
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }
    
    return (
        <div className='containerCountAgregar'>
            <div className="botonesCountContainer">
                <button className='buttonCount' onClick={decrement}>-</button>
                <p className='numCount'>{quantity}</p>
                <button className='buttonCount' onClick={increment}>+</button>
            </div>
            <button className='buttonCount' onClick={() => onAdd(quantity)}>Agregar al carrito</button>
        </div>
    )
}
export default Counter