import React from "react";
import "./style.css";

import { useNavigate } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { ReactComponent as CallSvg } from "../../assets/svg/call_svg.svg";
import { ReactComponent as MailSvg } from "../../assets/svg/mail_svg.svg";
import { ReactComponent as LocationSvg } from "../../assets/svg/location_svg.svg";

import { ReactComponent as FbSvg } from "../../assets/svg/fb_svg.svg";
import { ReactComponent as InstaSvg } from "../../assets/svg/insta_svg.svg";
import { ReactComponent as TwitterSvg } from "../../assets/svg/twitter_svg.svg";

import { ReactComponent as CaptchaSvg } from "../../assets/svg/captcha_svg.svg";

const Footer = () => {
  const NAVIGATE = useNavigate();
  const relocate = (e) => {
    NAVIGATE(e.target.dataset.url, {
      replace: true,
    });
    window.scroll(0, 0);
  };

  return (
    <footer className="app_footer">
      <div className="footer_inside">
        <div className="section_one">
          <Logo className="app_logo" />
          <div className="contact_details">
            <ul>
              <li>
                <CallSvg className="sm_svg" />
                <p className="phone_number">9649460626</p>
              </li>
              <li>
                <MailSvg className="sm_svg" />
                <p className="email_address">
                  sellersuccess.business@gmail.com
                </p>
              </li>
              <li>
                <LocationSvg className="sm_svg" />
                <p className="address">
                  95, Mohan nagar, Brhampuri <br /> Jaipur, Rajasthan(302002){" "}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="section_two">
          <p className="sec_title">Follow us on</p>
          <ul>
            <li>
              <FbSvg className="sm_svg" />
              <a
                target="blank"
                href="https://www.facebook.com/sellersuccess.in/"
              >
                <p className="facebok_username">@sellersuccess.in</p>
              </a>
            </li>
            <li>
              <InstaSvg className="sm_svg" />
              <a
                target="blank"
                href="https://www.instagram.com/sellersuccess.india/"
              >
                <p className="instagram_username">@sellersuccess.india</p>
              </a>
            </li>
            <li>
              <TwitterSvg className="sm_svg" />

              <a target="blank" href="https://twitter.com/sellersuccessIN">
                <p className="twitter_username">@sellersuccessIN</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="section_three">
          <CaptchaSvg className="sm_svg" />

          <ul className="secondary_nav">
            <li onClick={relocate} data-url="/terms-conditions">
              Terms & conditions
            </li>
            <li onClick={relocate} data-url="/privacy-policy">
              Privacy Policy
            </li>
            <li onClick={relocate} data-url="/cookie-policy">
              Cookies Policy
            </li>
          </ul>

          <p className="copyright">© all rights reserved 2020 - 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
