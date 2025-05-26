import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import { motion } from "motion/react";
import { navBarContent } from "../../../data/ContentNavbar";
import { NavLinksType } from "../../../data/ContentNavbar";

export default function MobileNavbar() {
  const [isMenuOpen, setMenu] = useState(false);
  const [url, setUrl] = useState('');

  const getUrl = () => {
    setUrl(typeof window !== 'undefined' ? window.location.href : '');
  }

  useEffect(() => {
    setMenu(false);
  }, [url]);

  return (
    <div className="font-sakitu fixed top-0 z-50 w-full bg-black/50 backdrop-blur-md border-b border-slate-800 flex flex-col text-slate-100 py-3 px-4">
      <div className=" flex flex-row justify-between items-center">
        <a onClick={getUrl} href="#intro" style={{ fontFamily: "Sakitu Baelah Clean" }} className="text-4xl">
          André Luís
        </a>
        <Hamburger toggled={isMenuOpen} toggle={setMenu} size={25} />
      </div>
      {isMenuOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center pt-4  px-10"
        >
          {navBarContent.map((content: NavLinksType, index: number) => (
            <motion.a
              onClick={getUrl}
              key={content.id}
              href={content.section}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="flex items-center gap-2 p-3 text-lg w-full justify-center hover:border-b border-b-white/20 transition-colors"
            >
              {content.icon}
              {content.title}
            </motion.a>
          ))}
        </motion.div>
      ) : null}
    </div>
  );
}
