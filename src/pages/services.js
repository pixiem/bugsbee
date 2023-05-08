import AboutSection from "@/components/AboutSection/AboutSection";
import AboutSeven from "@/components/AboutSection/AboutSeven";
import Appsolutionsection from "@/components/AboutSection/Appsolutionsection";
import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import PartnerOne from "@/components/PartnerSection/PartnerOne";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import ServicesSectionThree from "@/components/ServicesSection/ServicesSectionThree";
import WeWorkSection from "@/components/WeWorkSection/WeWorkSection";
import Head from "next/head";
import React from "react";

const services = () => {
  return (<>
    <Head>
    <title>Our Services | Bugs Bee</title>
    <meta name="description" content="Explore the comprehensive range of services offered by our digital agency. From web design and development to digital marketing, SEO, and more - we have the expertise to help your business thrive online." />
    <meta property="og:title" content="Our Services | Your Digital Agency" />
    <meta property="og:description" content="Explore the comprehensive range of services offered by our digital agency. From web design and development to digital marketing, SEO, and more - we have the expertise to help your business thrive online." />
    {/* <meta property="og:image" content="/images/services-page-thumbnail.jpg" /> */}
    <meta property="og:url" content="https://www.bugsbee-it.com/services" />
    {/* <meta name="twitter:title" content="Our Services | Your Digital Agency" /> */}
    {/* <meta name="twitter:description" content="Explore the comprehensive range of services offered by our digital agency. From web design and development to digital marketing, SEO, and more - we have the expertise to help your business thrive online." /> */}
    {/* <meta name="twitter:image" content="/images/services-page-thumbnail.jpg" /> */}
    {/* <meta name="twitter:card" content="summary_large_image" /> */}
  </Head>
    <Layout pageTitle="Services">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Services" />
      {/* <ServicesSectionThree className="padd-top" /> */}
      <AboutSection />
      <AboutSeven />
      <Appsolutionsection/>
      <PartnerOne />
      {/* <AboutSection /> */}
      <CallToSectionTwo className="alternate" />
      <WeWorkSection />
      <MainFooter />
    </Layout>
    </>);
};

export default services;
