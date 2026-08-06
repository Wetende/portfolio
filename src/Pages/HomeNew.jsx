import React, { useEffect, useState } from 'react';
import { Events, scrollSpy } from 'react-scroll';
import StickyHeader from '../Components/StickyHeader/StickyHeader';
import HeroSection from '../Components/HeroSection/HeroSection';
import AboutSection from '../Components/AboutSection/AboutSection';
import ProjectsSection from '../Components/ProjectsSection/ProjectsSection';
import SkillsSection from '../Components/SkillsSection/SkillsSection';
import DeliverySection from '../Components/DeliverySection/DeliverySection';
import ContactSection from '../Components/ContactSection/ContactSection';
import ScrollToTopButton from '../Components/ScrollToTop';

const sectionIds = ['home', 'proof', 'stack', 'process', 'contact'];

const HomeNew = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    scrollSpy.update();

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      const currentSection = sectionIds.find((sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return false;
        return scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight;
      });

      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="portfolio-shell">
      <StickyHeader activeSection={activeSection} onNavClick={setActiveSection} />
      <ScrollToTopButton />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <DeliverySection />
      <ContactSection />
    </div>
  );
};

export default HomeNew;
