import Link from "next/link";
import React, { forwardRef } from "react";

const SlideItemThree = ({ slide = {} }, ref) => {
  const { bg, title, text } = slide;

  return (
    <div style={{ userSelect: "none" }} ref={ref} className="slide-item">
      <div className="round-shape-1"></div>
      <div className="round-image">
        <div
          className="image"
          style={{
            backgroundImage: `url(${
              require(`@/images/main-slider/${bg}`).default.src
            })`,
          }}
        ></div>
      </div>
      <div className="auto-container">
        <div className="content-box">
          <div className="content">
            <div className="inner">
              <h1 style={{color:"#222429"}}>
              Your Partner For Innovations
                {/* <TextSplit text="Your Partner For Innovations" /> */}
              </h1>
              <div className="text"> <h5>Unlock the power of technology with our <b> <u>Faster</u> + <u>Affordable</u> + <u>Premium</u> </b> IT services for your business needs.</h5></div>
              <div className="link-box">
                <Link href="/about">
                  <a className="theme-btn btn-style-two">
                    <i className="btn-curve"></i>
                    <span className="btn-title">LET'S TALK</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(SlideItemThree);
