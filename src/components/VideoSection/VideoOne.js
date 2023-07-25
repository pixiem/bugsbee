import { videoOne } from "@/data/videoSection";
import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import VideoModal from "../VideoModal/VideoModal";

const { image, videoId, title, text1, text2 } = videoOne;

const VideoOne = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="video-one">
        <div className="auto-container">
          {/* <div className="video-one__image">
            <Image
              src={image.src}
              alt="Linoor is trusted by millions of customers"
            />
            <div className="vid-link">
              <a onClick={() => setOpen(true)} className="lightbox-image">
                <div className="icon">
                  <span className="flaticon-play-button-1"></span>
                  <i className="ripple"></i>
                </div>
              </a>
            </div>
          </div> */}
          <div className="video-one__content">
            <Row className="align-items-center">
              <Col md={12} lg={12}>
                <div className="sec-title">
                 <center> <h2>
                    {title}
                  
                  </h2></center>
                  
                  <h5 className="mt-5">Bugs Bee, a Software Company , is now among one of the leading ones currently operating globally. It offers a vast amount of digital products ensuring the use of up-to-date tools, optimized to be most efficient for its clients. From designing simple apps to creating whole robust Web Applications, rest assured, cause we got you covered! We have a bunch of specialized Programmers and IT Professionals improvised just to meet your needs!</h5>
                </div>
              </Col>
              {/* <Col md={12} lg={4}>
                <div className="block-text">{text1}</div>
              </Col>
              <Col md={12} lg={4}>
                <div className="block-text">{text2}</div>
              </Col> */}
            </Row>
          </div>
        </div>
      </div>
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
    </>
  );
};

export default VideoOne;
