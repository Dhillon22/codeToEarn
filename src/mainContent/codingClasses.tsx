import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircleIcon, FolderIcon, Loader2, X } from "lucide-react";
const courseData = [
  {
    title: "Curriculum Highlights",
    content: [
      "Learn easy coding concepts (OOP).",
      "Understand programming basics and problem-solving.",
      "Build websites with HTML, CSS, and JavaScript.",
      "Create backend apps with Node.js.",
      "Make mobile apps for Android and iPhone.",
    ],
  },
  {
    title: "Why Enroll?",
    content: [
      "Gain real-world coding skills for future careers.",
      "Build projects to showcase in portfolios.",
      "Get hands-on experience with web and mobile apps.",
      "Learn from industry experts with 11+ years experience.",
      "Boost confidence for college and job interviews.",
    ],
  },

  {
    title: "What You'll Learn (Beginner)",
    content: [
      "OOP & programming fundamentals",
      "HTML structure & CSS styling",
      "JavaScript basics & syntax",
      "Building interactive web pages",
      "Intro to React components",
      "Handling events & state",
      "React Native basics",
      "Styling mobile apps",
      "Project building fundamentals",
      "Deploying simple projects",
    ],
  },
  {
    title: "What You'll Learn (Advanced)",
    content: [
      "Advanced JavaScript ES6+ features",
      "React hooks & context API",
      "State management with Redux",
      "Performance optimization",
      "Testing React components",
      "Progressive Web Apps (PWAs)",
      "Mobile navigation techniques",
      "UI/UX and accessibility ",
      "Animations with React & Framer Motion",
      "Cross-platform app deployment",
    ],
  },
  {
    title: "Tuition & Plans",
    content: [
      "Basic Program (4 weeks): ₹2,999",
      "Comprehensive Program (10 weeks): ₹6,999",
      "Special discounts available for siblings and referrals.",
    ],
  },
  {
    title: "FAQs for Parents",
    content: [
      "No prior coding experience required — we start from the basics.",
      "Missed sessions are available as recordings, plus personalized support.",
      "Live interactive classes conducted via Zoom or Google Meet.",
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

  return (
    <div className="bg-white text-black p-0 m-0">
      <header className="bg-black text-white py-10 px-4 flex flex-col items-center sm:flex-row sm:justify-center sm:gap-6 rounded-md border border-gray-300">
        {/* Logo Image */}
        <img
          src="/src/assets/logo.png" // Replace with your logo image path or URL
          alt="Techy Logo"
          className="w-50 h-50 object-contain mb-0 sm:mb-0"
        />

        {/* Text Section */}
        <div className="text-center sm:text-left">
          <motion.h1
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Learn Coding
          </motion.h1>
          <motion.p
            className="mt-2 text-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Teaching coding to students from 7th to 12th grade
          </motion.p>
          <motion.p
            className="mt-4 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            “Empowering Students from 7th to 12th Grade to Build Real Coding
            Skills & Launch Their Future.”
          </motion.p>
        </div>
      </header>

      <motion.div
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
      </motion.div>

      <motion.div
        ref={roadmapRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto p-6"
      >
        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-4">Course Roadmap</h2>
          <div className="space-y-2">
            {roadmap.map((week) => (
              <Dialog key={week.id}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    <div className="flex justify-between items-center w-full">
                      <span>{week.label}</span>
                      <span
                        className={`ml-2 text-xs font-semibold px-2 py-1 rounded ${
                          week.level === "Advanced"
                            ? "bg-gray-700 text-white"
                            : "bg-gray-200 text-Black"
                        }`}
                      >
                        {week.level}
                      </span>
                    </div>
                  </Button>
                </DialogTrigger>
                <DialogContent
                  className="p-0 overflow-hidden rounded-md  bg-white
    [&>button[data-state=closed]]:hidden"
                >
                  {/* Custom Close Button */}
                  <DialogClose className="absolute top-4 right-4 z-10 text-white hover:text-gray-300">
                    <X className="h-5 w-5" />
                  </DialogClose>

                  <header className="bg-black text-white p-4">
                    <h3 className="text-lg font-semibold">{week.label}</h3>
                    <p className="text-sm mt-1 italic">{week.level}</p>
                  </header>

                  <div className="p-6">
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      {week.content.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-4 border-t text-sm space-y-4">
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
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-100 rounded-xl max-w-l mx-auto p-6 text-center"
      >
        <h2 className="text-2xl font-semibold">Ready to Join?</h2>
        <p className="mt-2">Contact us via WhatsApp or Email</p>
        <p className="mt-2">
          <strong>WhatsApp:</strong>{" "}
          <a className="underline" href="https://wa.me/919888266339">
            9888266339
          </a>
        </p>
        <p className="mt-2">
          <strong>Email:</strong>{" "}
          <a className="underline" href="mailto:Khalsa.dhillon22@gmail.com">
            Khalsa.dhillon22@gmail.com
          </a>
        </p>
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
