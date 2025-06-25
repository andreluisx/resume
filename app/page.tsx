import Head from "next/head";
import AboutMe from "./src/components/AboutMe";
import ContactMe from "./src/components/ContactMe";
import Introducing from "./src/components/Intruducing";
import { navBarContent } from "./data/ContentNavbar";
import Portfolio from "./src/components/Portifolio";
import TrackAccessClient from "./src/components/tracker/TrackerAccess";

export default function Home() {
  return (
    <>
      <Head>
        <title>André Luís | Desenvolvedor Full Stack</title>
        <meta name="description" content="Desenvolvedor Full Stack com foco em React, Next.js, Node.js, e soluções modernas para web." />
        <meta name="keywords" content="Desenvolvedor Full Stack, Next.js, React, Node.js, Portfólio, JavaScript, Web Developer" />
        <meta name="author" content="André Luís" />

        {/* Meta social (opcional) */}
        <meta property="og:title" content="André Luís | Desenvolvedor Full Stack" />
        <meta property="og:description" content="Conheça meu portfólio como desenvolvedor full stack usando as melhores tecnologias do mercado." />
        <meta property="og:image" content="/images/afoto_minha.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://resume-tau-five.vercel.app/" />
      
      </Head>

      <div className="flex flex-col w-full h-full scroll-smooth">
        <TrackAccessClient />
        <section id={"intro"}>
          <Introducing />
        </section>
        <section id={navBarContent[0].idSection}>
          <AboutMe />
        </section>
        <section id={navBarContent[1].idSection}>
          <Portfolio />
        </section>
        <section id={navBarContent[2].idSection}>
          <ContactMe />
        </section>
      </div>
    </>
  );
}
