import type { Metadata, Viewport } from "next";
import { Martian_Mono } from "next/font/google";
import localFont from "next/font/local";
import { profile } from "@/lib/content";
import { Providers } from "@/components/Providers";
import "./globals.css";

const martian = Martian_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-martian",
  display: "swap",
});

const clash = localFont({
  variable: "--font-clash",
  display: "swap",
  src: [
    { path: "../fonts/ClashDisplay-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/ClashDisplay-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/ClashDisplay-700.woff2", weight: "700", style: "normal" },
  ],
});

const switzer = localFont({
  variable: "--font-switzer",
  display: "swap",
  src: [
    { path: "../fonts/Switzer-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Switzer-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Switzer-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/Switzer-700.woff2", weight: "700", style: "normal" },
  ],
});

const SITE = "https://sodiqolatunde.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Sodiq Olatunde — Software Engineer",
    template: "%s · Sodiq Olatunde",
  },
  description:
    "Software engineer and founder with 7+ years across sustainability data pipelines (One Click LCA), cross-border payment platforms (Heycar), and his own products (Osmani, Chattosales).",
  authors: [{ name: "Sodiq Olatunde", url: SITE }],
  creator: "Sodiq Olatunde",
  alternates: { canonical: SITE },
  openGraph: {
    type: "website",
    url: SITE,
    title: "Sodiq Olatunde — Software Engineer",
    description:
      "Architecting the data and payment systems companies run on. Lagos, Nigeria — working worldwide.",
    siteName: "Sodiq Olatunde",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sodiq Olatunde — Software Engineer",
    description: "Architecting the data and payment systems companies run on.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  // theme-color is owned by the inline script below so it tracks the theme
  // actually applied (stored choice, else OS preference), not the OS alone.
  colorScheme: "dark light",
};

// Applies the theme before first paint: stored choice wins, else OS
// preference. Also creates the theme-color meta so browser chrome matches.
const themeInit = `try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}if(t==='light'){document.documentElement.setAttribute('data-theme','light')}var m=document.createElement('meta');m.name='theme-color';m.content=t==='light'?'#f3efe6':'#0c1024';document.head.appendChild(m)}catch(e){}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sodiq Olatunde",
  jobTitle: "Software Engineer",
  url: SITE,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
  sameAs: [profile.links.linkedin, profile.links.github, profile.links.company],
  knowsAbout: [
    "Software Engineering",
    "Backend Development",
    "Data Pipelines",
    "Payment Systems",
    "Python",
    "GenAI",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${martian.variable} ${clash.variable} ${switzer.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Motion SSRs reveal targets at opacity 0; without JS, show them. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body>
        <div className="adire-field" aria-hidden />
        <div className="adire-veil" aria-hidden />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
