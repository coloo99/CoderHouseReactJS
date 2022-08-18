import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../service/firebase'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [cargando, setCargando] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setCargando(true)

        const collectionRef = !categoryId
            ? collection(db, 'products')
            : query(collection(db, 'products'), where('category', '==', categoryId))
        
        getDocs(collectionRef).then(response => {
            const productosGenerados = response.docs.map(doc => {
                const datosProductos = doc.data()
                return {id: doc.id, ...datosProductos}
            })
            setProducts(productosGenerados)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setCargando(false)
        })
    }, [categoryId])

    return (
        <div>
            <h1>{greeting} {!categoryId ? 'productos' : categoryId+'s'}</h1>
            {cargando ? <h1 className='cargandoProd'>Cargando productos...</h1> : <ItemList products={products}/>}
        </div>
    )
}

export default ItemListContainer