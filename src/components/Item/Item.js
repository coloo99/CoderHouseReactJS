import './Item.css'
import { Link } from 'react-router-dom'

const Item =({product}) => {
    return(
        <div className='itemContainer'>
            <Link className='itemName' to={`/detail/${product.id}`}><h3 className='itemName'>{product.name}</h3></Link>
            <Link to={`/detail/${product.id}`}><img className='itemImg' src={product.img} alt={product.name}/></Link>
            <p className="stock">Stock: {product.stock}</p>
            <Link to={`/detail/${product.id}`} className="detalles">Ver detalles</Link>
        </div>
    )
}

export default Item