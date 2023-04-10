import logo from './logo.png';
import './navBar.css'
import '../cartWidget/Contador'
import CartWidget from '../cartWidget/CartWidget'
import Contador from '../cartWidget/Contador';

function NavBar() {
  return (
    <nav className='navBar'>

      <div className='contenedor-logo' >
<a href="../../../public/index.html">        <img
          className='logo'
          src={logo}
          alt='logo nueva medicina'
        /></a>
      </div>

      <div className='contenedor-navBar' >
        <ul class='menu'>
          <li><a href='#nutricion'>NUTRICION</a></li>
          <li><a href='#bombas'>BOMBAS DE INFUSION</a></li>
          <li><a href='#descartables'>DESCARTABLES</a></li>
        </ul>
        
      </div>
      <CartWidget />
      <Contador />
    </nav>
  )
} 

export default NavBar;

