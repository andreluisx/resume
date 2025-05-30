import AboutMe from "./src/components/AboutMe";
import ContactMe from "./src/components/ContactMe";
import Introducing from "./src/components/Intruducing";
import { navBarContent } from "./data/ContentNavbar";
import Portfolio from "./src/components/Portifolio";
import TrackAccessClient from "./src/components/tracker/TrackerAccess";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full scroll-smooth">
      {/* <TrackAccessClient /> */}
      <section id={'intro'}>
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
  );
}
