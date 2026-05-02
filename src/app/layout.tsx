import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  Plus_Jakarta_Sans,
  Playfair_Display,
} from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cosmos AI | Manifest the Impossible",
  description:
    "Experience the next frontier of AI image generation. Cosmos AI (cosmos-gen-4) transforms your abstract thoughts into cinematic, high-fidelity reality with 175B parameters of neural depth.",
  keywords: [
    "AI Image Generation",
    "cosmos-gen-4",
    "Neural Art",
    "Cinematic AI",
    "Generative AI",
    "High-fidelity AI",
    "Latent Space",
  ],
  authors: [{ name: "Adriel Zimbril", url: "https://www.adrielzimbril.com" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Cosmos AI | Manifest the Impossible",
    description:
      "The world's most advanced AI image generation engine. Cinematic precision, sub-second inference.",
    url: "https://cosmos-ai-landing.adrielzimbril.com",
    siteName: "Cosmos AI",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Cosmos AI Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cosmos AI | Manifest the Impossible",
    description:
      "Experience the next frontier of AI image generation. Powered by cosmos-gen-4.",
    images: ["/opengraph-image.png"],
    creator: "@adrielzimbril",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${plusJakartaSans.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#030303] text-white selection:bg-white/20 selection:text-white">
        <SmoothScroll>{children}</SmoothScroll>
        <script
          src="https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js"
          async
        ></script>
      </body>
    </html>
  );
}
