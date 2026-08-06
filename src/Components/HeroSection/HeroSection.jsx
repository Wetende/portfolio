import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { m } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { heroData } from '../../data/portfolioData';

const HeroSection = () => {
  const {
    eyebrow,
    title,
    summary,
    availability,
    primaryAction,
    secondaryAction,
    systemFlow
  } = heroData;

  return (
    <section id="home" className="portfolio-hero relative overflow-hidden pb-24 pt-40 md:pb-16 md:pt-32">
      <div className="portfolio-grid" aria-hidden="true" />
      <Container className="relative z-10">
        <Row className="items-center g-5">
          <Col lg={7}>
            <m.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
            >
              <div className="mb-7 flex items-center gap-3">
                <span className="status-pulse" aria-hidden="true" />
                <p className="!m-0 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#0f766e]">
                  {eyebrow}
                </p>
              </div>

              <h1 className="max-w-4xl font-display !text-[clamp(3.2rem,6.8vw,6.9rem)] !font-normal !leading-[0.91] tracking-[-0.045em] text-[#102a43]">
                {title}
              </h1>

              <p className="mt-9 max-w-3xl text-lg leading-8 text-[#40566d] md:text-base md:leading-7">
                {summary}
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <ScrollLink
                  to={primaryAction.target}
                  smooth
                  offset={-90}
                  duration={500}
                  className="portfolio-button portfolio-button-primary cursor-pointer"
                >
                  {primaryAction.label}
                  <i className="fas fa-arrow-down text-xs" aria-hidden="true" />
                </ScrollLink>
                <a href={secondaryAction.url} className="portfolio-button portfolio-button-secondary">
                  {secondaryAction.label}
                </a>
              </div>

              <div className="mt-10 flex max-w-2xl items-start gap-3 border-t border-[#102a43]/15 pt-5 text-sm text-[#40566d]">
                <i className="far fa-clock mt-1 text-[#e4572e]" aria-hidden="true" />
                <span>{availability}</span>
              </div>
            </m.div>
          </Col>

          <Col lg={5}>
            <m.aside
              className="system-card ml-auto max-w-md"
              aria-label="Connected business systems overview"
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
            >
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                <div>
                  <p className="!m-0 font-mono text-[10px] uppercase tracking-[0.2em] text-[#7dd3c7]">
                    Operating map
                  </p>
                  <p className="!mb-0 !mt-1 font-display text-2xl text-white">One connected flow</p>
                </div>
                <span className="rounded-full border border-[#7dd3c7]/40 bg-[#7dd3c7]/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#9de4d9]">
                  Live stack
                </span>
              </div>

              <ol className="p-6">
                {systemFlow.map((step, index) => (
                  <li key={step.label} className="system-flow-step relative flex gap-4 pb-7 last:pb-0">
                    <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#7dd3c7]/35 bg-[#102f46] font-mono text-xs text-[#9de4d9]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="pt-0.5">
                      <p className="!m-0 text-sm font-semibold text-white">{step.label}</p>
                      <p className="!mb-0 !mt-1 font-mono text-xs text-[#94a9ba]">{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </m.aside>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
