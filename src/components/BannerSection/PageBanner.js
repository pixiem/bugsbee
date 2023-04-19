import bg from "@/images/background/image-7.jpg";
import Link from "next/link";
import React from "react";
import { useRouter } from 'next/router'

const PageBanner = ({
  title = "",
  page = "",
  parent = "",
  parentHref = "/",
}) => {

  const router = useRouter()
  console.log(router.pathname)
  return (
    <section className="page-banner">
     {router.pathname === "/blog" && <div
        className="image-layer"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>}
      <div className=""></div>
      <div className=""></div>
      <div className="banner-inner">
        <div className="auto-container">
          <div className="inner-container clearfix">
            {router.pathname != "/blog" && <h1>{title}</h1>}
            {router.pathname != "/blog" && <div className="page-nav">
              <ul className="bread-crumb clearfix">
                <li>
                  <Link href="/">Home</Link>
                </li>
                {parent && (
                  <li>
                    <Link href={parentHref}>{parent}</Link>
                  </li>
                )}
                <li className="active">{page || title}</li>
              </ul>
            </div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
