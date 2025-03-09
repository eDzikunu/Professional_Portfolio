import { useState, useEffect } from "react";
import { Link } from "wouter";
import useScrollActive from "@/hooks/useScrollActive";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollActive();
  
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
    <header className={`fixed w-full bg-white bg-opacity-90 backdrop-blur-sm z-50 ${isScrolled ? "shadow-sm" : ""}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-primary flex items-center space-x-2">
          <span className="text-secondary">John</span>
          <span>Doe</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a 
            href="#about" 
            className={`hover:text-secondary transition-colors relative ${activeSection === "about" ? "text-secondary after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-secondary" : ""}`}
          >
            About
          </a>
          <a 
            href="#skills"
            className={`hover:text-secondary transition-colors relative ${activeSection === "skills" ? "text-secondary after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-secondary" : ""}`}
          >
            Skills
          </a>
          <a 
            href="#projects"
            className={`hover:text-secondary transition-colors relative ${activeSection === "projects" ? "text-secondary after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-secondary" : ""}`}
          >
            Projects
          </a>
          <a 
            href="#contact"
            className={`hover:text-secondary transition-colors relative ${activeSection === "contact" ? "text-secondary after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-secondary" : ""}`}
          >
            Contact
          </a>
        </nav>
        
        {/* Resume Button */}
        <a 
          href="/resume.pdf" 
          className="hidden md:block bg-secondary hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          aria-label="Toggle mobile menu"
          className="md:hidden text-primary focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white border-t ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          <a 
            href="#about" 
            className={`py-2 hover:text-secondary transition-colors ${activeSection === "about" ? "text-secondary" : ""}`}
            onClick={closeMobileMenu}
          >
            About
          </a>
          <a 
            href="#skills" 
            className={`py-2 hover:text-secondary transition-colors ${activeSection === "skills" ? "text-secondary" : ""}`}
            onClick={closeMobileMenu}
          >
            Skills
          </a>
          <a 
            href="#projects" 
            className={`py-2 hover:text-secondary transition-colors ${activeSection === "projects" ? "text-secondary" : ""}`}
            onClick={closeMobileMenu}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className={`py-2 hover:text-secondary transition-colors ${activeSection === "contact" ? "text-secondary" : ""}`}
            onClick={closeMobileMenu}
          >
            Contact
          </a>
          <a 
            href="/resume.pdf" 
            className="bg-secondary hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors text-center"
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
