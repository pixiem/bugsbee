import icon from "@/images/icons/close-1-1.png";
import logo4 from "@/images/logo-2.png";
import logo3 from "@/images/logo-3.png";
import logo2 from "@/images/logo-dark.png";
import logo1 from "@/images/logo.png";
import logo6 from "@/images/update-01-10-2021/logo-6-dark.png";
import logo7 from "@/images/update-01-10-2021/logo-7-dark.png";
import logo8 from "@/images/update-01-10-2021/logo-8-light.png";
import logo5 from "@/images/update-09-06-2021/logo-5.png";
import logo10 from "@/images/update-09-06-2021/logo-6.png";
import logo9 from "@/images/update-26-02-2021/logo-horizontal-portfolio.png";

const home = {
  id: 1,
  name: "Home",
  href: "/"
};

const navItemsTwo = [
  { ...home, href: "#home" },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Services",
    href: "#services",
  },
  {
    id: 4,
    name: "Portfolio",
    href: "#portfolio",
  },
  {
    id: 5,
    name: "Team",
    href: "#team",
  },
  {
    id: 6,
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    id: 7,
    name: "Blog",
    href: "#blog",
  },
  {
    id: 8,
    name: "Contact",
    href: "#contact",
  },
];

const navItems = [
  home,{
    id: 4,
    name: "Services",
    href: "/services",
    // subNavItems: [
    //   { id: 1, name: "All Services", href: "/services" },
    //   { id: 8, name: "Designing", href: "/services" },
    //   { id: 3, name: "Development", href: "/services" },
    //   { id: 7, name: "Digital Marketing", href: "/services" },
      
     
     

     
    // ],
  },
 
  // {
  //   id: 3,
  //   name: "Pages",
  //   href: "",
  //   subNavItems: [
 
  //     { id: 3, name: "How it Works", href: "/how-it-works" },
  //     { id: 4, name: "Coming Soon", href: "/coming-soon" },
  //     { id: 7, name: "FAQs", href: "/faqs" },
  //     { id: 8, name: "Events", href: "/events" },
     
  //   ],
  // },
  
  // {
  //   id: 5,
  //   name: "Portfolio",
  //   href: "/portfolio",
  //   subNavItems: [
  //     { id: 1, name: "Portfolio", href: "/portfolio" },
  //     { id: 2, name: "Portfolio Single 01", href: "/portfolio-single" },
  //     { id: 3, name: "Portfolio Single 02", href: "/portfolio-single-2" },
  //     { id: 4, name: "Portfolio Single 03", href: "/portfolio-single-3" },
  //   ],
  // },
  // {
  //   id: 6,
  //   name: "Shop",
  //   href: "/shop",
  //   subNavItems: [
  //     { id: 1, name: "Shop Page", href: "/shop" },
  //     { id: 2, name: "Product Details", href: "/product-details" },
  //     { id: 3, name: "Cart Page", href: "/cart" },
  //     { id: 4, name: "Checkout Page", href: "/checkout" },
  //   ],
  // },
  // {
  //   id: 7,
  //   name: "Blog",
  //   href: "/blog-grid",
  //   subNavItems: [
  //     { id: 1, name: "Blog Sidebar", href: "/blog" },
  //     { id: 2, name: "Blog Grid View", href: "/blog-grid" },
  //     { id: 3, name: "Blog Single", href: "/blog-single" },
  //   ],
  // },
  {
    id: 2,
    name: "About Us",
    href: "/about"
    
  },
  {
    id: 8,
    name: "Contact",
    href: "/contact-2",
    // subNavItems: [
    //   { id: 1, name: "Contact 01", href: "/contact" },
    //   { id: 2, name: "Contact 02", href: "/contact-2", isNew: true },
    // ],
  },
  
];

export const socials = [
  {
    id: 1,
    icon: "fab fa-facebook-square",
    href: "#",
  },
  {
    id: 2,
    icon: "fab fa-twitter",
    href: "#",
  },
  {
    id: 3,
    icon: "fab fa-instagram",
    href: "#",
  },
  {
    id: 4,
    icon: "fab fa-pinterest-p",
    href: "#",
  },
];

const headerData = {
  title: "Bugs Bee - DIgital Agency ",
  title2: "Welcome to Creative Buinsess Agency.",
  title3: "Welcome to Amazing Consulting Agency.",
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  navItems,
  navItemsTwo,
  address: "Suite 20 Golden Street USA",
  phone: " 00",
  phone2: "+ 92  00",
  email: "bugsbeeit@gmail.com",
  icon,
  socials,
  text: "",
};

export default headerData;
