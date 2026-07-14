import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { m } from 'framer-motion';
import { aboutData } from '../../data/portfolioData';
import { fadeIn, fadeInLeft } from '../../Functions/GlobalAnimations';

const competencyCards = [
  {
    icon: 'fas fa-server',
    iconClass: 'bg-cyan-50 text-cyan-600',
    title: 'IT Systems & Support',
    description: 'System deployment, troubleshooting, hardware and software management, and help desk support.'
  },
  {
    icon: 'fas fa-robot',
    iconClass: 'bg-violet-50 text-violet-600',
    title: 'AI & Data Operations',
    description: 'LLM orchestration, RAG, vector embeddings, NLP, data annotation, and quality evaluation.'
  },
  {
    icon: 'fas fa-code',
    iconClass: 'bg-indigo-50 text-indigo-600',
    title: 'Full-Stack Platforms',
    description: 'Python and JavaScript applications, API integrations, and bespoke CMS/LMS products.'
  },
  {
    icon: 'fas fa-wallet',
    iconClass: 'bg-emerald-50 text-emerald-600',
    title: 'Fintech & Payments',
    description: 'Paystack, DPO, M-Pesa, MTN, EVM wallets, and USSD remittance rails.'
  },
  {
    icon: 'fas fa-file-alt',
    iconClass: 'bg-amber-50 text-amber-600',
    title: 'Technical Communication',
    description: 'Business analysis, technical specifications, system documentation, and stakeholder presentations.'
  }
];

const AboutSection = () => {
  const { bio, yearsExperience, specializations } = aboutData;

  return (
    <section 
      id="about" 
      className="py-12 md:py-16 bg-gray-50"
    >
      <Container>
        <Row className="items-center">
          {/* Left Column - Bio */}
          <Col lg={6} className="mb-12 lg:mb-0">
            <m.div {...fadeIn}>
              <p className="font-serif text-sm uppercase tracking-widest text-cyan-600 mb-4">
                About Me
              </p>
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-darkgray mb-6 leading-tight">
                Cyprian <span className="text-cyan-600">Wetende</span>
              </h2>
              <p className="font-serif text-lg text-gray-600 leading-relaxed mb-8">
                {bio}
              </p>
              <div className="flex flex-wrap gap-3">
                {specializations.map((spec, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white text-darkgray text-sm font-medium rounded-full shadow-sm"
                  >
                    {spec}
                  </span>
                ))}
              </div>
              <blockquote className="mt-10 border-l-4 border-darkgray pl-6 sm:pl-5">
                <p className="font-serif text-lg italic leading-relaxed text-darkgray !mb-0">
                  “Consider well the seed that gave you birth: you were not made to live as brutes, but to be followers of worth and knowledge.”
                </p>
                <footer className="mt-3 font-serif text-base text-spanishgray">
                  <span aria-hidden="true">— </span>Dante
                </footer>
              </blockquote>
            </m.div>
          </Col>

          {/* Right Column - Competency Highlights Grid (Zero-Image) */}
          <Col lg={6}>
            <m.div
              className="flex items-center justify-center lg:justify-end"
              {...{ ...fadeInLeft, transition: { delay: 0.3, duration: 0.5 } }}
            >
              <div className="w-full max-w-lg space-y-3.5">
                {/* Hero Experience Card */}
                <div className="bg-[#0f172a] text-white p-4 md:p-5 rounded-2xl shadow-xl border border-slate-700/80 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500"></div>
                  <div className="flex items-baseline gap-3 mb-1.5">
                    <span className="font-serif text-5xl md:text-5xl font-bold text-cyan-400 leading-none">
                      {yearsExperience}+
                    </span>
                    <span className="font-serif text-base md:text-lg font-semibold uppercase tracking-wider text-slate-300">
                      Years Experience
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs md:text-sm font-serif leading-relaxed mt-1.5 !m-0">
                    Delivering high-availability system architecture, AI agent orchestration, and secure cross-border payment solutions.
                  </p>
                </div>

                {/* Core competency grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {competencyCards.map((competency, index) => (
                    <div
                      key={competency.title}
                      className={`bg-white p-3.5 rounded-xl shadow-sm border border-gray-100 hover:border-cyan-500/40 hover:shadow-md transition-all duration-300 ${
                        index === competencyCards.length - 1 ? 'sm:col-span-2' : ''
                      }`}
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-base font-bold shrink-0 ${competency.iconClass}`}>
                          <i className={competency.icon}></i>
                        </div>
                        <h3 className="font-serif font-semibold text-darkgray text-base !m-0 leading-tight">{competency.title}</h3>
                      </div>
                      <p className="text-gray-500 text-xs !m-0 leading-relaxed">{competency.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </m.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
