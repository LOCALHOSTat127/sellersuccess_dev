import "./style.css";
import { ReactComponent as WhoVeAreSvg } from "../../assets/svg/whoweare.svg";
import { ReactComponent as WhatWeDo } from "../../assets/svg/whatwedo.svg";

const About = () => {
  return (
    <section className="about_us">
      <div className="inner">
        <div className="who_we_are">
          <div className="text">
            <h1>Who we are?</h1>
            <p>
              Seller Success is one of the leading Business Accounting & Digital
              Marketing Company.We are Bound to provide quality services to our
              customers at very affordable price.
            </p>
            <p>
              Started as startup in 2020 is now became the first choice of many
              business owner’s when comes to Website Development,Business
              Accounting & Marketing services.
            </p>
          </div>
          <div className="img">
            <WhoVeAreSvg className="sec_svg" />
          </div>
        </div>

        <div className="what_we_do">
          <div className="img">
            <WhatWeDo className="sec_svg" />
          </div>
          <div className="text">
            <h1>What we do?</h1>
            <p>
              We offer serval services to our customers that makes their
              business grow.Many of which Tally Accounting, Business Website
              development & Social Media Marketing are our primary services we
              provide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
