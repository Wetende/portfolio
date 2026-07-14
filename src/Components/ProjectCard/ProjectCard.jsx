import React from 'react';
import { m } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const { title, category, description, icon, metric, techStack } = project;

  return (
    <m.div
      className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm mb-6 hover:shadow-md hover:border-cyan-500/60 transition-all duration-300 relative overflow-hidden group"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35 }}
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3.5">
        <div className="flex items-center gap-3.5">
          <span className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200/70 flex items-center justify-center text-cyan-600 text-2xl shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-300">
            <i className={icon || 'fas fa-layer-group'}></i>
          </span>
          <h3 className="font-serif font-bold text-xl md:text-2xl text-darkgray tracking-tight group-hover:text-cyan-600 transition-colors duration-200">
            {title}
          </h3>
        </div>
        {metric && (
          <span className="px-3.5 py-1 bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-mono font-semibold rounded-full flex items-center gap-1.5 self-start shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            {metric}
          </span>
        )}
      </div>

      <p className="text-gray-600 font-serif text-sm md:text-base leading-relaxed mb-6 max-w-4xl">
        {description}
      </p>

      {/* Tech Stack bullet list */}
      {techStack && (
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 pt-4 border-t border-gray-100 text-xs md:text-sm font-semibold text-gray-700">
          {techStack.map((tech, index) => (
            <span key={index} className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0 shadow-sm"
                style={{ backgroundColor: tech.color || '#06b6d4' }}
              ></span>
              {tech.name}
            </span>
          ))}
        </div>
      )}

      {/* Category Tags */}
      {category && (
        <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-gray-50">
          {category.map((cat, index) => (
            <span
              key={index}
              className="px-3 py-0.5 bg-gray-100/80 border border-gray-200/60 text-gray-600 text-[11px] font-medium rounded-md"
            >
              {cat}
            </span>
          ))}
        </div>
      )}
    </m.div>
  );
};

export default ProjectCard;
