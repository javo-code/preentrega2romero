import Item from "./item/Item";

const ItemList = ( {products} ) => {
  return (
    <div className="ListGorup">
      {products.map(prod => <Item key={prod.id}{...prod}/>)}
    </div>
  )
};

export default ItemList;
