import React, { Component } from 'react'

import { deleteUser } from './Services'
 class DeleteEmployee extends Component {

 constructor(props) {

 super(props)

 

 this.state = {

 empId:0

 }

 }

 handleChange=(event)=>{

 //console.log(event)

 this.setState({

 [event.target.name]:event.target.value

 })

 

 }

 handleSubmit=(e)=>{

 e.preventDefault();

 const delId=this.state.empId;

 console.log(delId);

 const d=deleteUser(delId);

 console.log(d);

 }

 render() {

 return (

 <div>

 <form onSubmit={this.handleSubmit}>

 <div>

 <label>Id</label>

 <input type='text' name="empId" value={this.state.empId} onChange={this.handleChange}/>

 </div> 

 <button type='submit' onChange={(e) =>this.handleSubmit(e)}>Delete</button>

 </form>

 </div>

 )

 }

}

 

export default DeleteEmployee;