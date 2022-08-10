import './ItemDetail.css'
import Counter from "../Counter/Counter"
import { useState, useContext } from 'react'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, name, img, description, price, stock }) => {
    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const {addItem, getProductQuantity} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        /* console.log(`La cantidad agregada es: ${quantity}`) */
        setQuantityToAdd(quantity)
        const productToAdd = {
            id, name, price, quantity
        }
        addItem(productToAdd)
      }

      const productQuantity = getProductQuantity(id)

    return (
        <div className='containerProdDetail'>
            <h2 className="nameProdDetail">{name}</h2>
            <img className="itemImgProdDetail" src={img} alt={name}/>
            <p>{description}</p>
            <p className='priceDetail'>${price}</p>
            <Counter stock={stock} onAdd={handleOnAdd} initial={productQuantity}/>
        </div>
    )
}

export default ItemDetail