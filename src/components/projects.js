import { Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./projectCard";
import TrackVisibility from 'react-on-screen';
import '../styles/projects.css';
import { projects } from "../constants/constants";
import { useEffect, useState } from "react";

const Projects = () => {

  const [key, setKey] = useState(null)

  useEffect(() => {
    const getActiveTab = JSON.parse(localStorage.getItem('activeTab'));
    console.log(getActiveTab)
    if(getActiveTab){
      setKey(getActiveTab)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('activeTab', JSON.stringify(key))
  }, [key])
  

  return (
    <section className="project" id="projects">
      <div id = 'container-project'>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 className="projects-text-title">Projects</h2>
                <p className="projects-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container activeKey={key} id="projects-tabs" defaultActiveKey="first">
                  <Nav onSelect = {(k) => setKey(k)} variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                      <div id="grid-projects">
                          {
                            projects.map((project, index) => {
                              if(project.category === 'Lobby') {
                                return (
                                  <ProjectCard
                                    key={`Lobby-${index}`}
                                    {...project}
                                    />
                                )
                              }
                            })
                          }
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <div id="grid-projects">
                          {
                            projects.map((project, index) => {
                              if(project.category === 'Dining Room') {
                                return (
                                  <ProjectCard
                                    key={`DR-${index}`}
                                    {...project}
                                    />
                                )
                              }
                            })
                          }
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                      <div id="grid-projects">
                          {
                            projects.map((project, index) => {
                              if(project.category === 'Kitchen') {
                                return (
                                  <ProjectCard
                                    key={`kitchen-${index}`}
                                    {...project}
                                    />
                                )
                              }
                            })
                          }
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="sixth">
                      <div id="grid-projects">
                          {
                            projects.map((project, index) => {
                              if(project.category === 'Bathroom') {
                                return (
                                  <ProjectCard
                                    key={`Bath-${index}`}
                                    {...project}
                                    />
                                )
                              }
                            })
                          }
                        </div>
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