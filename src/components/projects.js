import { Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./projectCard";
import TrackVisibility from 'react-on-screen';
import '../styles/projects.css';
import { projects } from "../constants/constants";

const Projects = () => {
  return (
    <section className="project" id="projects">
      <div id = 'container-project'>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 className="projects-text">Projects</h2>
                <p className="projects-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Living Room</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Bedroom</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Lobby</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Dining Room</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">Kitchen</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="sixth">Bathroom</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <div id="grid-projects">
                        {
                          projects.map((project, index) => {
                            if(project.category === 'Living Room') {
                              return (
                                <ProjectCard
                                  key={`LR-${index}`}
                                  {...project}
                                  />
                              )
                            }
                          })
                        }
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <div id="grid-projects">
                        {
                          projects.map((project, index) => {
                            if(project.category === 'Bedroom') {
                              return (
                                <ProjectCard
                                  key={`BR-${index}`}
                                  {...project}
                                  />
                              )
                            }
                          })
                        }
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Projects;