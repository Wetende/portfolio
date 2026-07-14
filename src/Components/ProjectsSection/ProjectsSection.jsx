import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { m, AnimatePresence } from 'framer-motion';
import ProjectCard from '../ProjectCard/ProjectCard';
import { projectsData } from '../../data/portfolioData';
import { fadeIn } from '../../Functions/GlobalAnimations';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    'All',
    'AI Automation',
    'Product Design',
    'API Design',
    'Fintech Solutions',
    'Full-Stack Development',
    'Backend Systems',
    'AI/ML Integration',
    'LMS Engine',
    'Web3 / Smart Contracts',
    'Python',
    'Django',
    'FastAPI'
  ];

  const displayedProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => {
        const inCat = p.category && p.category.some(c => c.toLowerCase() === activeFilter.toLowerCase());
        const inTech = p.techStack && p.techStack.some(t => t.name.toLowerCase() === activeFilter.toLowerCase());
        return inCat || inTech;
      });

  return (
    <section id="work" className="py-12 md:py-16 bg-white">
      <Container>
        {/* Section Header */}
        <m.div className="text-center mb-16" {...fadeIn}>
          <p className="font-serif text-xs md:text-sm uppercase tracking-widest text-cyan-600 font-semibold mb-3">
            Projects
          </p>
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-darkgray mb-4 tracking-tight">
            Featured Projects
          </h2>
          <p className="font-serif text-sm md:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A selection of real-world fintech payment gateways, canonical LMS architectures, and omnichannel AI platforms engineered for scale across African and global ecosystems.
          </p>
        </m.div>

        {/* Project List Divider & Filter Pills */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-6 border-b border-gray-200 gap-4">
            <h3 className="font-serif font-bold text-xl md:text-2xl text-darkgray">
              Project List
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-200 ${
                    activeFilter === cat
                      ? 'bg-darkgray text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-transparent'
                  }`}
                >
                  {cat}
                </button>
              ))}
              {activeFilter !== 'All' && (
                <button
                  onClick={() => setActiveFilter('All')}
                  className="px-3 py-1.5 text-xs md:text-sm font-semibold text-cyan-600 hover:text-cyan-700 underline underline-offset-4 ml-1"
                >
                  Clear Filter
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Horizontal Projects List */}
        <Row className="justify-content-center">
          <Col lg={10} className="max-w-5xl">
            <AnimatePresence>
              {displayedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </Col>
        </Row>

        {/* Robin Sharma Daily Improvement Quote */}
        <m.div className="max-w-4xl mx-auto mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-200 text-center relative overflow-hidden shadow-sm" {...fadeIn}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-cyan-600 rounded-full"></div>
          <p className="font-serif text-lg md:text-xl italic text-darkgray leading-relaxed mb-3">
            “Small daily improvements over time lead to stunning results.”
          </p>
          <footer className="font-serif text-xs md:text-sm font-bold uppercase tracking-widest text-cyan-700">
            — Robin Sharma
          </footer>
        </m.div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
