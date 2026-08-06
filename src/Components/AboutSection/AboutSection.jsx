import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { m } from 'framer-motion';
import { profileData } from '../../data/portfolioData';

const AboutSection = () => (
  <section className="border-y border-[#102a43]/10 bg-[#102a43] py-20 text-white md:py-14">
    <Container>
      <Row className="items-end g-5">
        <Col lg={7}>
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-kicker section-kicker-light">Execution profile</p>
            <h2 className="max-w-4xl font-display !text-[clamp(2.5rem,5vw,5rem)] !font-normal !leading-[0.98] text-white">
              Business requirements, translated into dependable technical systems.
            </h2>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#b8c7d3] md:text-base md:leading-7">
              {profileData.statement}
            </p>
          </m.div>
        </Col>

        <Col lg={5}>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10">
            {profileData.facts.map((fact) => (
              <div key={fact.label} className="bg-[#102a43] p-5">
                <p className="!m-0 font-display text-4xl text-[#f6bd60]">{fact.value}</p>
                <p className="!mb-0 !mt-2 text-xs leading-5 text-[#b8c7d3]">{fact.label}</p>
              </div>
            ))}
          </div>
        </Col>
      </Row>

      <div className="mt-12 border-t border-white/10 pt-6">
        <p className="!m-0 font-mono text-[10px] uppercase tracking-[0.2em] text-[#7dd3c7]">Certifications</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {profileData.certifications.map((certification) => (
            <span key={certification} className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs text-[#e8eef2]">
              <i className="fas fa-check mr-2 text-[#7dd3c7]" aria-hidden="true" />
              {certification}
            </span>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

export default AboutSection;
