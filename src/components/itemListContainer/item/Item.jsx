import ItemCounter from "./ItemCounter";
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
        <p className="Info">
          Precio: ${price}
        </p>
        <p className="Info">
          Stock Disponible: {stock}
        </p>
        <ItemCounter initial={0} stock={10} onAdd={(quantity) => console.log(quantity)} />
      </section>
      
    </article>
  );
};

export default Item;
