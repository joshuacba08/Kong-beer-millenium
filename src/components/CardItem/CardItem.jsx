import ItemCount from '../ItemCount/ItemCount';
import './CardItem.css'

const CardItem = ({ product, onAdd }) => {

  return (
    <article className='card'>
        <img className='card__image' src={product.thumbnail} alt="" />
        <div className='card__info'>
            <h3>{ product.name }</h3>
            <p>${product.price}</p>
        </div>

        <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
    </article>
  )
}

export default CardItem;