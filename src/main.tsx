import React from "react";
import ReactDOM from "react-dom/client";

import { Linkees } from "./components/Linkees";

import { CHANNEL_TYPES } from "./constants";

import "./css/components.css";

const items = [
  {
    title: "Personal Website",
    subtitle: "Look at my work!",
    type: CHANNEL_TYPES.WEBSITE,
    image: "./public/personal-website.png",
    link: "https://vercel.com/404", //your personal website or portfolio  link
  },
  {
    title: "Comment - Community Environment",
    subtitle: "Look at my project!",
    type: CHANNEL_TYPES.WEBSITE,
    image: "./public/capstone.png",
    link: "https://capstone-comment.vercel.app", //your personal website or portfolio  link
  },
  {
    title: "GitHub",
    subtitle: "@hendriwhyu | 🏡 to all my open-source projects",
    type: CHANNEL_TYPES.GITHUB,
    link: "https://github.com/hendriwhyu", //Github Profile link
  },
  {
    title: "Instagram",
    subtitle: "@hendri.whyu |  Shots of my life 🙂",
    type: CHANNEL_TYPES.INSTAGRAM,
    link: "https://instagram.com/hendri.whyu", //instagram profile link
  },
  {
    title: "LinkedIn",
    subtitle: "Know more about my profession 👨‍💼",
    type: CHANNEL_TYPES.LINKEDIN,
    link: "https://www.linkedin.com/in/hendri-whyu/", // linkedin
  },
];

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement)?.render(
    <React.StrictMode>
      <Linkees cardItems={items} name={"Hendri Wahyu Perdana"} headerAvatar="./public/hendri.jpg" />
    </React.StrictMode>
  );
}