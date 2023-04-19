import PageBanner from "@/components/BannerSection/PageBanner";
import ContactInfoTwo from "@/components/ContactSection/ContactInfoTwo";
import ContactSectionTwo from "@/components/ContactSection/ContactSectionTwo";
import ErrorSection from "@/components/ErrorSection/ErrorSection";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import Head from "next/head";

import React from "react";



const Contact2 = () => {

  return (<>
    <Head>
        <title>Contact Us | Your Digital Agency</title>
        <meta name="description" content="Get in touch with our digital agency for all your online needs. Contact us for web design, development, digital marketing, and more." />
        <meta property="og:title" content="Contact Us | Your Digital Agency" />
        <meta property="og:description" content="Get in touch with our digital agency for all your online needs. Contact us for web design, development, digital marketing, and more." />
        <meta property="og:url" content="https://www.bugsbee-it.com/contact" />
      </Head>
    <Layout pageTitle="Contact">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Contact" />
      <ContactSectionTwo />
      <ContactInfoTwo />
     
    
      
    <MainFooter />
    </Layout>
    </>);
};

export default Contact2;
