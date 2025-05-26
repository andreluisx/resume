import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./src/components/Navbar/NavBar";


export const metadata: Metadata = {
  title: "Currículo André Luís",
  description: "desenvolvedor full-stack javascript, typescript, python",
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
