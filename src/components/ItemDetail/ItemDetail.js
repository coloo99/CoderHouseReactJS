import './ItemDetail.css'
import Counter from "../Counter/Counter"
import { useState, useContext } from 'react'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, name, img, description, price, stock }) => {
    const [quantityToAdd, setQuantityToAdd] = useState(0)
    const {addItem, getProductQuantity} = useContext(CartContext)
    
    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)
        const productToAdd = {
            id, img, name, description, price, quantity
        }
        addItem(productToAdd)
    }
    
    const productQuantity = getProductQuantity(id)

    return (
        <div className='containerProdDetail'>
            <h1 className="nameProdDetail">{name}</h1>
            <img className="itemImgProdDetail" src={img} alt={name}/>
            <p>{description}</p>
            <p className='priceDetail'>${price}</p>
            {
                quantityToAdd === 0 ? (
                    <Counter onAdd={handleOnAdd} stock={stock} initial={productQuantity}/>
                ):(
                    <Link className='al-carrito' to='/cart'>Ir al carrito</Link>
                )
            }
        </div>
    )
}

export default ItemDetail