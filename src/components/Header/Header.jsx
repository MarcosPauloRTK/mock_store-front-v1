import "./Header.css";
import { Button } from "../";
import Logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { FiShoppingCart, FiUser, FiList } from "react-icons/fi";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/">
        <img src={Logo} alt="Organizações Tabajara" title="Organizações Tabajara" />
      </Link>
      <ul>
        <li>
          <NavLink className="NavLink" to="/">
            <p className="AnimatedUnderline">Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink className="NavLink" to="/products/">
            <p className="AnimatedUnderline">Products</p>
          </NavLink>
        </li>
        <li>
          <NavLink className="NavLink" to="/contacts">
            <p className="AnimatedUnderline">Contacts</p>
          </NavLink>
        </li>
      </ul>
      <Button className="HeaderButton">
        <FiShoppingCart className="Icon"/>
      </Button>
      <Button className="HeaderButton">
        <FiUser className="Icon"/>
      </Button>
      <Button className="HeaderButton">
        <FiList className="Icon" />
      </Button>
    </header>
  );
};

export default Header;
