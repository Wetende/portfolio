import React from 'react'

// Libraries
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Footer } from '../Components/Footers/Footer'
import SocialIcons from '../Components/SocialIcon/SocialIcons'
import { footerData, socialLinks } from '../data/portfolioData'
import Lists from "../Components/Lists/Lists"
import profileLogo from '../Assets/img/profile-logo.webp'

const ListData = [
    {
        content: "This policy applies where we are acting as a data controller with respect to the personal data.",
    },
    {
        content: "By using our website and agreeing to this policy, you consent to our use of cookies in accordance.",
    },
    {
        content: "Our website incorporates privacy controls which affect how we will process your personal data.",
    },
    {
        content: "Security controls and encryption protocols are strictly enforced across all IT and cloud infrastructure.",
    },
]

const Privacy = (props) => {
  const socialIconsData = socialLinks.map(link => ({
    link: link.url,
    icon: link.icon
  }));

  return (
    <div style={props.style}>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm py-4">
        <Container>
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-serif font-medium text-darkgray hover:text-cyan-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Portfolio
            </Link>
            <span className="flex items-center gap-2.5">
              <span className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                <img
                  src={profileLogo}
                  alt="Cyprian Wetende"
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-serif text-base font-semibold text-darkgray">Cyprian Wetende</span>
                <span className="mt-0.5 text-[11px] font-medium text-spanishgray">Software Engineer</span>
              </span>
            </span>
          </div>
        </Container>
      </header>
             {/* Section Start */}
      <section className="bg-lightgray py-[40px] sm:py-[30px]">
        <Container>
          <Row className="xs:text-center">
            <Col xl={8} lg={6} className="flex md:justify-center md:mb-[15px] sm:block sm:text-center">
              <h1 className="text-lg text-darkgray font-medium mb-0 font-serif inline-block">Privacy policy</h1>
              <span className="font-serif text-md relative pl-[25px] ml-[25px] block sm:mt-[5px] sm:p-0 before:absolute before:bg-darkgray before:content-[''] before:h-[12px] before:top-[4px] before:w-[2px] before:left-0 sm:before:hidden sm:ml-0">Professional multi-purpose template</span>
            </Col>
            <Col xl={4} lg={6} className="breadcrumb justify-end px-[15px] text-sm font-serif m-0 md:justify-center">
              <ul>
                <li><Link aria-label="link for" to="/">Home</Link></li>
                <li><Link aria-label="link for" to="#">Pages</Link></li>
                <li>Privacy policy</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}
      {/* Section Start */}
      <section className="py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
            <Container>
                <Row className="items-center justify-center">
                    <Col lg={9} md={12} className="col-12">
                        <h6 className="font-serif text-darkgray font-medium -tracking-[1px]">General information</h6>
                        <p className="mb-[25px] md:mb-[20px] sm:mb-[15px]">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electronic typesetting, essentially unchanged.</p>
                        <p className="mb-[25px] md:mb-[20px] sm:mb-[15px]">Lorem ipsum has been the industry’s standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <p className="mb-0">&nbsp;</p>
                        <h6 className="font-serif text-darkgray font-medium -tracking-[1px]">Policy introduction</h6>
                        <p className="mb-[25px] md:mb-[20px] sm:mb-[15px]">It has survived not only five centuries, but also the leap electronic typesetting, essentially unchanged. Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <Lists theme="list-style-06" data={ListData} animationDelay={0} />
                        <p className="mb-[25px] md:mb-[20px] sm:mb-[15px]">Lorem ipsum has been the industry’s standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p className="mb-0">&nbsp;</p>
                        <h6 className="font-serif text-darkgray font-medium -tracking-[1px]">Providing your personal data to others</h6>
                        <p className="mb-[25px] md:mb-[20px] sm:mb-[15px]">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                        <p className="mb-[25px] md:mb-[20px] sm:mb-[15px]">Lorem ipsum has been the industry’s standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <p className="mb-0">&nbsp;</p>
                        <h6 className="font-serif text-darkgray font-medium -tracking-[1px]">Personally Identifiable Information</h6>
                        <p className="mb-[25px] md:mb-[20px] sm:mb-[15px]">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.</p>
                    </Col>
                </Row>
            </Container>
        </section>
        {/* Section End */}

        {/* Footer */}
        <Footer className="bg-gray-50 py-12" theme="light">
          <Container>
            <Row>
              <Col lg={4} className="justify-start md:justify-center md:mb-5 flex items-center">
                <span className="font-serif font-semibold text-sm text-darkgray">
                  {footerData.tagline}
                </span>
              </Col>
              <Col lg={4} className="text-center md:mb-5">
                <SocialIcons theme="social-icon-style-12" iconColor="dark" size="md" data={socialIconsData} />
              </Col>
              <Col lg={4} className="text-right justify-end md:justify-center md:text-center flex items-center">
                <p className="font-serif font-semibold text-sm uppercase text-darkgray leading-[30px]">
                  {footerData.copyright}
                </p>
              </Col>
            </Row>
          </Container>
        </Footer>
    </div>
  )
}

export default Privacy
