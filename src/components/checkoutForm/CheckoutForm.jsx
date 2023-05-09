import { useState } from "react";
import { Link } from 'react-router-dom';

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };
    onConfirm(userData);
  };
  return (
    <div className="Container">
      <form onSubmit={handleConfirm} className="Form">
        <label htmlFor="name" className="Label">
          <input
            className="Input"
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label htmlFor="phone" className="Label">
          <input
            className="Input"
            type="text"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </label>
        <label htmlFor="email" className="Label">
          <input
            className="Input"
            type="text"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <div className="label">
          <button type="submit" className="Button">
            <Link
              to="/cartModal"
              className="btn btn-info btn-block btn-kepBuying"
            >
              Crear Orden
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
