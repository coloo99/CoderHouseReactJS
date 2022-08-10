import './ItemDetail.css'
import Counter from "../Counter/Counter"

const ItemDetail = ({ name, img, description, price }) => {

    const handleOnAdd = (quantity) => {
        console.log(`La cantidad agregada es: ${quantity}`)
      }

    return (
        <div className='containerProdDetail'>
            <h2 className="nameProdDetail">{name}</h2>
            <img className="itemImgProdDetail" src={img} alt={name}/>
            <p>{description}</p>
            <p className='priceDetail'>${price}</p>
            {
                quantityToAdd === 0 ? (
                    <Counter stock={15} onAdd={handleOnAdd}/>
                ):(
                    <Link to='/cart'>Finalizar compra</Link>
                )
            }
        </div>
    )
}

export default ItemDetail