import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

function Withdrawfunds(props) {
  const [show, setShow] = useState(false);
  const handleClose = (e) => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
    componentDidMount();
  };
  const [amt, setamt] = useState(0);

  const componentDidMount = () => {
    axios.get(`/customer/${props.id}`).then((response) => {
      console.log(response)
    });
  };

  const submit = (e) => {
    e.preventDefault();
    var today = new Date();
    var cdate = today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
    var ctime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    axios.put(`https://banking-system-alcoder.herokuapp.com/customer/update/${props.id}`, {
        amount: amt,
        date: cdate,
        time: ctime,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      const value = Number(props.cb)-Number(amt);
      props.updateCB(value)
    setShow(false);
  };

  return (
    <div>
      <>
        <Button variant="danger" onClick={handleShow}>
          Withdraw Funds
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <h4>Withdraw Funds</h4>
          </Modal.Header>
          <Modal.Body
            className="p-5"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <label style={{ fontSize: "1.3rem" }}>
              AMOUNT <span className="text-muted">(min-₹1)</span>:
              <span className="mx-5">₹ {amt}</span>
            </label>
            <input
              type="range"
              className="form-range"
              step="1"
              min="1"
              max={props.cb}
              onChange={(e) => setamt(e.target.value)}
              required
            ></input>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="danger" onClick={(e) => submit(e)}>
              Withdraw
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default Withdrawfunds;
