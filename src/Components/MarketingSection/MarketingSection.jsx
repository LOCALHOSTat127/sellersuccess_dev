import "./style.css";

import { ReactComponent as MarketingBanner } from "../../assets/svg/marketing_banner.svg";
import { ReactComponent as Arrow } from "../../assets/svg/rightarrow.svg";

const MarketingSection = () => {
  return (
    <section className="marketig_section">
      <div className="inner">
        <div className="inner_right">
          <h2 className="title">Social Media Marketing</h2>

          <p className="desc">
            Digital Marketing is the best way to advertise your business in
            2023. Because it’s much more flexible the traditions Print media it
            gives you the ability to Run Targeted ad within City, Country or
            even among the Age group & User interest.
          </p>
          <ul className="list">
            <li>
              <div className="dot"></div>
              <p>Facebook Ads</p>
            </li>
            <li>
              <div className="dot"></div>
              <p>Instagram</p>
            </li>
            <li>
              <div className="dot"></div>
              <p>Google Ads</p>
            </li>
            <li>
              <div className="dot"></div>
              <p>& More</p>
            </li>
          </ul>

         
        </div>

        <div className="inner_left">
          <MarketingBanner className="banner_svg" />
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;
