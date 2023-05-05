import "./style.css";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
const Navbar = () => {
  return (
    <header className="app_navbar">
      <div className="logo">
        <Logo className="app_logo" />
      </div>
      <nav className="navigation">
        <ul>
          <li>About us</li>
          <li>Services</li>
          <li>Documents</li>
        </ul>
        <button className="tools_page_redirect">Try out tools</button>
      </nav>
    </header>
  );
};

export default Navbar;
