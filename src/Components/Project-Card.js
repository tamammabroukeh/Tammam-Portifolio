import { Col } from "react-bootstrap";
export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col sm={6} lg={6}>
      <div className="project-imgbox">
        <img src={imgUrl} alt="proj-img"></img>
        <div className="project-text">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
