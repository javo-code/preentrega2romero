import { Link } from 'react-router-dom';
import "./item.css";

const Item = ({ id, name, img, price, stock }) => {
  
  return (
    <article className="card-container">
      <headeer className="Header">
        <h2 className="ItemHeader">
          {name}
        </h2>
      </headeer>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info-price">
          Precio: ${price}
        </p>
        <p className="Info-stock">
          Stock Disponible: {stock}
        </p>
      </section>
      <footer className="ItemFooter">
        <button>
            <Link to={`/item/${id}`} className="Option">Ver Detalle</Link>
        </button>
      </footer>
        
    </article>
  );
};

export default Item;