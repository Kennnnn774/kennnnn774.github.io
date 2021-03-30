// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Yujian(Ken)",
  middleName: "",
  lastName: "He",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Kennnnn774",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/he.ken.581",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/kennn_he/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/yujian-ken-he/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/Kennnn53643854",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/1NKBi2-FlhxM4R62aRSmq1svlNKaHpqJRcxHzyUw0LRY/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/ken_suit.jpg"),
  imageSize: 375,
  message:
    "My name is Yujian(Ken) He. I am a junior student double majoring in data science and management science at University of California, San Diego.  I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of data science.",
  resume: "https://docs.google.com/document/d/1NKBi2-FlhxM4R62aRSmq1svlNKaHpqJRcxHzyUw0LRY/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Kennnnn774", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["Political-Preference-in-Covid-19","clothing-fit-classification","snapchat-political-ads",,"California-Climate-Change-Visualization","SQL-project","kennnnn774.github.io"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "random",
  images: [
    { 
      img: require("../editable-stuff/ken_suit.jpg"), 
      label: "First slide label", 
      paragraph: "what you done" 
    },
    { 
      img: require("../editable-stuff/ken_suit.jpg"), 
      label: "Second slide label", 
      paragraph: "what you done" 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 95 },
    { name: "SQL", value: 85 },
    { name: "Data Structures", value: 80 },
    { name: "Java", value: 75 },
    { name: "JavaScript", value: 75 },
    { name: "Stata", value: 85 },
    { name: "HTML/CSS", value: 80 },
    { name: "R", value: 75 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 90 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 85 },
    { name: "Creativity", value: 80 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for summer intern data scientist or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "easyjiajob@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

  // //Blog SECTION
  // const blog = {
  //   show: false,
  // };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
