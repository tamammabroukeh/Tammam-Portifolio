import { Col } from "react-bootstrap";
export const ProjectCard = ({ title, description, imgUrl, Url }) => {
  return (
    <Col sm={6} lg={6}>
      <a style={{ color: "#fff" }} href={Url} dir={Url}>
        <div className="project-imgbox">
          <img src={imgUrl} alt="proj-img" />
          <div className="project-text">
            <h4>{title}</h4>
            <span>{description}</span>
            <p>Click to visit the website</p>
          </div>
        </div>
      </a>
    </Col>
  );
};
