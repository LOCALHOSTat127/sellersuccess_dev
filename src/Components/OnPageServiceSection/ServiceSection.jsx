import { useState } from "react";
import "./style.css";
import { ReactComponent as AccountingSideSvg } from "../../assets/svg/accounting_side_svg.svg";
import { ReactComponent as AccountingSvg } from "../../assets/svg/accounting_svg.svg";

import { ReactComponent as CodeSvg } from "../../assets/svg/code_svg.svg";
import { ReactComponent as CodeSideSvg } from "../../assets/svg/code_side_svg.svg";

import { ReactComponent as MarketingSvg } from "../../assets/svg/marketing_svg.svg";
import { ReactComponent as MarketingSideSvg } from "../../assets/svg/marketing_side_svg.svg";

const ServiceSection = () => {
  const [isActive, setActive] = useState(1);

  const SERVICES_DATA = [
    {
      service_title: "Business Accounting & auditing ",
      inside_package: [
        "Daily book Keeping.",
        "Weakly Reports",
        "GST returns : 3B,2A,2B, 9A",
        "Income Tax Report Filing.",
        "& Other compliances.",
        "Monthely Data Backup.",
      ],

      offer_title: "1 MONTH FREE",
      offer_sub_title: "Tally Accounting for you",
      offer_desc:
        " Still couldn’t make your mind? Then this complete one month free \
      business accounting might offer might change your mind",

      sidebar_desc:
        "It’s not a Easy road When it comes to Accounting & Tax Reports \
      Filling. But, no worry we have got your back, Providing you the \
      Complete Accounting & Auditing Service.",
    },
    {
      service_title: "Website Development",
      inside_package: [
        "Mobile Responsive Design",
        "SEO Ready Code.",
        "6 Months Maintenance",
        "Morden Custom Design.",
        "& Other compliances.",
        "Latest Tech used Reactjs,NextJs,Node, & more",
      ],

      offer_title: "FREE HOSTING",
      offer_sub_title: "& Domain for one year",
      offer_desc:
        "Already have Domain & Hosting? Don’t worry we wont charge extra for that.",

      sidebar_desc:
        "if you are running a business in 2023 & still don’t have your own website. then your are missing out your potential customers. So make your Digital presence Today.",
    },
    {
      service_title: "Social Media Marketing",
      inside_package: [
        "Facebook Ad Campaign.",
        "Instagram Advertisement.",
        "Targeted Google Ads",
        "attractive Ads Design.",
        "Audience & Keywords Research.",
      ],

      offer_title: "15% OFF on",
      offer_sub_title: "Social Media Marketing",
      offer_desc:
        "Let the Customers know, your exist by getting their attention on Social media Advertisement.",

      sidebar_desc:
        "Have a business? but not the customers well than your should consider our Complete Digital Marketing & Social Media Management package JUST BUILT FOR YOUR BUSINESS.",
    },
  ];

  const switchService = (e) => {
    if (e) {
      let id = e.target.dataset.id;

      let list =
        document.getElementsByClassName("_controlls_panel")[0].childNodes;

      for (let i = 0; i < 3; i++) {
        if (list[i].childNodes[0].dataset.id == id) {
          list[i].classList.add("active");
          setActive(i);
        } else {
          list[i].classList.remove("active");
        }
      }
    }
  };

  return (
    <section id="services" className="serivces__on_page">
      <div className="section_title_outer">
        <div className="heilighter"></div>
        <p className="section_title">Explore Our Services</p>
      </div>

      <div className="service_outer_div">
        <div className="_controlls_panel">
          <div className="cntrl_wrapper ">
            <div
              onClick={switchService}
              data-id="1"
              className="overlay_click"
            ></div>
            <div className="cntrl">
              <AccountingSvg className="cntrl_svg" />
            </div>
            <div className="line_heilighter"></div>
          </div>

          <div className="cntrl_wrapper active">
            <div
              onClick={switchService}
              data-id="2"
              className="overlay_click"
            ></div>
            <div className="cntrl">
              <CodeSvg className="cntrl_svg" />
            </div>
            <div className="line_heilighter"></div>
          </div>

          <div className="cntrl_wrapper">
            <div
              onClick={switchService}
              data-id="3"
              className="overlay_click"
            ></div>
            <div className="cntrl">
              <MarketingSvg className="cntrl_svg" />
            </div>
          </div>
        </div>
        <div className="service_display_outer">
          <div className="service_title_outer">
            <h2>{SERVICES_DATA[isActive]?.service_title}</h2>
          </div>
          <div className="inside_package_outer">
            <p>INSIDE PACKAGE</p>
            <ul className="package_perks">
              {SERVICES_DATA[isActive]?.inside_package.map((perk, index) => {
                return (
                  <li key={index}>
                    <div className="heilighter"></div>
                    {perk}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="offer_outer">
            <div className="offer_head">
              <h3 className="offer_title">
                {SERVICES_DATA[isActive]?.offer_title}
              </h3>
              <h4 className="offer_sub_title">
                {SERVICES_DATA[isActive]?.offer_sub_title}
              </h4>
            </div>
            <p className="offer_desc">{SERVICES_DATA[isActive]?.offer_desc}</p>
          </div>
          <a
          style={{
            textDecoration : "none"
          }}
            className="wa_btn"
            href={isActive === 0 ? 
            "https://api.whatsapp.com/send?phone=7852099185&text=I%20Need%20Accounting%20And%20Auditing%20Services" 
              : isActive === 2 ? 
              "https://api.whatsapp.com/send?phone=7852099185&text=I%20Need%20to%20Advertise%20My%20Business%20on%20Social%20Media" :
               "https://api.whatsapp.com/send?phone=7852099185&text=I%20Want%20A%20Website%20For%20My%20Business"
          }
            target="_blank"
            rel="noreferrer"
          >
            <div className="service_cta">
              <p>Want to try this Service?</p>
              <p className="sm">
                Fill up the form our team member will contact you.
              </p>
            </div>
          </a>
          <div className="side_bar_outer">
            <div className="desc_outer">
              <p className="service_desctiption">
                {SERVICES_DATA[isActive]?.sidebar_desc}
              </p>

              {isActive === 0 ? (
                <AccountingSideSvg
                  style={{
                    transform: "rotate(357deg)",
                  }}
                  className="side_svg"
                />
              ) : isActive === 1 ? (
                <CodeSideSvg className="side_svg" />
              ) : (
                <MarketingSideSvg className="side_svg" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
