"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/Job";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Calendar, X, Clock } from "lucide-react";

type LinkType = {
  readonly type: string;
  readonly href: string;
  readonly icon?: React.ComponentType<any>;
};

const BLUR_FADE_DELAY = 0.005;

const skillColors = ['text-blue-500', 'text-green-500', 'text-red-500', 'text-purple-500', 'text-orange-500', 'text-pink-500', 'text-indigo-500', 'text-teal-500', 'text-yellow-500', 'text-cyan-500'];

const skillColorMap = {
  "Bash": "text-black",
  "React": "text-blue-700",
  "SonicWall NSA": "text-orange-500",
  "CrowdStrike Falcon EDR": "text-red-500",
  "Incident Response": "text-red-500",
  "Vulnerability Assessment": "text-red-500",
  "JavaScript": "text-yellow-500",
  "SQL": "text-blue-500",
  "Python": "text-yellow-600",
  "HTML/CSS": "text-orange-600",
  "Active Directory (IAM)": "text-blue-600",
};

const slideFromRight = {
  hidden: { x: 50, opacity: 0, filter: "blur(6px)" },
  visible: { x: 0, opacity: 1, filter: "blur(0px)" },
};

const slideFromLeft = {
  hidden: { x: -50, opacity: 0, filter: "blur(6px)" },
  visible: { x: 0, opacity: 1, filter: "blur(0px)" },
};

const definitions: { [key: string]: string } = {
  "star topology": "Star Topology is a network setup in which each device is connected to a central node called a hub.",
  "Network Design": "Network Design refers to the process of planning and implementing the layout of a computer network.",
  "centralized NVR": "NVR stands for Network Video Recorder, a specialized computer system designed for recording video from IP cameras in a surveillance system.",
  "Firewall Rules": "Firewall Rules are a set of guidelines that determine what network traffic is allowed or blocked by a firewall, controlling access to and from a network.",
  "pain": "Jeff Buckley."
};

const stories = [
  {
    title: "What No One Tells You About Enterprise Surveillance Systems",
    content: `When people hear "enterprise surveillance," they usually picture cameras on walls and a monitor full of screens. What no one tells you is that the real work happens long before the first camera is ever mounted.

When we were tasked with deploying over 200 cameras for compliance, the biggest challenge wasn't buying hardware. It was planning, walking the building, identifying blind spots, understanding traffic flow, and balancing what compliance demands versus what the infrastructure can realistically support. Every camera placement mattered because fixing a bad decision later is far more painful than getting it right the first time.

Then comes the part most people underestimate: the network design. We built the system around a star topology with a centralized NVR, which sounds simple on paper. In reality, that NVR becomes the heart of everything. If it's misconfigured, overloaded, or poorly integrated into the network, the entire system suffers.

One thing no one warns you about is how quickly camera traffic can overwhelm a network. High-resolution streams, constant recording, and dozens of simultaneous feeds add up fast. I was responsible for configuring the cameras and the NVR to make sure we didn't overload the network. That meant carefully tuning bitrates, resolutions, frame rates, and stream profiles. Constantly balancing image quality against stability and performance.

And then there's the security side. Surveillance traffic doesn't just magically flow where it needs to go. Firewall rules had to be created and tested to allow only the necessary communication between cameras, the NVR, and authorized systems to avoid unnecessary exposure. It's the behind-the-scenes work that, when done right, NO ONE notices. When done wrong, EVERYONE does. (Everyone in tech understands my pain)

This is about architecture, planning, and restraint. The best systems are the ones that quietly do their job, meet compliance, don't overload the network, and never make the headlines.`
  },
  {
    title: "This One Network Fix Saved my Company Thousands", 
    content: "Explanation of the network fix that saved money..."
  },
  {
    title: "Dead Zones Exist Because of This One Mistake",
    content: "Analysis of the mistake causing dead zones..."
  }
];

