import theme from "../theme"

const tags = {
  react: {
    icon: `<i class="fab fa-react"></i>`,
    link: "https://reactjs.org/",
    color: "#00D8FF",
    alt: "React",
  },
  node: {
    icon: `<i class="fab fa-react"></i>`,
    link: "https://reactjs.org/",
    color: "#7DB802",
    alt: "Nodejs",
  },
  gatsby: {
    icon: `<i class="fab fa-react"></i>`,
    link: "https://reactjs.org/",
    color: "#663399",
    alt: "Gatsby",
  },
  heroku: {
    icon: `<i class="fab fa-react"></i>`,
    link: "https://reactjs.org/",
    color: "#410D94",
    alt: "Heroku",
  },
  youtube: {
    icon: `<i class="fab fa-youtube"></i>`,
    link: "https://developers.google.com/youtube/v3",
    color: "#F41417",
    alt: "Youtube API V3",
  },
  discord: {
    icon: `<i class="fab fa-youtube"></i>`,
    link: "https://developers.google.com/youtube/v3",
    color: "#7289DA",
    alt: "DiscordJS",
  },
  selenium: {
    icon: `<i class="fab fa-youtube"></i>`,
    link: "https://developers.google.com/youtube/v3",
    color: "#B7B7B7",
    alt: "Selenium Webdriver",
  },
  mongo: {
    icon: `<i class="fab fa-youtube"></i>`,
    link: "https://developers.google.com/youtube/v3",
    color: "#4BAE3F",
    alt: "MongoDB",
  },
  electron: {
    icon: `<i class="fab fa-youtube"></i>`,
    link: "https://developers.google.com/youtube/v3",
    color: "#7BEAF8",
    alt: "ElectronJS",
  },
  netlify: {
    icon: `<i class="fab fa-youtube"></i>`,
    link: "https://developers.google.com/youtube/v3",
    color: "#24BDB3",
    alt: "Netlify",
  },
  express: {
    icon: `<i class="fab fa-youtube"></i>`,
    link: "https://developers.google.com/youtube/v3",
    color: "#B7B7B7",
    alt: "ExpressJS",
  },
  animejs: {
    icon: "",
    link: "#",
    color: "#FF4B4B",
    alt: "AnimeJS"
  },
}

export default {
  projects: [
    {
      title: "Gatsby Starter Netlify CMS Landing Page",
      info: `A gatbsy starter i made as an example on how to use Netlify CMS to create a
      landing page with flexible editing`,
      link: "https://github.com/Mohcka/gatsby-starter-netlify-cms-landing-page",
      tags: [tags.gatsby, tags.netlify, tags.react],
    },
    {
      title: "Browser Automation App",
      info: `I used 
      <a href="https://www.seleniumhq.org/ target="_blank" target="_blank" rel="noopener noreferrer">Selenium</a> 
      and <a href="https://electronjs.org/" target="_blank" target="_blank" rel="noopener noreferrer">Electronjs</a> to make a 
      redistributable app to help my coworkers automate their everyday tasks.`,
      link: "https://github.com/Mohcka/browser-automation-app",
      tags: [tags.selenium, tags.electron],
    },
    {
      title: "MERN Stack Reddit-Clone",
      info: `A react app that mimicks certain functionalities from reddit.  
      Backend uses <a href="https://expressjs.com">Expressjs</a> and 
      <a href="https://www.mongodb.com/" target="_blank" target="_blank" rel="noopener noreferrer">Mongodb.</a>`,
      link: "https://mern-reddit-clone.herokuapp.com/",
      tags: [tags.mongo, tags.express, tags.react, tags.node, tags.heroku],
    },
    {
      title: "React Carousel",
      info: `A carousel I made with reusable components from React and custom animations from
      <a href="https://animejs.com/" target="_blank" target="_blank" rel="noopener noreferrer">
        animejs
      </a>`,
      link: "https://stackblitz.com/edit/mohcka-react-carousel",
      tags: [tags.react, tags.animejs],
    },
    {
      title: "Discord Music Bot",
      info: `Music bot I made to use on discord with a few friends.
       Uses <a href="https://discord.js.org/#/" target="_blank" target="_blank" rel="noopener noreferrer">discordjs</a> and 
       <a href="https://developers.google.com/youtube/v3" target="_blank" target="_blank" rel="noopener noreferrer">YouTube's API</a>`,
      link: "https://github.com/Mohcka/discord-music-bot",
      tags: [tags.youtube, tags.discord],
    },
  ],
}
