import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./Project-Card";
import colorSharp2 from "../assests/imgs/color-sharp2.png";
import projImg1 from "../assests/imgs/project-img1.png";
import projImg2 from "../assests/imgs/project-img2.png";
import projImg3 from "../assests/imgs/project-img3.png";
import projImg4 from "../assests/imgs/Bondi.PNG";
import projImg5 from "../assests/imgs/hangman.PNG";
import projImg6 from "../assests/imgs/Kasper.PNG";
import projImg7 from "../assests/imgs/Leon.PNG";
import projImg8 from "../assests/imgs/memory.PNG";
import projImg9 from "../assests/imgs/Special.PNG";
import projImg10 from "../assests/imgs/tamam.PNG";
import projImg11 from "../assests/imgs/XO.PNG";
import projImg12 from "../assests/imgs/Mtn.PNG";
import Nav from "react-bootstrap/Nav";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Projects = () => {
  const projectsFirst = [
    {
      title: "Travel The World",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Boost Your Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Special Design",
      description: "Design & Development",
      imgUrl: projImg10,
    },
  ];
  const projectsSecond = [
    {
      title: "Hangman Game",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Memory Game",
      description: "Design & Development",
      imgUrl: projImg8,
    },
    {
      title: "XO Game",
      description: "Design & Development",
      imgUrl: projImg11,
    },
    {
      title: "Leon",
      description: "Design & Development",
      imgUrl: projImg7,
    },
  ];

  const projectsThird = [
    {
      title: "Kasper",
      description: "Design & Development",
      imgUrl: projImg6,
    },
    {
      title: "Portifolio",
      description: "Design & Development",
      imgUrl: projImg9,
    },
    {
      title: "Bondi",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Mtn Company",
      description: "Design & Development",
      imgUrl: projImg12,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    These are my projects that I have worked on throughout my
                    internship and there are many more to come
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link id="projects-tabs-tab-first" eventKey="first">
                    Tab one
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link id="projects-tabs-tab-second" eventKey="second">
                    Tab Two
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link id="projects-tabs-tab-third" eventKey="third">
                    Tab Three
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projectsFirst.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projectsSecond.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projectsThird.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} className="background-image-right" alt="Sharp2" />
    </section>
  );
};
