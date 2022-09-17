import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CreateAdmin } from "../../Services/AuthServices";
import Swal from 'sweetalert2';
import { ValidateSignUp } from "./Validation";
import grp from '../../img/grp.webp';

const RegisterStaff = () => {

	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
		address:"",
		mobileno:"+94",
		userRole:"Employee"
	});

	const { name, email, password, password2 , address , mobileno } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		console.log("Form data", e);
		e.preventDefault();
		if (password !== password2) {
			alert("Password do not match", "danger");
		} else {
			let data = await CreateAdmin(formData);
			console.log("data",data)
			if(data?.data?._id)
			{
				Swal.fire({
					icon: 'success',
					title: 'Congrats!',
					text: 'Register successfull...!',
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
	};


	return (
		<div className="register-form">
			<div style={{height:'80px', backgroundColor:"#FA9c1B", marginTop:'-20px'}}>
			
		<h1 className="heading">Employee Registration</h1>
		</div>
		<table>

<br/>
             <tr>
             <td>
            <div >
            <form  style={{backgroundColor:"#ebecf0"}} onSubmit={(e) => onSubmit(e)}>
            
            <div className="form-group">
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            <label className="form-label"><h4>Name of the Employee : </h4></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
			&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; <img src={grp} class="img-fluid" alt="" width="600" height="1000" />
             </center>
             </td>
             </tr>
             </table>
			 
</div>
	);
};

export default RegisterStaff;
