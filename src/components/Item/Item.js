import './Item.css'

const Item =({product}) => {
    return(
        <li>
            <h3 className='itemName'>{product.name}</h3>
            <img className='item' src={product.img} alt={product.name}/>
            <p className="description">{product.description}</p>
            <button className="detalles">Ver detalles</button>
            <p className="stock">Stock disponible: {product.stock}</p>
        </li>
    )
}

export default Item