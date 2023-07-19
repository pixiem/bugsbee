import { servicesSectionThree } from "@/data/servicesSection";
import useActive from "@/hooks/useActive";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import { Link } from "react-scroll";
const { title, services, servicess, servicesss } = servicesSectionThree;

const ServicesSectionThree = ({ className = "" }) => {
  const ref = useActive("#services");

  return (
    <section
      ref={ref}
      className={`services-section-three ${className}`}
      id="services"
    >
      <div className="auto-container">
        <div className="sec-title centered">
          <h2>
            {title} <span className="dot">.</span>
          </h2>
        </div>

        {/* <div className="sec-title  text-left">
          <h3>
            Development 
          </h3>
        </div>
        <div className="services">
          <Row className="clearfix">
            {services.map((service) => (
              <SingleService service={service} key={service.id} />
            ))}
          </Row>
        </div>
        <div className="sec-title  text-left">
          <h3>
            Designing 
          </h3>
        </div>
        <div className="services">
          <Row className="clearfix">
            {servicess.map((service) => (
              <SingleService service={service} key={service.id} />
            ))}
          </Row>
        </div>
        <div className="sec-title  text-left">
          <h3>
            Digital Marketing 
          </h3>
        </div>
        <div className="services">
          <Row className="clearfix">
            {servicesss.map((service) => (
              <SingleService service={service} key={service.id} />
            ))}
          </Row>
        </div> */}
        <section style={{padding:"15px",  borderRadius:"15px"}} className="portfolio-details-info">
          <div className="auto-container">

            <Row className="flex-md-row-reverse">
              <Col md={6}>
                <div  className="portfolio-details-info__image">
                  <Image 
                    src={"https://png.pngtree.com/element_our/png_detail/20181215/illustration-for-business-solutions-start-up-seo-optimization-modern-vector-png_271782.jpg"}
                    alt=""
                  />
                </div>
                <div style={{paddingTop:"0px !important"}} className="link-box">
          
          </div>
                
              </Col>
              <Col md={6} className="d-flex">
                <div className="my-auto">
                  <div style={{marginBottom:"10px"}} className="portfolio-details-info__content">
                    <h3 style={{color:"#222429"}} className="portfolio-details-info__title">Web Solution</h3>
                    <p style={{color:"#222429"}} className="portfolio-details-info__text">A web solutions provider for an agencys website services page should include several key features to ensure the page is effective and user-friendly. One of the most important features is a Content Management System (CMS), which allows the agency to easily create, manage, and publish content on the website. This can be particularly important for an agency website services page, which may need to be updated frequently to reflect changes in the services offered.</p>

                    <div className="demo-features__wrapper">
                      <div  style={{margin:"8px"}} className="demo-features__box">
                        <Image
                          src={require(`@/images/demo-icons/icon-1-1.jpg`).default.src}
                          alt=""
                          width={121}
                          height={121}
                        />
                        <h4>
                          <TextSplit text="GOD" />
                        </h4>
                      </div>
                      <div  style={{margin:"8px"}} className="demo-features__box">
                        <Image
                          src={require(`@/images/demo-icons/icon-1-1.jpg`).default.src}
                          alt=""
                          width={121}
                          height={121}
                        />
                        <h4>
                          <TextSplit text="GOD" />
                        </h4>
                      </div>
                      <div  style={{margin:"8px"}} className="demo-features__box">
                        <Image
                          src={require(`@/images/demo-icons/icon-1-1.jpg`).default.src}
                          alt=""
                          width={121}
                          height={121}
                        />
                        <h4>
                          <TextSplit text="GOD" />
                        </h4>
                      </div>
                      <div  style={{margin:"8px"}} className="demo-features__box">
                        <Image
                          src={require(`@/images/demo-icons/icon-1-1.jpg`).default.src}
                          alt=""
                          width={121}
                          height={121}
                        />
                        <h4>
                          <TextSplit text="GOD" />
                        </h4>
                      </div>
                      <div  style={{margin:"8px"}} className="demo-features__box">
                        <Image
                          src={require(`@/images/demo-icons/icon-1-1.jpg`).default.src}
                          alt=""
                          width={121}
                          height={121}
                        />
                        <h4>
                          <TextSplit text="GOD" />
                        </h4>
                      </div>
                      <div  style={{margin:"8px"}} className="demo-features__box">
                        <Image
                          src={require(`@/images/demo-icons/icon-1-1.jpg`).default.src}
                          alt=""
                          width={121}
                          height={121}
                        />
                        <h4>
                          <TextSplit text="GOD" />
                        </h4>
                      </div>
                    </div>    
                       
                    </div>
                    <br />
                    <Link href="/contact">
              <a  className="theme-btn btn-style-two">
                <i className="btn-curve"></i>
                <span style={{fontSize:"30px !important"}} className="btn-title">Talk to our experts</span>
              </a>
            </Link>
                </div>
              </Col>
            </Row>

          </div>
        </section>
      </div>
    </section>
  );
};

export default ServicesSectionThree;
