import "./itemDetail.css";
import ItemCount from "../itemCount/ItemCount";

const ItemDetail = ({ name, img, category, description, price, stock }) => {
  
  return (
    <article className="CardDetailContainer">

      <section className="secc1">
        <headeer className="HeaderDetail">
        <h2 className="ItemDetailHeader">
          {name}
        </h2>
      </headeer>
      <picture>
        <img src={img} alt={name} className="ItemDetailImg" />
      </picture>
      </section>
      <section className="secc2">
        <p className="InfoCategoryDetail">
          <b>Categoria:</b> {category}
        </p>
        <p className="InfoDescriptionDetail">
          <b>Descripción:</b> {description}
        </p>
        <p className="InfoPriceDetail">
          <b>Precio: </b>${price}
        </p>
      <footer className="ItemDetailFooter">
        <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log(quantity)} />
      </footer>
      </section>
    </article>
  );
};

export default ItemDetail;
