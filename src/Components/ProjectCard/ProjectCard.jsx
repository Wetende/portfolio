import React from 'react';
import { m } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const {
    index,
    title,
    role,
    category,
    description,
    contribution,
    operationalValue,
    workflow,
    evidence,
    tools
  } = project;

  return (
    <m.article
      className="case-file overflow-hidden rounded-[1.4rem] border border-[#102a43]/15 bg-[#fffdf8]"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
    >
      <header className="grid grid-cols-[auto_1fr_auto] items-start gap-5 border-b border-[#102a43]/10 p-7 md:grid-cols-[auto_1fr] sm:p-5">
        <span className="font-mono text-sm font-semibold text-[#e4572e]">{index}</span>
        <div>
          <p className="!m-0 font-mono text-[10px] uppercase tracking-[0.18em] text-[#0f766e]">{category}</p>
          <h3 className="!mb-0 !mt-2 font-display !text-[clamp(1.8rem,3vw,3rem)] !font-normal !leading-none text-[#102a43]">
            {title}
          </h3>
          <p className="!mb-0 !mt-3 text-xs text-[#66798b]">{role}</p>
        </div>
        <span className="rounded-full border border-[#0f766e]/25 bg-[#0f766e]/[0.06] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-[#0f766e] md:col-start-2 md:justify-self-start">
          Selected build
        </span>
      </header>

      <div className="p-7 sm:p-5">
        <p className="max-w-4xl text-base leading-7 text-[#40566d]">{description}</p>

        <div className="workflow-track mt-7" aria-label={`${title} workflow`}>
          {workflow.map((step, stepIndex) => (
            <React.Fragment key={step}>
              <div className="workflow-node">
                <span className="font-mono text-[9px] text-[#e4572e]">{String(stepIndex + 1).padStart(2, '0')}</span>
                <span>{step}</span>
              </div>
              {stepIndex < workflow.length - 1 && (
                <i className="fas fa-arrow-right workflow-arrow" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-8 border-t border-[#102a43]/10 pt-7 md:grid-cols-1 md:gap-5">
          <div>
            <p className="case-label">My contribution</p>
            <p className="!mb-0 !mt-2 text-sm leading-6 text-[#40566d]">{contribution}</p>
          </div>
          <div>
            <p className="case-label">Operational value</p>
            <p className="!mb-0 !mt-2 text-sm leading-6 text-[#40566d]">{operationalValue}</p>
          </div>
        </div>

        <div className="mt-7 grid grid-cols-[1.15fr_0.85fr] gap-8 rounded-xl bg-[#f3eee3] p-5 md:grid-cols-1">
          <div>
            <p className="case-label">Implementation scope</p>
            <ul className="mt-3 grid gap-2">
              {evidence.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs leading-5 text-[#40566d]">
                  <i className="fas fa-check-circle mt-1 text-[10px] text-[#0f766e]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="case-label">Stack</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span key={tool} className="rounded-md border border-[#102a43]/10 bg-white/70 px-2.5 py-1.5 font-mono text-[10px] text-[#40566d]">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </m.article>
  );
};

export default ProjectCard;
