
import React, { Component } from 'react'

import { insertUser, updateUser } from './Services'



class CreateUser extends Component {

    constructor(props) {

        super(props)



        this.state = {

            emp: props.emp,

            empId: "-1",

            empName: '',

            empAddress: ''

        }

    }

    componentDidMount = () => {

        if (this.state.emp !== undefined) {

            this.setState({

                empId: this.state.emp.empId,

                empName: this.state.emp.empName,

                empAddress: this.state.emp.empAddress

            })

        }

    }

    handleChange = (event) => {

        //console.log(event)

        this.setState({

            [event.target.name]: event.target.value

        })


    }
    handleSubmit = (e) => {
        const userObj = {

            "empId": this.state.empId,

            "empName": this.state.empName,

            "empAddress": this.state.empAddress

        }

        if (this.state.empId !== "-1") {

            updateUser(userObj, this.props.callback)
                alert("Updated Successfully");
        } else {
            const insertResult = insertUser(userObj);
            alert("Inserted Successfully")

        }

        

    }

    render() {

        return (

            <div className="loginpage">

                <form onSubmit={this.handleSubmit}>

                <div>
                <label>Employee Id    :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<input disabled = {true}type='text'name="empId"value={this.state.empId}onChange={this.handleChange}required/>

</div>

<div>

<label>Employee Name:</label>&nbsp;&nbsp;

<input type='text'name="empName"value={this.state.empName}onChange={this.handleChange}required/>

</div>

<div>

<label>Employee Address:</label>

<input type='text'name="empAddress"value={this.state.empAddress}onChange={this.handleChange}required/>

</div>

<div>

<button class="btn btn-primary"type='submit'onChange={this.handleSubmit}>Submit</button>

</div>

</form>

</div>

        )

    }

}

export default CreateUser;




