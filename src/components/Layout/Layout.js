import Preloader from "@/components/Preloader/Preloader";
import useScroll from "@/hooks/useScroll";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Layout = ({
  children,
  pageTitle,
  preloader,
  mainClass,
  preloaderClass,
}) => {
  const [loading, setLoading] = useState(true);
  const { scrollTop } = useScroll(100);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timeoutId);
  }, []);
console.log(pageTitle)
  return (
    <>
      <Head>
      {/* <meta property="og:url" content="https://i.ibb.co/w6YqVx1/Bugs-bee-Facebook-Cover-1.jpg" /> */}
        {/* <meta property="og:type" content="https://i.ibb.co/w6YqVx1/Bugs-bee-Facebook-Cover-1.jpg" /> */}
        {/* <meta property="fb:app_id" content="https://i.ibb.co/w6YqVx1/Bugs-bee-Facebook-Cover-1.jpg" /> */}
        {/* <meta
          property="og:title"
          content="https://i.ibb.co/w6YqVx1/Bugs-bee-Facebook-Cover-1.jpg"
        /> */}
        {/* <meta name="twitter:card" content="https://i.ibb.co/w6YqVx1/Bugs-bee-Facebook-Cover-1.jpg" /> */}
        {/* <meta
          property="og:description"
          content="https://i.ibb.co/w6YqVx1/Bugs-bee-Facebook-Cover-1.jpg"
        /> */}
        {/* <meta property="og:image" content="https://i.ibb.co/w6YqVx1/Bugs-bee-Facebook-Cover-1.jpg" /> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bugs Bee" />
        <meta property="og:description" content="Bugs Bee - Your Trusted Partner for Cutting-Edge Digital Solutions: Custom Websites, Mobile Apps, Software Development, and Results-Driven Growth"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bugs Bee - Software Company</title>
      </Head>
      <Preloader className={preloaderClass} loading={loading} bg={preloader} />
      <main
        id="wrapper"
        style={{ opacity: loading ? 0 : 1 }}
        className={`page-wrapper ${mainClass}`}
      >
        {children}
      </main>
      {scrollTop && (
        <ScrollLink
          to="wrapper"
          smooth={true}
          duration={500}
          id="backToTop"
          style={{ cursor: "pointer" }}
          className="scroll-to-target scroll-to-top d-inline-block fadeIn animated"
        >
          <i className="fa fa-angle-up"></i>
        </ScrollLink>
      )}
    </>
  );
};

export default Layout;
