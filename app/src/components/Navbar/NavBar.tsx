"use client"

import DesktopNavbar from "./DesktopNavBar";
import MobileNavbar from "./MobileNavBar";

export default function Navbar() {
 return (
   <header className="">
    
      {/* Desktop Navbar */}
      <div className="md:block hidden">
        <DesktopNavbar/>
      </div>

      {/* Mobile Navbar */}
      <div className="block md:hidden">
        <MobileNavbar/>
      </div>
   </header>
 );
}