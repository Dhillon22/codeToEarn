import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion, useAnimation } from "framer-motion";
import { CheckCircleIcon, FolderIcon, Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Component } from "@/components/vapourEffect";
import { ContainerScroll } from "@/components/scrollAnimation";

const courseData = [
  {
    title: "Curriculum Highlights",
    content: [
      "Master coding from scratch with real-world examples.",
      "Design websites with HTML, CSS, and JavaScript.",
      "Build cool apps using Node.js and React Native.",
      "Solve logic-based challenges using OOP techniques.",
      "Work on real projects to showcase your skills.",
    ],
  },
  {
    title: "Why Enroll?",
    content: [
      "Learn from pros with 11+ years of coding experience.",
      "Build a coding portfolio that stands out in interviews.",
      "Get personal feedback and hands-on project help.",
      "Join a fun, interactive, and supportive community.",
      "Level up your tech game for school, college, or freelancing.",
    ],
  },
  {
    title: "What You'll Learn (Beginner)",
    content: [
      "Build webpages using HTML and CSS from day one.",
      "Write interactive scripts with JavaScript.",
      "Understand core programming with OOP basics.",
      "Create your first React and mobile app project.",
      "Deploy your app live for the world to see.",
    ],
  },
  {
    title: "What You'll Learn (Advanced)",
    content: [
      "Master JavaScript ES6+, hooks, and Redux.",
      "Build blazing-fast apps using React and PWA tools.",
      "Test your code like a pro with real test tools.",
      "Create mobile-ready UIs with animations and effects.",
      "Launch your full-stack app to real devices and web.",
    ],
  },
  {
    title: "Tuition & Plans",
    content: [
      "Starter Program (4 weeks) – ₹1,999: Perfect for beginners.",
      "Beginner Program (6 weeks) – ₹3,499: Learn to build your first website.",
      "Full Course (10 weeks) – ₹5,499: Web + Mobile dev mastery.",
      "Advanced Track (12 weeks) – ₹7,499: Full-stack hands-on projects.",
      "1:1 Coaching – ₹499/session: Personalized expert help.",
    ],
  },
  {
    title: "FAQs for Parents",
    content: [
      "**Does my child need experience?**\nNope! We teach from scratch.",
      "**What if they miss a class?**\nRecordings + personal support are always available.",
      "**What platform is used?**\nWe run live sessions on Zoom/Google Meet.",
      "**Is it suitable for school kids?**\nYes! Best for grades 7–12.",
      "**Are the sessions fun & engaging?**\nAbsolutely! Interactive coding with live Q&A.",
    ],
  },
];

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

export default function CodingClassesPage() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const roadmapRef = useRef(null);
  const [loading, setLoading] = useState(false);

  // const { scrollYProgress } = useScroll({ target: roadmapRef });
  // // const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 4000); // 4 seconds

    return () => clearTimeout(timer); // cleanup on unmount
  }, []);

  return showLoading ? (
    <Component texts={["Code 2 Earn"]} />
  ) : (
    <div className="bg-white text-black p-0 m-0">
      <header className="bg-black text-white py-10 px-4 flex flex-col items-center md:flex-row md:justify-center md:gap-6 rounded-md border border-gray-300 flex-wrap mx-auto">
        {/* Logo Image */}
        <img
          src="/codeToEarn/assets/logo.jpg"
          alt="Techy Logo"
          className="w-70 h-70 object-contain sm:w-36 drop-shadow-lg  transition-transform duration-300"
        />
        {/* Text Section */}
        <div className="text-center sm:text-left max-w-xl">
          <motion.h1
            className="text-2xl sm:text-5xl font-extrabold leading-tight text-white"
            style={{
              textShadow:
                "0 0 10px #00f, 0 0 20px #00f, 0 0 30px #0ff, 0 0 40px #0ff",
            }}
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Learn To Code
          </motion.h1>

          <motion.p
            className="mt-3 text-lg sm:text-xl text-gray-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            "Interactive lessons, real-world projects, and expert guidance to
            help you master programming from scratch."{" "}
          </motion.p>
          <motion.p
            className="mt-4 italic text-base sm:text-lg text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            "Learn to build real websites and apps — not just drag and drop."
          </motion.p>
        </div>
        <img
          src="/codeToEarn/assets/how2Program.png"
          alt="Techy Logo"
          className=" h-30 object-contain w-auto"
        />
      </header>

      <div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-6 max-w-screen-xl mx-auto"
      >
        {courseData.map((section) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full min-h-[300px] p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-left flex flex-col items-start justify-start">
              <h2 className="text-xl font-semibold mb-4 bg-red">
                {section.title}
              </h2>
              <ul className="list-disc list-inside space-y-1">
                {section.content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
      {/* Roadmap */}
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Course Roadmap <br />
                <br />
              </span>
            </h1>
          </>
        }
      >
        <div ref={roadmapRef} className="max-w-4xl mx-auto p-6">
          {/* <h2 className="text-xl font-semibold mb-4">Course Roadmap</h2> */}

          <Accordion type="multiple" className="space-y-3">
            {roadmap.map((week) => (
              <AccordionItem key={week.id} value={week.id}>
                <AccordionTrigger className="flex justify-between items-center w-full p-4 rounded-md border border-gray-300 bg-gray-50 hover:bg-gray-100 text-left">
                  <div className="flex flex-col sm:flex-row justify-between w-full gap-2">
                    <span className="text-sm font-medium">{week.label}</span>
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded w-max ${
                        week.level === "Advanced"
                          ? "bg-gray-700 text-white"
                          : "bg-gray-200 text-black"
                      }`}
                    >
                      {week.level}
                    </span>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="bg-white border border-t-0 border-gray-300 p-6 space-y-6 rounded-b-md">
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    {week.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t text-sm space-y-4">
                    <div className="bg-gray-100 p-4 rounded-md flex items-start gap-2">
                      <CheckCircleIcon className="w-5 h-5 text-gray-600 mt-1" />
                      <div>
                        <p className="text-gray-800 font-semibold uppercase tracking-wide">
                          Outcome
                        </p>
                        <p className="mt-1 text-gray-900">{week.outcome}</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-md border border-gray-300 flex items-start gap-2">
                      <FolderIcon className="w-5 h-5 text-gray-500 mt-1" />
                      <div>
                        <p className="text-gray-700 font-semibold uppercase tracking-wide">
                          Project Work
                        </p>
                        <p className="mt-1 text-gray-800">{week.project}</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ContainerScroll>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-100 rounded-xl max-w-l mx-auto p-6 text-center"
      >
        <h2 className="text-2xl font-semibold">Ready to Join?</h2>
        {/* <p className="mt-2">Contact us via WhatsApp</p> */}

        <div className="mt-4 flex flex-col sm:flex-row justify-center gap-2">
          <Button
            onClick={() => {
              setLoading(true);
              window.location.href = "https://wa.me/919888266339";
            }}
          >
            Join Now
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Enquiry</Button>
            </DialogTrigger>
            <DialogContent className="p-0 overflow-hidden ">
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white z-50">
                  <Loader2 />
                </div>
              )}
              <iframe
                src="https://forms.gle/DD4FEB9co9EfxeaH8"
                width="100%"
                height="400px"
                frameBorder="0"
                className="w-full border-none z-10"
                onLoad={() => setLoading(false)}
              ></iframe>
            </DialogContent>
          </Dialog>
        </div>
      </motion.div>
    </div>
  );
}
