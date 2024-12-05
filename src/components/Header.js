import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md shadow-lg z-50 h-[80px]">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold text-white">
          Smart i
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-white font-medium mt-2">
            <li>
              <a
                href="#home"
                onClick={(e) => handleScrollToSection(e, "home")}
                className="hover:text-gray-300 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleScrollToSection(e, "about")}
                className="hover:text-gray-300 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => handleScrollToSection(e, "services")}
                className="hover:text-gray-300 transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#Location"
                onClick={(e) => handleScrollToSection(e, "Location")}
                className="hover:text-gray-300 transition duration-300"
              >
                Location
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleScrollToSection(e, "contact")}
                className="hover:text-gray-300 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            ☰
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-nav bg-black/50 absolute top-20 left-0 right-0 p-6 text-white">
          <ul>
            <li>
              <a
                href="#home"
                onClick={(e) => handleScrollToSection(e, "home")}
                className="block py-2 px-4 hover:bg-gray-700 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleScrollToSection(e, "about")}
                className="block py-2 px-4 hover:bg-gray-700 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => handleScrollToSection(e, "services")}
                className="block py-2 px-4 hover:bg-gray-700 transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#Location"
                onClick={(e) => handleScrollToSection(e, "Location")}
                className="block py-2 px-4 hover:bg-gray-700 transition duration-300"
              >
                Location
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleScrollToSection(e, "contact")}
                className="block py-2 px-4 hover:bg-gray-700 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
