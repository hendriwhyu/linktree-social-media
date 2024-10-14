import React from "react";
import ReactDOM from "react-dom/client";
import { Linkees } from "./components/Linkees";
import { CHANNEL_TYPES } from "./constants";
import "./css/components.css";
import avatar from "./assets/hendri.jpg"
import capstone from "./assets/capstone.png"
import anomali from "./assets/anomali.png"
import portfolio from "./assets/personal-website.png"

const items = [
  {
    title: "Personal Data",
    subtitle: "Look at my curriculum vitae!",
    type: CHANNEL_TYPES.WEBSITE,
    image: portfolio,
    link: "https://drive.google.com/file/d/17EMkuT99LGgA3BConGOFG9LO48ag0P91/view?usp=sharing", //your personal website or portfolio  link
  },
  {
    title: "Comment - Community Environment",
    subtitle: "Look at my project!",
    type: CHANNEL_TYPES.WEBSITE,
    image: capstone,
    link: "https://capstone-comment.vercel.app", //your personal website or portfolio  link
  },
  {
    title: "Anomali - Website Company",
    subtitle: "Look at my project!",
    type: CHANNEL_TYPES.WEBSITE,
    image: anomali,
    link: "https://landing-page-anomali.vercel.app", //your personal website or portfolio  link
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
      <Linkees cardItems={items} name={"Hendri Wahyu Perdana"} occupation={"Full Stack Developer"} headerAvatar={avatar} />
    </React.StrictMode>
  );
}