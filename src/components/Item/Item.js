import './Item.css'
import { Link } from 'react-router-dom'

const Item =({product}) => {
    return(
        <div className='itemContainer'>
            <h3 className='itemName'>{product.name}</h3>
            <img className='itemImg' src={product.img} alt={product.name}/>
            <Link to={`/detail/${product.id}`} className="detalles">Ver detalles</Link>
            <p className="stock">Stock disponible: {product.stock}</p>
        </div>
    )
}

export default Item