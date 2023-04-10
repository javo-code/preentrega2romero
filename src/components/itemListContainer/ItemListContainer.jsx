import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import ItemList from "./ItemList";
import './itemListContainer.css';

const ItemListContainer = ({greeting})=> {

  const [products, setProducts] = useState([]);

  useEffect(() => {
  
    getProducts()
      .then((res) => {
        setProducts(res);
      })
      .catch(error => {
        console.error(error)
      })
  }, [])


  return (
    <>
    <div>
      <h1 className='titulo bounce-in-bck'>{greeting}</h1>
    </div>
    <div className="itemList-container">
      <ItemList products={products} />
    </div>
      </>
  )
};


export default ItemListContainer;