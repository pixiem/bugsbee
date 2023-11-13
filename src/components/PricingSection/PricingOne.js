import { pricingOne } from "@/data/pricingSection";
import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const { allFeatures, pricing } = pricingOne;

const PricingOne = () => {
  return (
    <section className="pricing-one">

<div className="sec-title centered">
            <h2>
              <TextSplit text="Our Pricing" />
            </h2>
          </div>

      <div className="auto-container">
        <Row>
          <Col sm={12} md={12} lg={4}>
            <div className="pricing-card">
              <p className="pricing-card__name">Basic</p>
              <h3 className="pricing-card__amount">BDT 6000</h3>
              <div className="pricing-card__bottom">
                <ul className="list-unstyled pricing-card__list">
                  <li>
                    <i className="flaticon-check"></i> Attractive Banner 
                    
                  </li>
                  <li>
                    <i className="flaticon-check"></i> Your Offers 
                  </li>
                  <li>
                    <i className="flaticon-check"></i> Your Academy Experience 
                  </li>
                  <li>
                    <i className="flaticon-check"></i> Class Routine
                  </li>
                  <li>
                    <i className="flaticon-check"></i> Academy Photo Album
                  </li>
                  <li>
                    <i className="flaticon-check"></i> Location On Map
                  </li>
                  <li>
                    <i className="flaticon-check"></i> What Gardian Say About Your Academy
                  </li>
                  <li>
                    <i className="flaticon-check"></i> Why Your School Best?
                  </li>
                  <li>
                    <i className="flaticon-check"></i> FAQ
                  </li>
                  <li>
                    <i className="flaticon-check"></i> Footer Including Your Academy Identity
                  </li>
                </ul>
                <Link href="/contact">
                  <a className="theme-btn btn-style-one">
                    <i className="btn-curve"></i>
                    <span className="btn-title">Choose a plan</span>
                  </a>
                </Link>
              </div>
            </div>
          </Col>
          <Col sm={12} md={12} lg={4}>
            <div className="pricing-card">
              <p className="pricing-card__name">Premium</p>
              <h3 className="pricing-card__amount">BDT 12000</h3>
              <div className="pricing-card__bottom">
                <ul className="list-unstyled pricing-card__list">
                  <li>
                    <i className="flaticon-check"></i> Including All Basic Plan Features
                  </li>
                  <li>
                    <i className="flaticon-check"></i> Details About Your Programs
                  </li>
                  <li>
                    <i className="flaticon-check"></i> Online Admission System
                  </li>
                  <li>
                    <i className="flaticon-check"></i> Full Access Admin Control Panel
                  </li>
                  <li>
                    <i className="flaticon-check"></i> Sell Full Set Library Package
                  </li>
                  <li>
                    <i className="flaticon-check"></i> Cinematic Video Of Your Academy
                  </li>
                 
                </ul>
                <Link href="/contact">
                  <a className="theme-btn btn-style-one">
                    <i className="btn-curve"></i>
                    <span className="btn-title">Choose a plan</span>
                  </a>
                </Link>
              </div>
            </div>
          </Col>
          <Col sm={12} md={12} lg={4}>
            <div className="pricing-card">
              <p className="pricing-card__name">Customised</p>
              <h3 className="pricing-card__amount">Negotiable</h3>
              <div className="pricing-card__bottom">
                <ul className="list-unstyled pricing-card__list">
                  <li>
                    <i className="flaticon-check"></i> Including All Basic + Premium Plan Features
                  </li>
                  <li>
                    <i className="flaticon-check"></i> Drone Video Promotion For Your Academy
                  </li>
                  <li>
                    <i className="flaticon-check"></i> Get Social Media Appearance
                  </li>
                  <li>
                    <i className="flaticon-check"></i> E-Commerce Functionality For Library
                  </li>
                  <li>
                    <i className="flaticon-check"></i> Sell Academic Picnic Ticket Plan Online
                  </li>
                  <li>
                    <i className="flaticon-check"></i> Publish Blog Or News Portal For Your Website Audience
                  </li>
                 
                 
                </ul>
                <Link href="/contact">
                  <a className="theme-btn btn-style-one">
                    <i className="btn-curve"></i>
                    <span className="btn-title">Choose a plan</span>
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

export default PricingOne;
