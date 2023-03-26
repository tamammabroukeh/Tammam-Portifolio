import { useEffect, useState } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ onValidated, status, message }) => {
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (status === "success") {
      clearFields();
    }
  }, [status]);
  const handleSubmit = (event) => {
    event.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };
  const clearFields = () => {
    setEmail("");
  };
  return (
    <Col lg={12}>
      <div className="newsletter-box">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our newsletter</h3>
            {status === "sending" && <Alert>Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-box">
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email Address"
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
