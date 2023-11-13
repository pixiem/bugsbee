import React from 'react';
import Image from "next/image";
import shape from "../../assets/wave-section-break.png";

const features = [
    {
        id: 1,
        title: 'Unique',
        teaser: 'To differentiate yourself from the crowd of thousands of schools.',
        iconStyle: 'icon-1',
        icon: 'flaticon-exclusive',
    },
    {
        id: 2,
        title: 'Automate',
        teaser: 'Stay ahead by automating tasks such as publishing results, buying books, school routines and more.',
        iconStyle: 'icon-2',
        icon: 'flaticon-humanitarian-help',
    },
    {
        id: 3,
        title: 'Satisfaction',
        teaser: 'Our user-friendly platform keeps parents informed, while school owners enjoy enhanced efficiency. A win-win for all stakeholders.        ',
        iconStyle: 'icon-3',
        icon: 'flaticon-like-1',
    },
    {
        id: 4,
        title: 'Our Support Team',
        teaser: "Our support team is committed to providing timely and personalized assistance, ensuring a smooth experience for parents and school administrators alike.",
        iconStyle: 'icon-4',
        icon: 'flaticon-delivery',
    }
]

const HomeThreeFeature = ({wave}) => {
    return (
        <div className="bd-feature-area p-relative theme-bg pt-120 pb-120">
         
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <div className="bd-section-title-wrapper is-white text-center mb-55 wow fadeInUp" data-wow-duration="1s"
                            data-wow-delay=".3s">
                            <h2 className="bd-section-title mb-0">Why take it?</h2>
                            <p>View classes by age, program, or subject. Check out upcoming camps<br /> and special events too!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bd-feature-wrapper wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                    <div className="row">
                        <div className="col-12">
                            <ul className="feature">
                                {features.map((item) => (
                                    <li className="feature-item" key={item.id}>
                                        <div className="bd-feature">
                                            <div className="bd-feature-content">
                                                <div className={`bd-feature-icon ${item.iconStyle}`}>
                                                    <i className={item.icon}></i>
                                                    {console.log(item.icon)}
                                                </div>
                                                <h4 className="bd-feature-title">{item.title}</h4>
                                                <p>{item.teaser}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeThreeFeature;