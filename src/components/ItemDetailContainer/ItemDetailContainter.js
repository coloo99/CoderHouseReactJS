import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../service/firebase'

const ItemDetailContainter = () => {
    const [product, setProduct] = useState()
    const [cargando, setCargando] = useState(true)

    const {itemId} = useParams()

    useEffect(() => {
        setCargando(true)
        getDoc(doc(db, 'products', itemId)).then(resp => {
            const datosProducto = resp.data()
            const productoGenerado = { id: resp.id, ...datosProducto }
            setProduct(productoGenerado)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setCargando(false)
        })
    }, [itemId])

    return (
        <div>
            {cargando ? <h1 className='cargandoProd'>Cargando productos...</h1> : <ItemDetail {...product} />}
        </div>
    )
}

export default ItemDetailContainter