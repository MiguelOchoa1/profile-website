"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/Job";
import Link from "next/link";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

export default function JobPage() {
  return (
    <TracingBeam className="px-6">
      <main className="flex items-center justify-center flex-col min-h-[100dvh] space-y-10">
        {/* Hero Section */}
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <h1>
                  <BlurFadeText
                    delay={BLUR_FADE_DELAY}
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                    yOffset={8}
                    text={`Hi, I'm ${DATA.name}`}
                  />
                </h1>
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <p className="max-w-[600px] text-sm md:text-base">
                    {DATA.description}
                  </p>
                </BlurFade>
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-36 border hover:shadow-lg hover:shadow-foreground/20 transition-all duration-300 ease-in-out">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">About</h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {DATA.summary}
                </p>
              </div>
            </BlurFade>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="work">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <h2 className="text-2xl font-bold">Work Experience</h2>
            </BlurFade>
            <div className="flex flex-col gap-6">
              {DATA.work.map((work, index) => (
                <BlurFade key={work.company} delay={BLUR_FADE_DELAY * (5 + index)}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 relative mt-1">
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
                          {work.links.map((link) => (
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
          </div>
        </section>

        {/* Education Section */}
        <section id="education">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <BlurFade delay={BLUR_FADE_DELAY * 8}>
              <h2 className="text-2xl font-bold">Education</h2>
            </BlurFade>
            <div className="flex flex-col gap-6">
              {DATA.education.map((edu, index) => (
                <BlurFade key={edu.school} delay={BLUR_FADE_DELAY * (9 + index)}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 relative mt-1">
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

        {/* Skills Section */}
        <section id="skills">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {DATA.skills.map((skill, index) => (
                    <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * (12 + index)}>
                      <Badge variant="secondary" className="flex items-center gap-2">
                        {skill.icon}
                        {skill.name}
                      </Badge>
                    </BlurFade>
                  ))}
                </div>
              </div>
            </BlurFade>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <BlurFade delay={BLUR_FADE_DELAY * 20}>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Projects</h2>
                <p className="text-muted-foreground">I like to build projects. I have built a lot of projects, here are just some of my favorites.</p>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {DATA.projects.map((project, index) => (
                <BlurFade key={project.title} delay={BLUR_FADE_DELAY * (21 + index)}>
                  <Link href={project.href} target="_blank" rel="noopener noreferrer">
                    <div className="relative h-48 rounded-lg overflow-hidden mb-2">
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
                        {project.links.map((link) => (
                          <span key={link.type} className="text-xs px-2 py-1 rounded bg-secondary">
                            {link.type}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Positions of Responsibility Section */}
        <section id="positions">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <BlurFade delay={BLUR_FADE_DELAY * 25}>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Positions of Responsibility</h2>
                <p className="text-muted-foreground">I believe in the power of collaboration and teamwork. So I like to keep myself busy while working in different communities and projects. Here are some of the positions I have held.</p>
              </div>
            </BlurFade>
            <div className="flex flex-col gap-6">
              {DATA.positions.map((position, index) => (
                <BlurFade key={position.title} delay={BLUR_FADE_DELAY * (26 + index)}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 relative mt-1">
                      {position.image && (
                        <Image
                          src={position.image}
                          alt={position.title}
                          fill
                          className="rounded-full object-cover"
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold">{position.title}</h3>
                          <p className="text-sm text-muted-foreground">{position.location}</p>
                        </div>
                        <span className="text-sm text-muted-foreground">{position.dates}</span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{position.description}</p>
                      {position.links.length > 0 && (
                        <div className="mt-3 flex gap-2">
                          {position.links.map((link) => (
                            <Link
                              key={link.title}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs px-2 py-1 rounded bg-secondary hover:bg-secondary/80 transition-colors"
                            >
                              {link.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      </main>
    </TracingBeam>
  );
}
