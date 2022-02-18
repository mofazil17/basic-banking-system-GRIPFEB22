import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

function Addfunds(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [amt, setamt] = useState({});

  const submit = (e) => {
    e.preventDefault();
    var today = new Date();
    var cdate = today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
    var ctime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    axios.put(`https://banking-system-alcoder.herokuapp.com/customer/update/${props.id}`, {
        status: 1,
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
      const value = Number(props.cb)+Number(amt);
      props.updateCB(value)
    setShow(false);
  };


  return (
    <div>
      <>
        <Button variant="success" onClick={handleShow}>
          Add Funds
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <h4>Add Funds</h4>
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
              AMOUNT : <span>(min-₹1)</span>
            </label>
            <input
              type="number"
              min="1"
              required
              onChange={(e) => setamt(e.target.value)}
            />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={(e) => submit(e)}>
              Credit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default Addfunds;
