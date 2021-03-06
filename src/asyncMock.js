const products = [
    {id:'1', name: 'harry potter', price:1200, category: 'coleccionable', img: 'images/products/coleccionables/harry.png', stock: 6, description: 'Coleccionable de harry potter impreso en 3D'},
    {id:'2', name: 'alastor moody', price:1000, category: 'coleccionable', img: 'images/products/coleccionables/alastormoody.png', stock: 2, description: 'Coleccionable de akastir moody impreso en 3D'},
    {id:'3', name: 'ron weasley', price:1150, category: 'coleccionable', img: 'images/products/coleccionables/ronweasley.png', stock: 3, description: 'Coleccionable de ron weasley impreso en 3D'},
    {id:'4', name: 'jack sparrow', price:990, category: 'coleccionable', img: 'images/products/coleccionables/jacksparrow.png', stock: 5, description: 'Coleccionable de jack sparrow impreso en 3D'},
    {id:'5', name: 'kratos', price:900, category: 'coleccionable', img: 'images/products/coleccionables/kratos.png', stock: 1, description: 'Coleccionable de kratos impreso en 3D'},
    {id:'6', name: 'john wick', price:1090, category: 'coleccionable', img: 'images/products/coleccionables/johnwick.png', stock: 9, description: 'Coleccionable de john wick impreso en 3D'},
    {id:'7', name: 'superman', price:1300, category: 'coleccionable', img: 'images/products/coleccionables/superman.png', stock: 2, description: 'Coleccionable de superman impreso en 3D'},
    {id:'8', name: 'venom', price:1000, category: 'coleccionable', img: 'images/products/coleccionables/venom.png', stock: 1, description: 'Coleccionable de venom impreso en 3D'},
    {id:'9', name: 'senuelo1', price: 500, category: 'senuelo', img: 'images/products/senuelos/senuelo1.png', stock: 4, description: 'Señuelo de pesca impreso en 3D y pintado a mano'},
    {id:'10', name: 'senuelo2', price: 470, category: 'senuelo', img: 'images/products/senuelos/senuelo2.png', stock: 6, description: 'Señuelo de pesca impreso en 3D y pintado a mano'},
    {id:'11', name: 'senuelo3', price: 800, category: 'senuelo', img: 'images/products/senuelos/senuelo3.png', stock: 2, description: 'Señuelo de pesca impreso en 3D y pintado a mano'},
    {id:'12', name: 'senuelo4', price: 390, category: 'senuelo', img: 'images/products/senuelos/senuelo4.png', stock: 1, description: 'Señuelo de pesca impreso en 3D y pintado a mano'},
    {id:'13', name: 'senuelo5', price: 480, category: 'senuelo', img: 'images/products/senuelos/senuelo5.png', stock: 6, description: 'Señuelo de pesca impreso en 3D y pintado a mano'},
    {id:'14', name: 'senuelo6', price: 680, category: 'senuelo', img: 'images/products/senuelos/senuelo6.png', stock: 1, description: 'Señuelo de pesca impreso en 3D y pintado a mano'},
    {id:'15', name: 'senuelo7', price: 790, category: 'senuelo', img: 'images/products/senuelos/senuelo7.png', stock: 7, description: 'Señuelo de pesca impreso en 3D y pintado a mano'}]

    export const getProductsTodo3D = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products)
            }, 3000)
        })
    }

    export const getProductById = (id) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products.find(prod => prod.id === id))
            }, 500)
        })
    }
    