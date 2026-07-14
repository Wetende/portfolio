import React from 'react';
import { Container } from 'react-bootstrap';
import { m } from 'framer-motion';
import { fadeIn } from '../../Functions/GlobalAnimations';

const HeroSection = () => (
  <section
    id="home"
    className="flex min-h-screen items-center overflow-hidden bg-white pb-16 pt-24 sm:pb-20 sm:pt-28 md:pt-32"
  >
    <Container>
      <m.div {...fadeIn} className="max-w-6xl">
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.25] tracking-tight text-darkgray">
          Turning Complex Problems into Practical Technology.
        </h1>

        <div className="mt-8 sm:mt-10 md:mt-12 max-w-5xl space-y-6 sm:space-y-8 font-serif text-base sm:text-lg md:text-xl leading-relaxed text-[#3f3f46]">
          <p>
            An individual who enjoys building meaningful solutions—from software and digital systems to initiatives that create value for communities.
            {' '}When I’m not working, I’m usually{' '}
            <strong className="font-semibold text-darkgray">at the gym, reading a book, or watching a movie</strong>.
          </p>

          <p>
            Focused on{' '}
            <strong className="font-semibold text-darkgray">
              system architecture, full-stack development, AI integration, payment systems, and scalable digital platforms
            </strong>.
          </p>
        </div>

        <blockquote className="mt-10 sm:mt-12 md:mt-16 max-w-5xl border-l-4 border-darkgray pl-4 sm:pl-6 md:pl-8">
          <p className="font-serif text-lg sm:text-xl md:text-2xl italic leading-relaxed text-darkgray">
            “You do not rise to the level of your goals. You fall to the level of your systems.”
          </p>
          <footer className="mt-3 sm:mt-4 font-serif text-sm sm:text-base md:text-lg text-spanishgray">
            <span aria-hidden="true">— </span>James Clear
          </footer>
        </blockquote>
      </m.div>
    </Container>
  </section>
);

export default HeroSection;
