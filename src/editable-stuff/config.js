// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  firstName: "Sachitha",
  middleName: "Madhuranga",
  lastName: "Arachchi",
  message: " The world continues to evolve with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Sachiya2000",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/sachithamadurangamaduranga?mibextid=ZbWKwL",
    },

    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/sachitha-maduranga-848010250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ],
};


const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/Sachiya.jpg"),
  imageSize: 375,
  message:
    "I am Sachitha Madhuranga.  Graduate of BSc (honors) Computer Science degree at the Saegis Campus. I am a responsible, self-motivated, skillful, and dedicated undergraduate with team spirit and leadership qualities who is willing to accept challenges, seeking an opportunity as a Web Developer to apply and explore the existing and forthcoming technologies in the field of Information Technology.",
  resume: "https://drive.google.com/file/d/10Q8PckK1f9Mm_ljsYYWR0Wg1zWyMCyE6/view?usp=sharing",
};


const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "Sachiya2000",
  reposLength: 20,
  specificRepos: [],
};
// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    
    { name: "UI/UX ", value: 75 },
    { name: "HTML/CSS", value: 85 },
    { name: "Boostrap", value: 80 },
    { name: "Php", value: 60 },
    { name: "C/C++", value: 70 },
    { name: "Python", value: 40 },
    { name: "Java", value: 55 },
    { name: "JavaScript", value: 50 },
    { name: "MERN Stack", value: 55 },
    { name: "MSSQL/MYSQL/NoSQL", value: 60 },
    { name: "WordPress", value: 80 },
  ],
  softSkills: [
    { name: "Logo designinig", value: 95 },
    { name: "poster designe", value: 75 },
    { name: "cover page", value: 75 },
    { name: "Visiting card", value: 85 },
    { name: "invitation card", value: 75 },
    { name: "thank you card", value: 90 },
    { name: "calender designe", value: 70 },
    { name: "pensil art", value: 90 },
  ],
};


// CONTACTS SECTION
const contact = {
  show: true,
  heading: "Contacts",

};

// FOOTER
const getInTouch = {
  show: true,
  message:
    "I am willing to work as a web developer. If you have any available positions, have any questions, or just want to say hello, please email me at ",
  email: "sachithmaduranga2001@gmail.com",
};


export { navBar, mainBody, about, repos, skills, contact, getInTouch };
