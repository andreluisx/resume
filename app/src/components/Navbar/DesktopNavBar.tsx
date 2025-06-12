// DesktopNavbar.tsx

import { navBarContent, NavLinksType } from "@/app/data/ContentNavbar";
import { useCurrentSection } from "@/app/hooks/useCurrentSection";

export default function DesktopNavbar() {
  const sectionIds = navBarContent.map((item) => item.idSection);
  const activeSection = useCurrentSection(sectionIds);

  return (
    <div className="font-sakitu fixed top-0 z-50 w-full backdrop-blur-md flex flex-row justify-between text-slate-100 py-3 px-6">
      <a
        href="#intro"
        style={{ fontFamily: "Sakitu Baelah Clean" }}
        className="text-5xl"
      >
        André Luís
      </a>
      <nav>
        <ul className="flex flex-row gap-5 items-center h-full">
          {navBarContent.map((content: NavLinksType) => {
            const isActive = activeSection === content.idSection;
            return (
              <li key={content.idSection}>
                <a
                  href={content.section}
                  style={{ fontFamily: "Roboto" }}
                  className={`flex flex-row items-center gap-1 justify-center h-fit text-md transition-colors duration-300 ${
                    isActive
                      ? "text-yellow-400"
                      : "text-slate-100 hover:text-slate-300"
                  }`}
                >
                  {content.icon}
                  {content.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
