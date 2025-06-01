import type { TimelineItem } from "@/components/radialOrbit";
import {
  Book,
  BrainCircuit,
  Cloud,
  IndianRupee,
  Puzzle,
  Rocket,
  Settings,
  UserCircle,
} from "lucide-react";

const courseData = [
  {
    title: "Curriculum Highlights",
    description: [
      "Master coding from scratch with real-world examples.",
      "Design websites with HTML, CSS, and JavaScript.",
      "Build cool apps using Node.js and React Native.",
      "Solve logic-based challenges using OOP techniques.",
      "Work on real projects to showcase your skills.",
    ],
    icon: <Settings />,
  },
  {
    title: "Why Enroll?",
    description: [
      "Learn from pros with 11+ years of coding experience.",
      "Build a coding portfolio that stands out in interviews.",
      "Get personal feedback and hands-on project help.",
      "Join a fun, interactive, and supportive community.",
      "Level up your tech game for school, college, or freelancing.",
    ],
    icon: <Cloud />,
  },
  {
    title: "What You'll Learn (Beginner)",
    description: [
      "Build webpages using HTML and CSS from day one.",
      "Write interactive scripts with JavaScript.",
      "Understand core programming with OOP basics.",
      "Create your first React and mobile app project.",
      "Deploy your app live for the world to see.",
    ],
    icon: <Cloud />,
  },
  {
    title: "What You'll Learn (Advanced)",
    description: [
      "Master JavaScript ES6+, hooks, and Redux.",
      "Build blazing-fast apps using React and PWA tools.",
      "Test your code like a pro with real test tools.",
      "Create mobile-ready UIs with animations and effects.",
      "Launch your full-stack app to real devices and web.",
    ],
    icon: <Book />,
  },
];
const faqs = [
  {
    question: "Does my child need any prior experience in coding?",
    answer:
      "Not at all! We teach from scratch, starting with the basics of programming.",
  },
  {
    question: "What happens if a student misses a class?",
    answer:
      "No worries! All sessions are recorded and personal doubt-clearing support is provided.",
  },
  {
    question: "What platform do you use for classes?",
    answer: "We conduct our live, interactive classes via Zoom or Google Meet.",
  },
  {
    question: "Are these classes suitable for school students?",
    answer:
      "Yes! The curriculum is designed for students from Grade 7 to 12, but open to all who are interested.",
  },

  {
    question: "Is the mode of teaching online or offline?",
    answer:
      "Classes are 100% online so students can join from anywhere in India or abroad.",
  },

  {
    question: "Can schools or colleges invite you for guest lectures?",
    answer:
      "Yes! We offer guest lectures and coding workshops for schools, colleges, and tech events.",
  },
  {
    question: "What is the structure of the sessions?",
    answer:
      "Sessions are live, Zoom-based, with practical coding, interactive Q&A, and project walkthroughs.",
  },
  {
    question: "What topics will students learn?",
    answer:
      "We teach programming basics, web and mobile app development, real-world project building, and tech career guidance.",
  },
];

const tutionPlans = {
  title: "Tuition & Plans",
  description: [
    "Starter Program (4 weeks) – ₹1,999: Perfect for beginners.",
    "Beginner Program (6 weeks) – ₹3,499: Learn to build your first website.",
    "Full Course (10 weeks) – ₹5,499: Web + Mobile dev mastery.",
    "Advanced Track (12 weeks) – ₹7,499: Full-stack hands-on projects.",
    "1:1 Coaching – ₹499/session: Personalized expert help.",
  ],
  icon: <IndianRupee />,
};

