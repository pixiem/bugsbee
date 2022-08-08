import { servicesSectionOne } from "@/data/servicesSection";
import React from "react";
import { Col, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import SingleServiceOne from "./SingleServiceOne";

const { title, text, services,advance } = servicesSectionOne;

const ServicesSectionOne = () => {
  return (
    <section className="services-section">
      <div className="auto-container">
        <Row className="clearfix justify-content-center">
          <Col xl={12} lg={12} md={12} sm={12} className="title-block">
            <div className="inner ">
              <div className="sec-title">
                <h2 className="text-center">
                  <TextSplit text={title} />
                  <span className="dot">.</span>
                </h2>
                <div className="lower-text text-center">{text}</div>
              </div>
            </div>
          </Col>
      
          {services.map((service) => (
            <SingleServiceOne key={service.id} service={service} />
          ))}
         <hr style={{backgroundColor:"#ffaa17",height:"5px",borderRadius:"20px"}}  />
          <Col xl={12} lg={12} md={12} sm={12} className="title-block my-5">
            <div className="inner ">
              <div className="sec-title">
                <h2 className="text-center">
                  <TextSplit text="Some of the advanced features we provide" />
                  <span className="dot">.</span>
                </h2>
           
              </div>
            </div>
          </Col>
          {advance.map((service) => (
            <SingleServiceOne key={service.id} service={service} />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default ServicesSectionOne;
