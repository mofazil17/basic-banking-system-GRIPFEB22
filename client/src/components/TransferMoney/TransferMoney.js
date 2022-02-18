import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import "../TransferMoney/styles.css";
import Reciever from "./Reciever";
import NewTransactionhistoryofsender from "../Transactionhistoryofsender/NewTransactionhistoryofsender";
import Addfunds from "./modals/Addfunds";
import Viewtransaction from "./modals/Viewtransaction";
import Withdrawfunds from "./modals/Withdrawfunds";

function TransferMoney({ match }){

  useEffect(() => {
    fetchdata();
  }, []);
  
  const [data, setdata] = useState({});
  const [amt,setamt] = useState(0);

  const fetchdata = () => {
    axios.get(`https://banking-system-alcoder.herokuapp.com/customer/${match.params.id}`).then((response) => {
      const custdata = response.data;
      setdata(custdata);
      setamt(custdata.currentBal);
    });
  };

  return (
    <div>
      <Container className="p-4">
        <Row>
          <div className="col-lg-6 col-md-12 mb-1">
            <Container className="customerdetails" style={{ height: "100%",overflow:"hidden" }}>
              <Row className="mb-2 heading">Sender's Details</Row>
              <Row>
                <div className="col-5">ID</div>
                <div className="col-1">:</div>
                <div className="col-6">{data._id}</div>
              </Row>
              <Row>
                <div className="col-5">Name</div>
                <div className="col-1">:</div>
                <div className="col-6">{data.name}</div>
              </Row>
              <Row>
                <div className="col-5">Email</div>
                <div className="col-1">:</div>
                <div className="col-6">{data.email}</div>
              </Row>
              <Row>
                <div className="col-5">Current Balance</div>
                <div className="col-1">:</div>
                <div className="col-6">₹ {amt}</div>
              </Row>
              <Row>
                <div
                  className="col-4"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Viewtransaction id={match.params.id} />
                </div>
                <div
                  className="col-4"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Addfunds id={match.params.id} cb={amt} updateCB={cb=>setamt(cb)} />
                </div>
                <div
                  className="col-4"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Withdrawfunds id={match.params.id} cb={amt} updateCB={cb=>setamt(cb)} />
                </div>
              </Row>
            </Container>
          </div>
          <Reciever sender={match.params.id} cb={amt} updateCB={cb=>setamt(cb)} />
        </Row>

        <Row className="pt-5 pb-1">
        <NewTransactionhistoryofsender sender={match.params.id} />
        </Row>
      </Container>
    </div>
  );
}

export default TransferMoney;
