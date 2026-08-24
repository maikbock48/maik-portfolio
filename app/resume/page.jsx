"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiPostgresql, SiOpenai } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

const skillList = [
  { icon: <FaHtml5 />, name: "html 5" },
  { icon: <FaCss3 />, name: "css 3" },
  { icon: <FaJs />, name: "javascript" },
  { icon: <SiTypescript />, name: "typescript" },
  { icon: <FaReact />, name: "react.js" },
  { icon: <SiNextdotjs />, name: "next.js" },
  { icon: <SiTailwindcss />, name: "tailwind.css" },
  { icon: <FaNodeJs />, name: "node.js" },
  { icon: <FaPython />, name: "python" },
  { icon: <FaDocker />, name: "docker" },
  { icon: <SiPostgresql />, name: "postgresql" },
  { icon: <SiOpenai />, name: "openai / llms" },
  { icon: <FaFigma />, name: "figma" },
  { icon: <FaDatabase />, name: "sql / nosql" },
];

const experienceItems = [
  { company: "Freelance", position: "Full Stack & AI Engineer", duration: "2025 - Present" },
  { company: "Freelancer", position: "Senior Full Stack Developer", duration: "2023 - 2025" },
  { company: "Self-employed", position: "Junior Full Stack Developer", duration: "2019 - 2023" },
];

const educationItems = [
  { institution: "Syntax Institut, Berlin", degree: "IT Qualification — Agile Dev, Cloud, Web & AI (800h)", duration: "2024 - 2025" },
  { institution: "Scrimba", degree: "Frontend Developer Career Path", duration: "2024 - 2025" },
  { institution: "Linux Professional Institute", degree: "Web Development Essentials", duration: "2024" },
  { institution: "University Bonn", degree: "Computer Science Studies", duration: "2018 - 2019" },
];

const aboutInfo = [
  { fieldName: "Name", fieldValue: "Maik Michael Bock" },
  { fieldName: "Phone", fieldValue: "(+49) 162 631 0090" },
  { fieldName: "Experience", fieldValue: null },
  { fieldName: "Nickname", fieldValue: "maikel" },
  { fieldName: "Nationality", fieldValue: "German" },
  { fieldName: "Email", fieldValue: "coding.maikel@gmail.com" },
  { fieldName: "Freelance", fieldValue: null },
  { fieldName: "Languages", fieldValue: "English, German, Polish" },
];

const Resume = () => {
  const { t } = useLanguage();
  const r = t.resume;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.3, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">{r.tabs.experience}</TabsTrigger>
            <TabsTrigger value="education">{r.tabs.education}</TabsTrigger>
            <TabsTrigger value="skills">{r.tabs.skills}</TabsTrigger>
            <TabsTrigger value="about">{r.tabs.about}</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h2 className="text-4xl font-bold">{r.experience.title}</h2>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {r.experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experienceItems.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h2 className="text-4xl font-bold">{r.education.title}</h2>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {r.education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {educationItems.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h2 className="text-4xl font-bold">{r.skills.title}</h2>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {r.skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger
                            aria-label={skill.name}
                            className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group"
                          >
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h2 className="text-4xl font-bold">{r.about.title}</h2>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {r.about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {aboutInfo.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4 whitespace-nowrap"
                    >
                      <span className="text-white/60">
                        {r.about.fields[item.fieldName]}
                      </span>
                      <span className="text-xl">
                        {r.about.values[item.fieldName] ?? item.fieldValue}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
