import Button from './components/Button/Button'
import './App.css'

function App() {
  
  return (
    <div>
      <h1>Hello World</h1>
      <p>This is a paragraph</p>
      <Button title={'Cliqueame!'} variant={'primary'}/>
      <Button title={'Close'} variant={'secondary'} />
      <Button title={'Delete'} variant={'secondary'}/>
      <Button title={'Refresh'} variant={'primary'}/>
    </div>
  )
}

export default App
