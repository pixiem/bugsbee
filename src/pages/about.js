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
import TeamSectionTwo from "@/components/TeamSection/TeamSectionTwo";
import VideoOne from "@/components/VideoSection/VideoOne";
import Head from "next/head";
import React from "react";

const About = () => {
  return (<>
     <Head>
        <title>About Us | Bugs Bee</title>
        <meta name="description" content="Learn more about our digital agency and how we can help you achieve your online goals. Discover our expertise in web design, development, digital marketing, and more." />
        <meta property="og:title" content="About Us | Bugs Bee" />
        <meta property="og:description" content="Learn more about our digital agency and how we can help you achieve your online goals. Discover our expertise in web design, development, digital marketing, and more." />
        {/* <meta property="og:image" content="/images/about-us-thumbnail.jpg" /> */}
        <meta property="og:url" content="https://www.bugsbee-it.com/about" />
        {/* <meta name="twitter:title" content="About Us | Your Digital Agency" /> */}
        {/* <meta name="twitter:description" content="Learn more about our digital agency and how we can help you achieve your online goals. Discover our expertise in web design, development, digital marketing, and more." /> */}
        {/* <meta name="twitter:image" content="/images/about-us-thumbnail.jpg" /> */}
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>
    <Layout pageTitle="About Us">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="About" />
      <VideoOne />
      <TeamSectionTwo />
      {/* <DiscoverSection ShowTitle={this} /> */}
      <FeatureSix />
      <CallToSectionTwo className="alternate" />
      <ParallaxSection />
      <AgencySection />
   
    
      <MainFooter />
    </Layout>
    </>);
};

export default About;
