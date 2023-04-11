import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemList from "../itemList/ItemList";
import './itemListContainer.css';

const ItemListContainer = ({greeting})=> {

  const [products, setProducts] = useState([]);

  const { categoryId } = useParams()

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts
  
    asyncFunc(categoryId)
      .then((res) => {
        setProducts(res);
      })
      .catch(error => {
        console.error(error)
      })
  }, [categoryId])


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