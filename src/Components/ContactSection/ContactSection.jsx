import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { m } from 'framer-motion';
import { contactData, socialLinks } from '../../data/portfolioData';
import { fadeIn } from '../../Functions/GlobalAnimations';

const ContactSection = () => {
  const { email, phone, linkedInUrl, ctaText } = contactData;

  return (
    <section id="contact" className="py-12 md:py-16 bg-white">
      <Container>
        {/* CTA Header */}
        <m.div className="text-center mb-16" {...fadeIn}>
          <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-darkgray mb-4">
            {ctaText.split('?')[0]}
            <span className="font-bold">together?</span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <span className="hidden sm:block w-12 h-px bg-gray-300" />
            <a
              href={`mailto:${email}`}
              className="font-serif text-lg text-cyan-600 hover:text-darkgray transition-colors font-medium"
            >
              <i className="fas fa-envelope mr-2 text-sm"></i>{email}
            </a>
            <span className="text-gray-300 hidden sm:inline">|</span>
            {phone && (
              <a
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="font-serif text-lg text-cyan-600 hover:text-darkgray transition-colors font-medium"
              >
                <i className="fas fa-phone mr-2 text-sm"></i>{phone}
              </a>
            )}
            <span className="hidden sm:block w-12 h-px bg-gray-300" />
          </div>
        </m.div>

        <Row className="justify-center">
          <Col lg={8}>
            {/* Simple email CTA instead of form */}
            <m.div
              className="text-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="font-serif text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Prefer to reach out directly? Click the button below to open your email client with a
                prefilled message and I&apos;ll get back to you as soon as possible.
              </p>

              <a
                href={`mailto:${email}?subject=${encodeURIComponent(
                  'Project inquiry from portfolio'
                )}&body=${encodeURIComponent('Hi Cyprian,\n\nI would like to discuss an engineering collaboration...')}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-cyan-600 text-white font-serif font-semibold uppercase tracking-wider hover:bg-darkgray hover:text-white transition-colors duration-300 rounded-full"
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
