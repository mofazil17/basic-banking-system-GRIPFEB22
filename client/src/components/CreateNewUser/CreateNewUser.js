import React from "react";
import { Form, Row, Button, Container } from "react-bootstrap";
import axios from "axios";

class CreateNewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      currentBal: 0,
    };
  }

  submit = (e) => {
    e.preventDefault();
    axios.post("https://banking-system-alcoder.herokuapp.com/customer", {
        name: this.state.name,
        email: this.state.email,
        currentBal: this.state.currentBal,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    this.props.history.push('/customertable')
  };

  render() {
    return (
      <Container>
        <Row>
          <Container
            className="d-flex justify-content-center align-item-center my-md-2 my-lg-5"
            bg="light"
          >
            <Form
              className=" col-lg-4 col-md-12 rounded p-5 my-5"
              onSubmit={this.submit}
              bg="light"
            >
              <Form.Group className="mb-3">
                <Form.Label className="d-flex justify-content-center">
                  <h3 className="text-muted">
                    <u>New Customer Form</u>
                  </h3>
                </Form.Label>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="d-flex justify-content-start">
                  Name
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  onChange={(e) => this.setState({ name: e.target.value })}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="d-flex justify-content-start">
                  Email address
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => this.setState({ email: e.target.value })}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="d-flex justify-content-start">
                  Initial Balanace
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Initial Balance"
                  onChange={(e) =>
                    this.setState({ currentBal: e.target.value })
                  }
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </Row>
      </Container>
    );
  }
}

export default CreateNewUser;
