import './Counter.css'
import { useState } from "react";

const Counter = ({ stock, onAdd }) =>{
    const [count, setCount] = useState(1)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }
    return (
        <div className='containerCountAgregar'>
            <div className="botonesCountContainer">
                <button className='buttonCount' onClick={decrement}>-</button>
                <p className='numCount'>{count}</p>
                <button className='buttonCount' onClick={increment}>+</button>
            </div>
            <button className='buttonCount' onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}
export default Counter