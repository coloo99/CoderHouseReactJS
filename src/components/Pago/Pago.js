import './Pago.css'
import { useState, useContext } from "react"
import CartContext from "../../context/CartContext"

import { db } from "../../service/firebase"
import { addDoc, collection, doc, documentId, updateDoc, writeBatch, getDocs, query, where } from "firebase/firestore"
import { useNavigate } from "react-router-dom"

const Pago = () => {

    const navegar = useNavigate()
    const [estaCargando, setEstaCargando] = useState(false)
    const [ordenCreada, setOrdenCreada] = useState(false)
    const [orden, setOrden] = useState ([])
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [cel, setCel] = useState('')
    const [direccion, setDireccion] = useState('')
    const {cart, getQuantity, precioTotal, clearCart} = useContext(CartContext)

    const cantidadTotal = getQuantity()
    const precioT = precioTotal()

    const crearOrden = async () =>{
        setEstaCargando(true)
        try{
            const objOrden = {
                comprador: {
                    nombre: nombre,
                    apellido: apellido,
                    cel: cel,
                    direccion: direccion,    
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

                setOrden(ordenAgregada)

                clearCart()
                setOrdenCreada(true)
                setTimeout(() => {
                    navegar('/')
                }, 5000)
            }else{
                console.log(`Hay productos que estan fuera de stock`)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setEstaCargando(false)
        }
    
}

    if(estaCargando){
        return <h1>Se esta generando tu orden...</h1>
    }

    if(ordenCreada){
        return (<>
                    <h1>{nombre} {apellido} su orden se creó correctamente</h1> 
                    <h2 className='numeroOrden'>El id de su orden es:  {orden.id}</h2>
                    <h3 className='datoOrden'>sera redirigido al inicio de la web en 5 segundos</h3>
                </>)
    }

    return(
        <>
            <h1>Pago</h1>
            <div className='contFormPago'>
                <form onSubmit={evento => {
                    evento.preventDefault()
                    setNombre(evento.target.name.value)
                    setApellido(evento.target.apellido.value)
                    setCel(evento.target.cel.value)
                    setDireccion(evento.target.direccion.value)
                    crearOrden()
                }}>
                    <input type='text' className="inpPago" placeholder='Nombre' name="name"></input>
                    <input type='text' className="inpPago" placeholder='Apellido' name="apellido"></input>
                    <input type='text' className="inpPago" placeholder='Calular' name="cel"></input>
                    <input type='text' className="inpPago" placeholder='Direccion' name="direccion"></input>
                    <button type="submit" className='botonPago'>Generar orden</button>
                </form>
            </div>
        </>
    )
}

export default Pago 