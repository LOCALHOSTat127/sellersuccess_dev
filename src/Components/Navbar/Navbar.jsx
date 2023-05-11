import { useState, useEffect } from "react";
import "./style.css";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { ReactComponent as OpenMenuSvg } from "../../assets/svg/open_menu_svg.svg";

import { ReactComponent as CloseMenuSvg } from "../../assets/svg/closemenu.svg";
import { ReactComponent as Bulb } from "../../assets/svg/bulb.svg";
import { ReactComponent as Services } from "../../assets/svg/services.svg";
import { ReactComponent as Documents } from "../../assets/svg/docs.svg";
import { ReactComponent as CallSvg } from "../../assets/svg/call.svg";
const Navbar = () => {
  const location = useLocation();
  const NAVIGATE = useNavigate();
  const [isScrooling, setScrolling] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    watchScrool();
  }, []);

  return (
    <header className="navbar">
      <div className={`app_bar ${isScrooling && "scrollOverlay"}`}>
        <div onClick={redirect_to_home} className="logo">
          <Logo className="app_logo" />
        </div>

        <nav className="navigation">
          <ul>
            <Link to="about">
              <li>About us</li>
            </Link>
            <a
              style={{
                textDecoration: "none",
              }}
              href={location.pathname === "/" ? "#services" : "/"}
            >
              <li>Services</li>
            </a>
            <li>Documents</li>
          </ul>
          <a
            className="nav_contact_btn"
            style={{
              textDecoration: "none",
            }}
            href="#contact"
          >
            <button className="tools_page_redirect">Contact Us</button>
          </a>
          <OpenMenuSvg
            onClick={(e) => {
              setMenuOpen(true);
            }}
            className="open_menu_svg"
          />
        </nav>

        <div className={`mobile_menu ${isMenuOpen && "menu_open"}`}>
          <CloseMenuSvg
            onClick={(e) => {
              setMenuOpen(false);
            }}
            className="close_menu_svg"
          />

          <ul>
            <Link to="about">
              <li>
                <Bulb className="sm_svg" />
                About us
              </li>
            </Link>

            <a
              style={{
                textDecoration: "none",
              }}
              href={location.pathname === "/" ? "#services" : "/"}
            >
              <li>
                <Services className="sm_svg" />
                Services
              </li>
            </a>
            <li>
              <Documents className="sm_svg" />
              Documents
            </li>
          </ul>

          <div className="spacing"></div>

          <a href="tel:+9649460626">
            <button className="call" id="call">
              Contact Team
              <CallSvg className="call_svg" />
            </button>
          </a>
        </div>
        <div className={`overlay ${isMenuOpen && "overlay_open"}`}></div>
      </div>
    </header>
  );
};

export default Navbar;
