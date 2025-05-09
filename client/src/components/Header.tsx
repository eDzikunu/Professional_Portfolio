import { useState, useEffect } from "react";
import { Link } from "wouter";
import useScrollActive from "@/hooks/useScrollActive";
import { useTheme } from "@/lib/ThemeContext";
import { Sun, Moon } from "lucide-react";
import Resume from "../assets/Edem_Dzikunu_Full-Stack_Resume.pdf";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollActive();
  const { theme, toggleTheme } = useTheme();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled
          ? "shadow-sm bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a
          href="#hero"
          className="text-2xl font-bold flex items-center space-x-2"
        >
          <span className="text-blue-600 dark:text-blue-400">Edem</span>
          <span className="text-gray-800 dark:text-white">Dzikunu</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#about"
            className={`text-gray-700 hover:text-blue-600 transition-colors relative dark:text-gray-300 dark:hover:text-blue-400 ${
              activeSection === "about"
                ? "text-blue-600 dark:text-blue-400 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-blue-600 dark:after:bg-blue-400"
                : ""
            }`}
          >
            About
          </a>
          <a
            href="#skills"
            className={`text-gray-700 hover:text-blue-600 transition-colors relative dark:text-gray-300 dark:hover:text-blue-400 ${
              activeSection === "skills"
                ? "text-blue-600 dark:text-blue-400 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-blue-600 dark:after:bg-blue-400"
                : ""
            }`}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={`text-gray-700 hover:text-blue-600 transition-colors relative dark:text-gray-300 dark:hover:text-blue-400 ${
              activeSection === "projects"
                ? "text-blue-600 dark:text-blue-400 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-blue-600 dark:after:bg-blue-400"
                : ""
            }`}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={`text-gray-700 hover:text-blue-600 transition-colors relative dark:text-gray-300 dark:hover:text-blue-400 ${
              activeSection === "contact"
                ? "text-blue-600 dark:text-blue-400 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-blue-600 dark:after:bg-blue-400"
                : ""
            }`}
          >
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-white" />
            ) : (
              <Moon className="h-5 w-5 text-black" />
            )}
          </button>

          {/* Resume Button */}
          <a
            href={Resume}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-white" />
            ) : (
              <Moon className="h-5 w-5 text-black" />
            )}
          </button>

          <button
            aria-label="Toggle mobile menu"
            className="text-primary dark:text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          <a
            href="#about"
            className={`py-2 text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400 ${
              activeSection === "about"
                ? "text-blue-600 dark:text-blue-400"
                : ""
            }`}
            onClick={closeMobileMenu}
          >
            About
          </a>
          <a
            href="#skills"
            className={`py-2 text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400 ${
              activeSection === "skills"
                ? "text-blue-600 dark:text-blue-400"
                : ""
            }`}
            onClick={closeMobileMenu}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={`py-2 text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400 ${
              activeSection === "projects"
                ? "text-blue-600 dark:text-blue-400"
                : ""
            }`}
            onClick={closeMobileMenu}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={`py-2 text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400 ${
              activeSection === "contact"
                ? "text-blue-600 dark:text-blue-400"
                : ""
            }`}
            onClick={closeMobileMenu}
          >
            Contact
          </a>
          <a
            href={Resume}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors text-center"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
