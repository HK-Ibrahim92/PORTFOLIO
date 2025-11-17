"use client";

import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { experiences } from "../public/data/experiences";
import { skills } from "../public/data/skills";
import { education } from "../public/data/education";
import { ExpandableCardDemo } from "./ExpandableCard";
import { cn } from "@/lib/utils";

import { GridSmallBackgroundDemo } from "./GridSmallBackground";

export default function ExperienceSection() {
 

  const certifications = [
    {
      title: "Certification 1",
      description: "Learn advanced JavaScript concepts",
      image: "/cert/Ib_LRTC_Certificate.jpg",
      ctaText: "View Certificate",
      ctaLink: "https://example.com/cert1",
      content: "Details about Certification 1",
    },
    {
      title: "Certification 2",
      description: "Master React and Next.js",
      image: "/images/cert2.jpg",
      ctaText: "View Certificate",
      ctaLink: "https://example.com/cert2",
      content: () => <p>Details about Certification 2</p>,
    },
  ];
  

  return (
    <section className=" bg-slate-950 text-white px-6 md:px-20 py-20 min-h-screen" id="experience">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Experience & Skills  
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-35">
        {/* Left: Experience */}
        <div className="flex-1 space-y-8">

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <h3 className="text-2xl font-semibold">{exp.role}</h3>
              <p className="text-purple-400 font-medium">
                {exp.company} | {exp.duration}
              </p>
              <ul className="list-disc  list-outside mt-3 ml-5 text-gray-300 space-y-1">
                {exp.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Right: Skills + Download CV */}
        <div className="flex-1 flex flex-col items-center md:items-start space-y-10">
          {/* Skills */}
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                  className="w-24 md:w-28"
                >
                  <CircularProgressbar
                    value={skill.level}
                    text={`✓`}
                    styles={buildStyles({
                      pathColor: "rgba(147, 51, 234, 0.9)",
                      textColor: "#fff",
                      trailColor: "#4b5563",
                      textSize: "16px",
                    })}
                  />
                  <p className="text-center mt-2 text-sm">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
<div className="flex flex-col md:flex-col gap-35 mt-20 " id="certifications">
      {/* Certifications */}
      
      {/* <div>
        <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
        

        <ul className="space-y-2 text-gray-300">
           <ExpandableCardDemo certifications={certifications} />
        </ul>
      </div> */}

     {/* Education */}
<div className="mt-16">
  <h3 className="text-3xl font-extrabold mb-10 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
    Education
  </h3>

  <div className="grid md:grid-cols-2 gap-8">
    {education.map((edu, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: i * 0.2 }}
        className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/30"
      >
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <span className="text-3xl">🎓</span>
          </div>
          <div>
          <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
        <p className="text-sm text-gray-400">{edu.institution}</p>
        <p className="text-sm text-purple-400">{edu.year}</p>

        {/* Description only if exists */}
        {edu.description && (
          <p className="text-sm text-gray-300 mt-2 leading-relaxed">
            {edu.description}
          </p>
        )}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</div>

      </div>
      {/* Download CV */}
      {/* <a
        href="/Khawaja-Ibrahim-Ahmed__Resume.pdf"
        download
        className="inline-flex items-center mt-10 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
      >
        <span className="mr-2">⬇️</span> Download CV
      </a> */}
    </section>
  );
}
