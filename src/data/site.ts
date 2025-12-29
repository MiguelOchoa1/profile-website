import { Icons } from "@/components/icons";

export const DATA = {
  name: "idkmigueltbh",
  description:
    "I taught myself how to play the piano at 17. Five years on, what started as a hobby turned into an obsession, something I know I want to pursue for the rest of my life.",
  summary: "I am Miguel Ochoa, I really enjoy playing the piano :D",
  url: "https://idkmigueltbh.vercel.app",
  avatarUrl: "/cover.jpg",
  initials: "MO",
  navbar: [
    { href: "/", label: "Home", icon: Icons.globe },
  ],
  contact: {
    email: "hello@example.com",
    social: {
      Spotify: {
        url: "https://open.spotify.com/artist/7v73PLtTd2H98dqduf73gG?si=lLBRbH1yRD2tifq77SKNRw",
        navbar: true,
        icon: Icons.spotify,
      },
      YouTube: {
        url: "https://www.youtube.com/@idkmigueltbh",
        navbar: true,
        icon: Icons.youtube,
      },
      TikTok: {
        url: "https://www.tiktok.com/@idkmigueltbh?lang=en",
        navbar: true,
        icon: Icons.tiktok,
      },
      Instagram: {
        url: "https://www.instagram.com/idkmigueltbh/",
        navbar: true,
        icon: Icons.instagram,
      },
    },
  },
 
} as const;
