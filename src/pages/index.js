import AboutSectionTwo from "@/components/AboutSection/AboutSectionTwo";
import BannerThree from "@/components/BannerSection/BannerThree";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import DiscoverSection from "@/components/DiscoverSection/DiscoverSection";
import FeaturesSectionTwo from "@/components/FeaturesSection/FeaturesSectionTwo";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import ServicesSectionOne from "@/components/ServicesSection/ServicesSectionOne";
import WeWorkSection from "@/components/WeWorkSection/WeWorkSection";
import React from "react";
import{ Analytics } from '@vercel/analytics/react';
const Home = () => {
  return (<>
  <Analytics/>
 
    <Layout pageTitle="">
    <Style />
    <HeaderOne headerStyle="header-style-two" logo={4} />
    <MobileMenu />
    <SearchPopup />
    <BannerThree />
    <CallToSectionTwo btnClassName="btn-style-one" />
    <DiscoverSection />
    
    <ServicesSectionOne />
    <WeWorkSection />
    <FeaturesSectionTwo />
    
<br/>

<br/>
    <AboutSectionTwo />
    

  
 
    <MainFooter />
  </Layout>
   </>);
};

export default Home;
