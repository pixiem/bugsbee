import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import NewsSection from "@/components/NewsSection/NewsSection";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import Head from "next/head";
import React from "react";

const BlogGrid = () => {
  return (<>
  <Head>
  <title>Blog | Bugs Bee</title>
  <meta name="description" content="Stay updated with the latest tech news, tips, and insights on our Tech Talk blog. Explore articles on AI, programming, web development, digital marketing, and more." />
  <meta property="og:title" content="Tech Talk | Your Digital Agency Blog" />
  <meta property="og:description" content="Stay updated with the latest tech news, tips, and insights on our Tech Talk blog. Explore articles on AI, programming, web development, digital marketing, and more." />
  <meta property="og:url" content="https://www.bugsbee-it.com/blog" />
</Head>
    <Layout pageTitle="Blog Posts">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Blog Posts" />
      <NewsSection showTitle={false} isMore />
      <MainFooter />
    </Layout>
    </>);
};

export default BlogGrid;
