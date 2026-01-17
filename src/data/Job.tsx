import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Play, FileText } from "lucide-react";
import { DiPostgresql } from "react-icons/di";
import { FaDocker, FaNodeJs, FaPython, FaTerminal, FaJsSquare, FaHtml5, FaReact, FaUsers } from "react-icons/fa";
import { GiShield } from "react-icons/gi";
import { SiAppwrite, SiKubernetes } from "react-icons/si";

export const DATA = {
  name: "Miguel!",
  initials: "MO",
  url: "https://idkmigueltbh.vercel.app",
  location: "Miami, Florida",
  locationLink: "https://maps.app.goo.gl/miami",
  description:
    "Cybersecurity professional specializing in network security, endpoint protection, and enterprise infrastructure management.",
  summary: (
    <>
      I graduated with my bachelor&apos;s degree from <a href="https://honors.fiu.edu/" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-primary"><strong><span className="text-[#B6862C]">Florida International University (Honors)</span></strong></a> with a B.S. in Cybersecurity and an <a href="https://cybersecurity.fiu.edu/academics/undergraduate-certificate/" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-primary"><strong>Undergraduate Certificate in Cybersecurity Intelligence & Information Policy</strong></a>, achieving a 3.58 GPA. With expertise in Active Directory, EDR solutions like CrowdStrike Falcon, and enterprise firewalls, I focus on protecting organizational assets and reducing security risks.
    </>
  ),
  avatarUrl: "/cover.jpg",
  skills: [
    {
      name: "Python",
      icon: <FaPython className="size-3" />,
    },
    {
      name: "Bash",
      icon: <FaTerminal className="size-3" />,
    },
    {
      name: "SQL",
      icon: <DiPostgresql className="size-3" />,
    },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="size-3" />,
    },
    {
      name: "HTML/CSS",
      icon: <FaHtml5 className="size-3" />,
    },
    {
      name: "React",
      icon: <FaReact className="size-3" />,
    },
    {
      name: "SonicWall NSA",
      icon: <GiShield className="size-3" />,
    },
    {
      name: "CrowdStrike Falcon EDR",
      icon: <GiShield className="size-3" />,
    },
    {
      name: "Incident Response",
      icon: <GiShield className="size-3" />,
    },
    {
      name: "Vulnerability Assessment",
      icon: <GiShield className="size-3" />,
    },
    {
      name: "Active Directory (IAM)",
      icon: <FaUsers className="size-3" />,
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
      links: [],
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
      links: [],
    },
  ],
  education: [
    {
      school: "Florida International University",
      href: "https://www.fiu.edu/",
      degree:
        "B.S. Cyber Security (Honors College) | Undergraduate Certificate in Cybersecurity Intelligence & Information Policy | GPA 3.56",
      logoUrl: "/FIU.jpeg",
      start: "2023",
      end: "2025",
    },
    {
      school: "Miami Dade College",
      href: "https://www.mdc.edu/",
      degree: "AA in Computer Science",
      logoUrl: "/miami.jpeg",
      start: "2021",
      end: "2023",
    },
  ],
  certifications: [
    {
      title: "Cybersecurity Secure The Future",
      issuer: "Palo Alto Networks",
      issued: "Dec 2024",
      credentialId: "SYHLeGarjh",
      href: "https://paloaltonetworksacademy.net/mod/customcert/verify_certificate.php",
      logoUrl: "/paloalto.jpeg",
    },
    {
      title: "CompTIA Security+ ce Certification",
      issuer: "CompTIA",
      issued: "Jul 2024",
      expires: "Jul 2027",
      href: "https://www.credly.com/badges/e26fc986-2795-4472-a71d-6defada40a8e/linked_in_profile",
      logoUrl: "/sec.jpeg",
    },
    {
      title: "Understanding Emotional Intelligence",
      issuer: "Florida International University",
      issued: "Aug 2023",
      href: "https://www.credly.com/badges/8b6a4524-8c6f-4868-9c3f-b57ce39e6806/linked_in_profile",
      logoUrl: "/FIU.jpeg",
    },
  ],
  projects: [
    {
      title: "Intelligent Poker League",
      href: "https://github.com/npastrami/IntelligentPokerLeague",
      dates: "September 2025",
      active: true,
      description:
        "Winner of Wolfram Prize at ShellHacks 2025. Built a poker platform that allows and encourages players to use advanced AI and Game Theory technology, reducing cheating on other sites by providing an outlet for technologically advanced players.",
      technologies: ["Django", "React", "Python", "PostgreSQL", "Wolfram", "TailwindCSS", "Git"],
      links: [
        {
          type: "Devpost",
          href: "https://devpost.com/software/intelligent-poker-league",
          icon: Icons.devpost,
        },
        {
          type: "Github",
          href: "https://github.com/npastrami/IntelligentPokerLeague",
          icon: Icons.github,
        },
      ],
      image: "/Poker.png",
    },
    {
      title: "Level-Up NFT Marketplace",
      href: "https://github.com/Level-Up-Miami/level-up-miami",
      dates: "September 30, 2024",
      active: true,
      description:
        "Winner ofEthMiami Challenge at FIU ShellHacks 2024. Built an open-source Web3 NFT marketplace where NFTs can be 'leveled up' through physical or digital engagement with creators, events, and brands, unlocking perks and rewards across realities.",
      technologies: ["TypeScript", "React", "Go", "Solidity", "Ethereum", "PostgreSQL", "Web3", "Hardhat"],
      links: [
        {
          type: "Devpost",
          href: "https://devpost.com/software/levelup-m95ou8",
          icon: Icons.devpost,
        },
        {
          type: "Github",
          href: "https://github.com/Level-Up-Miami/level-up-miami",
          icon: Icons.github,
        },
      ],
      image: "/up.png",
    },
    {
      title: "Palo Alto Security Strategy Research",
      href: "/OchoaSTFPresentation.pdf",
      dates: "January 13, 2025",
      active: true,
      description:
        "Academic research project collaborating on leveraging Palo Alto's proprietary technologies (XSOAR, Prisma, etc.) to design defensive strategies for the energy sector, strengthening resilience against evolving cyber threats.",
      technologies: ["Palo Alto", "Security Research"],
      links: [
        {
          type: "Presentation",
          href: "/OchoaSTFPresentation.pdf",
          icon: FileText,
        },
        {
          type: "Report",
          href: "/OchoaSTFReport.pdf",
          icon: FileText,
        },
      ],
      image: "/alto.png",
    },
    {
      title: "2FA Authenticator",
      href: "https://github.com/MiguelOchoa1/2FA",
      dates: "",
      active: true,
      description:
        "A secure two-factor authentication app that generates time-based one-time passwords (TOTP) for enhanced account security and protection against unauthorized access.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      links: [
        {
          type: "Github",
          href: "https://github.com/MiguelOchoa1/2FA",
          icon: Icons.github,
        },
      ],
      image: "/lock.png",
    },
    
  ],
  // positions removed
} as const;