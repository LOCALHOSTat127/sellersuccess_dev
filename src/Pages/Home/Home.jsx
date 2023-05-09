import React from "react";
import Hero from "../../Components/Hero/Hero";
import ServiceSection from "../../Components/OnPageServiceSection/ServiceSection";
import Getwebsite from "../../Components/GetWebsite/Getwebsite";
import MarketingSection from "../../Components/MarketingSection/MarketingSection";
import FooterContact from "../../Components/FooterContact/FooterContact";
import Reviews from "../../Components/Reviews/Reviews";

const Home = () => {
  return (
    <div className="sellersuccess_home_page">
      <Hero />
      <ServiceSection />
      <Getwebsite />
      <MarketingSection />
      <Reviews />
      <FooterContact />
    </div>
  );
};

export default Home;
