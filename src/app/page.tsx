import ContactMeForm from "@/components/contact-me-form";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { DATA } from "@/data/site";

const BLUR_FADE_DELAY = 0.04;

// Placeholder list for full-length cover videos — replace with your uploads
const FULL_COVERS = [
  { url: "/Chopin.mp4", title: "Chopin - Nocturne in C# Minor", song: "Nocturne in C Sharp Minor", thumbnailTime: 7 },
  { url: "/Richard.mp4", title: "Richard Clayderman - Love is Blue", song: "Richard Clayderman X Chopin", thumbnailTime: 2 },
  { url: "/Lilly.mp4", title: "The Promise Neverland - Isabella's Lullaby", song: "Isabella's Lullaby", thumbnailTime: 2 },
];

export default function Page() {
  return (
    <TracingBeam className="px-6">
        <main className="flex items-center justify-center flex-col min-h-[100dvh] space-y-10">
          <section id="hero">
            <div className="mx-auto w-full max-w-2xl space-y-8">
              <div className="gap-2 flex justify-between">
                <div className="flex-col flex flex-1 space-y-1.5">
                  <h1>
                    <BlurFadeText
                      delay={BLUR_FADE_DELAY}
                      className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                      yOffset={8}
                      text={"Hi, I\u0027m Miguel"}
                    />
                  </h1>
                  <BlurFade delay={BLUR_FADE_DELAY}>
                    <div className="max-w-[600px] text-sm md:text-base">
                      I taught myself how to play the piano at 17. Five years on, what started as a hobby turned into an <strong>obsession</strong>, something I know I want to pursue for the <strong>rest of my life</strong>.
                    </div>
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

          <section id="music">
            <div className="space-y-12 w-full py-12">
              <BlurFade delay={BLUR_FADE_DELAY * 11}>
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                      My Music
                    </h2>
                    <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      A piano solo I released during one of the lowest points in my life.
                    </p>
                  </div>
                </div>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 12}>
                <div className="max-w-[800px] mx-auto">
                  <iframe
                    data-testid="embed-iframe"
                    style={{ borderRadius: "12px" }}
                    src="https://open.spotify.com/embed/playlist/4stJB7IuaZGk1SBhhrkiRN?utm_source=generator&theme=0"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </div>
              </BlurFade>
            </div>
          </section>
         
          <section id="full-covers">
            <div className="space-y-12 w-full py-12">
              <BlurFade delay={BLUR_FADE_DELAY * 13}>
                <div className="max-w-[900px] mx-auto">
                  <h2 className="text-3xl font-bold tracking-tighter mb-6 text-center">
                    Full Covers Published
                  </h2>
                  <p className="text-muted-foreground mx-auto max-w-[800px] text-center mb-4">
             
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {FULL_COVERS.map((video, idx) => (
                      <BlurFade
                        key={video.title}
                        delay={BLUR_FADE_DELAY * 14 + idx * 0.05}
                      >
                        <div className="space-y-2">
                          <h3 className="text-[10px] md:text-xs font-normal text-muted-foreground text-center">
                            {video.title}
                          </h3>
                          <div className="relative aspect-video rounded-xl overflow-hidden bg-muted">
                            <video
                              className="w-full h-full object-cover"
                              controls
                              preload="metadata"
                              poster={`${video.url}#t=${video.thumbnailTime}`}
                            >
                              <source src={`${video.url}#t=${video.thumbnailTime}`} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                            <div className="pointer-events-none absolute inset-0 rounded-xl border border-black/80 z-10" />
                          </div>
                        </div>
                      </BlurFade>
                    ))}
                  </div>
                </div>
              </BlurFade>
            </div>
          </section>

          <section id="contact">
            <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
              <BlurFade delay={BLUR_FADE_DELAY * 17}>
                <div className="space-y-0">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Get in Touch
                  </h2>
                  <ContactMeForm />
                  <p className="mx-auto max-w-[600px] text-muted-foreground text-sm/relaxed md:text-base/relaxed">
                    If you'd like to collaborate, reach out to me through  {" "}
                    <a
                      href={DATA.contact.social.Instagram.url}
                      className="text-foreground hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>{" "}
                    or{" "}
                    <a
                      href={DATA.contact.social.TikTok.url}
                      className="text-foreground hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      TikTok                     
                    </a>.
                  </p>
                </div>
              </BlurFade>
            </div>
          </section>
        </main>
      </TracingBeam>
  );
}