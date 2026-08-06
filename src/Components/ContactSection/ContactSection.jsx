import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { m } from 'framer-motion';
import { contactData, socialLinks } from '../../data/portfolioData';

const ContactSection = () => {
  const { email, phone, linkedInUrl, location, availability } = contactData;
  const mailto = `mailto:${email}?subject=${encodeURIComponent('AI Automation Specialist & RevOps')}`;

  return (
    <section id="contact" className="relative overflow-hidden bg-[#e4572e] py-24 text-white md:py-16">
      <div className="contact-orbit" aria-hidden="true" />
      <Container className="relative z-10">
        <Row className="items-end g-5">
          <Col lg={8}>
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="!m-0 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75">Ready to contribute</p>
              <h2 className="mt-5 max-w-5xl font-display !text-[clamp(3.5rem,7vw,7.5rem)] !font-normal !leading-[0.88] tracking-[-0.035em] text-white">
                Let’s build systems people can trust.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-7 text-white/80">
                Available for hands-on CRM, automation, AI integration, API support, troubleshooting, and technical documentation work.
              </p>
            </m.div>
          </Col>

          <Col lg={4}>
            <div className="rounded-2xl border border-white/20 bg-[#c94221]/40 p-6 backdrop-blur-sm">
              <dl className="grid gap-5">
                <div>
                  <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/65">Location</dt>
                  <dd className="!mb-0 !mt-1 text-sm text-white">{location}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/65">Schedule overlap</dt>
                  <dd className="!mb-0 !mt-1 text-sm leading-6 text-white">{availability}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/65">Direct contact</dt>
                  <dd className="!mb-0 !mt-1 text-sm text-white">{phone}</dd>
                </div>
              </dl>

              <a href={mailto} className="mt-7 flex min-h-14 items-center justify-between rounded-full bg-white px-6 text-sm font-semibold text-[#102a43] transition-transform hover:-translate-y-0.5 hover:text-[#102a43]">
                Email Cyprian
                <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
              </a>
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 text-xs font-semibold text-white hover:bg-white/10 hover:text-white">
                <i className="fab fa-linkedin-in" aria-hidden="true" />
                LinkedIn profile
              </a>
            </div>
          </Col>
        </Row>

        <footer className="mt-20 flex items-center justify-between gap-5 border-t border-white/20 pt-6 text-xs text-white/65 md:mt-14 sm:flex-col sm:items-start">
          <span>© {new Date().getFullYear()} Cyprian Wetende</span>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a key={link.platform} href={link.url} target={link.platform === 'email' ? undefined : '_blank'} rel="noreferrer" className="text-white/70 hover:text-white" aria-label={link.platform}>
                <i className={link.icon} aria-hidden="true" />
              </a>
            ))}
          </div>
          <span className="font-mono uppercase tracking-[0.12em]">AI automation · RevOps · integration</span>
        </footer>
      </Container>
    </section>
  );
};

export default ContactSection;
