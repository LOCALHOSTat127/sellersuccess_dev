import { useState } from "react";
import "./style.css";
import { ReactComponent as AccountingSideSvg } from "../../assets/svg/accounting_side_svg.svg";
import { ReactComponent as AccountingSvg } from "../../assets/svg/accounting_svg.svg";

import { ReactComponent as CodeSvg } from "../../assets/svg/code_svg.svg";
import { ReactComponent as CodeSideSvg } from "../../assets/svg/code_side_svg.svg";


import { ReactComponent as MarketingSvg } from "../../assets/svg/marketing_svg.svg";
import { ReactComponent as MarketingSideSvg } from "../../assets/svg/marketing_side_svg.svg";


const ServiceSection = () => {
  return (
    <section className="serivces__on_page">
      <div className="section_title_outer">
        <div className="heilighter"></div>
        <p className="section_title">Explore Our Services</p>
      </div>

      <div className="service_outer_div">
        <div className="_controlls_panel">
          <div className="cntrl_wrapper ">
            <div className="cntrl">
              <AccountingSvg className="cntrl_svg" />
            </div>
            <dv className="line_heilighter"></dv>
          </div>

          <div className="cntrl_wrapper active">
            <div className="cntrl">
              <CodeSvg className="cntrl_svg" />
            </div>
            <dv className="line_heilighter"></dv>
          </div>

          <div className="cntrl_wrapper ">
            <div className="cntrl">
              <MarketingSvg className="cntrl_svg" />
            </div>
          </div>
        </div>
        <div className="service_display_outer">
          <div className="service_title_outer">
            <h2>Business Accounting & Tax auditing Service</h2>
          </div>
          <div className="inside_package_outer">
            <p>INSIDE PACKAGE</p>
            <ul className="package_perks">
              <li>
                <div className="heilighter"></div>
                Daily book Keeping.
              </li>
              <li>
                <div className="heilighter"></div>
                Weakly Reports
              </li>
              <li>
                <div className="heilighter"></div>
                GST returns : 3B,2A,2B, 9A
              </li>
              <li>
                <div className="heilighter"></div>
                Income Tax Report Filing.
              </li>
              <li>
                <div className="heilighter"></div>
                TDS, TCS, AIS, TIC Reports.
              </li>
              <li>
                <div className="heilighter"></div>& Other compliances.
              </li>
              <li>
                <div className="heilighter"></div>Monthely Data Backup.
              </li>
            </ul>
          </div>
          <div className="offer_outer">
            <div className="offer_head">
              <h3 className="offer_title">1 MONTH FREE</h3>
              <h4 className="offer_sub_title">Tally Accounting for you</h4>
            </div>
            <p className="offer_desc">
              Still couldn’t make your mind? Then this complete one month free
              business accounting might offer might change your mind.
            </p>
          </div>
          <div className="service_cta">
            <p>Want to try this Service?</p>
            <p className="sm">
              Fill up the form out team member will contact you.
            </p>
          </div>
          <div className="side_bar_outer">
            <div className="desc_outer">
              <p className="service_desctiption">
                It’s not a Easy road When it comes to Accounting & Tax Reports
                Filling. But, no worry we have got your back, Providing you the
                Complete Accounting & Auditing Service.
              </p>
              <AccountingSideSvg className="side_svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
