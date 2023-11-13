import AboutSection from "@/components/AboutSection/AboutSection";
import AboutSeven from "@/components/AboutSection/AboutSeven";
import HomePromotion from "@/components/Academy/home-promotion";
import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import PartnerOne from "@/components/PartnerSection/PartnerOne";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import promoImgTwo from "../assets/images/2.png";
import Head from "next/head";
import React from "react";
import HomeThreeFeature from "@/components/features/home-three-feature";
import AboutFact from "@/components/facts/about-fact";
import AboutPromotion from "@/components/promotions/about-promotion";
import UnderConstruction from "./under-construction";
import HomeNewsletter from "@/components/newsletter/home-newsletter";

const academy = () => {
  return (<>
    <Head>
    <title>School Management System | Bugs Bee</title>
    <meta name="description" content="Explore the comprehensive range of services offered by our digital agency. From web design and development to digital marketing, SEO, and more - we have the expertise to help your business thrive online." />
    <meta property="og:title" content="School Management System | Bugs Bee" />
    <meta property="og:description" content="Explore the comprehensive range of services offered by our digital agency. From web design and development to digital marketing, SEO, and more - we have the expertise to help your business thrive online." />
    <meta property="og:url" content="https://www.bugsbeeit.com/academy" />
 
  </Head>
    <div style={{ width:"100%" }}>
    <Layout pageTitle="Academy">
   
   <HeaderOne />
   <MobileMenu />
   <SearchPopup />
   <PageBanner title="School Management" />
   <HomePromotion promo_space="pt-120 pb-60" promoImg={promoImgTwo} />
   <HomeThreeFeature wave={true} />
   {/* <HomeNewsletter/> */}
   {/* <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/> */}
   {/* <AboutPromotion /> */}
   {/* <AboutFact /> */}
   <MainFooter />
 </Layout>
    </div>
    </>);
};

export default academy;
