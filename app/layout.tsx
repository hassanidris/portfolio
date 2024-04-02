import type { Metadata } from "next";
import { Roboto, Handlee } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import NavBar from "@/components/main/NavBar";
import Footer from "@/components/main/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Hassen Ahmed || Frontend Developer",
  description:
    "I'm a Front End Developer with an eye on UI/UX. Check out my projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}  overflow-x-hidden overflow-y-scroll bg-[#030014]`}
      >
        <StarsCanvas />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
