const tags = {
  react: {
    icon: `<i class="fab fa-react"></i>`,
    link: "https://reactjs.org/",
    alt: "React",
  },
  youtube: {
    icon: `<i class="fab fa-youtube"></i>`,
    link: "https://developers.google.com/youtube/v3",
    alt: "React",
  },
}

export default {
  projects: [
    {
      title: "Browser Automation App",
      info: `I used <a href="https://www.seleniumhq.org/">Selenium</a> 
      and <a href="https://electronjs.org/">Electronjs</a> to make a 
      redistributable app to help my coworkers automate their everyday tasks.`,
      link: "https://github.com/Mohcka/browser-automation-app",
      tags: [tags.react],
    },
    {
      title: "MERN Stack Reddit-Clone",
      info: `A react app that mimicks certain functionalities from reddit.  
      Backend uses <a href="https://expressjs.com">Expressjs</a> and 
      <a href="https://www.mongodb.com/">Mongodb.</a>`,
      link: "https://mern-reddit-clone.herokuapp.com/",
      tags: [tags.react],
    },
    {
      title: "React Carousel",
      info: `A carousel I made with reusable components from React and custom animations from
      <a href="https://animejs.com/" target="_blank">
        animejs
      </a>`,
      link: "https://stackblitz.com/edit/mohcka-react-carousel",
      tags: [tags.react],
    },
    {
      title: "Discord Music Bot",
      info: `Music bot I made to use on discord with a few friends.
       Uses <a href="https://discord.js.org/#/">discordjs</a> and 
       <a href="https://developers.google.com/youtube/v3">YouTube's API</a>`,
      link: "https://github.com/Mohcka/discord-music-bot",
      tags: [tags.youtube],
    },
  ],
}
