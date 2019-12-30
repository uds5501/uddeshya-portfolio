import React, { useContext, useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const optimizedImg = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <section id="about">
      <div className="container">
        <Title title="About Me" />
        <div className="row about-wrapper">
          <div className="col-md-6 col-sm-12">
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <Img
                  className="img-fluid rounded shadow-lg"
                  fixed={optimizedImg.logo.childImageSharp.fixed}
                  alt="Profile"
                />
              </div>
            </Fade>
          </div>
          <div className="col-md-6 col-sm-12">
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      View Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
