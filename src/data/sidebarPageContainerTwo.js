import image from "@/images/resource/news-7.jpg";

export const blogPage = {
  title: "Delivering the best digital marketing",
  text: "There are many variations of passages of available but majority have alteration in some by inject humour or random words. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
  videoId: "Get7rqXYrbQ",
  newsData: [
    {
      id: 1,
      image: "news-7.jpg",
      date: "20 Mar",
      admin: "Admin",
      comments: 2,
      title: "basic rules of running web agency business",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
    },
    {
      id: 2,
      image: "news-8.jpg",
      date: "20 Mar",
      admin: "Admin",
      comments: 2,
      showVideo: true,
      title: "Delivering the best digital marketing",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
    },
    {
      id: 3,
      image: "news-9.jpg",
      date: "20 Mar",
      admin: "Admin",
      comments: 2,
      title: "Introducing the latest linoor features",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
    },
  ],
};

export const sidebar = {
  categories: [
    {
      id: 1,
      title: "Business",
      href: "/blog",
    },
    {
      id: 2,
      title: "Introductions",
      href: "/blog",
    },
    {
      id: 3,
      title: "One Page Template",
      href: "/blog",
    },
    {
      id: 4,
      title: "Parallax Effects",
      href: "/blog",
    },
    {
      id: 5,
      title: "New Technologies",
      href: "/blog",
    },
    {
      id: 6,
      title: "Video Backgrounds",
      href: "/blog",
    },
  ],
  tags: [
    {
      id: 1,
      title: "Business",
      href: "#",
    },
    {
      id: 2,
      title: "Agency",
      href: "#",
    },
    {
      id: 3,
      title: "Technology",
      href: "#",
    },
    {
      id: 4,
      title: "Parallax",
      href: "#",
    },
    {
      id: 5,
      title: "Innovative",
      href: "#",
    },
    {
      id: 6,
      title: "Professional",
      href: "#",
    },
    {
      id: 7,
      title: "Experience",
      href: "#",
    },
  ],
  comments: [
    {
      id: 1,
      text: "A Wordpress Commenter on Launch New Mobile App",
    },
    {
      id: 2,
      text: "John Doe on Template: \n Comments",
    },
    {
      id: 3,
      text: "A Wordpress Commenter on Launch New Mobile App",
    },
    {
      id: 4,
      text: "John Doe on Template: \n Comments",
    },
  ],
  posts: [
    {
      id: 1,
      title: "EXPERIENCES THAT CONNECT WITH PEOPLE",
      image: "news-thumb-1.jpg",
    },
    {
      id: 2,
      title: "WE BUILD AND ACTIVATE BRANDS INSIGHT",
      image: "news-thumb-2.jpg",
    },
    {
      id: 3,
      title: "A DEEP UNDERSTANDING OF OUR AUDIENCE",
      image: "news-thumb-3.jpg",
    },
  ],
};

export const aifuture = {
  image,
  date: "19 Apr",
  admin: "Naymul Islam",
  title: "The Future of Artificial Intelligence: Unlocking the Potential of Chat GPT and Beyond",
  text1:
    "Artificial Intelligence (AI) has been rapidly evolving, transforming industries and shaping the way we live and work. In this forward-looking blog post, we will explore the future of AI, with a special focus on Chat GPT, a cutting-edge conversational AI technology, and its potential impact. We will start by discussing the current state of AI, including recent advancements in machine learning, natural language processing, and other areas that have fueled the rapid growth of Chat GPT. We will highlight the capabilities of Chat GPT, such as its ability to generate human-like text responses, engage in interactive conversations, and understand context, making it a powerful tool for various applications.",
  text2:
    "We will then delve into the potential applications of Chat GPT in the future, including its role in customer service, content creation, virtual assistants, language translation, and more. We will discuss how Chat GPT can enhance user experiences, streamline processes, and revolutionize industries such as e-commerce, healthcare, and education. Furthermore, we will explore the potential challenges and ethical considerations associated with the future of AI, including issues related to bias, privacy, and accountability. We will discuss the importance of responsible AI development and deployment, ensuring that the technology is used ethically and for the benefit of humanity. In addition to Chat GPT, we will also touch upon other emerging trends and technologies in AI, such as quantum computing, explainable AI, and edge computing, and their potential impact on the future of AI.",
  tags: ["ArtificialIntelligence ", "ChatGPT ", "FutureTrends"],
  category: ["Technology", "Future Trends"],
  posts: [
    "Unleashing the Future of AI: Chat GPT and Beyond",
    "Shaping Tomorrow's World Today: Exploring Chat GPT & AI Potential",
  ],
  comments: [
    // {
    //   id: 1,
    //   image: "author-7.jpg",
    //   name: "Jessica Brown",
    //   date: "20 May, 2020 . 4:00 pm",
    //   text: "Lorem Ipsum is simply dummy free text of the available printing and typesetting been the industry standard dummy text ever sincer condimentum purus.",
    // },
    // {
    //   id: 2,
    //   image: "author-8.jpg",
    //   name: "David Martin",
    //   date: "20 May, 2020 . 4:00 pm",
    //   text: "Lorem Ipsum is simply dummy free text of the available printing and typesetting been the industry standard dummy text ever sincer condimentum purus.",
    // },
  ],
  inputs: [
    {
      name: "username",
      placeholder: "Your Name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      placeholder: "Email Address",
      type: "email",
      required: true,
    },
    {
      name: "phone",
      placeholder: "Phone Number",
      type: "text",
      required: true,
    },
    {
      name: "subject",
      placeholder: "Subject",
      type: "text",
      required: true,
    },
    {
      name: "message",
      placeholder: "Your Comments",
      required: true,
    },
  ],
};
