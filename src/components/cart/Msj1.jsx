import { Link } from 'react-router-dom'

const Msj1 = () => {
    return (<div className="EmptyCartSms">
        <h1>No hay productos en tu carrito...!</h1>
        <Link to="/" className="Button">Ir a comprar</Link>
      </div>)
}

export default Msj1;