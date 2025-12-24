import ContactMeForm from "@/components/contact-me-form";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TracingBeam } from "@/components/ui/tracing-beam";
import ClientOnly from "@/components/client-only";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <ClientOnly>
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
                      text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
                    />
                  </h1>
                  <BlurFadeText
                    className="max-w-[600px] md:text-xl"
                    delay={BLUR_FADE_DELAY}
                    text={DATA.description}
                  />
                </div>
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <Avatar className="size-28 border hover:shadow-lg hover:shadow-foreground/20 transition-all duration-300 ease-in-out">
                    <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                    <AvatarFallback>{DATA.initials}</AvatarFallback>
                  </Avatar>
                </BlurFade>
              </div>
            </div>
          </section>
        
          <section id="music">
            <div className="space-y-12 w-full py-12">
              <BlurFade delay={BLUR_FADE_DELAY * 14}>
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                      My Music
                    </h2>
                    <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Check out some of my favorite tracks and playlists
                    </p>
                  </div>
                </div>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 15}>
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

          <section id="contact">
            <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
              <BlurFade delay={BLUR_FADE_DELAY * 17}>
                <div className="space-y-0">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Get in Touch
                  </h2>
                  <ContactMeForm />
                  <p className="mx-auto max-w-[600px] text-muted-foreground text-sm/relaxed md:text-base/relaxed">
                    Or just want to have a casual chat? you can just shoot me a dm on{" "}
                    <a
                      href={DATA.contact.social.X.url}
                      className="text-foreground hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>{" "}
                    or{" "}
                    <a
                      href={DATA.contact.social.LinkedIn.url}
                      className="text-foreground hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>.
                  </p>
                </div>
              </BlurFade>
            </div>
          </section>
        </main>
      </TracingBeam>
    </ClientOnly>
  );
}