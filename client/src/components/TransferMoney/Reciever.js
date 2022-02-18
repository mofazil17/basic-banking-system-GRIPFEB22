import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import "../TransferMoney/styles.css";
import axios from "axios";

class Reciever extends React.Component {
  constructor() {
    super();
    this.state = {
      sender: 0,
      senderdetails: {},
      reciever: 0,
      recieverdetails: {},
      amount: 1,
      customers: [],
    };
  }

  submit = (e) => {
    e.preventDefault();
    if (this.state.reciever === 0) {
      return alert("enter reciever details");
      return 0;
    }
    var today = new Date();
    var cdate =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    var ctime =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    axios
      .post("https://banking-system-alcoder.herokuapp.com/transaction", {
        sender: this.state.senderdetails,
        reciever: this.state.recieverdetails,
        date: cdate,
        time: ctime,
        amount: this.state.amount,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .put("https://banking-system-alcoder.herokuapp.com/customer/update", {
        sender: this.state.sender,
        reciever: this.state.reciever,
        amount: this.state.amount,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    const value = Number(this.props.cb) - Number(this.state.amount);
    this.props.updateCB(value);
    this.setState({
      amount: 1,
      reciever: 0,
    });
    this.fetchdata();
  };

  recieverdata = (e) => {
    this.setState({ reciever: e.target.value });
    this.state.customers.map((items) => {
      if (e.target.value === items._id) {
        this.setState({
          recieverdetails: items,
        });
      }
    });
  };

  fetchdata = () => {
    axios
      .get("https://banking-system-alcoder.herokuapp.com/customer")
      .then((response) => {
        const custdata = response.data;
        this.setState({
          customers: custdata,
        });
      });
    this.setState({
      sender: this.props.sender,
    });
  };
  componentDidMount = () => {
    this.fetchdata();
  };

  render() {
    return (
      <div className="col-lg-6 col-md-12 mb-1">
        <Container className="customerdetails" style={{ height: "100%" ,overflow:"hidden"}}>
          <Row className="mb-2 heading">Reciever's Details</Row>
          <Row>
            <Form onSubmit={this.submit}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="d-flex justify-content-start">
                  Email
                </Form.Label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => this.recieverdata(e)}
                  required
                >
                  <option defaultValue="" value={"0"}>---Select an Email---</option>
                  {this.state.customers.map((items, index) => {
                    if (items._id !== this.state.sender) {
                      return (
                        <option value={items._id} key={index}>
                          {items.email}
                        </option>
                      );
                    } else {
                      this.state.senderdetails = items;
                    }
                  })}
                </select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Row>
                  <div className="col-5">
                    <Form.Label className="d-flex justify-content-start">
                      Amount<span className="text-muted"> (min-₹1)</span>
                    </Form.Label>
                  </div>
                  <div className="col-2 text-align-centre">:</div>
                  <div className="col-4 text-align-left">
                    <p>₹ {this.state.amount}</p>
                  </div>
                </Row>
                <input
                  type="range"
                  className="form-range"
                  step="1"
                  min="1"
                  max={this.props.cb}
                  onChange={(e) => this.setState({ amount: e.target.value })}
                ></input>
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-2">
                Proceed
              </Button>
            </Form>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Reciever;
