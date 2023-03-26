import Carousel from "react-multi-carousel";
import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assests/imgs/meter1.svg";
import meter2 from "../assests/imgs/meter2.svg";
import meter3 from "../assests/imgs/meter3.svg";
import colorSharp from "../assests/imgs/color-sharp.png";
import TrackVisibility from "react-on-screen";
import "animate.css";
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
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
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
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} alt="Sharp" className="background-image-left" />
    </section>
  );
};
