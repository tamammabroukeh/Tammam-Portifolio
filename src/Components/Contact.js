import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import contactImg from "../assests/imgs/contact-img.svg";
export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setbuttonText] = useState("Send");
  const [status, setStatus] = useState({});
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formInitialDetails,
      [category]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setbuttonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setbuttonText("Send");
    let result = response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: "Message sent successfully." });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row>
          <Col md={6}>
            <img src={contactImg} alt="Contact" />
          </Col>
          <Col md={6}>
            <h2>Get in touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col className="px-1" sm={6}>
                  <input
                    type="text"
                    value={formInitialDetails.firstName}
                    placeholder="First Name"
                    onChange={(event) =>
                      onFormUpdate("firstName", event.target.value)
                    }
                  />
                </Col>
                <Col className="px-1" sm={6}>
                  <input
                    type="text"
                    value={formInitialDetails.lastName}
                    placeholder="Last Name"
                    onChange={(event) =>
                      onFormUpdate("lastName", event.target.value)
                    }
                  />
                </Col>
                <Col className="px-1" sm={6}>
                  <input
                    type="text"
                    value={formInitialDetails.email}
                    placeholder="Email Address"
                    onChange={(event) =>
                      onFormUpdate("email", event.target.value)
                    }
                  />
                </Col>
                <Col className="px-1" sm={6}>
                  <input
                    type="text"
                    value={formInitialDetails.phone}
                    placeholder="Phone Number"
                    onChange={(event) =>
                      onFormUpdate("phone", event.target.value)
                    }
                  />
                </Col>
                <Col className="px-1" sm={6}>
                  <textarea
                    rows={6}
                    value={formInitialDetails.phone}
                    placeholder="Message"
                    onChange={(event) =>
                      onFormUpdate("message", event.target.value)
                    }
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={status.success === true ? "success" : "danger"}
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
