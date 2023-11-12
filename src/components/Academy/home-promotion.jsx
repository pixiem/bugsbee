import React from 'react';
import Image from "next/image";
import promotion from "../../assets/1.png";
import line from "../../assets/tripple-line.png";
import cover from "../../assets/School Management.png";
import Link from 'next/link';
import useModal from '../../hooks/use-modal';
import VideoModal from '../VideoModal/VideoModal';
import CountUpContent from '../counter';

const fact_items = [
    {
        id: 1,
        count: '14',
        title: 'Years of',
        subTitle: 'experience',
        text: '+',
    },
    {
        id: 2,
        count: '7',
        title: 'Students',
        subTitle: 'each year',
        text: 'K+',
    },
    {
        id: 3,
        count: '15',
        title: 'Award',
        subTitle: 'Wining',
        text: '+',
    }
];

const HomePromotion = ({promoImg, promo_space}) => {

    const { isVideoOpen, setIsVideoOpen } = useModal();

    return (
        <>
            <section className={`bd-promotion-area ${promo_space ? promo_space : 'pb-60'}`} id="bd-promotion-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="bd-promotion-thumb-wrapper mb-60 wow fadeInLeft" data-wow-duration="1s"
                                data-wow-delay=".2s">
                                <div className="bd-promotion-thumb">
                                    <div className="bd-promotion-thumb-mask p-relative wow fadeInLeft" data-wow-duration="1s"
                                        data-wow-delay=".3s">
                                        <Image src={cover} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                        <div className="panel wow"></div>
                                    </div>
                                </div>
                                <div className="bd-promotion-shape d-none d-lg-block">
                                    <Image src={line} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="bd-promotion mb-60 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                                <div className="bd-section-title-wrapper mb-35">
                                    <h5 style={{color:"#222429 !important", fontSize:"60px"}} className="bd-section-title mb-10">Academic Portfolio Website</h5>
                                    {promo_space &&
                                        <span>
                                            Make Your School Next Level Standard
                                        </span>
                                    }
                                    <p> Embark on a journey of educational brilliance through our uniquely designed school website—a digital masterpiece that brilliantly encapsulates the core of our academic excellence. Tailored for parents seeking an immersive insight into their childs educational journey, our eye-catching website goes beyond the ordinary, delivering an extraordinary online experience.
                                    </p>
                                </div>
                                {!promo_space && <div className="bd-promotion-counter-wrapper mb-40">
                                    {fact_items.map((item) => (
                                        <div className="bd-promotion-counter" key={item.id}>
                                            <CountUpContent number={item.count} add_style={false} text={item.text} />
                                            <div className="bd-promotion-counter-text">
                                                <span>{item.title}</span>
                                                <span>{item.subTitle}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>}
                                <div className="bd-promotion-list mb-50">
                                    <ul>
                                        <li>Visually Stunning Showcase.</li>
                                        <li>Interactive Insights for Parents.</li>
                                        <li>Unique Stories, One Community.</li>
                                    </ul>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* video modal start */}
            <VideoModal
                isVideoOpen={isVideoOpen}
                setIsVideoOpen={setIsVideoOpen}
                videoId={"go7QYaQR494"}
            />
            {/* video modal end */}
        </>
    );
};

export default HomePromotion;