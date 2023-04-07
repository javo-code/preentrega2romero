import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from  './components/navBar/NavBar'
import Footer from './components/footer/Footer'
//import Slider from '../components/Slider'

function App() {
  return (
    <div className='app'>
      <NavBar />
      <ItemListContainer greeting={'BIENVENID@S !'} />
      <Footer/>
    </div>
  );
}

export default App;