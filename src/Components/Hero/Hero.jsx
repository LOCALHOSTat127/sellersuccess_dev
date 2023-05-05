import "./style.css";
import Navbar from "../Navbar/Navbar";
import { ReactComponent as ManThinkingSvg } from "../../assets/svg/man_thinkgin_illustration.svg";
import { ReactComponent as LeftObjectSvg } from "../../assets/svg/left_object.svg";
import { ReactComponent as RightObjectSvg } from "../../assets/svg/right_object.svg";
import { ReactComponent as GrowSmSvg } from "../../assets/svg/grow_sm_svg.svg";
import GrowGif from "../../assets/png/grow.gif";
import GrowSmStatic from "../../assets/png/grow_sm.png";

const Hero = () => {
  return (
    <section className="hero_section_sellersuccess">
      <div className="hero_content_pitch">
        <div className="heilighter">
          <div className="heilighter__circle__outer">
            <div className="heilighter__circle__inner"></div>
          </div>
          <p className="heilighter__text">Creative Agency</p>
        </div>

        {/* Text_contant */}
        <div className="text_content">
          <h1 className="txt_one">we help you</h1>
          <div className="secondary__txt">
            <h1 className="txt_two">
              <span>Growing</span> your <br />
            </h1>
            <h1 className="txt_three">business</h1>
          </div>
        </div>

        {/* CTA_buttons */}
        <div className="secondary_content">
          <p className="hero_desc">
            Let’s make a Perfect plat that your business really needs of.
          </p>
          <div className="cta_jacket">
            <button className="contact_redirect cta_btn">
              Let's Grow
              <img src={GrowSmStatic} className="btn_svg" />
            </button>
            <button className="scrool_services cta_btn">
              Keep Exploring
            </button>
          </div>
        </div>
      </div>

      <ManThinkingSvg className="hero__image" />
      <LeftObjectSvg className="left_obj" />
      <RightObjectSvg className="right_obj" />
    </section>
  );
};

export default Hero;