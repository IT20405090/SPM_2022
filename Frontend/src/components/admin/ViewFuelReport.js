import React, { Component } from  'react';
import axios from 'axios';
import backgroundImage from '../../img/anodya5.jpg';  



export default class ViewFuelReport extends Component{
    constructor(props){
      super(props);
    
      this.state= {
        fuelreport: []
      };
    }
    
    componentDidMount(){
      this.retrieveFuelReport();
    }
    
    retrieveFuelReport(){
      axios.get("http://localhost:5000/FuelReport").then(res =>{
        if(res.data.success){
          this.setState({
            fuelreport:res.data.existingFuelReport
          });
        
          console.log(this.state.fuelreport)
        }
      });
    }
    
    
    onDelete = (id) =>{
    
      axios.delete(`http://localhost:5000/FuelReport/delete/${id}`).then((res)=>{
          alert("Delete successfully");
          this.retrieveFuelReport();
            
      })
    }

    
    filterData(fuelreport,searchKey){
      const result = fuelreport.filter((fuelreport) =>
      fuelreport.FuelType.toLowerCase().includes(searchKey)
    
      )
    
      this.setState({fuelreport:result})
    }
    
    handleSearchArea = (e) =>{
      const searchKey = e.currentTarget.value;
    
      axios.get("http://localhost:5000/FuelReport").then(res=>{
        if(res.data.success){
          this.filterData(res.data.existingFuelReport,searchKey)
        }
      });
    }


  
    
  
      render(){
        return (
    
    
    
    
   
                     
         <div style={{ backgroundImage: `url(${backgroundImage})`,   backgroundSize: 'cover'}}>
        <div>
        <br/>
            <div className="col-md-8 mt-4 mx-auto">
           
            <center>       
               <h1 style={{marginTop:'-50px',marginBottom:'3px', backgroundColor:'#04619F', color:'white'}}><b>Fuel Delivery Report</b></h1></center>
            </div></div>
            <br/>

        <hr/>

        <button className="btn btn-outline-warning"><a href='/AddFuelReport'>Add New Data</a></button>
        <br/> <br/>

        <center>
        <div className="col-lg-9 mt-2 mb-2">
              <input
              className="form-control"
              style={{marginLeft:'-200px'}}
              type="search"
           
              placeholder="search by fuel type"
              name="searchQuery"
              onChange={this.handleSearchArea}>
              </input>
            </div>
            </center>
        
       
            <br/>
            <center>
            <table className = "table table-bordered" style={{backgroundColor:"black"}}>
                <thead>
                    <tr>
                    <th style={{color:'white'}} scope = "col"></th>  
                    <th style={{color:'white'}} scope = "col" >Reference ID</th>
                    <th style={{color:'white'}} scope = "col">Fuel Type</th>
                    <th style={{color:'white'}} scope = "col">Received Date</th> 
                    <th style={{color:'white'}} scope = "col">Received Amount</th> 
                    <th style={{color:'white'}} scope = "col">MotoBikes</th>
                    <th style={{color:'white'}} scope = "col">Cars</th>  
                    <th style={{color:'white'}} scope = "col">ThreeWheel</th>
                    <th style={{color:'white'}} scope = "col">Buses</th> 
                    <th style={{color:'white'}} scope = "col">Vans</th> 
                    <th style={{color:'white'}} scope = "col">Other</th>
                    <th style={{color:'white'}} scope = "col">Total Amount</th>
                    <th style={{color:'white'}} scope = "col">Octane 92</th>
                    <th style={{color:'white'}} scope = "col">Octane 95</th>
                    <th style={{color:'white'}} scope = "col">Deisal</th>
                    <th style={{color:'white'}} scope = "col">Remainign Amount</th>
                   
                    </tr>
                </thead>
                <tbody>
    
              {this.state.fuelreport.map((fuelreport,index) =>(
                <tr key ={index} style={{color:'#F7DE08'}}>
                  <th scope = "row">{index+1}</th>
                  <td>{fuelreport.RefID}  </td>  
                  <td>{fuelreport.FuelType}</td>
                  <td>{fuelreport.Rdate}</td>
                  <td>{fuelreport.Ramount}</td>  
                  <td>{fuelreport.MotoBikes}  </td> 
                  <td>{fuelreport.Cars}</td>  
                  <td>{fuelreport.ThreeWheel}</td> 
                  <td>{fuelreport.Buses}</td>  
                  <td>{fuelreport.Vans}</td> 
                  <td>{fuelreport.Other}</td> 
                  <td>{fuelreport.TotalAmount}</td> 
                  <td>{fuelreport.Oct92}</td> 
                  <td>{fuelreport.Oct95}</td> 
                  <td>{fuelreport.Diesal}</td> 
                  <td>{fuelreport.Remaintot}</td> 
               
                  <td>
    
                    <br/>
                    <a className="btn btn-outline-warning" style = {{textDecoration:'none',color:'white'}}  href={`/UpdateFuelReport/${fuelreport._id}`}>
                                &nbsp;Edit
                                </a>
                              
          
                 
                                &nbsp;
                                <a className="btn btn-outline-warning" style = {{textDecoration:'none',color:'white'}}  href="/ViewFuelReport" onClick={()=> this.onDelete(fuelreport._id)}>
                               &nbsp;Delete
                                </a>

                  
                 
                    
                  </td>
                  
                </tr>
              )
              )}
            </tbody>

           

          
        </table>

        </center>
        <br/>
    


        </div>
         

 

        
  

        
        )
    }
    
    }


