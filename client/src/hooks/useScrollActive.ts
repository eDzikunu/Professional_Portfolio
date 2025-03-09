import { useState, useEffect } from "react";

export default function useScrollActive() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;

      // Find the current section in view
      sections.forEach((section) => {
        const sectionHeight = section.clientHeight;
        const sectionTop = (section as HTMLElement).offsetTop - 100; // Offset to trigger slightly earlier
        const sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight && sectionId) {
          setActiveSection(sectionId);
        }
      });

      // If at the top of the page and no section is active
      if (scrollY < 100) {
        setActiveSection("hero");
      }
    };

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return activeSection;
}
