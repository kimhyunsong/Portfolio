/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Kim hyunsong",
  title: "안녕하세요 공유하는 개발자 김현송입니다.",
  subTitle: emoji(
    " 다양한 플랫폼을 빠르게 습득하여 완성도 높은 프로젝트를 위해 팀원들과 공유하고 소통합니다."
  ),
  // resumeLink:
    // "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kimhyunsong",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "",
  skills: [
    emoji(
      "⚡ React를 사용해 이벤트 캡처링과 버블링을 효과적으로 다루었습니다."
    ),
    emoji("⚡ Firebase를 도입해 이미지 저장 및 관리를 프로젝트에 적용한 경험이 있습니다."),
    emoji(
      "⚡ Front-end 플랫폼에 국한하지 않고 다양한 경험을 추구합니다. ( ROS / Unity )"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      image : require("./assets/images/javascript.png")
    },
    {
      skillName: "reactjs",
      image : require("./assets/images/react.png")
    },
    {
      skillName: "redux",
      image : require("./assets/images/redux.png")
    },
    {
      skillName: "vuejs",
      image : require("./assets/images/vue.png")
    },
    {
      skillName: "express",
      image : require("./assets/images/express.png")
    },
    {
      skillName: "socket.io",
      image : require("./assets/images/socketio.png")
    },
    {
      skillName: "Django",
      image : require("./assets/images/django.png")
    },

    {
      skillName: "firebase",
      image : require("./assets/images/firebase.png")
    },
    {
      skillName: "unity",
      image : require("./assets/images/unity.png")
    },
    {
      skillName: "python",
      image : require("./assets/images/python.png")
    },
    {
      skillName: "c#",
      image : require("./assets/images/csharp.png")
    },
    

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Inha University",
      logo: require("./assets/images/inha_logo.png"),
      subHeader: "Korean Education",
      duration: "March 2014 - August 2020",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Samsung Software Academy For Youth",
      logo: require("./assets/images/ssafyLogo.png"),
      subHeader: "삼성 청년 소프트웨어 아카데미",
      duration: "July 2021 - ing...",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section



/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "프로젝트",
  subtitle: "Front-end를 담당한 프로젝트",
  projects: [
    {
      image:  require("./assets/images/macju.png"),
      projectName: "MacJu 프로젝트",
      projectDesc: "사용자 사용 로그 기반 맥주 큐레이팅 서비스",
      footerLink: [
        {
          name: "MacJu github으로 이동",
          url: "https://github.com/kimhyunsong/MacJu-Project"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image:  require("./assets/images/movi.jpg"),
      projectName: "영화추천 프로젝트",
      projectDesc: "vue.js와 Django를 이용해 백엔드와 프론트엔드 서버 구축",
      footerLink: [
        {
          name: "영화추천 서비스 Gitlab으로 이동",
          url: "https://lab.ssafy.com/ssong_14/final-pjt"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
const otherProjects = {

  subtitle: "그 외 프로젝트",
  projects: [
    {
      image:  require("./assets/images/iot.jpg"),
      projectName: "IoT 프로젝트",
      projectDesc: "박물관 도슨트 로봇 프로젝트",
      footerLink: [
        {
          name: "박물관 안내 프로젝트 Gitlab으로 이동",
          url: "https://lab.ssafy.com/s06-iot-control-sub2/S06P22C108"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image:  require("./assets/images/unityimg.jpg"),
      projectName: "SSAFY SCHOOL",
      projectDesc: "SSAFY 교육프로그램내 메타버스 플랫폼",
      
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("수상경력 🏆 "),
  subtitle:
    "교육프로그램내 수상경력",

  achievementsCards: [
    {
      title: "맥주 큐레이팅 서비스",
      subtitle:
        "[2학기]프로젝트 광주 1반 2등, 맥주라는 접근성 높은 컨텐츠와 다양한 데이터베이스로 가장 많은 리뷰를 받기도 함.",
      image: require("./assets/images/macju.png"),
     
    },
    {
      title: "박물관 도슨트 로봇",
      subtitle:
        "[2학기]프로젝트 광주 1반 3등, 라이다, 카메라를 활용해 맵, 사람 인식 및 follow, 자율 주행 ROS 통신",
      image: require("./assets/images/iot.jpg"),
    },

    // {
    //   title: "곧 받을 예정",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections



// Podcast Section


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+82-10-3512-6725",
  email_address: "gusthd0104@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  
  openSource,
  bigProjects,
  otherProjects,
  achievementSection,
  blogSection,
  contactInfo,
  twitterDetails
};
