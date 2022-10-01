//import react
import React from "react";
//import react hooks
import { useState, useEffect } from "react";
//import axios
import axios from "axios";
//import useParams (use to access the matching data)
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function UpdateAppointment() {
  //track the states in function and set values with useState
  const [vehicleNumber, setvehicleNumber] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [date, setDate] = useState("");
  const [fuelType, setFuleType] = useState("");
  const [volume, setVolume] = useState("");

  // const [Total_Hours_per_Day,  setTotal_Hours_per_Day]=useState("");
  // const [Total_Hours_per_Month,setTotal_Hours_per_Month]=useState("");

  //id initialize to match the data
  const id = useParams();

  const [UpdateAppointment] = useState({
    vehicleNumber: "",
    vehicleType: "",
    Date: "",
    fuelType: "",
    volume: "",
    // Total_Hours_per_Day:"",
    // Total_Hours_per_Month:""
  });

  //target.value use to get an input value from keyboard
  const handle_vehicleNumber_Change = (e) => {
    e.preventDefault();
    setvehicleNumber(e.target.value);

    //validation
    if (Number(e.target.value)) {
      alert("vehicleNumber Cannot Contain Numerical Value!");
    }
  };

  const handle_VehicleType = (e) => {
    e.preventDefault();
    setVehicleType(e.target.value);

    //validation
    if (e.target.value.length > 7) {
      alert("Limit Exceeded!");
    }
  };

  //assign the updated value to existing data
  const ChangeOnClick = async (e) => {
    e.preventDefault();

    console.log("data");

    const formData = new FormData();

    formData.append("vehicleNumber", vehicleNumber);
    formData.append("vehicleType", vehicleType);
    formData.append("date", date);
    formData.append("fuelType", fuelType);
    formData.append("volume", volume);
    // formData.append("Total_Hours_per_Day",Total_Hours_per_Day);
    // formData.append("Total_Hours_per_Month",Total_Hours_per_Month);

    setvehicleNumber("");
    setvehicleType("");
    setdate("");
    setfuelType("");
    volume("");
    // setTotal_Hours_per_Day("");
    // setTotal_Hours_per_Month("");

    console.log(formData.get("vehicleNumber"));

    AppointmentUpdate.vehicleNumber = formData.get("vehicleNumber");
    AppointmentUpdate.vehicleType = formData.get("vehicleType");
    AppointmentUpdate.Date = formData.get("Date");
    AppointmentUpdate.fuelType = formData.get("fuelType");
    AppointmentUpdate.volume = formData.get("volume");

    console.log(UpdateAppointment);

    //update process
    console.log(id);
    await axios
      .put(
        `http://localhost:5000/UpdateAppointment/${id?.id}`,
        UpdateAppointment
      )
      .then((res) => {
        console.log("Return Data", res);
        alert("Update Success!!");
      })
      .catch((err) => {
        alert("Update Failed!!");
        console.log(err);
      });
  };

  //page refresh function
  function refreshPage() {
    window.location.reload(false);
  }

  //get one data to update
  useEffect(function effectFunction() {
    console.log("get ID", id);

    axios
      .get(`http://localhost:5000/GetOneAppointment/${id?.id}`)
      .then((res) => {
        console.log("data", res);
        setVehicleNumber(res.data.oneAppointment.vehicleNumber);
        setVehicleType(res.data.oneAppointment.vehicleType);
        setDate(res.data.oneAppointment.date);
        setFuleType(res.data.oneAppointment.fuelType);
        setVolume(res.data.oneAppointment.volume);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <Col lg={12} md={12} sm={12} className="border border-dark mt-5 ">
            <Col lg={12} md={12} sm={12}>
              <center>
                <h1 className="mt-4 mb-3">Make an Appointment</h1>
              </center>
            </Col>
            <center>
              <Col lg={8} md={12} sm={12}>
                <Form className="my-3 mx-4" onSubmit={(e) => submitButton(e)}>
                  <Form.Group className="mb-3" controlId="v_no">
                    <Form.Label className="left">Vehicle Number :</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="ABCXXXX"
                      maxLength={7}
                      value={vehicleNumber}
                      onChange={handle_vehicleNumber_Change}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="v_type">
                    <Form.Label className="left">Vehicle Type :</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      required
                      value={vehicleType}
                      onChange={handle_VehicleType}
                    >
                      <option>Select</option>
                      <option value="Car">Car</option>
                      <option value="Van">Van</option>
                      <option value="SUV">SUV</option>
                      <option value="Lorry">Lorry</option>
                      <option value="Bus">Bus</option>
                      <option value="Bike">Bike</option>
                      <option value="Three Wheel">Three Wheel</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="v_no">
                    <Form.Label className="left">Date :</Form.Label>
                    <Form.Control
                      type="date"
                      defaultValue={setDate}
                      onChange={(e) => {
                        setDate(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="v_type">
                    <Form.Label className="left">Fuel Type :</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      required
                      value={fuelType}
                      onChange={fuelType}
                    >
                      <option>Select</option>
                      <option value="Petrol">Petrol</option>
                      <option value="Diesel">Diesel</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-5" controlId="v_no">
                    <Form.Label className="left">Volume (L) :</Form.Label>
                    <Form.Control
                      type="number"
                      defaultValue={setVolume}
                      onChange={(e) => {
                        setVolume(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <center>
                    <Button
                      className="mt-4 mb-4"
                      variant="primary"
                      type="submit"
                    >
                      Edit
                    </Button>
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

export default UpdateAppointment;
