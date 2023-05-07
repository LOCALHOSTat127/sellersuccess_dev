import React from "react";
import Hero from "../../Components/Hero/Hero";
import ServiceSection from "../../Components/OnPageServiceSection/ServiceSection";
import Getwebsite from "../../Components/GetWebsite/Getwebsite";
import MarketingSection from "../../Components/MarketingSection/MarketingSection";
import FooterContact from "../../Components/FooterContact/FooterContact";

const Home = () => {
  return (
    <div className="sellersuccess_home_page">
      <Hero />
      <ServiceSection />
      <Getwebsite />
      <MarketingSection />
      <FooterContact />
    </div>
  );
};

export default Home;
