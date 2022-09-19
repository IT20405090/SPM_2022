// //import react
// import React from 'react';
// //import react hooks
// import {useState, useEffect} from 'react';
// //import axios
// import axios from 'axios';
// //import useParams (use to access the matching data)
// import{useParams} from "react-router-dom";

// //import the image
// import edit from '../../img/edit.jpg'

// function UpdateRecord() {

//   //track the states in function and set values with useState 
//   const [Date, setDate]=useState("");
//   const [amount, setamount]=useState("");
//   const [Fname, setFname]=useState("");
//   const [Ftype, setFtype]=useState("");
//   const [price, setprice]=useState("");

//   //id initialize to match the data
//   const id=useParams();


//   const [RecordUpdate]=useState({

//         Date:"",
//         amount:"",
//         Fname:"",
//         Ftype:"",
//         price:""
        
// })

// //handle comments for the leave form
// const handleDate=(e)=>{
//   e.preventDefault();
//   setDate(e.target.value)
// }

// const handleamount=(e)=>{
//   e.preventDefault();
//   setamount(e.target.value)
// }

// const handleFname=(e)=>{
//     e.preventDefault();
//     setFname(e.target.value)
//   }
//   const handleFtype=(e)=>{
//     e.preventDefault();
//     setFtype(e.target.value)
//   }
//   const handleprice=(e)=>{
//     e.preventDefault();
//     setprice(e.target.value)
//   }
// //assign the updated value to existing data  
// const ChangeOnClick = async(e)=>{
//   e.preventDefault();

//   console.log("data");

//   const formData = new FormData();

//   formData.append("Date",Date);
//   formData.append("amount",amount);
//   formData.append("Fname",Fname);
//   formData.append("Ftype",Ftype);
//   formData.append("price",price);

 

//         setDate("");
//         setamount("");
//         setFname("");
//         setFtype("");
//         setprice("");
        
       
// console.log(formData.get('Date'));

// RecordUpdate.Date=formData.get('Date');
// RecordUpdate.amount=formData.get('amount');
// RecordUpdate.Fname=formData.get('Fname');
// RecordUpdate.Ftype_Reason=formData.get('Ftype');
// RecordUpdate.price=formData.get('price');


// console.log(RecordUpdate);


// //update process 
// console.log(id)
// await axios.put(`http://localhost:5000/Update/${id?.id}`,RecordUpdate)
// .then(res=>{
//   console.log("Return Data",res);
//   alert("Update Success!!");

// })
// .catch(err=>{
//   alert("Update Failed!!");
//   console.log(err);
// });

// }

// //page refresh function
// function refreshPage() {
//   window.location.reload(false);
// }

// //get one data to update
// useEffect(function effectFunction() {
//   console.log("get ID",id);

//   axios.get(`http://localhost:5000/GetOne/${id?.id}`)
//   .then(res=>{
//     console.log("data",res);
//     setDate(res.data.OneRecord.Date)
//     setamount(res.data.OneRecord.amount)
//     setFname(res.data.OneRecord.Fname)
//     setFtype(res.data.OneRecord.Ftype)
//     setprice(res.data.OneRecord.price)
    
   
//   }).catch(err => console.log(err));



// },[]);



//   return (
//     <div>

        
//         <div style={{height:'80px', backgroundColor:"#FA9c1B", marginTop:'-20px'}}>
//                   <br/><br/>
//                   <h1 style={{color:'black', textAlign:'center',fontSize:"60px"}}>Update Fuel Record</h1>
//                   <div style={{height:'80px', backgroundColor:"#ff8347", marginTop:'-50px'}}></div>


//        </div>

//        <br/>
       


//        <div className='FORM2'style={{ marginTop: '40px', backgroundColor: "#f5f5f5", padding:'10px 20% 10px 20%' }}>

//        {/* <img src={AdminLeave} style={{ width: 700, marginTop: '10px', marginBottom: '10px', marginLeft: '70px', marginRight: '10px' }}></img> */}
//                   <form >
//                   <div className='form-group'>
//                             <label>Received Date:</label><br />
//                             <textarea 
//                             type="text"
//                             class="form-control" 
//                             id="Date" 
//                             value={Date}
//                             onChange={(e) => handleDate(e)}></textarea>
//                             <br/>
//                         </div>

//                       <table className='' style={{border:"1px solid black"}} >
//                       <br/>
//                         <tr>
//                         <td>
//                           <div className='form-group'>
//                             <label style={{fontWeight:'700'}}>Fuel Name: </label>
//                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                             {Fname} 
                              
//                           </div>
//                         </td>
//                         <td>
//                           <div className='form-group'>
//                             <label style={{fontWeight:'700'}}>Amount Received: </label>
//                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                             {amount} 
                              
//                           </div>
//                         </td>
//                         </tr>
//                         <br/>
//                         <tr>
//                         <td colspan="2">
//                           <div className='form-group'>
//                               <label style={{fontWeight:'700'}}>Type of Fuel </label>
//                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                               {Ftype} 
                                
//                           </div>
//                         </td>
//                         </tr>
//                         <br/>
//                         <tr>
//                         <td colspan="2">
//                           <div className='form-group'>
//                               <label style={{fontWeight:'700'}}>Price per Litre </label>
//                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                               {price} 
                                
//                           </div>
//                         </td>
//                         </tr>
                        
//               </table> 
 
//             </form>

                 

                
             
//             <div>

