import './App.css'
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  
  return (
    <div>
      <h1>Item Count</h1>
      <ItemCount initial={1} stock={10} />
    </div>
  )
}

export default App
