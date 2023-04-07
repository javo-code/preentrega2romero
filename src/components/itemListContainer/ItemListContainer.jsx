import "./itemListContainer.css";
import Nutricion from "../productos/Nutricion";
import Bombas from "../productos/Bombas";
import Descartables from "../productos/Descartables";

function ItemListContainer({ greeting }) {
  return (
    <div>
      <div className="contenedor-cards">
        <h1 className="titulo bounce-in-bck">{greeting}</h1>
        <Nutricion />
        <Bombas />
        <Descartables />
      </div>
    </div>
  );
}

export default ItemListContainer;
