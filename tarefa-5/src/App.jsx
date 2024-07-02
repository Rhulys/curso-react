import { useState } from 'react'
import CarDetails from './CarDetails'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='titulo_cars'>Lista de carros</h1>
      < CarDetails/>
    </>
  )
}

export default App
