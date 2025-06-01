import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion, useAnimation } from "framer-motion";
import { CheckCircleIcon, FolderIcon, Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { useInView } from "react-intersection-observer";

import { Feature } from "@/components/featureCard";
import { FlipWords } from "@/components/flipWordsComp";
import { GlowingEffect } from "@/components/glowingEffect";
import { HeroComp } from "@/components/heroComp";
import { ContainerScroll } from "@/components/scrollAnimation";
import { SplineScene } from "@/components/SplineScene";
import { Component } from "@/components/vapourEffect";
import { courseData, faqs, roadmap, plansData } from "./data";
import { FaqSection } from "@/components/faq";
import RadialOrbitalTimeline, {
  type TimelineItem,
} from "@/components/radialOrbit";
import NumberFlow from "@number-flow/react";

const flipWords = ["to Code", "Web Dev", "Mobile App Dev", "to be AI ready"];

// courseData and roadmap remain unchanged...

export default function CodingClassesPage() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const roadmapRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Punjab Tech Gurukul | Learn Coding from Scratch</title>
        <meta
          name="description"
          content="Learn coding, web development, and mobile app creation with real-world projects. Courses for school students, MCA/BE grads & freelancers. Join Punjab Tech Gurukul today!"
        />
        <meta
          name="keywords"
          content="coding classes, web development, React Native, JavaScript, HTML, CSS, programming for beginners, school coding course, mobile app development, Punjab Tech Gurukul"
        />
        <meta name="author" content="Punjab Tech Gurukul" />
        <meta property="og:title" content="Punjab Tech Gurukul" />
        <meta
          property="og:description"
          content="Join interactive coding courses and learn web and mobile development from scratch."
        />
        <meta property="og:image" content="/codeToEarn/assets/logo.jpg" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      {showLoading ? (
        <Component texts={["Code 2 Earn"]} />
      ) : (
        <main className="bg-white text-black p-0 m-0 justify-content-center">
          {/* Header */}
          <header className="bg-black text-white py-10 px-4 flex flex-col items-center md:flex-row md:justify-center md:gap-6 rounded-md border border-gray-300 flex-wrap mx-auto">
            <img
              src="/codeToEarn/assets/logo.jpg"
              alt="Punjab Tech Gurukul Logo"
              className="w-70 h-70 object-contain sm:w-36 drop-shadow-lg transition-transform duration-300"
              loading="lazy"
            />
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
                Learn <FlipWords words={flipWords} className="text-white" />
              </motion.h1>
              <motion.p
                className="mt-3 text-lg sm:text-xl text-gray-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
              >
                "Interactive lessons, real-world projects, and expert guidance
                to help you master programming from scratch."
              </motion.p>
              <motion.p
                className="mt-4 italic text-base sm:text-lg text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                "Learn to build real websites and apps — not just drag and
                drop."
              </motion.p>
            </div>
            <img
              src="/codeToEarn/assets/how2Program.png"
              alt="How to Program Illustration"
              className="h-30 object-contain w-auto"
              loading="lazy"
            />
          </header>

          {/* Hero Section */}
          <HeroComp />

          {/* Focus Section */}
          <section className="flex-1 relative px-4 sm:px-6 md:px-8">
            <Card className="w-full h-[600px] sm:h-[700px] bg-black/[0.96] relative overflow-hidden rounded-xl">
              <div className="p-4 sm:p-8 space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-[4rem] font-semibold text-white leading-tight">
                  We Focus on You
                </h2>
              </div>
              <div className="flex-1 relative h-[300px] sm:h-[400px] md:h-full">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </Card>
          </section>

          {/* Course Features */}
          <section
            ref={ref}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-6 max-w-screen-xl mx-auto"
          >
            {courseData.map((feature, index) => (
              <div key={feature.title} className="relative h-full">
                <div className="rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                  <GlowingEffect
                    spread={40}
                    glow
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                  />
                  <Feature key={feature.title} {...feature} index={index} />
                </div>
              </div>
            ))}
          </section>

          {/* Roadmap */}
          <section className="bg-black">
            <ContainerScroll
              titleComponent={
                <h2 className="text-2xl font-semibold text-white dark:text-white">
                  <span className="text-2xl md:text-[6rem] font-bold mt-1 leading-none">
                    Course Roadmap
                    <br /> <br />
                  </span>
                </h2>
              }
            >
              <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                  spread={40}
                  glow
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div
                  ref={roadmapRef}
                  className="max-w-4xl mx-auto p-6 h-full overflow-y-auto"
                >
                  <Accordion type="single" collapsible className="space-y-3">
                    {roadmap.map((week) => (
                      <AccordionItem key={week.id} value={week.id}>
                        <AccordionTrigger className="flex justify-between items-center w-full p-4 rounded-md border border-gray-300 bg-gray-50 hover:bg-gray-100 text-left">
                          <div className="flex flex-col sm:flex-row justify-between w-full gap-2">
                            <span className="text-sm font-medium">
                              {week.label}
                            </span>
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
                                <p className="mt-1 text-gray-900">
                                  {week.outcome}
                                </p>
                              </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-md border border-gray-300 flex items-start gap-2">
                              <FolderIcon className="w-5 h-5 text-gray-500 mt-1" />
                              <div>
                                <p className="text-gray-700 font-semibold uppercase tracking-wide">
                                  Project Work
                                </p>
                                <p className="mt-1 text-gray-800">
                                  {week.project}
                                </p>
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </ContainerScroll>
          </section>

          <section className="   bg-white">
            <FaqSection
              title="Frequently Asked Questions"
              description="Everything you need to know about our platform"
              items={faqs}
              contactInfo={{
                title: "Still have questions?",
                description: "We're here to help you",
                buttonText: "Contact Support",
                onContact: () =>
                  (window.location.href = "https://wa.me/919888266339"),
              }}
            />
          </section>
          <section className="bg-black">
            <RadialOrbitalTimeline
              titleText={"Online Programs"}
              timelineData={plansData}
              renderChildContent={(item: TimelineItem) => (
                <Card className="absolute top-0 left-1/2 -translate-x-1/2 w-64 bg-black/90 backdrop-blur-lg border-white/30 shadow-xl shadow-white/10 overflow-visible text-white gap-0">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/50"></div>
                  <CardHeader className="">
                    <CardTitle className="text-sm items-center text-white">
                      {item.title}{" "}
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex  h-6 px-2 py-0 mx-auto text-l rounded-none border-white/20 bg-transparent hover:bg-white/10 text-white/80 hover:text-white transition-all"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        {item.duration}
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs text-white/80">
                    <span className="text-3xl font-bold tracking-tight text-white">
                      <NumberFlow
                        value={Number(item.price)}
                        format={{
                          style: "currency",
                          currency: "INR",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        }}
                        transformTiming={{
                          duration: 500,
                          easing: "ease-out",
                        }}
                        willChange
                        className="font-variant-numeric: tabular-nums"
                      />
                    </span>
                    <ul className="list-disc list-inside space-y-2 text-sm text-left">
                      {item.content.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>

                    {/* {item.relatedIds.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-white/10">
                        <div className="flex items-center mb-2">
                          <h4 className="text-xs uppercase tracking-wider font-medium text-white/70">
                            Connected Plans
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {item.relatedIds.map((relatedId) => {
                            const relatedItem = plansData.find(
                              (i) => i.id === relatedId
                            );
                            return (
                              <Button
                                key={relatedId}
                                variant="outline"
                                size="sm"
                                className="flex items-center h-6 px-2 py-0 text-xs rounded-none border-white/20 bg-transparent hover:bg-white/10 text-white/80 hover:text-white transition-all"
                                onClick={(e) => {
                                  e.stopPropagation();
                                }}
                              >
                                {relatedItem?.title}
                              </Button>
                            );
                          })}
                        </div>
                      </div>
                    )} */}
                  </CardContent>
                </Card>
              )}
            ></RadialOrbitalTimeline>
          </section>
          {/* Call to Action */}
          <section className="bg-gray-100 rounded-xl max-w-l mx-auto p-6 text-center">
            <h2 className="text-2xl font-semibold">Ready to Join?</h2>
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
                <DialogContent className="p-0 overflow-hidden">
                  {loading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white z-50">
                      <Loader2 />
                    </div>
                  )}
                  <iframe
                    src="https://forms.gle/DD4FEB9co9EfxeaH8"
                    title="Enquiry Form"
                    width="100%"
                    height="400px"
                    frameBorder="0"
                    className="w-full border-none z-10"
                    onLoad={() => setLoading(false)}
                  ></iframe>
                </DialogContent>
              </Dialog>
            </div>
          </section>
        </main>
      )}
    </>
  );
}
