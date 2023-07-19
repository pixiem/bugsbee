import { aboutSectionOne } from "@/data/aboutSection";
import useActive from "@/hooks/useActive";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const { image1, image2, title, text1, text2, textList, since } =
  aboutSectionOne;

const AboutSection = () => {
  const ref = useActive("#about");

  return (
    <section ref={ref} className="about-section" id="about">
      <div className="auto-container">
        <Row className="clearfix">
          <Col xl={6} lg={12} md={12} sm={12} className="image-column">
            <div className="inner">
              <div className="image-block animated fadeInLeft">
                <Image src={image1.src} alt="" />
              </div>
              <div className="image-block animated fadeInUp">
                <Image src={image2.src} alt="" />
              </div>
            </div>
          </Col>
          <Col xl={6} lg={12} md={12} sm={12} className="text-column">
            <div className="inner">
              <div className="sec-title">
                <h2>
                  <TextSplit text="WEB SOLUTION" />
                  <span className="dot">.</span>
                </h2>
                <div className="lower-text">Transform your web presence with our comprehensive WEB SOLUTION services. Our experienced team delivers customized solutions that meet your unique business needs.</div>
              </div>
              <div className="text">
                <p>We build web applications that are tailored to your specific business needs, using the latest technologies and frameworks.We create websites that are optimized for all devices and screen sizes, providing a seamless user experience for your customers.We can help you set up an online store that is optimized for sales and conversions, with features like easy-to-use shopping carts and secure payment gateways.</p>
              </div>
              <div className="text clearfix">
                <ul>
                  {textList.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>
                {/* <div className="since">
                  <span className="txt">
                    Since <br />
                    {since}
                  </span>
                </div> */}
              </div>
              <div className="link-box">
                <Link href="/web-development">
                  <a className="theme-btn btn-style-one">
                    <i className="btn-curve"></i>
                    <span className="btn-title">Discover More</span>
                  </a>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutSection;
