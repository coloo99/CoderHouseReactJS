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
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}
export default Counter