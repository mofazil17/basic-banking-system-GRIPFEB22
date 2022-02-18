import React from "react";
import { Modal, Button, Container, Table } from "react-bootstrap";
import axios from "axios";

class Viewtransaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      data: [],
    };
  }

  handleClose = () =>
    this.setState({
      show: false,
    });

  handleShow = () => {
    this.setState({
      show: true,
    });
    this.fetchdata();
  };

  fetchdata = () => {
    axios.get(`https://banking-system-alcoder.herokuapp.com/customer/${this.props.id}`).then((response) => {
      const custdata = response.data;
      this.setState({
        data: custdata.transactions,
      });
    });
  };

  display = (item, index) => {
    if (item.transactionstatus === 1) {
      return (
        <tr key={index} className="table-success">
          <td className="text-success">{index + 1}</td>
          <td className="text-success">{item._id}</td>
          <td className="text-success">Credit</td>
          <td className="text-success">+{item.amount}</td>
          <td className="text-success">{item.date}</td>
          <td className="text-success">{item.time}</td>
        </tr>
      );
    } else {
      return (
        <tr key={index} className="table-danger">
          <td className="text-danger">{index + 1}</td>
          <td className="text-danger">{item._id}</td>
          <td className="text-danger">Debit</td>
          <td className="text-danger">-{item.amount}</td>
          <td className="text-danger">{item.date}</td>
          <td className="text-danger">{item.time}</td>
        </tr>
      );
    }
  };
  render() {
    return (
      <div>
        <>
          <Button variant="primary" className="fs-sm-6" onClick={this.handleShow}>
            View Transactions
          </Button>

          <Modal
            show={this.state.show}
            onHide={this.handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header>
              <h4>View Transactions</h4>
            </Modal.Header>
            <Modal.Body>
              <Container className="table-responsive">
                <Table striped variant="dark" hover>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Transaction id</th>
                      <th>Status</th>
                      <th>Amount</th>
                      <th>Date</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.data.map((item, index) =>
                      this.display(item, index)
                    )}
                  </tbody>
                </Table>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
    );
  }
}

export default Viewtransaction;
