import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { m } from 'framer-motion';
import ProjectCard from '../ProjectCard/ProjectCard';
import { projectsData } from '../../data/portfolioData';

const ProjectsSection = () => (
  <section id="proof" className="bg-[#f3eee3] py-24 md:py-16">
    <Container>
      <Row className="mb-14 items-end g-4 md:mb-10">
        <Col lg={7}>
          <m.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <p className="section-kicker">Proof of work</p>
            <h2 className="font-display !text-[clamp(3rem,5.5vw,5.8rem)] !font-normal !leading-[0.92] text-[#102a43]">
              Systems built for real operating conditions.
            </h2>
          </m.div>
        </Col>
        <Col lg={{ span: 4, offset: 1 }}>
          <p className="!m-0 text-sm leading-6 text-[#53697d]">
            Four representative builds, documented around data movement, technical contribution, and operational usefulness—not a list of tools without context.
          </p>
          <p className="!mb-0 !mt-3 font-mono text-[9px] uppercase leading-5 tracking-[0.1em] text-[#0f766e]">
            Workflows are sanitized to protect operational and client data.
          </p>
        </Col>
      </Row>

      <div className="grid gap-6">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Container>
  </section>
);

export default ProjectsSection;
