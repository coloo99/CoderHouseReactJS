import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProductsTodo3D, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../service/firebase'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    
    /* useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProductsTodo3D
    
        asyncFunction(categoryId).then(products => {
            setProducts(products)
        }).catch(error => {
            console.log(error)
        })
    }, [categoryId]) */

    useEffect(() => {
        /* setLoading(true) */

        const collectionRef = !categoryId
            ? collection(db, 'products')
            : query(collection(db, 'products'), where('category', '==', categoryId))
        
        getDocs(collectionRef).then(response => {
            const productAdaptados = response.docs.map(doc => {
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            setProducts(productAdaptados)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            /* setLoading(false) */
        })
    })

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer