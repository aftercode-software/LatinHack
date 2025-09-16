import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import SplashScreen from "./components/SplashScreen";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover", // ✅ this adds viewport-fit=cover
};

export const metadata: Metadata = {
  title: "LATIN HACK",
  description:
    "Latin Hack is the best hackathon in Latin America, organized by NERDCONF. From September 27 to October 12, developers across LATAM will compete online and at in-person venues in Argentina, Brazil, Colombia, and Mexico. Over $21,000 in crypto prizes, an all-paid trip to Miami and mentorship programs are up for grabs.",
  keywords:
    "hackatamerica, blockchain, web3, crypto, developers, prizes, innovation, NERDCONFn, NERDCONF, Polkadot, community, sub0, ideas, prototypes, products",
  openGraph: {
    title: "Latin Hack 2025",
    description:
      "Join the biggest hackathon in LATAM. Compete for $21k in prizes, mentorship, and the chance to scale your project towards Sub0 Buenos Aires.",
    url: "https://latinhack.io",
    siteName: "Latin Hack",
    images: [
      {
        url: "https://latinhack.io/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Latin Hack 2025 Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Latin Hack 2025",
    description:
      "Latin Hack: The hackathon for LATAM builders in Web3. $21k in prizes and mentorship. Online and in-person across 4 countries.",
    images: ["https://latinhack.io/og-image.webp"],
  },
};

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anybody = localFont({
  src: [
    { path: "./fonts/anybody/Anybody-200.ttf", weight: "200", style: "normal" },
    { path: "./fonts/anybody/Anybody-300.ttf", weight: "300", style: "normal" },
    {
      path: "./fonts/anybody/Anybody-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/anybody/Anybody-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/anybody/Anybody-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-anybody",
  display: "swap",
});

const anybodyCondensed = localFont({
  src: [
    {
      path: "./fonts/anybody/AnybodyCondensed-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/anybody/AnybodyCondensed-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/anybody/AnybodyCondensed-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-anybody-condensed",
  display: "swap",
});

const anybodySemiCondensed = localFont({
  src: [
    {
      path: "./fonts/anybody/AnybodySemiCondensed-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/anybody/AnybodySemiCondensed-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/anybody/AnybodySemiCondensed-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-anybody-semi-condensed",
  display: "swap",
});

const anybodyExpanded = localFont({
  src: [
    {
      path: "./fonts/anybody/AnybodyExtraExpanded-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-anybody-expanded",
  display: "swap",
});

const anybodyUltraCondensed = localFont({
  src: [
    {
      path: "./fonts/anybody/AnybodyUltraCondensed-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/anybody/AnybodyUltraCondensed-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/anybody/AnybodyUltraCondensed-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-anybody-ultra-condensed",
  display: "swap",
});

const roboto = localFont({
  src: [
    {
      path: "./fonts/roboto/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    { path: "./fonts/roboto/Roboto-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-roboto",
  display: "swap",
});

const robotoMono = localFont({
  src: [
    {
      path: "./fonts/roboto/RobotoMono-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/roboto/RobotoMono-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/roboto/RobotoMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-roboto-mono",
  display: "swap",
});

const myriadPro = localFont({
  src: [
    {
      path: "./fonts/myriadpro/MyriadPro-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-myriadpro",
  display: "swap",
});

const ocra = localFont({
  src: [{ path: "./fonts/ocras/OCRAStd.otf", weight: "400", style: "normal" }],
  variable: "--font-ocra",
  display: "swap",
});

const upheaval = localFont({
  src: [
    {
      path: "./fonts/upheaval/UpheavalPro-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-upheaval",
  display: "swap",
});

const snNeoNoire = localFont({
  src: [
    {
      path: "./fonts/snneo/SNNeoNoire-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-snneo",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#151515" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />

        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body
        className={[
          geistSans.variable,
          geistMono.variable,
          anybody.variable,
          anybodyCondensed.variable,
          anybodySemiCondensed.variable,
          anybodyExpanded.variable,
          anybodyUltraCondensed.variable,
          roboto.variable,
          robotoMono.variable,
          myriadPro.variable,
          ocra.variable,
          upheaval.variable,
          snNeoNoire.variable,
          "antialiased",
        ].join(" ")}
        style={{
          backgroundImage: "url('/backgrounds/background.webp')",
          backgroundSize: "auto",
          backgroundPosition: "center top",
          backgroundRepeat: "repeat",
        }}
      >
        <GoogleTagManager
          gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID || ""}
        />
        <NextIntlClientProvider>
          {/* <AlertBar /> */}
          <SplashScreen />
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
