import './ItemList.css';
import CardItem from '../CardItem/CardItem';
// ItemList recibe por props un array de productos y renderiza un Item por cada producto

const ItemList = ({products}) => {


    return(
        <div className='list-container'>
            
            {
                products.map( (prod)=> <CardItem key={prod.id} product={prod} onAdd={()=>{alert('clic en onAdd')}} />  )
            }
        
        </div>
    )
}

export default ItemList;