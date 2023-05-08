import Link from "next/link";
import React from "react";

const CallToSectionTwo = ({
  className = "",
  btnClassName = "btn-style-two",
}) => {
  return (
    <section className={`call-to-section-two ${className}`}>
      <div className="auto-container">
        <div className="inner clearfix">
          <h2>
          Talk to Our Specialists 
          </h2>
          <div style={{paddingTop:"0px !important"}} className="link-box">
            <Link href="/contact">
              <a className={`theme-btn ${btnClassName}`}>
                <i className="btn-curve"></i>
                <span style={{fontSize:"30px !important"}} className="btn-title">LET'S TALK</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToSectionTwo;
