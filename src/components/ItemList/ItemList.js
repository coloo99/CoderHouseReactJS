import Item from "../Item/Item"

const ItemList = ({products}) => {
    return (
        <ul className="listItem">
            {products.map(prod => <Item key={prod.id} product={prod}/>)}
        </ul>
    )
}

export default ItemList