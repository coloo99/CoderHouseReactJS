import { useEffect } from "react"

const ItemDetailContainter = () => {
    
    useEffect(() => {
        getProductByID('1')
            .then(product => {
                setProduct(product)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <h1></h1>
        </div>
    )
}

export default ItemDetailContainter