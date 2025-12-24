import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Play } from "lucide-react";
import { DiPostgresql } from "react-icons/di";
import { FaDocker, FaNodeJs, FaPython, FaSpotify } from "react-icons/fa";
import { SiAppwrite, SiKubernetes } from "react-icons/si";

export const DATA = {
  name: "Miguel Ochoa",
  initials: "CA",
  url: "https://www.chiragaggarwal.tech",
  location: "Delhi NCR, India",
  locationLink: "https://maps.app.goo.gl/Zbzok1mCik445h1C6",
  description:
    "I love composing music and I love working with technology, I've built this website!",
  summary:
    "I am Miguel Ochoa, I really enjoy playing the piano :D if you want to know more about me, I have put blogs and videos ",
  avatarUrl: "/me.png",
  skills: [
    {
      name: "Next.js",
      icon: <Icons.nextjs className="size-3" />,
    },
    {
      name: "Typescript",
      icon: <Icons.typescript className="size-3" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="size-3" />,
    },
    {
      name: "Python",
      icon: <FaPython className="size-3" />,
    },
    {
      name: "Postgres",
      icon: <DiPostgresql className="size-3" />,
    },
    {
      name: "Docker",
      icon: <FaDocker className="size-3" />,
    },
    {
      name: "Kubernetes",
      icon: <SiKubernetes className="size-3" />,
    },
    {
      name: "Appwrite",
      icon: <SiAppwrite className="size-3" />,
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "chiragaggarwal5k@gmail.com",
    tel: "+91 9667685415",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ChiragAgg5k",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/chiragagg5k/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ChiragAgg5k",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:chiragaggarwal5k@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Appwrite",
      href: "https://appwrite.io/",
      badges: [],
      location: "Remote",
      title: "Platform Engineer",
      logoUrl: "/work-experience/appwrite.png",
      start: "December 2024",
      end: "Present",
      description: [
        "- Joined Appwrite as a **full-time** Platform Engineer in June, 2025.",
        "---",
        "- Started working with Appwrite as an **Engineering Intern**.",
        "- Took ownership of the project **Synapse**, an SDK for remote serverless operating systems.",
        "- Worked on over **200+ PRs** in the OSS repo, along with many other in private repos.",
        "- Worked on Major features like Figma OAuth, Image Transformations, Types generation in CLI etc.",
      ],
      links: [
        {
          type: "Website",
          href: "https://appwrite.io/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      company: "Skillarena",
      href: "https://skillarena.in/",
      badges: [],
      location: "Remote",
      title: "Backend Developer",
      logoUrl: "/work-experience/skillarena.png",
      start: "July 2024",
      end: "September 2024",
      description: [
        "- Improved and maintained core backend systems written in the **MERN** stack",
        "- Implemented a **real-time chat application** backend utilizing WebSockets and FastAPI",
      ],
      links: [
        {
          type: "Website",
          href: "https://skillarena.in/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Letter of Recommendation",
          href: "https://drive.google.com/file/d/1ONCudngptfuLZuR7hjSinbvVSr7fEnbd/view?usp=sharing",
          icon: <Icons.email className="size-3" />,
        },
      ],
    },
    {
      company: "Clearmind AI",
      badges: [],
      href: "https://www.clearmind.plus/",
      location: "Remote",
      title: "Fullstack Developer",
      logoUrl: "/work-experience/clearmind.png",
      start: "October 2023",
      end: "December 2023",
      description: [
        "- Implemented **user feedback suggestions** such as more personalized recommendations, memory history etc.",
        "- Integrated a seamless payment gateway using **Stripe**",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.clearmind.plus/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Letter of Recommendation",
          href: "https://drive.google.com/file/d/1cgXwtu__St6bJzZNiq7SId0kWw5UVdPc/view?usp=sharing",
          icon: <Icons.email className="size-3" />,
        },
      ],
    },
  ],
  education: [
    {
      school: "Bennett University",
      href: "https://bennett.edu.in/",
      degree:
        "Bachelor's of Technology in Computer Science Engineering | 9.71 CGPA",
      logoUrl: "/bennett.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Bharti Public School",
      href: "https://www.bps.edu.in/",
      degree: "Senior Secondary (CBSE) | X - 91.2% | XII - 89.5%",
      logoUrl: "/bharti.jpg",
      start: "2010",
      end: "2022",
    },
  ],
  projects: [
    

  ],
  positions: [
    {
      title: "Content Writer",
      dates: "July 2024 - Present",
      location: "GeeksForGeeks",
      description:
        "I like to write technical articles for GeeksForGeeks in my past time. Let's me be updated with various kinds of technologies.",
      image: "/gfg.png",
      links: [
        {
          title: "Contributions",
          href: "https://www.geeksforgeeks.org/user/chiragaggarwal5k/contributions/",
        },
      ],
    },

    {
      title: "Technical Co-Head",
      dates: "August 2023 - May 2024",
      location: "Computer Society of India, Bennett University",
      description:
        "As the technical co-head of the CSI chapter of my university, I was responsible for organizing various events, workshops, and hackathons. I also mentored and guided students in their technical journey.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGnicMMBfXdQJrZy9RvzmnhzvVw1bgLTs_qA&s",
      links: [
        { title: "Website", href: "https://csiindia.org/" },
        {
          title: "LinkedIn",
          href: "https://www.linkedin.com/company/csi-india/",
        },
        {
          title: "Welcome Letter",
          href: "https://www.linkedin.com/posts/chiragagg5k_newrole-bennettuniversity-technology-activity-7097467074863636480-M1q6",
        },
      ],
    },
    {
      title: "Rearch Content Management",
      dates: "September 2022 - May 2023",
      location: "Bennett Undergraduate Research Society (BURS)",
      description:
        "The research society peaked my interest in the field of research, allowing me to be guided by seniors to work on various research related projects as well as organizing events like Rescon.",
      image: "/burs.png",
      links: [
        { title: "Website", href: "https://www.burs.bennett.edu.in/" },
        {
          title: "LinkedIn",
          href: "https://www.linkedin.com/company/buresearchsociety/posts/?feedView=all/",
        },
      ],
    },
  ],
  achievements: [],
} as const;
