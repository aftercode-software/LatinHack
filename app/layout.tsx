import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Latin Hack",
  description:
    "Latin Hack is a global hackathon series empowering developers to build innovative projects on Polkadot. Compete for $100,000 in funding, mentorship, and exclusive opportunities, and showcase your work at sub0 — the premier Polkadot event for the global blockchain community.",
  keywords:
    "hackathon, polkadot, blockchain, competition, developer, prizes, crypto, web3, smart contracts, parachain, innovation, sub0, funding, mentoring",
  openGraph: {
    title: "Latin Hack",
    description:
      "Join Latin Hack to build on Polkadot, win prizes, and showcase your project at sub0. Compete for $100k in funding and mentorship.",
    url: "https://latinhack.io",
    siteName: "Latin Hack",
    images: [
      {
        url: "https://latinhack.io/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Latin Hack Competition Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Latin Hack",
    description:
      "Latin Hack: Build on Polkadot, win prizes, and showcase your project at sub0. $100k in funding and mentorship available.",
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
          backgroundImage: "url('/backgrounds/background.jpg')",
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
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
