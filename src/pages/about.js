import AgencySection from "@/components/AgencySection/AgencySection";
import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import DiscoverSection from "@/components/DiscoverSection/DiscoverSection";
import FeatureSeven from "@/components/FeaturesSection/FeatureSeven";
import FeatureSix from "@/components/FeaturesSection/FeatureSix";
import FunFacts from "@/components/FunFacts/FunFacts";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import ParallaxSection from "@/components/ParallaxSection/ParallaxSection";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SponsorsSectionTwo from "@/components/SponsorsSection/SponsorsSectionTwo";
import TeamSectionTwo from "@/components/TeamSection/TeamSectionTwo";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
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
