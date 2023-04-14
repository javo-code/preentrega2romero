import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navBar/NavBar'
import Footer from './components/footer/Footer'
 
function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <NavBar /> 
        <Routes>
          <Route path='/' element={ <ItemListContainer greeting={'BIENVENID@S!'}/>} />
          <Route path='/category/:categoryId' element={ <ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Routes>
      </BrowserRouter>
      <Footer /> 
    </div>
  );
}

export default App;

