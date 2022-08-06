import './ItemList.css'
import Item from "../Item/Item"

const ItemList = ({products}) => {
    return (
        <div className="itemListContainer">
            {products.map(prod => <Item key={prod.id} product={prod}/>)}
        </div>
    )
}

export default ItemList