const roadmap = [
  {
    label: "Week 1–2: Programming Foundations",
    id: "week1",
    level: "Beginner",
    content: [
      "Introduction to programming & OOP basics",
      "Variables, data types, conditions",
      "Loops and functions",
      "Basic problem-solving",
      "Hands-on: Simple console programs",
    ],
    outcome: "Understand core programming concepts and write basic programs.",
    project: "Build simple console-based apps.",
  },
  {
    label: "Week 3–4: Web Fundamentals & JavaScript Basics",
    id: "week3",
    level: "Beginner",

    content: [
      "HTML5 structure & CSS basics",
      "JavaScript syntax & DOM manipulation",
      "Events and form handling",
      "Intro to TypeScript basics",
      "Mini project: Interactive web page",
    ],
    outcome: "Create interactive web pages using HTML, CSS, and JavaScript.",
    project: "Build an interactive webpage project.",
  },
  {
    label: "Week 5–6: JavaScript Deep Dive & TypeScript",
    id: "week5",
    level: "Advanced",

    content: [
      "Advanced JavaScript concepts (ES6+)",
      "Functions, closures, scopes",
      "TypeScript types & interfaces",
      "Debugging & code quality",
      "Project: Dynamic To-Do List app",
    ],
    outcome: "Write clean, type-safe JavaScript/TypeScript code.",
    project: "Develop a dynamic To-Do List app.",
  },
  {
    label: "Week 7–8: React Basics & Web App Development",
    id: "week7",
    level: "Advanced",

    content: [
      "React components & JSX",
      "Props, state & lifecycle",
      "Handling events & conditional rendering",
      "Styling React apps",
      "Project: Simple portfolio website",
    ],
    outcome: "Build reactive user interfaces with React.",
    project: "Create a portfolio website using React.",
  },
  {
    label: "Week 9–10: Advanced React & Mobile App Introduction",
    id: "week9",
    level: "Advanced",

    content: [
      "React hooks & context API",
      "Routing & navigation",
      "Introduction to React Native",
      "Styling & layout in React Native",
      "Project: Basic mobile app (iOS & Android)",
    ],
    outcome: "Develop cross-platform mobile apps and advanced React apps.",
    project: "Build a basic mobile app with React Native.",
  },
  {
    label: "Week 11–12: Advanced React Native & Deployment",
    id: "week11",
    level: "Advanced",

    content: [
      "State management with Redux",
      "Animations & gestures",
      "Platform-specific components & APIs",
      "Performance optimization",
      "Deploying apps to App Store & Play Store",
    ],
    outcome: "Deploy and optimize mobile apps with advanced features.",
    project: "Publish your mobile app to app stores.",
  },
];
const plansData: TimelineItem[] = [
  {
    id: 1,
    level: "Starter",
    title: "Starter Program",
    price: "799",
    content: [
      "Introduction to programming basics",
      "Understanding HTML & CSS",
      "Hands-on with simple web pages",
      "Explaining real-world use cases",
      "Q&A and live debugging sessions",
    ],
    icon: Rocket,
    outcome: "Get introduced to programming fundamentals.",
    project: "Complete simple HTML/CSS exercises.",
    relatedIds: [],
    duration: "3 weeks",
  },
  {
    id: 2,
    level: "Beginner",
    title: "Beginner Program",
    price: "1399",
    content: [
      "Learn HTML5 and semantic structure",
      "Build layouts with CSS and Flexbox",
      "Introduction to JavaScript",
      "Create and deploy a basic website",
      "Daily coding tasks and mini-projects",
    ],
    icon: Puzzle,
    outcome: "Build and deploy a basic website.",
    project: "Create a personal portfolio site.",
    relatedIds: [],
    duration: "4 weeks",
  },
  {
    id: 3,
    level: "Intermediate",
    title: "Full Course",
    price: "2599",
    content: [
      "Responsive design with Tailwind CSS",
      "JavaScript DOM manipulation",
      "Intro to React and component structure",
      "Mobile app basics with Flutter/React Native",
      "Deploying apps using Netlify/Firebase",
    ],
    icon: Settings,
    outcome: "Master both web and mobile app development.",
    project: "Build a responsive website and a simple mobile app.",
    relatedIds: [4],
    duration: "6 weeks",
  },
  {
    id: 4,
    level: "Advanced",
    title: "Advanced Track",
    price: "4599",
    content: [
      "Full-stack app development (MERN)",
      "API integration and database handling",
      "Version control with Git/GitHub",
      "Authentication & user roles",
      "Performance optimization and testing",
    ],
    icon: BrainCircuit,
    outcome: "Build real-world full-stack applications.",
    project: "Create a full-stack app with backend integration.",
    relatedIds: [],
    duration: "8 weeks",
  },
  {
    id: 5,
    level: "Personal",
    title: "Personal Coaching",
    price: "499",
    content: [
      "Personal code review",
      "Interview preparation",
      "Debugging help",
      "Freelancing guidance",
      "Project-based mentorship",
    ],
    icon: UserCircle,
    outcome: "Clarify doubts, get interview tips or review code.",
    project: "Custom guidance based on your goals.",
    relatedIds: [],
    duration: "Per Class",
  },
];
export { courseData, faqs, plansData, roadmap, tutionPlans };
