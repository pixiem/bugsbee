import { mainFooter } from "@/data/mainFooter";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import emailjs from '@emailjs/browser';
const {
  year,
  author,
  logo,
  text,
  socials,
  links,
  address,
  phone,
  email,
  textBottom,
} = mainFooter;

const MainFooter = ({ normalPadding = true }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("email"));
    emailjs.sendForm('Bugs-Bee-Notify', 'template_rtiz4in', e.target, 'Wqm5S27Jqbr4T_Fkz')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
  };

  return (
    <footer className={`main-footer${normalPadding ? " normal-padding" : ""}`}>
      <div className="auto-container">
        <div className="widgets-section">
          <Row className="clearfix">
            <Col xl={5} lg={6} md={6} sm={12} className="column">
              <div className="footer-widget logo-widget">
                <div className="widget-content">
                  <div className="logo">
                    <Link href="/">
                      <a>
                        <Image style={{width:"70%",height:"70%"}} id="fLogo" src={logo.src} alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="text">{text}</div>
                  <ul className="social-links clearfix">
                    {socials.map(({ id, icon, href }) => (
                      <li key={id}>
                        <a  href={href}>
                          <span className={icon}></span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
            {/* <Col xl={3} lg={6} md={6} sm={12} className="column">
              <div className="footer-widget links-widget">
                <div className="widget-content"> */}
                  {/* <h6>Explore</h6> */}
                  {/* <Row className="clearfix justify-content-center"> */}
                    {/* <Col md={6} sm={12}>
                      <ul>
                        {links.slice(0, 5).map(({ id, href, title }) => (
                          <li key={id}>
                            <Link href={href}>{title}</Link>
                          </li>
                        ))}
                      </ul>
                    </Col> */}
                    {/* <Col md={8} sm={12}>
                       <h6>Get Support</h6>
                      <ul>
                        {links.slice(5).map(({ id, href, title }) => (
                          <li key={id}>
                            <Link href={href}>{title}</Link>
                          </li>
                        ))}
                      </ul>
                    </Col> */}
                  {/* </Row>
                </div>
              </div>
            </Col> */}
            <Col xl={3} lg={6} md={8} sm={12} className="column">
              <div className="footer-widget info-widget">
                <div className="widget-content">
                  <h6>Contact</h6>
                  <ul className="contact-info">
                    <li className="address">
                      <span className="icon flaticon-pin-1"></span>{" "}
                      <TextSplit text={address} />
                    </li>
                    {/* <li>
                      <span className="icon flaticon-call"></span>
                      <a href={`tel:${phone.split(" ").join("")}`}>{phone}</a>
                    </li> */}
                    <li>
                      <span className="icon flaticon-email-2"></span>
                      <a href={`mailto:${email}`}>{email}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xl={4} lg={6} md={6} sm={12} className="column">
              <div className="footer-widget newsletter-widget">
                <div className="widget-content">
                  <h6>Newsletter</h6>
                  <div className="newsletter-form">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group clearfix">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          required
                        />
                        <button type="submit" className="theme-btn">
                          <span className="fa fa-envelope"></span>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="text">{textBottom}</div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner clearfix">
            <div className="copyright">
              &copy; copyright {year} by {author}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
