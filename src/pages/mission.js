import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import FeatureSeven from "@/components/FeaturesSection/FeatureSeven";
import FeatureSix from "@/components/FeaturesSection/FeatureSix";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SponsorsSection from "@/components/SponsorsSection/SponsorsSection";
import VideoOne from "@/components/VideoSection/VideoOne";
import React from "react";

const Mission = () => {
  return (
    <Layout pageTitle="Our Mission">
     
    
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Our Mission" page="Mission" />
      
      <FeatureSix />
      <FeatureSeven />
      <SponsorsSection />
      <CallToSectionTwo className="alternate" />
      <MainFooter />
    </Layout>
  );
};

export default Mission;
