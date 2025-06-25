import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./src/components/Navbar/NavBar";

export const metadata: Metadata = {
  title: "Currículo André Luís | Desenvolvedor Full Stack",
  description:
    "Desenvolvedor Full Stack com experiência em JavaScript, TypeScript, React, Next.js, Node.js e Python.",
  keywords: [
    "Desenvolvedor Full Stack",
    "André Luís",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python",
    "Portfólio",
    "Desenvolvedor Web",
  ],
  authors: [{ name: "André Luís", url: "https://resume-tau-five.vercel.app/" }],
  creator: "André Luís",
  metadataBase: new URL("https://resume-tau-five.vercel.app/"),
  openGraph: {
    title: "Currículo André Luís | Desenvolvedor Full Stack",
    description:
      "Portfólio de André Luís com foco em desenvolvimento web moderno usando React, Next.js e Node.js.",
    url: "https://resume-tau-five.vercel.app/",
    siteName: "Currículo André Luís",
    images: [
      {
        url: "/images/afoto_minha.jpg", 
        width: 1200,
        height: 630,
        alt: "Imagem de capa do portfólio de André Luís",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black scroll-smooth">
        
        <Navbar/>
        <div className=" bg-black ">
          {children}
        </div>
      </body>
    </html>
  );
}
