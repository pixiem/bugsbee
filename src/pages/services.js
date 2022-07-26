import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import ServicesSectionThree from "@/components/ServicesSection/ServicesSectionThree";
import WeWorkSection from "@/components/WeWorkSection/WeWorkSection";
import React from "react";

const services = () => {
  return (
    <Layout pageTitle="Services">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Services" />
      <ServicesSectionThree className="padd-top" />
      <CallToSectionTwo className="alternate" />
      <WeWorkSection />
      <MainFooter />
    </Layout>
  );
};

export default services;
