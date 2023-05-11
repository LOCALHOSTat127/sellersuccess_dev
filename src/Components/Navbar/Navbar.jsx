import { useState, useEffect } from "react";
import "./style.css";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OpenMenuSvg } from "../../assets/svg/open_menu_svg.svg";

import { ReactComponent as CloseMenuSvg } from "../../assets/svg/closemenu.svg";
import { ReactComponent as Bulb } from "../../assets/svg/bulb.svg";
import { ReactComponent as Services } from "../../assets/svg/services.svg";
import { ReactComponent as Documents } from "../../assets/svg/docs.svg";
import { ReactComponent as WaSvg } from "../../assets/svg/wa.svg";
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

  const relocate = (e) => {
    setMenuOpen(false);
    if (e.target.dataset.url[0] === '#' || e.target.dataset.url[1] === '#') {
    
      if(location.pathname === '/'){
        document.location.hash = "services";
        document.location.pathname =  "/";
      }else{
        NAVIGATE("/");
      }
      return;
    } else {
      NAVIGATE(e.target.dataset.url, {
        replace: true,
      });
      window.scroll(0, 0);
    }

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
            <li onClick={relocate} data-url="/about">
              About us{" "}
            </li>
            {/* <a
              style={{
                textDecoration: "none",
              }}
              href={location.pathname === "/" ? "#services" : "/"}
            > */}
              <li onClick={relocate} data-isHashLink="yes" data-url="#services" >Services</li>
            {/* </a> */}
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
            <li onClick={relocate} data-url="/about">
              <Bulb className="sm_svg" data-url="/about" />
              About us
            </li>

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

          <a
            className="wa_btn"
            href="https://api.whatsapp.com/send?phone=7852099185&text=Hello%20to%20SellerSuccess"
            target="_blank"
            rel="noreferrer"
          >
            <button className="call" id="call">
              Contact Team
              <WaSvg className="call_svg" />
            </button>
          </a>
        </div>
        <div className={`overlay ${isMenuOpen && "overlay_open"}`}></div>
      </div>
    </header>
  );
};

export default Navbar;
