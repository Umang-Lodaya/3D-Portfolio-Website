import {
  backend,
  creator,
  mobile,
  web,

  cpp,
  css,
  figma,
  git,
  html,
  java,
  javascript,
  mongodb,
  mysql,
  nodejs,
  python,
  reactjs,
  tailwind,
  threejs,

  gochanakya,
  suvidha,

  stock,
  neural,
  customer,
  recommendation,
  github
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Science Engineer",
    icon: web,
  },
  {
    title: "ML Engineer",
    icon: creator,
  },
  {
    title: "AI Engineer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Machine Learning Intern",
    company_name: "Suvidha Foundation",
    icon: suvidha,
    iconBg: "#383E56",
    date: "Feb 2023 - Mar 2023",
    points: [
      "I undertook a project centered on leveraging Natural Language Processing (NLP) to address the task of summarizing interconnected documents.",
      "By utilizing Python and libraries such as NLTK, I developed algorithms that could comprehend and condense the content while retaining its essential meaning.",
      "This tool had potential applications in various domains, including creating insightful summaries of articles on specific subjects.",
      "Tech Stack: Python, NLP, Tensorflow."
    ],
  },
  {
    title: "Data Science Engineer",
    company_name: "GoChanakya",
    icon: gochanakya,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Present",
    points: [
      "Developed an Full Stack Website using Bubble.io for the company.",
      "I undertook the responsibility of designing, developing, and testing individual modules, and worked on building a financial database for Equity Market with the functionalities for managing users' portfolios.",
      "I developed statistical models leveraging deep learning techniques on historical data to enhance portfolio returns. ",
      "Tech Stack: Python, REST API, Tensorflow, Bubble.io, MS Excel.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Stock Market Trend Prediction",
    description:
      "Employs an intuitive user interface enabling dynamic stock searches, displaying real-time data visualization and diverse charts illustrating stock fluctuations",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "Streamlit",
        color: "pink-text-gradient",
      },
      {
        name: "REST API",
        color: "red-text-gradient",
      },
    ],
    image: stock,
    source_code_link: "https://umang-lodaya-stock-market-trend-prediction.streamlit.app/",
  },
  {
    name: "Neural Network Visualizer",
    description:
      "An interactive tool employs the MNIST dataset and Streamlit to showcase the inner workings of neural networks, making complex architectures and training processes accessible.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      }
    ],
    image: neural,
    source_code_link: "https://umang-lodaya-neural-network-visualizer.streamlit.app/",
  },
  {
    name: "Customer Segmentation",
    description:
      "Built a project on analyzing customer buying behavior in the banking sector, focusing on term deposit subscriptions for a Portuguese Bank.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "SkLearn",
        color: "green-text-gradient",
      },
      {
        name: "NumPy",
        color: "pink-text-gradient",
      },
      {
        name: "Pandas",
        color: "red-text-gradient",
      },
    ],
    image: customer,
    source_code_link: "https://github.com/Umang-Lodaya/ML-Mini-Project",
  },
  {
    name: "Movie Recommedation System",
    description:
      "Provide users with personalized movie recommendations based on their ratings and preferences",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "JSP",
        color: "green-text-gradient",
      },
      {
        name: "JSF",
        color: "pink-text-gradient",
      },
      {
        name: "REST API",
        color: "red-text-gradient",
      },
    ],
    image: recommendation,
    source_code_link: "https://www.dukelearntoprogram.com//capstone/recommender.php?id=sBAwi8PoaupCgm",
  },
];

const profileLinks = [
  {
    name: 'LinkedIn',
    icon: github,
    website: 'https://www.linkedin.com/in/umang-lodaya-074496242/'
  },
  {
    name: "LeetCode",
    icon: python,
    website: "https://www.leetcode.com/UmangLodaya"
  },
  {
    name: 'Github',
    icon: github,
    website: 'https://www.github.com/Umang-Lodaya'
  },
  {
    name: 'Kaggle',
    icon: github,
    website: 'https://www.kaggle.com/umanglodaya'
  },
]

export { services, technologies, experiences, testimonials, projects, profileLinks };