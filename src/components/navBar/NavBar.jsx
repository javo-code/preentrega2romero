import logo from "./logo.png";
import "./navBar.css";
import "../cartWidget/Contador";
import CartWidget from "../cartWidget/CartWidget";
import Contador from "../cartWidget/Contador";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navBar">
      <Link to="/">
        <div className="contenedor-logo">
          <a href="../../../public/index.html">
            <img src={logo} alt="logo" className="logo" />
          </a>
        </div>
      </Link>

      <div className="contenedor-navBar categories">
        <NavLink
          to={`/category/nutrition`}
          className={({ isActive }) => (isActive ? "ActiveOpcion" : "Option")}
        >
          NUTRICION
        </NavLink>
        <NavLink
          to={`/category/bombs`}
          className={({ isActive }) => (isActive ? "ActiveOpcion" : "Option")}
        >
          BOMBAS
        </NavLink>
        <NavLink
          to={`/category/disposables`}
          className={({ isActive }) => (isActive ? "ActiveOpcion" : "Option")}
        >
          DESCARTABLES
        </NavLink>

        {/*   <ul class='menu'>
          <li><a href='#nutricion'>NUTRICION</a></li>
          <li><a href='#bombas'>BOMBAS DE INFUSION</a></li>
          <li><a href='#descartables'>DESCARTABLES</a></li>
        </ul> */}
      </div>
      <CartWidget />
      <Contador />
    </nav>
  );
};

export default NavBar;
