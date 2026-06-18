import { Playfair_Display, Instrument_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
});
const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});
// The original site's real script font, self-hosted from the source site.
const holyRiver = localFont({
  src: "../public/fonts/holy-river.latin.woff2",
  variable: "--font-script",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://graduates-of-minnesota-javier-mancia.vercel.app"),
  title: {
    default: "Graduates of Minnesota | Senior & Graduation Photography",
    template: "%s | Graduates of Minnesota",
  },
  description:
    "Senior & graduation photography serving Minneapolis, Saint Paul and Greater Minnesota. Lets celebrate photos that tell your story — Class of 2027.",
  keywords: [
    "senior photography",
    "graduation photography",
    "Minneapolis",
    "Saint Paul",
    "Minnesota",
    "Class of 2027",
  ],
  openGraph: {
    title: "Graduates of Minnesota | Senior & Graduation Photography",
    description:
      "Serving Minneapolis, Saint Paul and Greater Minnesota. Lets celebrate photos that tell your story.",
    type: "website",
    images: ["/images/hero-graduates.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Graduates of Minnesota",
    description:
      "Senior & graduation photography serving Minneapolis, Saint Paul and Greater Minnesota.",
    images: ["/images/hero-graduates.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${instrument.variable} ${holyRiver.variable}`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
