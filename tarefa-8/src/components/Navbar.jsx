import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/sobre">Sobre</NavLink>
        <NavLink to="/produtos">Produtos</NavLink>
        <NavLink to="/contato">Contato</NavLink>
    </nav>
  )
}

export default Navbar