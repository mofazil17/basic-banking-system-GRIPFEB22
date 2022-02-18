import React from "react";
import { Modal, Button, Container, Table } from "react-bootstrap";
import axios from "axios";

class NewTransactionhistoryofsender extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        show: false,
        data: [],
        sender: 0
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
      axios.get("https://banking-system-alcoder.herokuapp.com/transaction").then((response) => {
        const transactiondata = response.data;
        this.setState({
          data: transactiondata,
        });
      });
      this.setState({
        sender: this.props.sender,
      });
    };
  
    display = (item, index) => {
      if (item.sender._id === this.state.sender) {
        return (
            <tr key={index} className="table-danger">
            <td className="text-danger">{item.sender.name}</td>
            <td className="text-danger">→</td>
            <td className="text-danger">{item.reciever.name}</td>
            <td className="text-danger">Id-{item._id}</td>
            <td className="text-danger">{item.date}</td>
            <td className="text-danger">{item.time}</td>
            <td className="text-danger">-{item.amount}</td>
          </tr>
        );
      } else if(item.reciever._id === this.state.sender) {
        return (
          <tr key={index} className="table-success">
            <td className="text-success">{item.sender.name}</td>
            <td className="text-success">→</td>
            <td className="text-success">{item.reciever.name}</td>
            <td className="text-success">Id-{item._id}</td>
            <td className="text-success">{item.date}</td>
            <td className="text-success">{item.time}</td>
            <td className="text-success">+{item.amount}</td>
          </tr>
        );
      }
    };
    render() {
      return (
        <div className="container" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Button variant="primary" className="fs-sm-5" size="lg" style={{boxShadow:"#000000 0px 3px 15px"}} onClick={this.handleShow}>
              View Transactions of Sender
            </Button>
  
            <Modal
              show={this.state.show}
              onHide={this.handleClose}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header>
                <h4>View Transactions of Sender</h4>
              </Modal.Header>
              <Modal.Body>
                <Container className="table-responsive">
                  <Table striped variant="dark" hover>
                    <thead>
                      <tr>
                        <th>Sender</th>
                        <th></th>
                        <th>Receiver</th>
                        <th>Transaction ID</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Amount</th>
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
        </div>
      );
    }
  }
  
  export default NewTransactionhistoryofsender;
  