//import reat and react component from react
import React, { Component } from 'react'

//import axios
import axios from 'axios'


export default class AdminViewAllStock extends Component {

    //initialize constructor to pass the props
    constructor (props) {
        super(props);
        this.state={
        //initializing an array 
        GetAllStock:[]
        };
        
    }
    
    

    //calling the method after componenets render to the page
    componentDidMount(){
        this.retrieveFuelDetails();
    }


    //get request method
    retrieveFuelDetails(){
        axios.get("http://localhost:5000/GetAllStock").then(res=>{
        console.log(res.data);
        
        //if the request success, store the data to the array 
        if(res.data.success){
            this.setState({
                GetAllStock:res.data.existingData
            });
                
                
        }
        })
    }

   


  render() {
    return (
      <div>


      <div style={{height:'80px', backgroundColor:"#00bfff", marginTop:'-20px'}}>
        <br/><br/>

        <h1 style={{color:'#Black', textAlign:'center',fontSize:"60px"}}>Fuel Availability</h1>
        
        <div style={{height:'80px', backgroundColor:"#87ceeb", marginTop:'-50px'}}></div>
        </div>
        <br/> <br/> <br/><br/>


      <br/>      
              
<div id="content">
      <table className="table table-hover"  style={{marginTop:'50px',  marginLeft:'200px', width:'1300px'}}>
          <thead>
            <tr style={{fontSize:'20px'}}>
                <th scope="col"><h3>Petrol</h3></th>

                
            </tr>
          </thead>
          
          <tbody>

            {this.state.GetAllStock.map((GetAllStock,index)=>(
            <tr key ={index}>
              {/* <th scope='row'>{index+1}</th> */}
              
              
              <td><h4>Octane 92 -   {GetAllStock.p92} l</h4></td>
              <td><h4>Ocatne 95 -   {GetAllStock.p95} l</h4></td>

              <br/>
                      
            </tr>

            
            
                ))} 

                    
          </tbody>
                    


      </table>

      <table className="table table-hover"  style={{marginTop:'50px',  marginLeft:'200px', width:'1300px'}}>
          <thead>
            <tr style={{fontSize:'20px'}}>
                <th scope="col"><h3>Diesel</h3></th>
                
                
            </tr>
          </thead>
          
          <tbody>

            {this.state.GetAllStock.map((GetAllStock,index)=>(
            <tr key ={index}>
              {/* <th scope='row'>{index+1}</th> */}
              
              
              <td><h4>Super Diesel -  {GetAllStock.superd} l</h4></td>
              <td><h4>Auto Diesel -   {GetAllStock.autod} l</h4></td> 
              
                           
            </tr>

            
            
                ))} 

                    
          </tbody>
                    


      </table>

      <table style={{marginTop:'50px',  marginLeft:'200px', width:'1300px'}}>
          <thead>
            <tr style={{fontSize:'20px'}}>
                <th scope="col"><h3>Modified Date</h3></th>
                
                
            </tr>
          </thead>
          
          <tbody>

            {this.state.GetAllStock.map((GetAllStock,index)=>(
            <tr key ={index}>
              {/* <th scope='row'>{index+1}</th> */}
              
            
              <td><h4>{GetAllStock.mdate}</h4></td> 

                        <a className ="btn btn-warning" href={`/stock/${GetAllStock._id}`}>
                            <i className="fas fa-edit"></i>&nbsp;<h4>Update Stock</h4>
                            </a>
                            &nbsp;
                           
            </tr>

            
            
                ))} 

                    
          </tbody>
                    


      </table>

     
      </div>
      <br/><br/><br/><br/>
</div>

    )

  }
}

