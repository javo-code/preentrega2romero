import nutrilon from '../../img/nutrilon.jpg';
import ensure from '../../img/ensure.jpg';
import lactoproteyn from '../../img/lactoproteyn.jpg';
import alfare from '../../img/alfare.jpg';
import fresubin from '../../img/fresubin.jpg';
import alterna from '../../img/alterna.jpg';
import ContadorCard from '../countCards/ItemCount';
import '../countCards/btnCard.css';
import '../itemListContainer/itemListContainer.css';

function ItemListContainer() {

  return (

    <div id='nutricion' className='contenedor-principal'>

      <div className='titulo-seccion'>
        <h2>ALIMENTACION ENTERAL</h2>
      </div>
      
      <div className='contenedor-cards'>
        <div className="card">
          <div className='card-img'>
            <img 
            src={nutrilon} 
            alt="Nutrilon" />
      </div>

        <div className='card-desc'>
          <h4 className='pord-name' >Nutrilon</h4>
          <p className='pord-price' >Precio: $ 9.000,00</p>
          <p className='pord-desc' >Descripcion: Pote x 1000 grs.</p>
          <ContadorCard initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
        </div>
          
      </div>

      <div className="card">
        <div className='card-img'>
          <img 
          src={ensure} 
          alt="" />
        </div>
          
        <div className='card-desc'>
          <h4 className='pord-name' >Ensure</h4>
          <p className='pord-price' >Precio: $ 5.000,00</p>
          <p className='pord-desc' >Descripcion: Pote x 1000 grs.</p>
        <ContadorCard />
        </div>
          
      
        
      </div>

      <div className="card">
        <div className='card-img'>
          <img
            src={lactoproteyn}
            alt="" />
        </div>
          
        <div className='card-desc'>
          <h4 className='pord-name' >Lactoproteyn</h4>
          <p className='pord-price' >Precio: $ 7.000,00</p>
          <p className='pord-desc' >Descripcion: Pote x 6.500 grs.</p>
        <ContadorCard />
        </div>
          
      
        
      </div>

      <div className="card">
        <div className='card-img'>
          <img 
          src={alfare} 
          alt="" />
        </div>
          
        <div className='card-desc'>
          <h4 className='pord-name' >Alfare</h4>
          <p className='pord-price' >Precio: $ 10.000,00</p>
          <p className='pord-desc' >Descripcion: Pote x 1000 grs.</p>
        <ContadorCard />
        </div>
          
      
        
      </div>

      <div className="card">
        <div className='card-img'>
          <img 
          src={fresubin} 
          alt="" />
        </div>
          
        <div className='card-desc'>
          <h4 className='pord-name' >Fresubin</h4>
          <p className='pord-price' >Precio: $ 9.500,00</p>
          <p className='pord-desc' >Descripcion: Pote x 1000 grs.</p>
        <ContadorCard />
        </div>
          
      
        
      </div>

      <div className="card">
        <div className='card-img'>
          <img 
          src={alterna} 
          alt="" />
        </div>
          
        <div className='card-desc'>
          <h4 className='pord-name' >Alterna</h4>
          <p className='pord-price' >Precio: $ 9.500,00</p>
          <p className='pord-desc' >Descripcion: Pote x 800 grs.</p>
        <ContadorCard />
        </div>
                    
      </div>
    </div>

  </div> 
      )
}

export default ItemListContainer;