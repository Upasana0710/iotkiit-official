import "./globals.css";
import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const comfo = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iotkiit.in/"),
  title: "IoT Lab KiiT",
  description:
    "IoT Lab, KIIT is a team of dedicated students working under a team of competent and encouraging professors guiding us at every phase and step. IoT Lab is technically a research forum exploring the potential of crowdsourcing and Internet of Things for multidisciplinary research  and projects with more end-user interactions.",
  icons: "/images/logo_small.png",
  openGraph: {
    type: "website",
    url: "https://iotkiit.in/",
    title: "Iot Lab Kiit",
    description:
      "IoT Lab, KIIT is a team of dedicated students working under a team of competent and encouraging professors guiding us at every phase and step. IoT Lab is technically a research forum exploring the potential of crowdsourcing and Internet of Things for multidisciplinary research  and projects with more end-user interactions.",
    images: "/images/logo_small.png", // or webp
  },
  twitter: {
    card: "summary_large_image",
    site: "https://iotkiit.in/",
    title: "Iot Lab Kiit",
    description:
      "IoT Lab, KIIT is a team of dedicated students working under a team of competent and encouraging professors guiding us at every phase and step. IoT Lab is technically a research forum exploring the potential of crowdsourcing and Internet of Things for multidisciplinary research  and projects with more end-user interactions.",
    images: "/images/logo_small.png", // or webp
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={comfo.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
