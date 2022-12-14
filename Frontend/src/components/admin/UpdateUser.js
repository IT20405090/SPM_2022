import React, { useState, useEffect } from "react";
import { useNavigate , useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Form,
  Input,
  Button,
} from "reactstrap";
import { GetUserByID , UpdateAdmin } from "../../Services/AuthServices";
import Swal from "sweetalert2";
import moment from "moment";


const UpdateUser = () => {

  const navigate = useNavigate();
  const [updateChange, setUpdaetChange] = useState(false);
  const ChangetoUpdate = (e) => {
    e.preventDefault();
    setUpdaetChange(true);
  };

  const {id} = useParams();

  const getUpdatedUserDetails = async () => {
    let data = await GetUserByID(id);
    console.log(data);
    if (data?.status == 200) {
      setUserId(data?.data?._id);
      setUserRole(data?.data?.userRole);
      setUserPassword(data?.data?.password);

      setName(data?.data?.name);
      setEmail(data?.data?.email);
      setMobileNo(data?.data?.mobileno);
      setAddress(data?.data?.address);
      setDate(
        moment(data?.data?.date).format(" YYYY-MM-DD ") +
          " " +
          moment(data?.data?.date).format(" h:mm A ")
      );
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Data Fected Failed try again..!",
      });
    }
  };

  useEffect(() => {
    getUpdatedUserDetails();
  }, []);

  const [UserId, setUserId] = useState("");
  const [UserRole, setUserRole] = useState("");
  const [UserPassword, setUserPassword] = useState("");

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [MobileNo, setMobileNo] = useState("");
  const [address, setAddress] = useState("");
  const [Date, setDate] = useState("");

  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleMobileNo = (e) => {
    e.preventDefault();
    setMobileNo(e.target.value);
  };

  const handleAddress = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
  };


  const UpdateData = async (e) => {
    e.preventDefault();
    const regdata = {
      name: Name,
      mobileno: MobileNo,
      email: Email,
      password: UserPassword,
      address: address,
      userRole: UserRole,
    };
    console.log("sending data", regdata);
    let data = await UpdateAdmin(UserId, regdata);
    console.log("Reg Group ", data);
    if (data?.data?._id) {
      Swal.fire({
        icon: "success",
        title: "Congrats!",
        text: "Update successfull...!",
      });
      navigate("/ViewAllRoles");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Update Failed...!",
      });
    }
  };

  return (
    <div style={{ marginTop: "70px", marginBottom: "70px" }}>
      <div>
        <center>
        <Card className="" style={{ marginLeft: "30px", marginRight: "30px" }}>
          <CardHeader>
            <CardTitle style={{ color: "purple", fontSize: "30px" }}>
              User Details
            </CardTitle>
          </CardHeader>
          <CardBody>
            <div style={{ width: "600px" }}>
              <Form>
                <Input
                  type="text"
                  className="input"
                  value={Name}
                  onChange={(e) => handleName(e)}
                  readOnly={!updateChange ? true : false}
                />
                <br />
                <Input
                  type="text"
                  className="input"
                  value={Email}
                  onChange={(e) => handleEmail(e)}
                  readOnly={!updateChange ? true : false}
                />
                <br />
                <Input
                  type="text"
                  className="input"
                  value={MobileNo}
                  onChange={(e) => handleMobileNo(e)}
                  readOnly={!updateChange ? true : false}
                />
                <br />
                <Input
                  // style={{display:UserRole == "student" ?"flex":"none"}}
                  type="text"
                  className="input"
                  value={address}
                  onChange={(e) => handleAddress(e)}
                  readOnly={!updateChange ? true : false}
                />
                {/* <br style={{display:UserRole == "student" ?"flex":"none"}}/> */}
                <Input                 
                  type="text"
                  className="input"
                  value={Date}
                  readOnly={true}
                />
                <br />
                <Button
                  color="primary"
                  onClick={(e) => ChangetoUpdate(e)}
                  style={{ display: updateChange ? "none" : "flex" }}
                >
                  Click To Update
                </Button>
                <Button
                  className="btn btn-success"
                  onClick={(e) => UpdateData(e)}
                  style={{ display: updateChange ? "flex" : "none" }}
                >
                  Update
                </Button>
              </Form>
            </div>
          </CardBody>
        </Card>
        </center>
      </div>
    </div>
  );
};

export default UpdateUser;
