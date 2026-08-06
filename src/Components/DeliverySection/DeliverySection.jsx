import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { m } from 'framer-motion';
import { deliveryData } from '../../data/portfolioData';

const DeliverySection = () => (
  <section id="process" className="overflow-hidden bg-[#0d2638] py-24 text-white md:py-16">
    <Container>
      <Row className="g-5">
        <Col lg={5}>
          <div className="lg:sticky lg:top-32">
            <p className="section-kicker section-kicker-light">Delivery process</p>
            <h2 className="font-display !text-[clamp(3rem,5vw,5.4rem)] !font-normal !leading-[0.93] text-white">
              {deliveryData.title}
            </h2>
            <p className="mt-7 max-w-lg text-sm leading-7 text-[#b8c7d3]">
              {deliveryData.introduction}
            </p>

            <div className="mt-9 rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <p className="!m-0 font-mono text-[10px] uppercase tracking-[0.18em] text-[#7dd3c7]">Documentation delivered</p>
              <ul className="mt-4 grid gap-3">
                {deliveryData.documentation.map((item) => (
                  <li key={item} className="flex gap-3 text-xs leading-5 text-[#d5e0e7]">
                    <i className="far fa-file-alt mt-0.5 text-[#f6bd60]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Col>

        <Col lg={{ span: 6, offset: 1 }}>
          <ol className="process-list">
            {deliveryData.steps.map((step, index) => (
              <m.li
                key={step.title}
                className="grid grid-cols-[4rem_1fr] gap-5 border-t border-white/10 py-8 first:border-t-0 first:pt-0"
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <span className="font-mono text-sm text-[#f6bd60]">{step.number}</span>
                <div>
                  <h3 className="!m-0 font-display !text-4xl !font-normal text-white">{step.title}</h3>
                  <p className="!mb-0 !mt-3 max-w-xl text-sm leading-6 text-[#b8c7d3]">{step.description}</p>
                </div>
              </m.li>
            ))}
          </ol>
        </Col>
      </Row>
    </Container>
  </section>
);

export default DeliverySection;
