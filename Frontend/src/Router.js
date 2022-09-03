import React, { Profiler, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Profile from "./components/layout/Profile";
import Dashboard from "./components/Dashboard";



//admin
import ViewAllRoles from "./components/admin/ViewAllRoles";
import UpdateUser from "./components/admin/UpdateUser";
import AdminCheckLeave from "./components/admin/AdminCheckLeave";
import AdminLeaveViewAll from "./components/admin/AdminLeaveViewAll";


//customer



//employee
import RegisterStaff from "./components/auth/RegisterStaff";

import EmpAttendaceMark from "./components/employee/EmpAttendaceMark";
import EmpViewAllAttendance from "./components/employee/EmpViewAllAttendance";
import EmpAttendanceUpdate from "./components/employee/EmpAttendanceUpdate";
import EmpViewOneAttendance from "./components/employee/EmpViewOneAttendance";

import EmpLeaveFormCreate from "./components/employee/EmpLeaveFormCreate";
import EmpViewAllLeaves  from "./components/employee/EmpViewAllLeaves";
import EmpLeaveEdit from "./components/employee/EmpLeaveEdit";
import EmpLeaveViewOne from "./components/employee/EmpLeaveViewOne";




export default function Router() {
	return (
			<div >
				<Router>
					<Navbar/>	
					<Routes>
						<Route exact path="/" element={<Landing/>} />
						<Route exact path="/dashboard" element={<Dashboard/>} />
						<Route exact path="/register" element={<Register/>} />
						<Route exact path="/login" element={<Login/>} />
						<Route exact path="/userprofile" element={<Profile/>} />

						{/* employee */}

						<Route exact path="/staffRegister" element={<RegisterStaff/>} />

						<Route path="/EmpAttendaceMark" element={<EmpAttendaceMark/>}/>
                    	<Route path="/EmpViewAllAttendance" element={<EmpViewAllAttendance/>}/>
                    	<Route path="/EmpAttendanceUpdate/:id" element={<EmpAttendanceUpdate/>}/>
                    	<Route path="/EmpViewOneAttendance/:id" element={<EmpViewOneAttendance/>}/>
                  
						<Route path="/EmpLeaveFormCreate" element={<EmpLeaveFormCreate/>}></Route>
						<Route path="/EmpViewAllLeaves" element={<EmpViewAllLeaves/>}/>
						<Route path="/EmpLeaveEdit/:id" element={<EmpLeaveEdit/>}/>
						<Route path="/EmpLeaveViewOne/:id" element={<EmpLeaveViewOne/>}/>
                    



						{/* admin */}
				
						<Route exact path="/ViewAllRoles" element={<ViewAllRoles/>}/>
						<Route exact path="/updateUser/:id" element={<UpdateUser/>}/>
						<Route path="/AdminCheckLeave/:id" element={<AdminCheckLeave/>}/>
                    	<Route path="/AdminLeaveViewAll" element={<AdminLeaveViewAll/>}/>
                   

						{/* customer */}
				




					</Routes>
					<Footer/>
				</Router>
			</div>
	);
}

