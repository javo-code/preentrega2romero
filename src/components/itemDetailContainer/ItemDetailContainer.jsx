import './itemDetailContainer.css';
import { useEffect, useState } from "react";
import { getProductsById } from '../../asyncMock'
import ItemDetail from '../itemDetail/ItemDetail'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  
  const [product, setProduct] = useState(null); 

  const { itemId } = useParams()
  
  useEffect(() => {
  

    getProductsById(itemId)
      .then(res => {
        setProduct(res);
      })
      .catch(error => {
        console.error(error)
      })
  }, [itemId])


  return (
    <div className='ItemDetailContainer'>
      <ItemDetail {...product} />
    </div>
  )
};


export default ItemDetailContainer; 