import { DigitalMarketing,graphicinfo } from "@/data/partnerSection";
// import {graphicinfo} from "@data/graphicinfo"
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const PartnerOne = () => {
  return (
    <section className="partner-one">
      <div className="sec-title centered">
          <h2>
          Digital Marketing <span className="dot">.</span>
          </h2>
        </div>
      <div  className="auto-container">
        <Row style={{justifyContent:"center"}}>
          {DigitalMarketing.map(({ id, image, title, text }) => (
            <Col key={id} xs={6} md={6} lg={3}>
              <div className="partner-one__card">
                <div className="partner-one__image">
                  <Image
                    src={
                      require(`@/images/update-01-10-2021/sponsor/${image}`)
                        .default.src
                    }
                    alt=""
                  />
                </div>
                <div className="partner-one__content">
                  <h3 className="partner-one__title">{title}</h3>
                  <p className="partner-one__text">{text}</p>
                  <a href="#" className="partner-one__link">
                    Read More
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div className="sec-title centered">
          <h2>
          Graphic Design <span className="dot">.</span>
          </h2>
        </div>
      <div  className="auto-container">
        <Row style={{justifyContent:"center"}}>
          {graphicinfo.map(({ id, image, title, text }) => (
            <Col key={id} xs={6} md={6} lg={3}>
              <div className="partner-one__card">
                <div className="partner-one__image">
                  <Image
                    src={
                      require(`@/images/update-01-10-2021/sponsor/${image}`)
                        .default.src
                    }
                    alt=""
                  />
                </div>
                <div className="partner-one__content">
                  <h3 className="partner-one__title">{title}</h3>
                  <p className="partner-one__text">{text}</p>
                  <a href="#" className="partner-one__link">
                    Read More
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default PartnerOne;
