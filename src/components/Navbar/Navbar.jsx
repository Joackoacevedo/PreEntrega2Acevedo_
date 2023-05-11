import './Navbar.scss'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import Buscador from '../../ejemplos/Buscador'

export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                <img className='logo' src={'./public/Logo.PNG'} alt="LOGO" />

                <nav className="navbar">
                    <Link to='/' className="navbar__link">Inicio</Link>
                    <Link to='/productos/Hombre' className="navbar__link">Hombre</Link>
                    <Link to='/productos/Mujer' className="navbar__link">Mujer</Link>
                    <Link to='/productos/Niños' className="navbar__link">Niños</Link>
                </nav>
                <CartWidget />
            </div>

            <Buscador />
        </header>
    )
}