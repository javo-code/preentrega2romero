import jeringa from '../../img/descartable-jeringa.jpg';
import sets from '../../img/descartable-sets.jpg';
import contenedor from '../../img/descartable-contenedor.jpg';
import fisio from '../../img/descartable-fisio.jpg';
import gasa from '../../img/descartable-gasa.jpg';
import heparina from '../../img/descartable-heparina.jpg';
import ContadorCard from '../countCards/ItemCount';
import '../countCards/btnCard.css';
import '../itemListContainer/itemListContainer.css';

function CatalogoDescartables() {

  return (

<div id='descartables' className='contenedor-principal'>

  <div className='titulo-seccion'>
    <h2>ARTICULOS DESCARTABLES</h2>
  </div>
      
    <div className='contenedor-cards'>
      <div className="card">
        <div className='card-img'>
          <img 
          src={jeringa} 
          alt="" />
          </div>
          
        <div className='card-desc'>
          <h4 className='pord-name' >Jeringas</h4>
          <p className='pord-price' >Precio: $ 9.000,00</p>
          <p className='pord-desc' >Descripcion: Pote x 1000 grs.</p>
          <ContadorCard />
        </div>
          
      </div>

      <div className="card">
        <div className='card-img'>
          <img 
          src={sets} 
          alt="" />
        </div>

        <div className='card-desc'>
          <h4 className='pord-name' >Sets</h4>
          <p className='pord-price' >Precio: $ 5.000,00</p>
          <p className='pord-desc' >Descripcion: Pote x 1000 grs.</p>
        <ContadorCard />
        </div>
      

      </div>

      <div className="card">
        <div className='card-img'>
          <img
            src={contenedor}
            alt="" />
        </div>

        <div className='card-desc'>
          <h4 className='pord-name' >Contenedor</h4>
          <p className='pord-price' >Precio: $ 7.000,00</p>
          <p className='pord-desc' >Descripcion: Pote x 6.500 grs.</p>
          <ContadorCard />
        </div>

      </div>

      <div className="card">
        <div className='card-img'>
          <img 
          src={fisio} 
          alt="" />
        </div>

        <div className='card-desc'>
          <h4 className='pord-name' >Sol. Fisiologica</h4>
          <p className='pord-price' >Precio: $ 10.000,00</p>
          <p className='pord-desc' >Descripcion: Pote x 1000 grs.</p>
          <ContadorCard />
        </div>

      </div>

      <div className="card">
        <div className='card-img'>
          <img 
          src={gasa} 
          alt="" />
        </div>

        <div className='card-desc'>
          <h4 className='pord-name' >Gasa No Tejida</h4>
          <p className='pord-price' >Precio: $ 9.500,00</p>
          <p className='pord-desc' >Descripcion: Pote x 1000 grs.</p>
          <ContadorCard />
        </div>

      </div>

      <div className="card">
        <div className='card-img'>
          <img 
          src={heparina} 
          alt="" />
        </div>

        <div className='card-desc'>
          <h4 className='pord-name' >Heparina Sodica</h4>
          <p className='pord-price' >Precio: $ 9.500,00</p>
          <p className='pord-desc' >Descripcion: Pote x 800 grs.</p>
          <ContadorCard />
        </div>

      </div>

      </div>
    </div> 
      )
}

export default CatalogoDescartables;