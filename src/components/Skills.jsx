import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import {Col, Row } from "react-bootstrap";

export const Skills = () => {
    const skills = [
      'ReactJS',
      'NodeJS',
      'Web Development',
      'React Query',
      'JavaScript',
      'State management',
      'Context API',
      'Redux',
      'RESTful API integration',
      'HTML & CSS',
      'Bootstrap',
      'Material UI',
      'Flutter',
      'Git & GitHub',
    ];

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>With hands-on experience in ReactJS and expertise in developing dynamic, user-centric web and mobile applications, I have developed my skills in state management, responsive design, and seamless RESTful API integration. My experience working on multiple large-scale projects has made me a quick learner who is flexible to new situations and technologies. 
                        </p>
                        <Row className="justify-content-center">
                        {skills.map((skill, index) => (
                            <Col
                              key={index}
                              xs="auto"
                              className="mb-2 d-flex align-items-center justify-content-center"
                            >
                               <div className="gradient-button px-3 py-2">{skill}</div>
                            </Col>
                          ))}
                          </Row>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
