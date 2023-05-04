import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./cartItem.css";

const CartItem = ({ id, img, name, price, quantity, subtotal }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemove = () => {
    removeItem(id);
  };

  return (
    <main>
      <div className="container">
        <div className="row mt-3">
          <div className="col">
            <h2 className="d-flex justify-content-center mb-3">
              Realizar Compra
            </h2>
            <form id="procesar-pago" method="POST">
              <div className="form-group row">
                <label
                  for="cliente"
                  className="col-12 col-md-2 col-form-label h2"
                >
                  Cliente :
                </label>
                <div className="col-12 col-md-10">
                  <input
                    type="text"
                    className="form-control"
                    id="cliente"
                    placeholder="Ingresa nombre cliente"
                    name="persona"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  for="email"
                  className="col-12 col-md-2 col-form-label h2"
                >
                  Correo :
                </label>
                <div className="col-12 col-md-10">
                  <input
                    type="text"
                    id="correo email.id"
                    className="form-control"
                    name="email.id"
                  />
                </div>
              </div>

              <div id="carrito" className="form-group table-responsive">
                <table className="table" id="lista-compra">
                  <thead>
                    <tr>
                      <th scope="col">Imagen</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Precio</th>
                      <th scope="col">Cantidad</th>
                      <th scope="col">Sub Total</th>
                    </tr>
                  </thead>

                  <tbody>
                    <td scope="col">{img}</td>
                    <td scope="col">{name}</td>
                    <td scope="col">{price}</td>
                    <td scope="col">{price * quantity}</td>
                    <td scope="col">{quantity}</td>
                    <td scope="col">{subtotal}</td>
                    <button
                      className="btn btn-danger botonEliminar"
                      onClick={handleRemove}
                    >
                      X
                    </button>
                  </tbody>
                  <tr>
                    <th colspan="4" scope="col" className="text-right">
                      TOTAL
                      <p id="totalProceso"></p>
                    </th>
                  </tr>
                </table>
              </div>

              <div className="row justify-content-center d-none" id="spinner">
                <div className="spinner">
                  <div className="dot1"></div>
                  <div className="dot2"></div>
                </div>
              </div>

              <div className="row justify-content-between">
                <div className="col-md-4 mb-2">
                  <Link to="/" className="btn btn-info btn-block btn-kepBuying">
                    Seguir comprando
                  </Link>
                </div>
                <div className="col-xs-12 col-md-4">
                  <input
                    type="submit"
                    className="btn btn-success btn-block end-purchase"
                    id="button"
                    value="Finalizar compra"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartItem;
