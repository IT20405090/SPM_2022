import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterCustomer } from "../../Services/AuthServices";
import Swal from 'sweetalert2';
import { ValidateSignUp } from "./Validation";
import reg from '../../img/reg.webp';

const Register = () => {

	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
		address:"",
		mobileno:"+94",
		userRole:"Customer"
	});

	const { name, email, password, password2 , address , mobileno } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {

		e.preventDefault();

		let validate = ValidateSignUp(formData);

		if(validate.status == false)
		{
			alert(validate.message);
		}

		else{
				if (password !== password2) {
					alert("Password do not match...", "danger");
				} else {
					let data = await RegisterCustomer(formData);
					console.log("data",data)
					if(data?.data?.userRole)
					{
					localStorage.setItem("token",data?.data?.token);
					localStorage.setItem("userRole",data?.data?.userRole);
					localStorage.setItem("user",data?.data?.user);
					Swal.fire({
						icon: 'success',
						title: 'Congrats!',
						text: 'Registration successfull...!',
					})
					navigate("/dashboard");
					}
					else
					{
						Swal.fire({
							icon: 'error',
							title: 'Oops...',
							text: 'Registration Failed..!',
						})
					}
				}
			}
	};


	return (
		<div className="register-form">
		<div style={{height:'80px', backgroundColor:"#FA9c1B", marginTop:'-20px'}}>
		<h1 className="heading">User Registration Form</h1>
		</div>
			<p className="lead">
				<i className="fas fa-user"></i> Create Your Account
			</p>
			<table>
			
			<br/>
			
             <tr>
             <td>
            <div >
            <form  style={{backgroundColor:"#ebecf0"}} onSubmit={(e) => onSubmit(e)}>
            
            <div className="form-group">
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            <label className="form-label"><h4>Name of the User : </h4></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<input type="text"
						class="form-control"
						placeholder="Name"
						name="name"
						value={name}
						onChange={(e) => onChange(e)} 
                
              />
            </div>
            <br/>
             <div className="form-group">
              
            <label className="form-label"><h4>Email Address : </h4></label>
                <input type="email"
						class="form-control"
						placeholder="Email Address"
						name="email"
						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
						value={email}
						onChange={(e) => onChange(e)} 
                
              />
            </div>
			<br/>
            <div className="form-group">
              
            <label className="form-label"><h4>Create a Password : </h4></label>
                <input type="password"
						class="form-control"
						placeholder="Password"
						name="password"
						minLength="6"
						value={password}
						onChange={(e) => onChange(e)}  
                
              />
            </div>
			<br/>
           
    
           <div className="form-group">
              
            <label className="form-label"><h4>Confirm Password : </h4></label>
                <input type="password"
						class="form-control"
						placeholder="Confirm Password"
						name="password2"
						minLength="6"
						value={password2}
						onChange={(e) => onChange(e)} 
                
              />
            </div>
            <br/>
             <div className="form-group">
              
            <label className="form-label"><h4>Contact Number : </h4></label>
                <input type="text"
						class="form-control"
						placeholder="Mobile no"
						name="mobileno"
						value={mobileno}
						onChange={(e) => onChange(e)}  
                
              />
            </div>
            <br/>
             <div className="form-group">
              
            <label className="form-label"><h4>Address : </h4></label>
                <input type="text"
						class="form-control"
						placeholder="Address"
						name="address"
						value={address}
						onChange={(e) => onChange(e)}
                
              />
            </div>
            <br/>
            
            <input type="submit" className="btn-lg btn-secondary" value="Register" />
            
    
            <br/>
            </form>
           
            </div>
            </td>
         
            <td>
            <center>
			&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; <img src={reg} class="img-fluid" alt="" width="600" height="2000" />
             </center>
             </td>
             </tr>
             </table>
			 </div>
			 

	);
};

export default Register;
