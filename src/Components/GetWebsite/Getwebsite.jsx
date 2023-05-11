import "./style.css";

import GetWebsite from "../../assets/png/get_website_png.png";
import { ReactComponent as Arrow } from "../../assets/svg/rightarrow.svg";

const Getwebsite = () => {
  return (
    <section className="inplace_Ad">
      <div className="inner">
        <div className="inner_left">
          <div className="ad_title">
            <h2 className="heading_one">need a website?</h2>
            <h2 className="heading_two">For your business</h2>
          </div>
          <div className="ad_desc">
            <p className="desc_one desc">
              Do you have a business & want to make sale online? then what
              better way then doing that on your own website. and we get it you
              don't want to get into the trouble of developing a website on your
              own.
            </p>
            <p className="desc_two desc">
              Than here is your chance to Get a Full stack Custom coded Website.
              Mobile Responsive design & SEO ready Code.
            </p>
          </div>
          <a
            style={{
              textDecoration: "none",
            }}
            className="wa_btn"
            href="https://api.whatsapp.com/send?phone=7852099185&text=I%20Want%20A%20Website%20For%20My%20Business"
            target="_blank"
            rel="noreferrer"
          >
            <button className="website_cta">
              Get Quotations
              <Arrow className="sm_svg" />
            </button>
          </a>
        </div>
        <div className="inner_right">
          <img
            className="bg_img"
            src={GetWebsite}
            alt="get a website for your business"
          />
        </div>
      </div>
    </section>
  );
};

export default Getwebsite;
