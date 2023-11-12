import React from 'react';

const HomeNewsletter = () => {
    
    // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
  }

    return (
        <section className="bd-newsletter-area">
            <div className="container">
                <div className="bd-newsletter pt-100 pb-100 theme-bg">
                    <div className="bd-newsletter-bg" style={{ backgroundImage: "url(/assets/img/bg/newsletter-bg.jpg)" }}></div>
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="bd-newsletter-content">
                                <div className="bd-section-title-wrapper text-center is-white mb-45">
                                    <h2 style={{color:"white !important"}} className="bd-section-title mb-0">School Management Software Coming Soon !!</h2>
                                    {/* <p>Subscribe our newsletter to get our latest update & news.</p> */}
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeNewsletter;