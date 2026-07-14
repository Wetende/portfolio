import React from 'react';
import { Container } from 'react-bootstrap';
import { m } from 'framer-motion';
import { fadeIn } from '../../Functions/GlobalAnimations';

const HeroSection = () => (
  <section
    id="home"
    className="flex min-h-screen items-center overflow-hidden bg-white pb-20 pt-32 sm:pb-16 sm:pt-28"
  >
    <Container>
      <m.div {...fadeIn} className="max-w-6xl">
        <h1 className="font-serif !text-[36px] md:!text-[28px] sm:!text-[24px] font-semibold !leading-[1.3] tracking-[-0.03em] text-darkgray">
          Turning Complex Problems into Practical Technology.
        </h1>

        <div className="mt-12 max-w-5xl space-y-10 font-serif text-xl leading-relaxed text-[#3f3f46] md:mt-10 md:text-lg sm:mt-8 sm:text-base">
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

        <blockquote className="mt-16 max-w-5xl border-l-4 border-darkgray pl-8 md:mt-12 sm:mt-10 sm:pl-5">
          <p className="font-serif text-2xl italic leading-relaxed text-darkgray md:text-xl sm:text-lg">
            “You do not rise to the level of your goals. You fall to the level of your systems.”
          </p>
          <footer className="mt-4 font-serif text-lg text-spanishgray sm:text-base">
            <span aria-hidden="true">— </span>James Clear
          </footer>
        </blockquote>
      </m.div>
    </Container>
  </section>
);

export default HeroSection;