export default function JobPage() {
  const [expandedStory, setExpandedStory] = useState<number | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<any | null>(null);
  const [textVisible, setTextVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const hasStartedTyping = useRef(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const renderText = (text: string) => {
    const words = ['star topology', 'network design', 'NVR', 'firewall rules', 'pain'];
    const keys = ['star topology', 'Network Design', 'NVR', 'Firewall Rules', 'pain'];
    let result = [text];
    words.forEach((word, idx) => {
      result = result.flatMap(part => 
        typeof part === 'string' ? part.split(new RegExp(`(${word})`, 'gi')).filter(p => p) : [part]
      );
    });
    return result.map((part, i) => {
      if (typeof part === 'string') {
        const idx = words.findIndex(w => part.toLowerCase() === w.toLowerCase());
        if (idx !== -1) {
          return <span key={i} className="underline cursor-pointer text-blue-400 hover:text-blue-300 transition-colors" onClick={() => setSelectedTerm(selectedTerm === keys[idx] ? null : keys[idx])}>{part}</span>;
        }
        return part;
      }
      return part;
    });
  };

  useEffect(() => {
    if (expandedStory !== null) {
      const timer = setTimeout(() => setTextVisible(true), 300);
      return () => clearTimeout(timer);
    } else {
      setTextVisible(false);
    }
  }, [expandedStory]);

  useEffect(() => {
    if (selectedBlog) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedBlog]);

  useEffect(() => {
    if (!isTyping || hasStartedTyping.current) return;
    hasStartedTyping.current = true;

    const fullText = DATA.description;
    let index = 0;

    const getRandomDelay = () => Math.random() * 70 + 30; // 30-100ms

    const getAdjacentChar = (char: string) => {
      const adjacent: { [key: string]: string } = {
        'a': 's', 's': 'a', 'd': 'f', 'f': 'd', 'g': 'h', 'h': 'g', 'j': 'k', 'k': 'j',
        'q': 'w', 'w': 'q', 'e': 'r', 'r': 'e', 't': 'y', 'y': 't', 'u': 'i', 'i': 'u',
        'o': 'p', 'p': 'o', 'z': 'x', 'x': 'z', 'c': 'v', 'v': 'c', 'b': 'n', 'n': 'b', 'm': 'm'
      };
      return adjacent[char.toLowerCase()] || char;
    };

    const type = () => {
      if (index < fullText.length) {
        const char = fullText[index];
        if (Math.random() < 0.05 && char !== ' ') { // 5% chance to typo, not on space
          const wrongChar = getAdjacentChar(char);
          setTypedText(prev => prev + wrongChar);
          setTimeout(() => {
            setTypedText(prev => prev.slice(0, -1)); // backspace
            setTimeout(() => {
              setTypedText(prev => prev + char); // correct char
              index++;
              setTimeout(type, getRandomDelay());
            }, 200);
          }, 300);
        } else {
          setTypedText(prev => prev + char);
          index++;
          setTimeout(type, getRandomDelay());
        }
      } else {
        setIsTyping(false);
      }
    };

    type();
  }, [isTyping]);

  const renderHighlightedText = (paragraph: string) => {
    const terms = ["star topology", "Network Design", "centralized NVR", "Firewall Rules", "pain"];
    let parts: (string | { term: string; text: string })[] = [paragraph];

    terms.forEach(term => {
      const newParts: (string | { term: string; text: string })[] = [];
      parts.forEach(part => {
        if (typeof part === 'string') {
          const regex = new RegExp(`\\b${term}\\b`, 'gi');
          const matches = [...part.matchAll(regex)];
          if (matches.length > 0) {
            const matchIndex = term === "pain" ? matches.length - 1 : 0;
            const match = matches[matchIndex];
            const index = match.index;
            newParts.push(part.slice(0, index));
            newParts.push({ term, text: part.slice(index, index + term.length) });
            newParts.push(part.slice(index + term.length));
          } else {
            newParts.push(part);
          }
        } else {
          newParts.push(part);
        }
      });
      parts = newParts;
    });

    return parts.map((part, i) => {
      if (typeof part === 'string') {
        return <React.Fragment key={i}>{part}</React.Fragment>;
      } else {
        return (
          <span key={i} className="font-bold cursor-pointer text-blue-400 hover:text-blue-300 transition-colors underline" onClick={() => { setSelectedTerm(part.term); if (part.term === "pain") audioRef.current?.play(); }}>
            {part.text}
          </span>
        );
      }
    });
  };

  return (
    <>
      <TracingBeam className="px-6">
        <main className={`flex items-center justify-center flex-col min-h-[100dvh] space-y-10 transition-all duration-300 ease-out ${selectedBlog ? 'blur-sm pointer-events-none' : ''}`}>
        {/* Hero Section */}
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFade delay={BLUR_FADE_DELAY} inView={true} direction="left">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I&apos;m <span className="text-blue-300">{DATA.name}</span>
                  </h1>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY} inView={true} direction="right">
                  <p className="max-w-[600px] text-sm md:text-base font-mono">
                    {typedText.split(' ').map((word, index, array) => {
                      const shades = ['text-green-800', 'text-green-700', 'text-green-600', 'text-green-500'];
                      const isLastWord = index === array.length - 1;
                      return (
                        <span key={index} className={shades[index % shades.length]}>
                          {word}{!isLastWord && ' '}
                        </span>
                      );
                    })}
                    <span className="animate-blink text-green-500">|</span>
                  </p>
                </BlurFade>
              </div>
              <BlurFade delay={BLUR_FADE_DELAY} inView={true} direction="up">
                  <Avatar className="size-44 border-2 border-transparent border-image-[linear-gradient(to_bottom,#5E6AD2,#581c87)] border-image-slice-1 hover:shadow-lg hover:shadow-foreground/20 transition-all duration-300 ease-in-out shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                  <AvatarImage src="/cover.jpg" alt={DATA.name} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="-mt-12">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <BlurFade delay={BLUR_FADE_DELAY * 3} inView={true} direction="left">
              <div className="space-y-4">
                <div className="flex justify-start items-center">
                  <h2 className="text-2xl font-bold text-blue-500 underline">About</h2>
                  <a
                    href="/Miguels Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-2 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold text-sm shadow-[0_0_20px_rgba(59,130,246,0.5)] ml-auto mr-4"
                  >
                    Download Resume
                  </a>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {DATA.summary}
                </p>
              </div>
            </BlurFade>
          </div>
        </section>

        {/* Skills Section (moved under About) */}
        <section id="skills" className="-mt-8">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <BlurFade delay={BLUR_FADE_DELAY * 11} inView={true} direction="right">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {DATA.skills.map((skill, index) => (
                    <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * (12 + index)} inView={true} direction={index % 2 === 0 ? "left" : "right"}>
                      <Badge variant="secondary" className="flex items-center gap-2">
                        <span className={`${skillColorMap[skill.name] || skillColors[index % skillColors.length]} shadow-[0_0_10px_rgba(59,130,246,0.5)]`}>{skill.icon}</span>
                        {skill.name}
                      </Badge>
                    </BlurFade>
                  ))}
                </div>
              </div>
            </BlurFade>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="work">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <BlurFade delay={BLUR_FADE_DELAY * 4} inView={true} direction="left">
              <h2 className="text-2xl font-bold text-blue-500 underline">Work Experience</h2>
            </BlurFade>
            <div className="flex flex-col gap-6">
              {DATA.work.map((work, index) => (
                <BlurFade key={work.company} delay={BLUR_FADE_DELAY * (5 + index)} inView={true} direction={index % 2 === 0 ? "left" : "right"}>
                  <div className="flex gap-4 border border-[#424c8d] rounded-lg p-4 bg-[#0f121b] bg-[radial-gradient(100%_100%_at_50%_0%,_rgba(50,49,118,0.17)_0%,_rgba(10,14,21,0)_100%)] text-[#e8e6e3] hover:scale-110 transition-transform">
                    <div className="flex-shrink-0 w-10 h-10 relative mt-1 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]">
                      {work.logoUrl && (
                        <Image
                          src={work.logoUrl}
                          alt={work.company}
                          fill
                          className="rounded-full object-cover"
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold">{work.company}</h3>
                          <p className="text-sm text-muted-foreground">{work.title}</p>
                        </div>
                        <span className="text-sm text-muted-foreground">{work.start} - {work.end}</span>
                      </div>
                      <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {work.description.map((desc, idx) => (
                          <li key={idx}>{desc}</li>
                        ))}
                      </ul>
                      {work.links.length > 0 && (
                        <div className="mt-3 flex gap-2">
                          {(work.links as readonly LinkType[]).map((link) => (
                            <Link
                              key={link.type}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs px-2 py-1 rounded bg-secondary hover:bg-secondary/80 transition-colors"
                            >
                              {link.type}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
            {/* Certifications Subsection */}
            <BlurFade delay={BLUR_FADE_DELAY * 7} inView={true} direction="right">
              <h2 className="text-2xl font-bold text-blue-500 underline">Certifications</h2>
            </BlurFade>
            <div className="flex flex-col gap-4">
              {DATA.certifications?.map((cert, index) => (
                <BlurFade key={cert.title} delay={BLUR_FADE_DELAY * (8 + index)} inView={true} direction={index % 2 === 0 ? "left" : "right"}>
                  <div className="flex gap-4 items-start justify-between border border-[#424c8d] rounded-lg p-4 bg-[#0f121b] bg-[radial-gradient(100%_100%_at_50%_0%,_rgba(50,49,118,0.17)_0%,_rgba(10,14,21,0)_100%)] text-[#e8e6e3] hover:scale-110 transition-transform">
                    <div className={`flex-shrink-0 w-10 h-10 relative mt-1 rounded-full ${cert.issuer.includes('Palo Alto') ? 'shadow-[0_0_15px_rgba(249,115,22,0.8)]' : cert.title.includes('CompTIA') ? 'shadow-[0_0_15px_rgba(239,68,68,0.8)]' : cert.issuer.includes('Florida International University') ? 'shadow-[0_0_15px_rgba(30,64,175,0.8)]' : cert.issuer.includes('Intelligent Power League') ? 'shadow-[0_0_15px_rgba(128,128,128,0.8)]' : 'shadow-[0_0_15px_rgba(59,130,246,0.8)]'}`}>
                      {"logoUrl" in cert && (cert as any).logoUrl && (
                        <Image
                          src={(cert as any).logoUrl}
                          alt={cert.title}
                          fill
                          className="rounded-full object-cover"
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold">{cert.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer} · Issued {cert.issued}
                        {"expires" in cert ? ` · Expires ${cert.expires}` : ""}
                        {"credentialId" in cert ? ` · Credential ID ${cert.credentialId}` : ""}
                      </p>
                    </div>
                    {cert.href && (
                      <Link
                        href={cert.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold px-3 py-1.5 rounded bg-secondary hover:bg-secondary/80"
                      >
                        View
                      </Link>
                    )}
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <BlurFade delay={BLUR_FADE_DELAY * 8} inView={true} direction="left">
              <h2 className="text-2xl font-bold text-blue-500 underline">Education</h2>
            </BlurFade>
            <div className="flex flex-col gap-6">
              {DATA.education.map((edu, index) => (
                <BlurFade key={edu.school} delay={BLUR_FADE_DELAY * (9 + index)} inView={true} direction={index % 2 === 0 ? "left" : "right"}>
                  <div className="flex gap-4 border border-[#424c8d] rounded-lg p-4 bg-[#0f121b] bg-[radial-gradient(100%_100%_at_50%_0%,_rgba(50,49,118,0.17)_0%,_rgba(10,14,21,0)_100%)] text-[#e8e6e3] hover:scale-110 transition-transform">
                    <div className={`flex-shrink-0 w-10 h-10 relative mt-1 rounded-full ${edu.school.includes('Florida International University') ? 'shadow-[0_0_15px_rgba(30,64,175,0.8)]' : 'shadow-[0_0_15px_rgba(59,130,246,0.8)]'}`}>
                      {edu.logoUrl && (
                        <Image
                          src={edu.logoUrl}
                          alt={edu.school}
                          fill
                          className="rounded-full object-cover"
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <h3 className="font-semibold">{edu.school}</h3>
                        <span className="text-sm text-muted-foreground">{edu.start} - {edu.end}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{edu.degree}</p>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>


        {/* Projects Section */}
        <section id="projects">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <BlurFade delay={BLUR_FADE_DELAY * 20} inView={true}>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-blue-300 underline">Projects</h2>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {DATA.projects.map((project, index) => {
                // Custom slide variants for projects
                const slideFromRight = {
                  hidden: { x: 50, opacity: 0, filter: "blur(6px)" },
                  visible: { x: 0, opacity: 1, filter: "blur(0px)" },
                };
                const slideFromLeft = {
                  hidden: { x: -50, opacity: 0, filter: "blur(6px)" },
                  visible: { x: 0, opacity: 1, filter: "blur(0px)" },
                };
                
                // Alternate slide direction based on index (even: left, odd: right)
                const variant = index % 2 === 0 ? slideFromLeft : slideFromRight;
                
                return (
                  <BlurFade key={project.title} delay={BLUR_FADE_DELAY * (21 + index)} inView={true} variant={variant}>
                    <Link href={project.href} target="_blank" rel="noopener noreferrer" className="block border border-[#424c8d] rounded-lg p-4 bg-[#0f121b] bg-[radial-gradient(100%_100%_at_50%_0%,_rgba(50,49,118,0.17)_0%,_rgba(10,14,21,0)_100%)] text-[#e8e6e3] hover:scale-110 transition-transform">
                    <div className="relative h-48 rounded-lg overflow-hidden mb-2 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                      {project.image && (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform"
                        />
                      )}
                    </div>
                    <h3 className="font-semibold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                    <div className="flex gap-1 flex-wrap mt-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                    {project.links.length > 0 && (
                      <div className="mt-3 flex gap-2">
                        {(project.links as readonly LinkType[]).map((link) => (
                          <a
                            key={link.type}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs px-2 py-1 rounded bg-secondary hover:bg-secondary/80 transition-colors font-bold flex items-center gap-1"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {React.createElement(link.icon as any, { className: "size-3 shadow-[0_0_10px_rgba(59,130,246,0.5)]" })}
                            {link.type}
                          </a>
                        ))}
                      </div>
                    )}
                  </Link>
                </BlurFade>
                );
              })}
            </div>
          </div>
        </section>

        <section id="work-experiences">
          <div className="mx-auto w-full space-y-8">
            <BlurFade delay={BLUR_FADE_DELAY * 25} inView={true} direction="up">
              <h2 className="text-2xl font-bold text-blue-500 underline"> My Articles</h2>
            </BlurFade>
            <div className="space-y-4">
              {stories.map((story, index) => {
                const variant = index === 1 ? slideFromRight : slideFromLeft;
                return (
                  <BlurFade key={story.title} delay={BLUR_FADE_DELAY * (27 + index)} inView={true} variant={variant}>
                    <div key={index} className={`w-full border border-[#424c8d] rounded-lg bg-[#0f121b] bg-[radial-gradient(100%_100%_at_50%_0%,_rgba(50,49,118,0.17)_0%,_rgba(10,14,21,0)_100%)] text-[#e8e6e3] transition-all duration-300 ease-out overflow-hidden cursor-pointer hover:shadow-lg hover:bg-[#0f121b]/80 hover:scale-105 min-h-[200px] ${expandedStory === index ? 'p-6 max-h-screen' : 'p-2'}`} onClick={() => { setSelectedBlog(story); setSelectedTerm(null); }}>
                      {expandedStory !== index ? (
                        <div className="flex flex-col justify-center items-center h-full">
                          {index === 0 && (
                            <Image
                              src="/better1.png"
                              alt="Blog image"
                              width={700}
                              height={700}
                              className="mb-2 rounded-lg object-cover shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-transform"
                            />
                          )}
                          {index === 1 && (
                            <Image
                              src="/mess.png"
                              alt="Blog image"
                              width={700}
                              height={700}
                              className="mb-2 rounded-lg object-cover shadow-[0_0_15px_rgba(245,222,179,0.5)] transition-transform"
                            />
                          )}
                          {index === 2 && (
                            <Image
                              src="/no.png"
                              alt="Blog image"
                              width={700}
                              height={700}
                              className="mb-2 rounded-lg object-cover shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-transform"
                            />
                          )}
                          <h3 className="text-2xl font-semibold text-center leading-tight">{story.title}</h3>
                          <hr className="my-2 w-full" />
                          <p className="text-sm text-muted-foreground text-left flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {index === 0 ? "January 15, 2026" : "Coming soon"}
                          </p>
                        </div>
                      ) : (
                        <div>
                          <h3 className="font-semibold font-avenir">{story.title}</h3>
                          <p className="mt-2 text-sm">{story.content}</p>
                        </div>
                      )}
                    </div>
                  </BlurFade>
                );
              })}
            </div>
          </div>
        </section>

        {/* Positions of Responsibility Section removed as requested */}
      </main>

      {/* Blog Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => { setSelectedBlog(null); setSelectedTerm(null); audioRef.current?.pause(); }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
              className={`bg-[#0f121b] border border-[#424c8d] rounded-lg ${selectedTerm ? 'max-w-6xl' : 'max-w-4xl'} w-full max-h-[90vh]`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex">
                {selectedTerm && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-1/3 p-4 border-r border-[#424c8d] bg-[#0a0c14] sticky top-0"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-semibold text-[#e8e6e3]">Definition:</h4>
                      <button
                        onClick={() => { setSelectedTerm(null); audioRef.current?.pause(); }}
                        className="text-muted-foreground hover:text-[#e8e6e3] transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {definitions[selectedTerm]}
                    </p>
                    {selectedTerm === "star topology" && (
                      <div className="relative w-full h-48 cursor-pointer ring-2 ring-blue-400/50 rounded-lg" onClick={() => setZoomedImage('/reel.png')}>
                        <Image
                          src="/reel.png"
                          alt="Star Topology Diagram"
                          fill
                          className="rounded-lg object-contain"
                        />
                      </div>
                    )}
                    {selectedTerm === "centralized NVR" && (
                      <div className="relative w-full h-48 cursor-pointer ring-2 ring-blue-400/50 rounded-lg" onClick={() => setZoomedImage('/NVR.jpg')}>
                        <Image
                          src="/NVR.jpg"
                          alt="NVR Diagram"
                          fill
                          className="rounded-lg object-contain"
                        />
                      </div>
                    )}
                    {selectedTerm === "Network Design" && (
                      <div className="relative w-full h-48 cursor-pointer ring-2 ring-blue-400/50 rounded-lg" onClick={() => setZoomedImage('/ddd.png')}>
                        <Image
                          src="/ddd.png"
                          alt="Network Design Diagram"
                          fill
                          className="rounded-lg object-contain"
                        />
                      </div>
                    )}
                    {selectedTerm === "Firewall Rules" && (
                      <div className="relative w-full h-48 cursor-pointer ring-2 ring-blue-400/50 rounded-lg" onClick={() => setZoomedImage('/firewall.png')}>
                        <Image
                          src="/firewall.png"
                          alt="Firewall Rules Diagram"
                          fill
                          className="rounded-lg object-contain"
                        />
                      </div>
                    )}
                  </motion.div>
                )}
                <div className={`flex-1 p-6 max-h-[80vh] overflow-y-auto`}>
                  {/* Header with close button */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="flex justify-between items-start mb-4"
                  >
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/cover.jpg" alt={DATA.name} />
                        <AvatarFallback>{DATA.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-lg font-semibold text-[#e8e6e3]">{DATA.name}</h3>
                        <p className="text-sm text-muted-foreground">Cybersecurity Professional</p>
                      </div>
                    </div>
                    <button
                      onClick={() => { setSelectedBlog(null); setSelectedTerm(null); audioRef.current?.pause(); }}
                      className="text-muted-foreground hover:text-[#e8e6e3] transition-colors duration-200"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </motion.div>

                  {/* Blog Title and Date */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="mb-4"
                  >
                    <h2 className="text-2xl font-bold text-[#e8e6e3] mb-2">{selectedBlog.title}</h2>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {selectedBlog.title === "What No One Tells You About Enterprise Surveillance Systems" ? "January 15, 2026" : "Coming soon"}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        ~5 min read
                      </span>
                    </div>
                  </motion.div>

                  {/* Blog Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="mb-6"
                  >
                    <h3 className="text-lg font-semibold text-[#e8e6e3] mb-6"></h3>
                    <div className="text-muted-foreground leading-relaxed space-y-8">
                      {selectedBlog.title === "What No One Tells You About Enterprise Surveillance Systems" ? (
                        selectedBlog.content.split('\n\n').map((paragraph, index) => (
                          <p key={index} className="mb-6 last:mb-0">
                            {renderHighlightedText(paragraph)}
                          </p>
                        ))
                      ) : (
                        <p className="mb-6 last:mb-0 text-center text-lg">
                          Coming Soon
                        </p>
                      )}
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="flex gap-3 pt-4 border-t border-[#424c8d]"
                  >
                    <Button
                      onClick={() => { setSelectedBlog(null); setSelectedTerm(null); audioRef.current?.pause(); }}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                    >
                      Close Article
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Zoomed Image Modal */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setZoomedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={zoomedImage}
                alt="Zoomed Image"
                className="max-w-full max-h-full object-contain rounded-lg"
                style={{ filter: 'drop-shadow(0 0 20px rgba(59,130,246,0.8))' }}
              />
              <button
                onClick={() => setZoomedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </TracingBeam>
    <audio ref={audioRef} src="/over.mp3" preload="auto" />
    </>
  );
}
