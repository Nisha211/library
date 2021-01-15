import React, { Component } from 'react'

import { Table} from 'react-bootstrap';

import CreateUser from "./CreateUser";

 

class DisplayEmployee extends Component {

 constructor(props) {

 super(props)

 

 this.state = {

 employeeDetails:[],

 editEmp : {},

 edit : true

 }

 }

 componentDidMount(){

 fetch("http://localhost:8085/SpringMVCHibernateCRUD/employee/getEmployees").then(

 res => {

 res.json()

 .then(endRes => this.setState({ employeeDetails: endRes })).catch(err => console.log(err))

 })

 .catch(err => console.log(err))

 

 }

 

 updateEmp = (emp) => {

 this.setState({

 edit :false,

 editEmp : emp


 

 })
}

handleClose = () => {

this.setState({

edit : true,

editEmp : {}

})

}



render() {

let result=[];

const{employeeDetails}=this.state

for (let i = 0; i < employeeDetails.length; i++) {

result.push(

<tr>

<td>{employeeDetails[i].empId}</td>

<td>{employeeDetails[i].empName}</td>

<td>{employeeDetails[i].empAddress}</td>

<td><button class="btn btn-primary" type = "button" onClick = {(e) => this.updateEmp(employeeDetails[i])}>

update Employee

</button></td>



{/* <td><button>Reserve</button>&nbsp;&nbsp;&nbsp;<button>check out</button></td> */}

</tr>

)



}
console.log("employeeDetails",employeeDetails);

 return <React.Fragment>

 {this.state.edit ? <><div>

 <Table striped bordered hover variant="dark">

 <thead>

 <tr>

 <th>Employee ID</th>

 <th>Employee Name</th>

 <th>Employee Address</th>

 <th>Update Employee</th>

 {/* <th>Availability</th> */}

 

 </tr>

 </thead>

 

 <tbody>

 

 {result}

 </tbody>

 </Table>

 </div></> : <><CreateUser emp = {this.state.editEmp} handleClose = {this.handleClose}/></>}

 </React.Fragment>

 

 }

}

 

export default DisplayEmployee;