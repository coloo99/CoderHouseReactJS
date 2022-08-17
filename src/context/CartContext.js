import { useState, createContext } from "react"

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])
    console.log(cart)

  const addItem = (productToAdd) => {
    if(!isInCart(productToAdd.id)){
      setCart([...cart, productToAdd])
    }else{
      const cartUpdated = cart.map(prod => {
        if(prod.id === productToAdd.id){
          const productUpdated = {
            ...prod,
            quantity: productToAdd.quantity
          }
          return productUpdated
        }else{
          return prod
        }
      })
      setCart(cartUpdated)
    }
  }

  const isInCart = (id) => {
    return cart.some(prod => prod.id === id)
  }

  const removeItem = (id) => {
    const newCartWithoutProduct = cart.filter(prod => prod.id !== id)
    setCart(newCartWithoutProduct)
  }

  const clearCart = () => {
    setCart([])
  }

  const getQuantity = () => {
    let accu = 0
    cart.forEach(prod => {
      accu += prod.quantity
    })
    return accu
  }

  const getProductQuantity = (id) => {
    const product = cart.find(prod => prod.id === id)
    
    return product?.quantity
  }

  const precioParcial = (prod) => {
    let precioTotalProdu = 0;
    precioTotalProdu = getProductQuantity(prod.id) * prod.price
   
    return precioTotalProdu
  }

  const precioTotal = () => {
    let precioTotalCart = 0;
    cart.forEach(produ => {
      precioTotalCart += parseInt(produ.price) * parseInt(produ.quantity)
    })
    return precioTotalCart
  }

  return (
    <CartContext.Provider value={{ cart, addItem, getQuantity, isInCart, removeItem, clearCart, getProductQuantity, precioTotal, precioParcial }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContext