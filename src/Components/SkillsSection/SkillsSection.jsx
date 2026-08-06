import React from 'react';
import { Container } from 'react-bootstrap';
import { m } from 'framer-motion';
import { skillsData } from '../../data/portfolioData';

const SkillsSection = () => (
  <section id="stack" className="bg-[#fffdf8] py-24 md:py-16">
    <Container>
      <div className="mb-12 flex items-end justify-between gap-8 md:flex-col md:items-start">
        <div>
          <p className="section-kicker">Systems stack</p>
          <h2 className="font-display !text-[clamp(3rem,5vw,5.2rem)] !font-normal !leading-none text-[#102a43]">
            Built around the work,
            <br />not the tool logo.
          </h2>
        </div>
        <p className="max-w-md !m-0 text-sm leading-6 text-[#53697d]">
          The strongest platform choice is the one that keeps data reliable, failure states visible, and ownership clear after handoff.
        </p>
      </div>

      <div className="grid grid-cols-3 border-l border-t border-[#102a43]/15 lg:grid-cols-2 sm:grid-cols-1">
        {skillsData.map((skill, index) => (
          <m.article
            key={skill.title}
            className="stack-cell border-b border-r border-[#102a43]/15 p-7"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="font-mono text-xs text-[#e4572e]">{skill.number}</span>
              <span className="h-2 w-2 rounded-full bg-[#0f766e]" aria-hidden="true" />
            </div>
            <h3 className="!mb-0 !mt-8 font-display !text-3xl !font-normal text-[#102a43]">{skill.title}</h3>
            <p className="!mb-0 !mt-4 text-sm leading-6 text-[#53697d]">{skill.description}</p>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-[#102a43]/10 pt-4">
              {skill.keywords.map((keyword) => (
                <span key={keyword} className="font-mono text-[9px] uppercase tracking-wider text-[#0f766e]">
                  {keyword}
                </span>
              ))}
            </div>
          </m.article>
        ))}
      </div>
    </Container>
  </section>
);

export default SkillsSection;
