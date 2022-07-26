import { contactSectionTwo } from "@/data/contactSection";
import React, { useState } from "react";
import emailjs from '@emailjs/browser';

import { Col, Row } from "react-bootstrap";
import { mainFooter } from "@/data/mainFooter";
import Link from "next/link";
const { title, text, socials } = contactSectionTwo;

const ContactSectionTwo = () => {
  const [ui, setUi] = useState(true);
  const {
   
    socials,
   
  } = mainFooter;
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, name) => (data[name] = value));

    emailjs.sendForm('Bugs-Bee-Notify', 'template_rtiz4in', e.target, 'Wqm5S27Jqbr4T_Fkz')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
e.target.reset()
setUi(false)
    console.log(data);
  };

  return (<>
    {ui && <section className="contact-section contact-two">
      <div className="auto-container">
        <Row>
          <Col lg={4}>
            <div className="contact-two__content">
              <div className="sec-title">
                <h2>
                  {title} <span className="dot">.</span>
                </h2>
              </div>
              <p className="contact-two__text">{text}</p>
              
              <div className="contact-two__social">
            
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <div className="form-box">
              <div className="default-form">
                <form onSubmit={handleSubmit} id="contact-form">
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
    </section>} 
      {!ui && <section className="error-section">
      <div className="auto-container">
        <div className="content">
          
          <h2>YOUR MESSAGE HAS BEEN SENT</h2>
          
        
          <div className="link-box">
            <Link href="/">
              <a className="theme-btn btn-style-one">
                <i className="btn-curve"></i>
                <span className="btn-title">Back to home</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>}
    
    </>);
};

export default ContactSectionTwo;
