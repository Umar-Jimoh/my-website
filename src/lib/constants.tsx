import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaPhp, FaLaravel } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { DiDocker } from "react-icons/di";
import { PiFileHtmlLight, PiFileCssLight } from "react-icons/pi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoIosGitCommit } from "react-icons/io";

export const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Resume",
    href: "/resume",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const skillItems = [
  {
    id: "javascript",
    icon: <RiJavascriptLine size="24px" />,
    label: "JavaScript",
  },
  {
    id: "typescript",
    icon: <TbBrandTypescript size="24px" />,
    label: "TypeScript",
  },
  {
    id: "react",
    icon: <FaReact size="24px" />,
    label: "React",
  },
  {
    id: "php",
    icon: <FaPhp size="24px" />,
    label: "PHP",
  },
  {
    id: "laravel",
    icon: <FaLaravel size="24px" />,
    label: "Laravel",
  },
  {
    id: "mysql",
    icon: <GrMysql size="24px" />,
    label: "MySQL",
  },
  {
    id: "docker",
    icon: <DiDocker size="24px" />,
    label: "Docker",
  },
  {
    id: "html",
    icon: <PiFileHtmlLight size="24px" />,
    label: "HTML",
  },
  {
    id: "css",
    icon: <PiFileCssLight size="24px" />,
    label: "CSS",
  },
  {
    id: "tailwindcss",
    icon: <BiLogoTailwindCss size="24px" />,
    label: "Tailwind CSS",
  },
  {
    id: "git",
    icon: <IoIosGitCommit size="24px" />,
    label: "Git",
  },
];

export const experience = [
  {
    id: "1",
    role: "FullStack Developer",
    company: "Uverus inc.",
    period: {
      from: "2015",
      to: "present",
    },
    details: [
      "Developed and maintained backend systems for multiple web applications using Laravel framework.",
      "Designed and implemented RESTful APIs for seamless integration with frontend and mobile applications.",
      "Collaborated with frontend developers to ensure efficient data flow and optimal performance.",
      "Optimized database queries and application logic to improve response times and scalability.",
    ],
  },
  {
    id: "2",
    role: "Backend Developer",
    company: "Uverus inc.",
    period: {
      from: "2015",
      to: "2019",
    },
    details: [
      "Participated in code reviews and provided constructive feedback to team members.",
      "Contributed to the development of new features and enhancements based on user feedback and business requirements.",
    ],
  },
];
