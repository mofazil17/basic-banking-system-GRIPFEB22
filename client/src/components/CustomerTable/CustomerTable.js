import react from "react";
import axios from "axios";
import { Table, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class CustomerTable extends react.Component {
  constructor() {
    super();
    this.state = {
      customers: [],
    };
  }

  delete = (item) => {
    axios.delete(`https://banking-system-alcoder.herokuapp.com/customer/delete/${item}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      this.fetchdata()
    //window.location.reload(true);
  };

  fetchdata = () =>{
    axios.get("https://banking-system-alcoder.herokuapp.com/customer").then((response) => {
      const custdata = response.data;
      this.setState({
        customers: custdata,
      });
    });
    
  }
  componentDidUpdate = () => {
    this.fetchdata();
  }
  componentDidMount = () => {
    this.fetchdata();
  };

  render() {
    return (
      <Container className="table-responsive" >
        <Table striped variant="secondary" hover className="mt-3 ">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Current Balance</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((items, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{items.name}</td>
                <td>{items.email}</td>
                <td>₹ {items.currentBal}</td>
                <td>
                  <Link to={`/customertable/${items._id}`}>
                    <Button variant="primary" size="md" value={index._id} >
                      Transfer Funds
                    </Button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    id={items._id}
                    onClick={() => {
                        return this.delete(items._id);
                    }}
                  >
                    <img src="https://img.icons8.com/metro/26/000000/full-trash.png" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default CustomerTable;
