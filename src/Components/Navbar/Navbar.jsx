import { useState, useEffect } from "react";
import "./style.css";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const NAVIGATE = useNavigate();
  const [isScrooling, setScrolling] = useState(false);

  const watchScrool = (e) => {
    if (window.scrollY > 10) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const redirect_to_home = () => {
    NAVIGATE("/", {
      replace: true,
    });
    window.scroll(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", watchScrool);
  }, []);


  useEffect(() =>{
    watchScrool();
  },[]);

  return (
    <header className={`app_navbar ${isScrooling && "scrollOverlay"}`}>
      <div onClick={redirect_to_home} className="logo">
        <Logo className="app_logo" />
      </div>
      <nav className="navigation">
        <ul>
          <Link to="/about">
            <li>About us</li>
          </Link>
          <Link to="/services">
            <li>Services</li>
          </Link>
          <li>Documents</li>
        </ul>
        <button className="tools_page_redirect">Try out tools</button>
      </nav>
    </header>
  );
};

export default Navbar;
