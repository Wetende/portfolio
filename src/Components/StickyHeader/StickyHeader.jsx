import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Container } from 'react-bootstrap';
import { navItems } from '../../data/portfolioData';
import profileLogo from '../../Assets/img/profile-logo.webp';

const StickyHeader = ({ activeSection, onNavClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const selectSection = (sectionId) => {
    onNavClick?.(sectionId);
    setIsMobileMenuOpen(false);
  };

  const renderLink = (item, isMobile = false) => (
    <ScrollLink
      key={item.id}
      to={item.id}
      spy
      smooth
      offset={-84}
      duration={500}
      onClick={() => selectSection(item.id)}
      className={`cursor-pointer font-mono text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors ${
        activeSection === item.id ? 'text-[#e4572e]' : 'text-[#40566d] hover:text-[#0f766e]'
      } ${isMobile ? 'py-2 text-sm' : ''}`}
    >
      {item.label}
    </ScrollLink>
  );

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'border-b border-[#102a43]/10 bg-[#fffdf8]/95 py-3 shadow-[0_10px_30px_rgba(16,42,67,0.06)] backdrop-blur-md'
          : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between gap-6">
          <ScrollLink to="home" smooth duration={500} className="group cursor-pointer" onClick={() => selectSection('home')}>
            <span className="flex items-center gap-3">
              <span className="!h-[44px] !w-[44px] shrink-0 overflow-hidden rounded-full border-2 border-[#102a43] bg-white shadow-[0_4px_14px_rgba(16,42,67,0.12)] transition-transform duration-200 group-hover:scale-105">
                <img
                  src={profileLogo}
                  alt="Portrait of Cyprian Wetende"
                  className="!h-full !w-full object-cover"
                />
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-semibold leading-tight text-[#102a43]">Cyprian Wetende</span>
                <span className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-[#0f766e]">Automation builder</span>
              </span>
            </span>
          </ScrollLink>

          <nav className="flex items-center gap-7 sm:hidden" aria-label="Main navigation">
            {navItems.map((item) => renderLink(item))}
          </nav>

          <button
            type="button"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#102a43]/15 text-[#102a43] sm:flex"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            aria-label="Toggle navigation"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true" />
          </button>
        </div>

        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className={`hidden overflow-hidden transition-all duration-300 sm:block ${isMobileMenuOpen ? 'max-h-96 pt-5' : 'max-h-0'}`}
        >
          <div className="flex flex-col border-t border-[#102a43]/10 py-3">
            {navItems.map((item) => renderLink(item, true))}
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default StickyHeader;
