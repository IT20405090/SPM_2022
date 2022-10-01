import React, { Component } from "react";
import axios from "axios";
import jsPdf from "jspdf";
import "jspdf-autotable";

// Generate report - all Appointments
export default class UserList extends Component {
  constructor(props) {
    super(props);

    this.deleteUser = this.deleteUser.bind(this);

    this.state = { user: [], posts: [] };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios
      .get("http://localhost:4000/GetAllAppointments/")
      .then((response) => {
        this.setState({ user: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //pdf generating
  jsPdfGenerator = () => {
    //new document in jspdf
    var doc = new jsPdf("p", "pt");

    doc.text(210, 30, "Details of Appointments");
    doc.autoTable({ html: "#my-pdf" });

    doc.autoTable({
      columnStyles: { europe: { halign: "center" } },
      margin: { top: 10 },
    });

    //save the pdf
    doc.save("Details of Users.pdf");
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div style={{ float: "none" }}></div> <br />
          <div className="row">
            <div className="col-lg-9 mt-2 mb-2">
              <h1> Details of all Appointments </h1> <br />
              <button
                type="button"
                title="Report generation"
                class="btn btn-outline-primary btn-sm"
                onClick={this.jsPdfGenerator}
              >
                {" "}
                <h4>Download as a PDF</h4>
              </button>
            </div>

            <div className="col-lg-3 mt-2 mb-2">
              <div
                class="form-control input-lg"
                style={{ backgroundColor: "#e5e3e3" }}
              >
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  name="searchQuery"
                  onChange={this.handleSearchArea}
                ></input>
              </div>
            </div>
          </div>
          <form style={{ backgroundColor: "#ffff" }}>
            <table class="table table-bordered table-white" id="my-pdf">
              <thead className="thead-light">
                <tr>
                  <th scope="col"> Vehicle Number </th>
                  <th scope="col"> Vehicle Type </th>
                  <th scope="col"> Date </th>
                  <th scope="col"> Fuel Type </th>
                  <th scope="col"> Volume </th>
                </tr>
              </thead>
              <tbody>
                {" "}
                {this.state.user.map((props) => (
                  <tr key={props.id}>
                    <td> {props.vehicleNumber} </td>
                    <td> {props.vehicleType} </td>
                    <td> {props.date} </td>
                    <td> {props.fuelType} </td>
                    <td> {props.volume} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}
