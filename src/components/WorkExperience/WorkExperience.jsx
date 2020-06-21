import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';
import 'react-vertical-timeline-component/style.min.css';

const WorkExperince = () => {
  const { works } = useContext(PortfolioContext);
  return (
    <section id="works">
      <Container>
        <div className="works-wrapper">
          <Title title="Work Experience" />
          <VerticalTimeline className="vertical-timeline-custom-line">
            {works.map(work => {
              const { date, title, company, points, link } = work;
              return (
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ borderColor: '#97BC62FF', fontSize: '11px' }}
                  contentArrowStyle={{ borderRight: '7px solid  #97BC62FF' }}
                  iconStyle={{ background: '#97BC62FF', color: '#fff' }}
                >
                  <h3 className="vertical-timeline-element-title"> {title} </h3>
                  <h4 className="vertical-timeline-element-subtitle">{company}</h4>
                  <h4> {date}</h4>
                  <ul>
                    {points.map(point => {
                      return <li>{point.data}</li>;
                    })}
                  </ul>
                  {link && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn text-color-main"
                      href={link}
                    >
                      Work Product
                    </a>
                  )}
                </VerticalTimelineElement>
              );
            })}
            <VerticalTimelineElement iconStyle={{ background: '#2C5F2D', color: '#fff' }} />
          </VerticalTimeline>
        </div>
      </Container>
    </section>
  );
};

export default WorkExperince;
