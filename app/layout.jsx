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
  title: "Graduates of Minnesota | Senior Photography",
  description:
    "Senior & graduation photography serving Minneapolis, Saint Paul and Greater Minnesota. Class of 2027.",
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
