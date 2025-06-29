const navLinks = [
  {
    name: "Education",
    link: "#education",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Hobbies",
    link: "#hobbies",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Prod Manager", imgPath: "./images/ideas.svg"},
  { text: "Consultant", imgPath: "./images/concepts.svg"},
  { text: "Web Developer", imgPath: "./images/designs.svg"},
  { text: "Programmer", imgPath: "./images/code.svg"},
  { text: "Prod Manager", imgPath: "./images/ideas.svg"},
  { text: "Consultant", imgPath: "./images/concepts.svg"},
  { text: "Web Developer", imgPath: "./images/designs.svg"},
  { text: "Programmer", imgPath: "./images/code.svg"},
];

const counterItems = [
  { value: 4, suffix: "+", label: "Years of Experience" },
  // { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 5, suffix: "+", label: "Completed Projects" },
  // { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const educationData = [
  {
    year: "2025-27",
    title: "PGDM",
    grades: "CAT 98%ile",
    institution: "MDI Gurgaon",
    content: "Spec. in IT Management, Consulting & Strategy.",
    imgPath: "./images/mdig.png",
  },
  {
    year: "2019-23",
    title: "B. Tech",
    grades: "CGPA 8.05",
    institution: "NIT Rourkela",
    content: "Graduated with Honours in Electrical Engineering.",
    imgPath: "./images/nitr.png",
  },
  {
    year: "2017-19",
    title: "Class XII",
    grades: "95.6%",
    institution: "CBSE Board",
    content: "Science (PCM) with Computer Science.",
    imgPath: "./images/davcsp.png",
  },
  {
    year: "2007-17",
    title: "Class X",
    grades: "97.2%",
    institution: "ICSE Board",
    content: "Excellent academic record with extra-curriculars.",
    imgPath: "./images/ss.png",
  },
];

const logoIconsList = [
  {
    imgPath: "./images/logos/company-logo-1.png",
    imgPath: "./images/logos/company-logo-1.png",
  },
  {
    imgPath: "./images/logos/company-logo-2.png",
    imgPath: "./images/logos/company-logo-2.png",
  },
  {
    imgPath: "./images/logos/company-logo-3.png",
    imgPath: "./images/logos/company-logo-3.png",
  },
  {
    imgPath: "./images/logos/company-logo-4.png",
    imgPath: "./images/logos/company-logo-4.png",
  },
  {
    imgPath: "./images/logos/company-logo-5.png",
    imgPath: "./images/logos/company-logo-5.png",
  },
  {
    imgPath: "./images/logos/company-logo-6.png",
    imgPath: "./images/logos/company-logo-6.png",
  },
  {
    imgPath: "./images/logos/company-logo-7.png",
    imgPath: "./images/logos/company-logo-7.png",
  },
  {
    imgPath: "./images/logos/company-logo-8.png",
    imgPath: "./images/logos/company-logo-8.png",
  },
  {
    imgPath: "./images/logos/company-logo-9.png",
    imgPath: "./images/logos/company-logo-9.png",
  },
  {
    imgPath: "./images/logos/company-logo-10.png",
    imgPath: "./images/logos/company-logo-10.png",
  },
  {
    imgPath: "./images/logos/company-logo-11.png",
    imgPath: "./images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "./images/ckt.png",
    title: "Cricket",
    desc: "It hones my fitness, teamwork, discipline, decision making, and strategic thinking — skills essential in any project.",
  },
  {
    imgPath: "./images/chess.png",
    title: "Chess",
    desc: "It sharpens my decision-making and forward planning — essential for solving complex business problems.",
  },
  {
    imgPath: "./images/news.png",
    title: "Reading Newspaper",
    desc: "It updates me on market trends, business news, global affairs & feeds my strategic mindset.",
  },
  {
    imgPath: "./images/mov.png",
    title: "Watching Movies",
    desc: "It improves my creativity and acts as a source of inspiration and fresh perspectives along with recreation.",
  },
];

const techStackImgs = [
  {
    name: "Frontend Developer",
    imgPath: "./images/logos/react.png",
    imgPath: "./images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "./images/logos/python.svg",
    imgPath: "./images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "./images/logos/node.png",
    imgPath: "./images/logos/node.png",
  },
  {
    name: "C++ Developer",
    imgPath: "./images/logos/three.png",
    imgPath: "./images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "./images/logos/git.svg",
    imgPath: "./images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Frontend Developer",
    modelPath: "./models/react_logo-transformed.glb",
    modelPath: "./models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "./models/node-transformed.glb",
    modelPath: "./models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "C++ Developer",
    modelPath: "./models/three.js-transformed.glb",
    modelPath: "./models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "./models/python-transformed.glb",
    modelPath: "./models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "./models/git-svg-transformed.glb",
    modelPath: "./models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Aman’s work at Synopsys brought a high level of quality and efficiency. He delivered solutions that enhanced our customer experience & meet our product goals.",
    imgPath: "./images/exp1.png",
    logoPath: "./images/logo1.png",
    imgPath: "./images/exp1.png",
    logoPath: "./images/logo1.png",
    title: "Software Developer @ Synopsys",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed Verilog Case Block Synthesis feature for Synopsys compiler used for verification and emulation of IPs.",
      "Worked on projects to implement features and techniques to simplify huge circuits, system tasks call handling & other customer-related support.",
      "Worked to enhance customer usability, compiler efficiency, and reduce compilation time by 40%",
    ],
  },
  {
    review: "Aman’s work at Mathworks brought a high level of quality and efficiency. He delivered solutions that enhanced our customer experience & meet our product goals.",
    imgPath: "./images/exp2.png",
    logoPath: "./images/logo2.png",
    imgPath: "./images/exp2.png",
    logoPath: "./images/logo2.png",
    title: "Software Developer Intern @ Mathworks",
    date: "May 2022 - July 2022",
    responsibilities: [
      "Worked on a ML Project to test Simulink Hardware Support Package by applying various ML Models on STM32 Microelectronics board.",
      "Performed feature extraction on 2 datasets and selected those features that produced improved accuracy.",
      "Performed Exploratory Data Analysis and trained & tested 3 ML models which achieved 100% test accuracy.",
    ],
  },
  {
    review: "Aman’s contributions to Full-stack web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "./images/exp3.png",
    logoPath: "./images/logo3.png",
    imgPath: "./images/exp3.png",
    logoPath: "./images/logo3.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2022",
    responsibilities: [
      "Developed responsive full-stack websites using React.js, Node.js, Express, MongoDB, and Tailwind CSS.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Integrated RESTful APIs and third-party services (e.g. Firebase, EmailJS) to enhance functionality, and improve UI/UX.",
    ],
  },
  // {
  //   review: "Aman brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
  //   imgPath: "/images/exp4.png",
  //   logoPath: "/images/logo4.png",
  //   title: "Frontend Developer",
  //   date: "January 2021 - Present",
  //   responsibilities: [
  //     "Developed and maintained user-facing features for the Hostinger website.",
  //     "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
  //     "Optimized web applications for maximum speed and scalability.",
  //   ],
  // },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "./images/logo1.png",
    imgPath: "./images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "./images/logo2.png",
    imgPath: "./images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "./images/logo3.png",
    imgPath: "./images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Aman. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "./images/client1.png",
    imgPath: "./images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Aman was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "./images/client3.png",
    imgPath: "./images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Aman was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Aman's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Aman is the ideal partner.",
    imgPath: "./images/client2.png",
    imgPath: "./images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Aman was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "./images/client5.png",
    imgPath: "./images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Aman’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "./images/client4.png",
    imgPath: "./images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Aman was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "./images/client6.png",
    imgPath: "./images/client6.png",
  },
];

const socialImgs = [
  {
    name: "linkedin",
    imgPath: "./images/linkedin.png",
    imgPath: "./images/linkedin.png",
    link: "https://www.linkedin.com/in/amanjeet-pani/",
  },
  {
    name: "insta",
    imgPath: "./images/insta.png",
    imgPath: "./images/insta.png",
    link: "https://www.instagram.com/aman.jeet_07/",
  },
  {
    name: "fb",
    imgPath: "./images/fb.png",
    imgPath: "./images/fb.png",
    link: "https://www.facebook.com/amanjeetpani/",
  },
  {
    name: "x",
    imgPath: "./images/x.png",
    imgPath: "./images/x.png",
    link: "https://twitter.com/amanjeetpani",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  educationData,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
