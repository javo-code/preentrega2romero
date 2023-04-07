import angel from '../../img/bomba-angel.jpg';
import asena from '../../img/bomba-asena.jpg';
import comen from '../../img/bomba-comen.jpg';
import epump from '../../img/bomba-epump.jpg';
import ningbo from '../../img/bomba-ningbo.jpg';
import samtronic from '../../img/bomba-samtronic.jpg';
import ContadorCard from '../countCards/ItemCount';
import '../countCards/btnCard.css';
import '../itemListContainer/itemListContainer.css';

function CatalogoBombas() {

return (

  <div id='bombas' className='contenedor-principal'>
      
    <div className='titulo-seccion'>
      <h2>BOMBAS DE INFUSION</h2>
    </div>
      
    <div className='contenedor-cards'>
      <div className="card">
        <div className='card-img'>
          <img 
          src={angel} 
          alt="" />
        </div>
        
        <div className='card-desc'>
          <h4 className='pord-name' >Angel</h4>
          <p className='pord-price' >Precio: $ 300.000,00</p>
          <p className='pord-desc' >Descripcion: Pote x 1000 grs.</p>
          <ContadorCard />
        </div>

      </div>

      <div className="card">

        <div className='card-img'>
          <img 
          src={asena} 
          alt="" />
        </div>
        
        <div className='card-desc'>
          <h4 className='pord-name' >Asena</h4>
          <p className='pord-price' >Precio: $ 480.000,00</p>
          <p className='pord-desc' >Descripcion: Pote x 1000 grs.</p>
          <ContadorCard />
        </div>

      </div>

      <div className="card">

        <div className='card-img'>
          <img
            src={comen}
            alt="" />
        </div>
        
        <div className='card-desc'>
          <h4 className='pord-name' >Comen</h4>
          <p className='pord-price' >Precio: $ 500.000,00</p>
          <p className='pord-desc' >Descripcion: Pote x 6.500 grs.</p>
          <ContadorCard />
        </div>
    
      </div>

      <div className="card">

        <div className='card-img'>
          <img 
          src={epump} 
          alt="" />
        </div>
        
        <div className='card-desc'>
          <h4 className='pord-name' >Epump</h4>
          <p className='pord-price' >Precio: $ 420.000,00</p>
          <p className='pord-desc' >Descripcion: Pote x 1000 grs.</p>
          <ContadorCard />
        </div>

      </div>

      <div className="card">

        <div className='card-img'>
          <img 
          src={ningbo} 
          alt="" />
        </div>
        
        <div className='card-desc'>
          <h4 className='pord-name' >Ningbo</h4>
          <p className='pord-price' >Precio: $ 220.000,00</p>
          <p className='pord-desc' >Descripcion: Pote x 1000 grs.</p>
        <ContadorCard />
        </div>

      </div>

      <div className="card">

        <div className='card-img'>
          <img 
          src={samtronic} 
          alt="" />
        </div>
        
        <div className='card-desc'>
          <h4 className='pord-name' >Samtronic</h4>
          <p className='pord-price' >Precio: $ 350.500,00</p>
          <p className='pord-desc' >Descripcion: Pote x 800 grs.</p>
          <ContadorCard />
        </div>

      </div>

    </div>
  </div> 
  
      )
}

export default CatalogoBombas;