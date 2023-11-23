import './App.css'
import { productList } from './assets/products';
import ItemList from './components/ItemList/ItemList';

function App() {
  
  return (
    <div>
      <ItemList products={productList}/>
    </div>
  )
}

export default App
