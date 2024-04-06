import Carousel from "react-multi-carousel";
import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assests/imgs/meter1.svg";
import meter2 from "../assests/imgs/meter2.svg";
import meter3 from "../assests/imgs/meter3.svg";
import colorSharp from "../assests/imgs/color-sharp.png";
import TrackVisibility from "react-on-screen";
import "animate.css";
import Html from "../assests/imgs/html.png";
import Css from "../assests/imgs/css.png";
import JS from "../assests/imgs/js.png";
import Tailwind from "../assests/imgs/tailwind.png";
import Redux from "../assests/imgs/redux.png";
import React from "../assests/imgs/react.png";
import Next from "../assests/imgs/next.png";
import Framer from "../assests/imgs/framer.png";
import Typescript from "../assests/imgs/ts.png";
import MaterialUi from "../assests/imgs/mui.png";
const skills = [
  { id: 1, Image: Html, title: "HTML5" },
  { id: 2, Image: Css, title: "Css3" },
  { id: 3, Image: JS, title: "Javascript" },
  { id: 4, Image: Tailwind, title: "TailwindCss" },
  { id: 5, Image: Redux, title: "Redux" },
  { id: 6, Image: React, title: "React.js" },
  { id: 7, Image: Next, title: "Next.js" },
  { id: 8, Image: Framer, title: "Framer-motion" },
  { id: 9, Image: Typescript, title: "Typescript" },
  { id: 10, Image: Framer, title: "Framer-motion" },
  { id: 11, Image: MaterialUi, title: "Material ui" },
];
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__slideInUp" : ""
                    }
                  >
                    <h2>Skills</h2>
                    <p>
                      I always strive to find ways to challenge myself and
                      develop my skills.
                    </p>
                  </div>
                )}
              </TrackVisibility>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skill-slider"
                >
                  {skills.map((skill) => {
                    return (
                      <div key={skill.id} className="item">
                        <img src={skill.Image} alt={skill.title} />
                        <h5>{skill.title}</h5>
                      </div>
                    );
                  })}
                  {/* <div className="item">
                  <img src={meter1} alt="img" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="img" />
                  <h5>Web Designer</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="img" />
                  <h5>Problem solving</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="img" />
                  <h5>Algorithm</h5>
                </div> */}
                </Carousel>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} alt="Sharp" className="background-image-left" />
    </section>
  );
};
