import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';

const Skills = () => {
  const { skills } = useContext(PortfolioContext);
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

  return (
    <section id="skills">
      <Container>
        <div className="skills-wrapper">
          <Title title="Skills" />
          <Row>
            {skills.map(skill => {
              const { name } = skill;
              return (
                <Col
                  lg={{ span: 1, offset: 1 }}
                  sm={{ span: 4, offset: 1 }}
                  className="skills-wrapper__column"
                >
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={700}
                    delay={500}
                    distance="15px"
                  >
                    <div className="skills-wrapper__text">{name}</div>
                  </Fade>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
};
export default Skills;
