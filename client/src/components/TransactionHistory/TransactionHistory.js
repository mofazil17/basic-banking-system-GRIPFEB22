import react from "react";
import axios from "axios";
import { Table, Container } from "react-bootstrap";

class TransactionHistory extends react.Component {
  constructor() {
    super();
    this.state = {
      transactionHistory: [],
    };
  }

  componentDidMount = () => {
    axios
      .get("https://banking-system-alcoder.herokuapp.com/transaction")
      .then((response) => {
        const transactiondata = response.data;
        this.setState({
          transactionHistory: transactiondata,
        });
      });
  };

  render() {
    return (
      <Container className="mt-3 table-responsive">
        <Table striped variant="secondary" hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Transaction ID</th>
              <th>Sender</th>
              <th></th>
              <th>Receiver</th>
              <th>Date</th>
              <th>Time</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {this.state.transactionHistory.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item._id}</td>
                <td>{item.sender.name}</td>
                <td>→</td>
                <td>{item.reciever.name}</td>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default TransactionHistory;
