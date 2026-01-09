"use client";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/site";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const homeVisible = new Set(["Spotify", "YouTube", "Instagram", "TikTok"]);
  const hideOnJob = new Set(["Spotify", "YouTube", "TikTok"]);
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
        {DATA.navbar.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={pathname?.startsWith("/job") && item.label === "Home" ? "/" : item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-16 animate-shake-zoom",
                  )}
                  style={{ animationDelay: "1.3s", animation: "shakeZoom 1s cubic-bezier(0.34, 1.56, 0.64, 1) 1.3s" }}
                >
                  <item.icon className={cn("size-6", "text-blue-600", "animate-continuous-glow-strong")} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full" />
        {Object.entries(DATA.contact.social)
          .filter(([name, social]) => {
            if (!social.navbar) return false;
            if (pathname === "/") return homeVisible.has(name);
            if (pathname?.startsWith("/job")) return !hideOnJob.has(name);
            return true;
          })
          .map(([name, social], index) => {
            const getIconColor = (iconName: string) => {
              const colorMap: { [key: string]: string } = {
                "Spotify": "text-green-500",
                "YouTube": "text-red-500",
                "TikTok": "text-black dark:text-white",
                "GitHub": "text-black dark:text-white",
                "LinkedIn": "text-blue-600",
                "Devpost": "text-teal-600",
                "Instagram": "text-pink-500",
                "Resume": "text-blue-500",
              };
              return colorMap[iconName] || "text-foreground";
            };

            return (
              <DockIcon key={name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={pathname?.startsWith("/job") && name === "Instagram" ? ((social as any).altUrl || social.url) : social.url}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-16",
                        "animate-jump",
                      )}
                      style={{ animationDelay: `${index * 0.15}s` }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className={cn("size-6", getIconColor(name))} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{name}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            );
          })}
        <Separator orientation="vertical" className="h-full py-2" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}
