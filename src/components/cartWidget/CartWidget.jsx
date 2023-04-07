import CarritoIco from './carrito-blanco.png'
import Contador from './Contador';
import './estilosCarrito.css';

function CartWidget() {

return (
  <div className='contendor-icono-carrito' >
    <button className='boton-carrito'>
      <img
        className='icono-carrito'
        src={CarritoIco}
        alt='icono carrito'
      />
      <div className='contador-carrito'>5
      </div>
    </button>
  </div>
)
}

export default CartWidget;