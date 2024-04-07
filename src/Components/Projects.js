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
import projImg13 from "../assests/imgs/SnapUp.PNG";
import projImg14 from "../assests/imgs/Crypto.PNG";
import projImg15 from "../assests/imgs/Portifolio.PNG";
import projImg16 from "../assests/imgs/Dashboard.PNG";

import Nav from "react-bootstrap/Nav";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Projects = () => {
  const projectsFirst = [
    {
      title: "Ecommerce project",
      description: `An online store that contains many pages such as the
      products page and the search page in addition to the shopping cart`,
      imgUrl: projImg13,
      Url: "https://tamammabroukeh.github.io/Snap-Up/",
    },
    {
      title: "Cryptoverse currencies project",
      description: `Cryptocurrency website that contains an explanation of
      digital currencies, in addition to the currency search feature`,
      imgUrl: projImg14,
      Url: "https://tamammabroukeh.github.io/cryptoverse-currencies/",
    },
    {
      title: "Prtifolio project",
      description: `A personal website that contains works, projects, and
      ways to communicate with the owner of the site using`,
      imgUrl: projImg15,
      Url: "https://androw-portifolio.netlify.app/",
    },
    {
      title: "Dashboard Design",
      description:
        "A simple dashboard to show some information like orders, sales, customers, products,...",
      imgUrl: projImg16,
      Url: "https://tamammabroukeh.github.io/Dashboard/",
    },
  ];
  // const projectsFirst = [
  //   {
  //     title: "Travel The World",
  //     description: "Design & Development",
  //     imgUrl: projImg1,
  //   },
  //   {
  //     title: "Business Startup",
  //     description: "Design & Development",
  //     imgUrl: projImg2,
  //   },
  //   {
  //     title: "Boost Your Startup",
  //     description: "Design & Development",
  //     imgUrl: projImg3,
  //   },
  //   {
  //     title: "Special Design",
  //     description: "Design & Development",
  //     imgUrl: projImg10,
  //   },
  // ];

  const projectsSecond = [
    {
      title: "Hangman Game",
      description:
        "A simple game whose goal is to search for a word within a group of letters",
      imgUrl: projImg5,
      Url: "https://tamammabroukeh.github.io/Hangman-game/",
    },
    {
      title: "Memory Game",
      description: "A simple game whose goal is to find two similar pictures",
      imgUrl: projImg8,
      Url: "https://tamammabroukeh.github.io/Memory-Game/",
    },
    {
      title: "XO Game",
      description: "XO game that needs no introduction",
      imgUrl: projImg11,
      Url: "https://tamammabroukeh.github.io/XO-Game/",
    },
    {
      title: "Leon",
      description: "Simple landing page to display company information",
      imgUrl: projImg7,
      Url: "https://tamammabroukeh.github.io/Leon/",
    },
  ];

  const projectsThird = [
    {
      title: "Kasper",
      description:
        "Portfolio to display team information and details of its work and projects",
      imgUrl: projImg6,
    },
    {
      title: "Portfolio Company",
      description:
        "Portfolio to display company information and details of its work and projects",
      imgUrl: projImg9,
      Url: "https://tamammabroukeh.github.io/Special-Design/",
    },
    {
      title: "Bondi",
      description:
        "Portfolio to display company information and details of its work and projects",
      imgUrl: projImg4,
      Url: "https://tamammabroukeh.github.io/Bondi/",
    },
    {
      title: "Mtn Company",
      description: "A website similar to the MTN website",
      imgUrl: projImg12,
      Url: "https://tamammabroukeh.github.io/Mtn/",
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
