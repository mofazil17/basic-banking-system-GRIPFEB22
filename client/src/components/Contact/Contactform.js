import React from "react";
import { Container, Form, Button } from "react-bootstrap";

function Contactform() {
  return (
    <Container>
      <Form
        className="p-3 p-md-5 rounded"
        action="https://formsubmit.co/bd693a6341cca9541ec06bc132ed0abe"
        method="POST"
        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 13px 18px" }}
      >
        <Form.Group className="mb-3">
          <Form.Label style={{ margin: "0" }}>
            <h3>Contact us</h3>
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <textarea
            name="msg"
            id=""
            cols="60"
            rows="7"
            style={{
              resize: "none",
              border: "1px solid #CED4DA",
              width: "100%",
              padding: "1rem",
            }}
            placeholder="Type your message here"
            required
          ></textarea>
        </Form.Group>
        <input type="hidden" name="_next" value="https://basic-banking-system-mohamedfazil17.netlify.app"/>
        <input type="hidden" name="_captcha" value="false"></input>
        <Button variant="primary" type="submit">
          Send →
        </Button>
      </Form>
    </Container>
  );
}

export default Contactform;
