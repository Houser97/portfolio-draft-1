import { Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./projectCard";
import Ext1 from "../assets/img/projects/Ext1.jpg";
import Ext2 from "../assets/img/projects/Ext2.jpg";
import Int2 from "../assets/img/projects/Int2.jpg";
import INTERIORCERAMICA from "../assets/img/projects/INTERIORCERAMICAYMETAL1-4-2.jpg";
import InteriorPlasticoyVidrio from "../assets/img/projects/InteriorPlasticoyVidrio.jpg";
import IntRen from "../assets/img/projects/IntRen.jpg";
import Livingroom1 from "../assets/img/projects/Livingroom1.jpg";
import Romantico2 from "../assets/img/projects/Romantico2-2.jpg";
import bedroom from "../assets/img/projects/bedroom.jpg";
import babyBedroom from "../assets/img/projects/babyBedroom.jpg";
import TrackVisibility from 'react-on-screen';
import '../styles/projects.css';

const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: Ext1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: Ext2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: Int2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: INTERIORCERAMICA,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: InteriorPlasticoyVidrio,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: Livingroom1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: IntRen,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: Romantico2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: bedroom,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: babyBedroom,
    },
  ];

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
                      <Nav.Link eventKey="first">Exterior Designs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Interior Designs</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <div id="grid-projects">
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
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