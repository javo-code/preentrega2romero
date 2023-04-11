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
      </section>
      <footer className="ItemFooter">
        <link to={`/ìtem/${id}`} className="Option"></link>
      </footer>
    </article>
  );
};

export default Item;
