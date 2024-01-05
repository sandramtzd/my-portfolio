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
    description: 
        " Welcome to my portfolio! I'm a Master's graduate in information Technology, specialising in Business Intelligence. My collaborative approach shines in diverse teams, exemplified by winning £3,000 at Hack For Change by Bright Network, where we developed a mental-health application powered by AI. With a foundation in full-stack software engineering and data analytics, I bridge business challenges to technological solutions.",
    
    about: 
        "My journey into tech has been unconventional. Originally a chemical engineer, I witnessed firsthand the industry's struggle with data mismanagement and time-consuming administrative tasks. Fueled by the desire to bridge this gap, I seized the opportunity to transition into tech. Awarded the British Council Scholarship for Women in STEM, I embarked on a transformative Master's journey, complemented by an intensive 3-month full-stack development bootcamp. Now, armed with a Master's in Information Technology and a specialization in Business Intelligence, I'm on a mission to revolutionize industries by crafting data-driven strategies and innovative software solutions. Let's turn challenges into opportunities together! "
};

export const experiences = [
    {
        id: 0,
        img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/neurobit.jpeg?alt=media&token=1cacbb7b-e5ea-4efb-9b3d-f5a31b9564ad",
        role: "Frontend Engineer Intern",
        company: "Neurobit",
        date: "June 2023 - Present",
        desc: "Working on the frontend of the web application using ReactJS, Redux, and Material UI.",
        skills: [
        "ReactJS",
        "Redux",
        "NodeJs",
        "Material UI",
        "HTML",
        "CSS",
        "JavaScript",
        ],

    },

    {
        id: 1,
        img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/flipr.jpeg?alt=media&token=1d72532a-45eb-4c1a-a81a-c9bed9fec543",
        role: "Fullstack Externship",
        company: "Flipr",
        date: "June 2023 - July 2023",
        desc: "Built an employee management full stack web app used Docker and deployed on AWS ec2. I was the top performer in the program.",
        skills: [
        "ReactJS",
        "Redux",
        "NodeJs",
        "Material UI",
        "HTML",
        "CSS",
        "JavaScript",
        "Docker",
        "AWS",
        "MongoDB",
        ],

    },

    {
        id: 2,
        img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/girlScript.jpeg?alt=media&token=e656a621-cf3c-4230-bf0f-e74b4cec6035",
        role: "Open Source Contributor ",
        company: "GirlScript Summer of Code",
        date: "May 2023 - Present",
        desc: "Contributing to different open-source projects and learn from industry experts",
        doc: "https://media.licdn.com/dms/image/D4D22AQGzSpgFaR4hsQ/feedshare-shrink_800/0/1684079632872?e=1687996800&v=beta&t=i0xWn_k32Oj9SxKfc6rARSbOghXD9Ge6WyEb2p2vvrc",
      },

];

export const projects = [
    {
      id: 0,
      title: "Podstream",
      date: "Apr 2023 - May 2023",
      description:
        "Developed a full-stack web application that allows users to search for, play, and pause their favorite podcasts on demand and create podcasts. Implemented user authentication using Google Auth and Jwt Auth, made responsive user interface with React JS that provides users with a seamless experience across all devices. Practiced agile methodologies to optimize team efficiency and communication.",
      image:
        "https://user-images.githubusercontent.com/64485885/234602896-a1bd8bcc-b72b-4821-83d6-8ad885bf435e.png",
      tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
      category: "web app",
      github: "https://github.com/rishavchanda/Podstream",
      external: "https://podstream.netlify.app/",
      member: [
        {
          name: "Rishav Chanda",
          img: "https://avatars.githubusercontent.com/u/64485885?v=4",
          linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
          github: "https://github.com/rishavchanda/",
        },
        {
          name: "Upasana Chaudhuri",
          img: "https://avatars.githubusercontent.com/u/100614635?v=4",
          linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
          github: "https://github.com/upasana0710",
        },
      ],
    },
    {
      id: 1,
      title: "Vexa",
      date: "Oct 2022 - Present",
      description:
        "Designed and developed the Vexa project, a project management app that helps users and teams stay organized and on track. Implemented key features such as task tracking, team collaboration, and time tracking to improve productivity and project outcomes and also invite team/project members. The plan is to add a community of users where they can find developers and other team members and chat system implementation.",
      image:
        "https://user-images.githubusercontent.com/64485885/234916413-96296f13-fe4b-4cc4-b215-e72bd7c27928.png",
      tags: [
        "React Js",
        "MongoDb",
        "Node Js",
        "Express Js",
        "Redux",
        "NodeMailer",
      ],
      category: "web app",
      github: "https://github.com/rishavchanda/Project-Management-App",
      external: "https://vexa-app.netlify.app/",
    },
    {
      id: 2,
      title: "Brain Tumor Detection",
      date: "Jan 2023 - Mar 2023",
      description:
        "Preprocessed and augmented the dataset to improve model accuracy, trained the model, created API using model and Python, and used React web app for the project's front end. Achievements: Achieved an accuracy of 99.2% to accurately detect brain tumors from medical images.",
      image:
        "https://github.com/rishavchanda/Brain-Tumor-Detection/raw/main/Readme_resource/Image2.png",
      tags: ["Python", "Keras", "TensorFlow", "VGG16", "Pickle", "React"],
      category: "data",
      github: "https://github.com/rishavchanda/Brain-Tumor-Detection",
      external: "https://brain-tumor.netlify.app/",
      member: [
        {
          name: "Rishav Chanda",
          img: "https://avatars.githubusercontent.com/u/64485885?v=4",
          linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
          github: "https://github.com/rishavchanda/",
        },
        {
          name: "Upasana Chaudhuri",
          img: "https://avatars.githubusercontent.com/u/100614635?v=4",
          linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
          github: "https://github.com/upasana0710",
        },
      ],
    },
    {
      id: 3,
      title: "Buckoid",
      date: "Dec 2021 - Apr 2022",
      description:
        "App Is Currently In Playstore 100+ Downloads. This Project proposes an “Expense Tracking App”. Keep track of your personal expenses and compare them to your monthly income with the budget planner. It has Google Drive Cloud API for Backup of User Room Database. Made with Kotlin in MVVM Architecture & Live Data.",
      image:
        "https://camo.githubusercontent.com/fbf405040ae86b5d4a40f24e4ac034982cb8c0e2d850560ba64527997b258be8/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f6c6f67696e2d65613565322e61707073706f742e636f6d2f6f2f4255434b4f49442532302831292e706e673f616c743d6d6564696126746f6b656e3d32653735376235372d323964372d346263612d613562322d653164346538313432373435",
      tags: ["Kotlin", "MVVM", "Room Database", "Google Drive Cloud API"],
      category: "mobile app",
      github: "https://github.com/rishavchanda/Buckoid-Android-App",
      external: "https://play.google.com/store/apps/details?id=com.rishav.buckoid",
    },
    {
      id: 4,
      title: "Job Finding App",
      date: "Jun 2023 - Jul 2023",
      description:
        "A Job Finding App made with React Native, Axios. Users can search for any job coming from API and apply there.",
      image:
        "https://user-images.githubusercontent.com/64485885/255237090-cf798a2c-1b41-4bb7-b904-b5353a1f08e8.png",
      tags: ["React Native", "JavaScript", "Axios"],
      category: "mobile app",
      github: "https://github.com/rishavchanda/Job-finder-App",
      webapp: "https://github.com/rishavchanda/Job-finder-App",
    },
  ];