import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons'; 
import { highlightText } from '../utils/highlightText';

const experiences = [
  {
    title: 'Software Developer',
    company: 'NowFloats Technologies | Hyd | ',
    duration: 'Jun 2023 - Jul 2024',
    description: [
      'Worked on a web application for an order management system.',
      'Utilized Redux for efficient state management.',
      'Contributed to a large-scale mobile and web application providing inventory management and delivery services, working with a team of 15+ members. ',
      "Designed the UI using ReactJS and Flutter, implementing Design principles and Custom React hooks to ensure scalable code.",,' Used React Query in a project improving performance and reducing server load by 40%.'
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Verzeo | Hyd | ',
    duration: 'Mar 2022 - May 2022',
    description: [
      'Utilized ReactJS in developing an e-commerce website. Collaborated with team of 5.',
      'Implemented global state management using Context API and useReducer hook to handle state transitions across the app.',
      'Implemented best practices in front-end development and optimization techniques, resulting in a 25% boost in customer engagement.',
    ],
  },
];

const Experience = () => {
  
  return (
    <>
    <section className="exp" id="experience">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="exp-bx wow zoomIn">
                        <h2>Experience</h2>
                        <Row className="mt-3">
                        {experiences.map((exp, index) => (
                            <Col md={12} key={index} className="mb-4" style={{textAlign: "start"}}>
                                <div className="d-flex">
                                  <div style={{width:"6px", height:"6px", marginTop:"1px"}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8"/>
                                    </svg>
                                  </div>
                                <div className="ms-3">
                                    <h4 style={{ fontWeight:"bold"}}>{exp.title}</h4>
                                    <span className="text-muted">{exp.company}</span>
                                    <span className="text-muted">{exp.duration}</span>
                                    <p className="text-dark"><ArrowRight size={25} style={{marginTop:"-2px"}} /> {highlightText(exp.description, ["Context API","Git","React Query",'Redux','Custom React hooks','optimization techniques'])}</p>
                                </div>
                                </div>
                            </Col>
                    ))}
                          </Row>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default Experience;
