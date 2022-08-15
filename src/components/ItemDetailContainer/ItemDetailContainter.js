import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../service/firebase'

const ItemDetailContainter = () => {
    const [product, setProduct] = useState()

    const {itemId} = useParams()

    useEffect(() => {
        getDoc(doc(db, 'products', itemId)).then(resp => {
            const datosProducto = resp.data()
            const productoGenerado = { id: resp.id, ...datosProducto }
            setProduct(productoGenerado)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            /* setLoading(false) */
        })
    }, [itemId])

    return (
        <div>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainter