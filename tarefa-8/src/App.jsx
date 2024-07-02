import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Sobre from './pages/Sobre'
import Produtos from './pages/Produtos'
import Contato from './pages/Contato'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <h1>Tarefa 8</h1>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/sobre' element={<Sobre/>}/>
          <Route path='/produtos' element={<Produtos/>}/>
          <Route path='/contato' element={<Contato/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
