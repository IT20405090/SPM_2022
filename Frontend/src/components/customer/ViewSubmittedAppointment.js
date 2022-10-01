import * as React from "react";
//import React, { Component } from "react";
//import "../node_modules/bootstrap/scss/bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";

function ViewSubmitAppointment() {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [date, setDate] = useState("");
  const [fuelType, setFuleType] = useState("");
  const [volume, setVolume] = useState("");

  const navigate = useNavigate();

  //id initialize to match the data
  const id = useParams();

  //const [appointment, setAppointment] = useState([]);

  const [AppointmentOnce] = useState({
    vehicleNumber: "",
    vehicleType: "",
    date: "",
    fuelType: "",
    volume: "",
  });

  function deleteButton() {
    axios
      .delete(`http://localhost:5000//DeleteAppointment/${id?.id}`)

      .then((res) => {
        alert("Appointment Deleted");
        navigate("SubmitAppointment/");

        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  //   React.useEffect(() => {
  useEffect(function getAppointment() {
    console.log("get ID,id");
    axios
      .get(`http://localhost:5000/GetOneAppointment/${id?.id}`)
      .then((res) => {
        console.log("date", res);
        // setAppointment(res.data.customer);
        setVehicleNumber(res.data.oneAppointment.vehicleNumber);
        setVehicleType(res.data.oneAppointment.vehicleType);
        setDate(res.data.oneAppointment.date);
        setFuleType(res.data.oneAppointment.fuelType);
        setVolume(res.data.oneAppointment.volume);

        console.log(res);
        console.log(id);
      })
      .catch((err) => {
        console.log(err);
      });
    // }
    // getAppointment();
  }, []);

  return (
    <Container>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <Col lg={12} md={12} sm={12} className="border border-dark mt-5 ">
            <Col lg={12} md={12} sm={12}>
              <center>
                <h1 className="mt-4 mb-3">Your Appointment</h1>
              </center>
            </Col>
            <center>
              <Col lg={8} md={12} sm={12}>
                <Form className="my-3 mx-4">
                  <Form.Group className="mb-3" controlId="v_no">
                    <Form.Label className="left">
                      Vehicle Number : {vehicleNumber}
                    </Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="v_type">
                    <Form.Label className="left">
                      Vehicle Type : {vehicleType}
                    </Form.Label>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="v_no">
                    <Form.Label className="left">Date : {date}</Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="v_type">
                    <Form.Label className="left">
                      Fuel Type : {fuelType}
                    </Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-5" controlId="v_no">
                    <Form.Label className="left">
                      Volume (L) : {volume}
                    </Form.Label>
                  </Form.Group>
                  <center>
                    <div
                      class="btn-group mr-2"
                      role="group"
                      aria-label="First group"
                    >
                      <button
                        type="button"
                        class="btn btn-primary"
                        color="green"
                      >
                        Home
                      </button>

                      <Link to={"/UpdateAppointment/" + id.id}>
                        <button
                          type="button"
                          class="btn btn-secondary"
                          href={"/UpdateAppointment/${id?.id}"}
                        >
                          Edit
                        </button>
                      </Link>

                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={deleteButton}
                      >
                        Delete
                      </button>
                    </div>
                    <div></div> <br></br>
                    <div
                      class="btn-group mr-2"
                      role="group"
                      aria-label="Second group"
                    >
                      <button type="button" class="btn btn-success">
                        Fuel Summary
                      </button>
                    </div>
                  </center>
                </Form>
              </Col>
            </center>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default ViewSubmitAppointment;
