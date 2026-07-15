import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { m } from 'framer-motion';
import { contactData, socialLinks } from '../../data/portfolioData';
import { fadeIn } from '../../Functions/GlobalAnimations';

const ContactSection = () => {
  const { email, phone, linkedInUrl } = contactData;

  return (
    <section id="contact" className="bg-white py-14 font-serif md:py-20">
      <Container>
        {/* CTA Header */}
        <m.div className="text-center mb-12 md:mb-16" {...fadeIn}>
          <div className="mx-auto max-w-3xl rounded-2xl border border-gray-100 bg-gray-50 px-5 py-7 shadow-sm sm:px-8 md:py-9">
            <span className="mb-3 block text-xl leading-none text-cyan-600/50" aria-hidden="true">“</span>
            <h2 className="mx-auto font-semibold text-[clamp(1.4rem,3vw,2.25rem)] leading-tight tracking-tight text-darkgray">
              <span className="block">What we build with purpose</span>
              <span className="block">can outlast the moment.</span>
            </h2>
            <p className="mt-4 font-serif text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700">
              — Dante Alighieri
            </p>
          </div>
          <div className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-4 gap-y-3">
            <span className="hidden sm:block w-12 h-px bg-gray-300" />
            <a
              href={`mailto:${email}`}
              className="font-serif text-base font-medium text-cyan-600 transition-colors hover:text-darkgray sm:text-lg"
            >
              <i className="fas fa-envelope mr-2 text-sm"></i>{email}
            </a>
            <span className="text-gray-300 hidden sm:inline">|</span>
            {phone && (
              <a
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="font-serif text-base font-medium text-cyan-600 transition-colors hover:text-darkgray sm:text-lg"
              >
                <i className="fas fa-phone mr-2 text-sm"></i>{phone}
              </a>
            )}
            <span className="hidden sm:block w-12 h-px bg-gray-300" />
          </div>
        </m.div>

        <Row className="justify-center">
          <Col lg={8} xl={7}>
            {/* Simple email CTA instead of form */}
            <m.div
              className="space-y-6 text-center md:space-y-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="mx-auto max-w-xl font-serif text-base leading-relaxed text-gray-600 md:text-lg">
                Prefer to reach out directly? Click the button below to open your email client with a
                prefilled message and I&apos;ll get back to you as soon as possible.
              </p>

              <a
                href={`mailto:${email}?subject=${encodeURIComponent(
                  'Project inquiry from portfolio'
                )}&body=${encodeURIComponent('Hi Cyprian,\n\nI would like to discuss an engineering collaboration...')}`}
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-cyan-600 px-8 py-4 font-serif font-semibold uppercase tracking-[0.12em] text-white shadow-lg shadow-cyan-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-darkgray hover:text-white"
              >
                Email Me
              </a>

              <p className="font-serif text-sm text-gray-500">
                You can also{' '}
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:text-darkgray transition-colors underline"
                >
                  message me on LinkedIn
                </a>
                .
              </p>
            </m.div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-12">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-200 text-darkgray hover:border-cyan-600 hover:text-cyan-600 transition-colors"
                >
                  <i className={link.icon} />
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
