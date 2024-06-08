import WMSImage from '../../assets/Projects/WMS.png';
import Jonagotchi from '../../assets/Projects/Jonagotchi.png';
import MindMentor from '../../assets/Projects/MindMentor.png'


export const bio = {
    name: "Sandra Martinez",
    roles: [
        "Full Stack Developer",
        "Android Developer",
        "Data Engineer",
        "Data Analyst",
        "Backend Developer",
        "Frontend Developer"
    ],
    description: [
        " Welcome to my portfolio! I'm a Master's graduate in Information Technology, specialising in Business Intelligence.",
        " My collaborative approach shines in diverse teams, exemplified by winning £3,000 at Hack For Change by Bright Network, where we developed a mental-health application powered by AI.",
        " With a foundation in full-stack software engineering and data analytics, I bridge business challenges to technological solutions.",
      ],
    
    about: [
        "My journey into tech has been unconventional - originally chemical engineer, I witnessed firsthand the industry's struggle with data mismanagement and time-consuming administrative tasks.",
        "Fueled by the desire to bridge this gap, I seized the opportunity to transition into tech. Awarded the British Council Scholarship for Women in STEM, I embarked on a transformative Master's journey, complemented by an intensive 3-month full-stack development bootcamp.",
        "Here is a list of the technologies that I'm familiar with!",
    ],
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
      },

      {
        name: "HTML",
        
      },
      {
        name: "CSS",
      },
      {
        name: "JavaScript",
        
      },

      {
        name: "Material UI",
       
         },

    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Java",
       
      },

      {
        name: "Node Js",
        
      },

      {
        name: "MySQL",
        
      },
      {
        name: "Postgresql",
        
      },
    ],
  },
  {
    title: "Mobile",
    skills: [
      {
        name: "Android Studio",
        
      },

      {
        name: "React Native",
        
      },
    ],
  },
  {
    title: "Data Analysis",
    skills: [
      {
        name: "R Studio",
        
      },

      {
        name: "Tableau",
        
      },
      {
        name: "PowerBI",
        
      },

      {
        name: "Excell",
        
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        
      },
      {
        name: "GitHub",
        
      },
     
      {
        name: "VS Code",
        
      },
      {
        name: "Postman",
       
      },

      {
        name: "Figma",
       
      },
    ],
  },
];

export const experiences = [
    {
        id: 0,
        img: "",
        role: "Trading Assistant",
        company: "Sainsbury's",
        date: "November 2022 - Present",
        desc: "",
        skills: [
        "",
        ],

    },

    {
        id: 1,
        img: "",
        role: "Quality Engineer",
        company: "Kone",
        date: "June 2023 - July 2023",
        desc: "",
        skills: [
        "",
        ],

    },

    {
        id: 2,
        img: "",
        role: "",
        company: "",
        date: "",
        desc: "",
        doc: "",
      },

];

export const projects = [
    {
      id: 0,
      title: "Warehouse Management System",
      date: "Sep 2023",
      description:
        "Developed a full-stack web application for a functional warehouse management system for the fictional company Rainforest Retail",
      image:
        WMSImage,
      tags: ["React Js", "Java"],
      category: "web app",
      github: "https://github.com/RNWalker/capstone_backend_project",
      external: "https://github.com/sarahoco014/Capstone_Frontend",
      member: [
        {
          name: "Sandra Martinez",
          img: "https://avatars.githubusercontent.com/u/98602406?s…00&u=d0235b1c52cc289c7da69b817c4e702dfd1b2715&v=4",
          github: "https://github.com/sandramtzd",
        },
        {
          name: "Rebecca Walker",
          img: "https://avatars.githubusercontent.com/u/78052216?v=4",
          github: "https://github.com/RNWalker",
        },
        {
          name: "Sarah O'Connor",
          img: "https://avatars.githubusercontent.com/u/135848217?v=4",
          github: "https://github.com/sarahoco014",
        },
        {
          name: "Charlotte Gould",
          img: "	https://avatars.githubusercontent.com/u/131787016?v=4",
          github: "https://github.com/Charlotteg1",
        },
      ],
    },
    {
      id: 1,
      title: "Jonagotchi",
      date: "Aug 2023",
      description:
        "Developed the front end for a virtual pet",
      image:
        Jonagotchi,
      tags: [
        "React Js", "Java",

      ],
      category: "web app",
      github: "https://github.com/GeorgiaCD/Frontend_pet_react_app",
      external: "https://vexa-app.netlify.app/",
      member: [
        {
          name: "Sandra Martinez",
          img: "https://avatars.githubusercontent.com/u/98602406?s…00&u=d0235b1c52cc289c7da69b817c4e702dfd1b2715&v=4",
          github: "https://github.com/sandramtzd",
        },
        {
          name: "Abdulaziz",
          img: "https://avatars.githubusercontent.com/u/107209170?v=4",
          github: "https://github.com/Abdulaziz-MI",
        },
        {
          name: "Jannah Anwar",
          img: "https://avatars.githubusercontent.com/u/135851473?v=4",
          github: "https://github.com/jannahthecodemaster",
        },
        {
          name: "Georgia Crawford-Dellar",
          img: "https://avatars.githubusercontent.com/u/133099012?v=4",
          github: "https://github.com/GeorgiaCD",
        },
      ],
    },
    {
      id: 2,
      title: "Coming soon",
      date: "",
      description:
        "",
      image:
        "",
      tags: [""],
      category: "data",
      github: "",
      external: "",
      
    },
    {
      id: 3,
      title: "MindMentor",
      date: "Oct 2023",
      description:
        "Developed a mental health app powered by AI for more inclusive workplaces",
      image:
        MindMentor,
      tags: ["React Native", "Android Studio"],
      category: "mobile app",
      github: "https://github.com/sarahoco014/Mind_Mentor_Frontend",
      external: "",

      member: [
        {
          name: "Sandra Martinez",
          img: "https://avatars.githubusercontent.com/u/98602406?s…00&u=d0235b1c52cc289c7da69b817c4e702dfd1b2715&v=4",
          github: "https://github.com/sandramtzd",
        },
        {
          name: "Rebecca Walker",
          img: "https://avatars.githubusercontent.com/u/78052216?v=4",
          github: "https://github.com/RNWalker",
        },
        {
          name: "Sarah O'Connor",
          img: "https://avatars.githubusercontent.com/u/135848217?v=4",
          github: "https://github.com/sarahoco014",
        },
        {
          name: "Kevin Chan",
          img: "https://avatars.githubusercontent.com/u/40737044?v=4",
          github: "https://github.com/Kibiko",
        },
        {
          name: "Blezzy Dela Cruz",
          img: "https://avatars.githubusercontent.com/u/138067410?v=4",
          github: "https://github.com/blezzydcruz",
        },
        {
          name: "Rohaib Ahmed",
          img: "https://avatars.githubusercontent.com/u/138167825?v=4",
          github: "https://github.com/rohaib1",
        },
      ],


    },

  ];