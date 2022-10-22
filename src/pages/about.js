import AgencySection from "@/components/AgencySection/AgencySection";
import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import DiscoverSection from "@/components/DiscoverSection/DiscoverSection";
import FeatureSix from "@/components/FeaturesSection/FeatureSix";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import ParallaxSection from "@/components/ParallaxSection/ParallaxSection";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import VideoOne from "@/components/VideoSection/VideoOne";
import React from "react";

const About = () => {
  return (
    <Layout pageTitle="About Us">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="About" />
   
      <VideoOne />
      {/* <TeamSectionTwo /> */}
      <DiscoverSection ShowTitle={false} />
      <FeatureSix />
      
      
      <CallToSectionTwo className="alternate" />
     
      <ParallaxSection />
      <AgencySection />
   
    
      <MainFooter />
    </Layout>
  );
};

export default About;
