import "./itemListContainer.css";
import { useEffect, useState } from "react";
import { getProductsByCategory, getProducts } from '../../asyncMock'
import ItemList from "../itemList/ItemList";
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams()

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts

    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <>
      <div>
        <h1 className="titulo bounce-in-bck">{greeting}</h1>
      </div>
      <div className="ItemListContainer">
        <ItemList products={products} />
      </div>
    </>
  );
};

export default ItemListContainer;