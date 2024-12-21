import { Container, Row, Col, Tab, Nav, Card } from "react-bootstrap";
import projImg1 from "../assets/img/proj-1.svg";
import projImg2 from "../assets/img/proj-2.svg";
import projImg3 from "../assets/img/proj-3.svg";
import projImg4 from "../assets/img/proj-4.svg";
import projImg5 from "../assets/img/proj-5.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ArrowRight } from "react-bootstrap-icons";
import { highlightText } from "../utils/highlightText";

export const Projects = () => {
  // mern: auth, chat
  // node: url shortner
  // react: crytp currency
  // javascript: recipe

  const projects = [
    {
      title: "MERN Auth",
      description: ["MERN stack application enables users to securely register, log in, and manage their profiles using JWT-based authentication stored in HTTP-only cookies. It features protected routes for personalized access, with Redux Toolkit for state management. The passwords are encrypted and routes are secured using middleware in express. The data is persistent as it is stored in mongoDB."],
      imgUrl: projImg1,
    },
    {
      title: "Chat Application-FrenLy",
      description: ["Full Stack Chatting App facilitates real-time communication using Socket.io, allowing users to sign up, log in, search, and chat with individuals or groups. It supports role-based group management, profile customization with Cloudinary, and real-time notifications for a seamless experience. User details are securely stored in an encrypted format, with protected routes ensuring data privacy"],
      imgUrl: projImg2,
    },
    {
      title: "Cryptocurrency tracker- CryptoVerse",
      description: ["Our Cryptocurrency Tracker App uses React, Material UI, and Chart.js to provide a responsive interface for tracking and analyzing cryptocurrencies. It supports INR and USD, allows currency searches, displays historical charts, and highlights trending coins using the CoinGecko API. Context API manages app-wide state seamlessly."],
      imgUrl: projImg3,
    },
    {
      title: "Url Shortner",
      description: ["URL Shortener uses Node.js for the backend to generate compact, unique links with Nanoid and stores them securely in MongoDB. The app tracks the number of times each shortened URL is visited, providing valuable insights for users. Server-side rendering (SSR) with EJS ensures a dynamic and responsive user interface."],
      imgUrl: projImg4,
    },
    {
      title: "Recipe App",
      description: ["Recipe App, built with JavaScript, HTML, and CSS, integrates with TheMealDB API to search and explore recipes. Users can save their favorite recipes to local storage and view detailed recipes, including ingredients and images. The app provides a user-friendly interface to easily browse and discover new meals."],
      imgUrl: projImg5,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center d-flex flex-nowrap" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">MERN STACK</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="first">NODE JS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="first">REACT JS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="first">JAVASCRIPT</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <Row className="g-3">
                      {projects.map((project, index) => (
                        <Col md={6} lg={4} key={index}>
                          <Card className="h-100 shadow-sm hover-effect">
                            <Card.Body>
                              {/* Image and Title Section */}
                              <div className="d-flex align-items-center mb-3">
                                <img
                                  src={project.imgUrl}
                                  alt={project.title}
                                  className="rounded-circle me-3"
                                  style={{ width: "55px", height: "55px", objectFit: "cover" }}
                                />
                                <Card.Title style={{ color: "#4A2FBD", fontWeight:"bold", fontSize:"1.2rem" }} className="mb-0">
                                  {project.title}
                                </Card.Title>
                              </div>
                              {/* Description Section */}
                              <Card.Text style={{width:"100%", fontSize: "0.8rem", textAlign:"start"}} className="text-muted description-text">
                                {highlightText(project.description,["HTTP-only", "Redux Toolkit", "express", "encrypted", "mongoDB", "Socket.io","real-time notifications", "Cloudinary", "Context API", " Material UI", "Node.js", "Nanoid", "(SSR) with EJS", "Javascript"])}
                              </Card.Text>
                              <div className="d-flex justify-content-end">
                              <a
              href="https://github.com/SadiyaNaushad"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                backgroundColor: "#4A2FBD",
                border: "none",
                transition: "background-color 0.3s ease",
                position: "absolute",
              bottom: "1rem",
              right: "1rem",
              padding: "0.5rem 1rem",
              }}>
              Source code <ArrowRight size={25}/>
            </a>
          </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>

                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
