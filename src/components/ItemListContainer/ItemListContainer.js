import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProductsTodo3D } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProductsTodo3D().then(products => {
            setProducts(products)
        })
    }, [])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer