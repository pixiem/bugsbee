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
import ContactSectionTwo from "@/components/ContactSection/ContactSectionTwo";
import { Col, Row } from "react-bootstrap";
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
   
    <div className="auto-container">
    <div className="sec-title centered">
          <h2 style={{fontSize:"5.5rem !important ", color:"#EF6D45"}}>
            Let's Talk
            <span className="dot">.</span>
          </h2>
          <hr style={{border:"3px solid #EF6D45",opacity:"100", height:"7px", color:"#EF6D45"}} />
        </div>
        <Row>
          <Col lg={4}>
            <div className="contact-two__content">
              <div className="sec-title">
                <h2>
                Transform your business with our digital solutions today! <span className="dot">.</span>
                </h2>
              </div>
              {/* <p className="contact-two__text">adswd</p> */}
              
              <div className="contact-two__social">
            
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <div className="form-box">
              <div className="default-form">
                <form  id="contact-form">
                  <Row className="clearfix">
                    <Col lg={6} md={6} sm={12} className="form-group">
                      <div className="field-inner">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="form-group">
                      <div className="field-inner">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                    </Col>
                    <Col lg={12} md={12} sm={12} className="form-group">
                      <div className="field-inner">
                        <textarea
                          name="message"
                          placeholder="Write Message"
                          required
                        ></textarea>
                      </div>
                    </Col>
                    <Col lg={12} md={12} sm={12} className="form-group">
                      <button className="theme-btn btn-style-one">
                        <i className="btn-curve"></i>
                        <span className="btn-title">Send message</span>
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    

  
 
    <MainFooter />
  </Layout>
   </>);
};

export default Home;