//               <table>
//                   <tr>
//                     <td>
//                       <button className="btn btn-warning" style={{marginLeft:'70px',width:"200px",marginTop:'15px'}}
//                       onClick={refreshPage}>  
//                       <i class="fa-solid fa-arrow-rotate-right"></i>&nbsp;REFRESH
//                       </button>
//                    </td>
//                    <td>
//                       <button className="btn btn-success" type="submit" style={{marginTop:'15px', width:"200px", 
//                       marginLeft:"350px",backgroundColor:"#484846"}} onClick={(e)=>ChangeOnClick(e)} >
//                       <i class="fa-solid fa-pen-to-square"></i> &nbsp; UPDATE
//                       </button>
//                   </td>
//                   </tr>
//               </table>

//             </div>

//         </div>

//     </div>
//   )
// }

// export default UpdateRecord

import React  from 'react';
import {useState ,useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import grp from '../../img/ram.jpg';

function UpdateFuel() {




  //use state to track state in function components
  const [Date, setDate]=useState("");
  const [amount, setamount]=useState("");
  const [Fname, setFname]=useState("");
  const [Ftype, setFtype]=useState("");
  const [price, setprice]=useState("");
  
  const id = useParams();

  
  const [fuel] = useState({

     Date:"",
     amount:"",
     Fname:"",
     Ftype:"",
     price:""
 })
   
//assign the updated value to existing data  
const ChangeOnClick = async(e)=>{
    e.preventDefault();
  
    console.log("data");
  
    const formData = new FormData();
  
    formData.append("Date",Date);
    formData.append("amount",amount);
    formData.append("Fname",Fname);
    formData.append("Ftype",Ftype);
    formData.append("price",price);
    

    setDate("")
    setamount("");
    setFname("");
    setFtype("");
    setprice("");
    
console.log(formData.get('Date'));


fuel.Date=formData.get('Date');
fuel.amount=formData.get('amount');
fuel.Fname=formData.get('Fname');
fuel.Ftype=formData.get('Ftype');
fuel.price=formData.get('price');


console.log(fuel);

//update process 
console.log(id)
await axios.put(`http://localhost:5000/Update/${id.id}`,fuel)
.then(res=>{
  console.log("Return Data",res);
  alert("Update Success!!");

})
.catch(err=>{
  alert("Update Failed!!");
  console.log(err);
});

}



//get one data to update
useEffect(function effectFunction() {
  console.log("get ID",id);

  axios.get(`http://localhost:5000/GetOne/${id.id}`)
  .then(res=>{
    console.log("data",res);
    setDate(res.data.Onedata.Date)
    setamount(res.data.Onedata.amount)
    setFname(res.data.Onedata.Fname)
    setFtype(res.data.Onedata.Ftype)
    setprice(res.data.Onedata.price)
    
   
  }).catch(err => console.log(err));



},[]);



  
     

    return (

          
                  
        //   <div style={{ backgroundImage: `url(${backgroundImage})`,   backgroundSize: 'cover'}}>
      <div>
        <br/><br/>
        <center>
        <center>
        <h1 style={{marginTop:'-50px',marginBottom:'3px', backgroundColor:'#04619F', color:'white'}}>Update Details</h1>
        </center>
        <table  width = "1800" height = "600">
            <tr>
              <td>
              <div class="container-fluid bg-3 text-left">
              <br/><br/>
              <form>
             
                             <div className="form-group" style={{marginBottom:'15px',color:'black', marginLeft:'20px'}}>
                              <h3><label  className="form-label">Date :</label></h3>&nbsp;&nbsp;&nbsp;&nbsp;

                              <input type="text" className="form-control"
                              name="Date"
                              style={{marginBottom:'15px',color:'black'}}
                              value={Date}
                              onChange={e => setDate(e.target.value)}
                              
                            />
                            </div>

                             <div className="form-group" style={{marginBottom:'15px',color:'black', marginLeft:'20px'}}>
                              <h3><label  className="form-label">Received Amount :</label></h3>&nbsp;&nbsp;&nbsp;&nbsp;

                              <input type="text" className="form-control"
                              name = "amount"
                              onChange={e => setamount(e.target.value)}
                              value={amount}
                            />
                            </div>
                            

                            <div className="form-group" style={{marginBottom:'15px',color:'black', marginLeft:'20px'}}>
                              <h3><label className="form-label" >Fuel Name :</label></h3>&nbsp;&nbsp;&nbsp;&nbsp;

                              <input type="text"
                              list="type"
                              name="Fname"
                              className="form-control"            
                              value={Fname} 
                              onChange={e => setFname(e.target.value)} required
                             />
                            </div>
                            

                            <div className="form-group" style={{marginBottom:'15px',color:'black', marginLeft:'20px'}}>
                            <h3><label style={{margineBottom:'5px', marginRight:'30px'}}>  Type of Fuel </label></h3>&nbsp;&nbsp;&nbsp;&nbsp;

                            <input type="text"
                            name="Ftype"
                            className="form-control"
                            value={Ftype} 
                            onChange={e => setFtype(e.target.value)}
                        
                            />
                            </div>


                             <div className="form-group" style={{marginBottom:'15px',color:'black', marginLeft:'20px'}}>
                            <h3><label style={{margineBottom:'5px', marginLeft:'10px', marginRight:'30px'}}>  Price per Litre : </label></h3>&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="text"
                            name="price"
                            className="form-control"
                            value={price} 
                            onChange={e => setprice(e.target.value)}
                        
                                />&nbsp;&nbsp;&nbsp;&nbsp;
                             </div>
          
    
                         

                            
          
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        <button className="btn btn-outline-primary btn-lg" type="submit" onClick={(e)=>ChangeOnClick(e)}>
                        Update Details </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    
                        <br/>
                            
                        <div>

                       
                        <br/><br/>
                        </div>
                        
                        </form>        
                        <br/>
                            
            </div>
            
            </td>
            
            <td><img src={grp} class="img-fluid" alt="" width="900" height="1000" marginLeft="300px"/></td>
            </tr>
            </table>
            </center>
      </div>
    // </div>
  )
};



export default UpdateFuel