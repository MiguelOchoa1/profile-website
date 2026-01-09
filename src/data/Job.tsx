import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Play } from "lucide-react";
import { DiPostgresql } from "react-icons/di";
import { FaDocker, FaNodeJs, FaPython } from "react-icons/fa";
import { SiAppwrite, SiKubernetes } from "react-icons/si";

export const DATA = {
  name: "Miguel A. Ochoa",
  initials: "MO",
  url: "https://idkmigueltbh.vercel.app",
  location: "Miami, Florida",
  locationLink: "https://maps.app.goo.gl/miami",
  description:
    "Cybersecurity enthusiast and IT professional specializing in network administration, system security, and enterprise infrastructure.",
  summary:
    "I am a passionate cybersecurity professional with a B.S. in Cyber Security from Florida International University (Honors College). Currently serving as a Network Administrator at USpharmaltd, I specialize in implementing enterprise security solutions, managing complex network infrastructure, and automating critical IT operations. With expertise in Active Directory, EDR solutions like CrowdStrike Falcon, and enterprise firewalls, I focus on protecting organizational assets and reducing security risks.",
  avatarUrl: "/cover.jpg",
  skills: [
    {
      name: "Python",
      icon: <FaPython className="size-3" />,
    },
    {
      name: "Bash",
      icon: <FaPython className="size-3" />,
    },
    {
      name: "SQL",
      icon: <DiPostgresql className="size-3" />,
    },
    {
      name: "Active Directory",
      icon: <FaPython className="size-3" />,
    },
    {
      name: "CrowdStrike Falcon",
      icon: <FaPython className="size-3" />,
    },
    {
      name: "Palo Alto Firewalls",
      icon: <FaPython className="size-3" />,
    },
    {
      name: "vSphere",
      icon: <FaPython className="size-3" />,
    },
    {
      name: "JavaScript",
      icon: <FaPython className="size-3" />,
    },
    {
      name: "React",
      icon: <FaPython className="size-3" />,
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ochoa003@gmail.com",
    tel: "(786) 258 7430",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/miguelochoa3tech",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/miguelochoa3tech",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ochoa003@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "USpharmaltd",
      href: "https://uspharmaltd.com",
      badges: [],
      location: "Miami Lakes, USA",
      title: "Network Administrator",
      logoUrl: "/USpharma%20Logo.jpeg",
      start: "December 2024",
      end: "Present",
      description: [
        " Implemented SeniorWall NSA 4700/2700 firewalls with access rules, VPN tunnels, and intrusion prevention to reduce external threat exposure by 30%",
        " Administered Active Directory security framework implementing least-privilege access controls and enforcing complex password policies",
        " Managed network gear and switches, enhancing overall network performance by 45%",
        " Strengthened endpoint security using CrowdStrike Falcon EDR, investigating alerts and isolating compromised endpoints",
        " Established email security controls through Exchange Admin Center with Safe Links, Safe Attachments, and anti-malware policies",
        " Managed lifecycle maintenance of 20+ enterprise servers with security assessments and critical patches",
      ],
      links: [
        {
          type: "Website",
          href: "https://usphermail.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      company: "USpharmaltd",
      href: "https://uspharmaltd.com",
      badges: [],
      location: "Miami Lakes, USA",
      title: "IT Technician",
      logoUrl: "/USpharma%20Logo.jpeg",
      start: "February 2023",
      end: "December 2024",
      description: [
        " Established and maintained network infrastructure to manage user access, provision accounts, and strengthen security controls",
        " Created and scheduled full system backups for Windows Server 2012 R2 using wbadmin, planning backup targets and managing recovery points",
        " Repaired and maintained end-user hardware including Lenovo and HP laptop series, diagnosing OS and hardware faults",
        " Queried and managed data within SQL Server 2008 R2, writing SQL statements for database maintenance and troubleshooting",
        " Managed lifecycle maintenance of 20+ enterprise servers performing security assessments, applying critical patches, and verifying backups",
      ],
      links: [
        {
          type: "Website",
          href: "https://usphermail.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
  ],
  education: [
    {
      school: "Florida International University",
      href: "https://www.fiu.edu/",
      degree:
        "B.S. Cyber Security (Honors College) | Undergraduate Certificate in Cybersecurity Intelligence & Information Policy | GPA 3.56",
      logoUrl: "/FIU%20LOGO.jpg",
      start: "Dec 2025"
    },
  ],
  projects: [
    {
      title: "Palo Alto Security Strategy Research",
      href: "https://github.com",
      dates: "January 13, 2025",
      active: true,
      description:
        "Academic research project collaborating on leveraging Palo Alto's proprietary technologies (XSOAR, Prisma, etc.) to design defensive strategies for the energy sector, strengthening resilience against evolving cyber threats.",
      technologies: ["Palo Alto", "Security Research", "XSOAR", "Prisma"],
      links: [
        {
          type: "Source",
          href: "https://github.com",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/cal-buddy.png",
    },
    {
      title: "Wolfram & Decentralized Asset Management Platform",
      href: "https://github.com",
      dates: "September 29, 2025",
      active: true,
      description:
        "Hackathon 2024-2025 winning project. Built intelligent gaming and blockchain solutions using React, Wolfram integration, and Ethereum smart contracts. Developed Monte Carlo-based simulations for dynamic win prediction and utilized SpeedRunEthereum and Scaffold ETH to enhance DeFi accessibility.",
      technologies: ["React", "Blockchain", "Ethereum", "Monte Carlo Simulation", "Wolfram"],
      links: [
        {
          type: "Source",
          href: "https://github.com",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/prabhawatt.png",
    },
  ],
  positions: [
    {
      title: "Certifications & Achievements",
      dates: "2025",
      location: "Professional Development",
      description:
        "CompTIA Security+ Certification | Palo Alto Academy Certification | CISSP (Certified Information Systems Security Professional) - In Progress",
      image: undefined,
      links: [
        {
          title: "CompTIA",
          href: "https://www.comptia.org/",
        },
        {
          title: "Palo Alto Networks",
          href: "https://www.paloaltonetworks.com/",
        },
      ],
    },
  ],
  achievements: [],
} as const;