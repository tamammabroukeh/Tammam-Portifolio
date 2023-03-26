import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assests/imgs/logo.svg";
import newLogo from "../assests/imgs/NewMyLogo.png";
import navIcon1 from "../assests/imgs/nav-icon1.svg";
import navIcon2 from "../assests/imgs/nav-icon2.svg";
import navIcon3 from "../assests/imgs/nav-icon3.svg";
function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrooled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrooled(true);
      } else {
        setScrooled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <Navbar className={scrolled ? "scrolled" : ""} expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={newLogo} alt="logo" className="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="">
                <img src={navIcon1} alt="" />
              </a>
              <a href="">
                <img src={navIcon2} alt="" />
              </a>
              <a href="">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <button className="vvd" onClick={console.log("connect")}>
              <span>Let`s Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
