import { useState, useContext } from "react"
import CartContext from "../../context/CartContext"

import { db } from "../../service/firebase"
import { addDoc, collection, doc, documentId, updateDoc, writeBatch, getDocs, query, where } from "firebase/firestore"
import { useNavigate } from "react-router-dom"

const Pago = () => {

    const navegar = useNavigate()
    const [estaCargando, setEstaCargando] = useState(false)
    const {cart, getQuantity, precioTotal, clearCart} = useContext(CartContext)

    const cantidadTotal = getQuantity()
    const precioT = precioTotal()

    const crearOrden = async () =>{
        setEstaCargando(true)
        try{
            const objOrden = {
                comprador: {
                    name: 'Lucas',
                    apellido: 'Yacusa',
                    cel: '099294951',
                    direccion: 'Rodo 586',    
                },
                objetos: cart,
                cantidadTotal,
                precioT,
                fecha: new Date()
            }   

            const ids = cart.map(producto => producto.id)

            const referenciaProducto = collection(db, 'products')

            const productosAgregadosDesdeFirestore = await getDocs(query(referenciaProducto, where(documentId(), 'in', ids)))

            const { docs } = productosAgregadosDesdeFirestore

            const fueraDeStock = []

            const batch = writeBatch(db)

            docs.forEach(doc => {
                const datosDoc = doc.data()
                const stockDb = datosDoc.stock

                const productoAgregadoAlCarrito = cart.find(prod => prod.id === doc.id)
                const cantidadProducto = productoAgregadoAlCarrito?.quantity

                if(stockDb >= cantidadTotal){
                    batch.update(doc.ref, {stock: stockDb - cantidadProducto})
                }else{
                    fueraDeStock.push({id: doc.id, ...datosDoc})
                }
            })

            if(fueraDeStock.length === 0) {
                await batch.commit()

                const referenciaOrden = collection(db, 'orden')
                const ordenAgregada = await addDoc(referenciaOrden, objOrden)

                console.log(`El ide de su orden es:  ${ordenAgregada.id}`)
                clearCart()
                navegar('/')
            }else{
                console.log(`Hay productos que estan fuera de stock`)
            }
        } catch (error) {
            console.log(RangeError)
        } finally {
            setEstaCargando(false)
        }
    



        /* const referenciaOrden = collection(db, 'orden')
        addDoc(referenciaOrden, crearOrden).then(response => {

        })

        const referenciaOrden = collection(db, 'orden', 'id')
        updateDoc(referenciaOrden, {stock: 20}).then(response => {

        }) */
}

    if(estaCargando){
        <h1>Se esta generando tu orden...</h1>
    }

    return(
        <>
            <h1>Pago</h1>
            <button onClick={crearOrden}>Generar orden</button>
        </>
    )
}

export default Pago 