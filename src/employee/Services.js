const fetchUsers = (callback) => {

    let usersObj = [];

    fetch("http://localhost:8085/SpringMVCHibernateCRUD/employee/getEmployees").then(

        res => {

            console.log(res.json()

                .then(endRes => { callback(endRes); return endRes }))

        })

        .catch(err => console.log(err))

}
const deleteUser = (empId) => {

    const apiUrl = `http://localhost:8085/SpringMVCHibernateCRUD/employee/deleteEmployee/${empId}`;

    console.log(empId);

    try {

        fetch(apiUrl, {

            method: "DELETE"

        }).then(data => {

            alert("Data Successfully deleted")

            return data.json();

        }).then(data => alert("data Successfully deleted"));

    } catch (err) {

        console.log(err);

    }

}
const updateUser=(employeedetails,callback)=>{

    fetch("http://localhost:8085/SpringMVCHibernateCRUD/employee/updateEmployee",{
   
    method:'PUT',
   
    body:JSON.stringify(employeedetails),
   
    headers:{
   
    'content-type':'application/json'
   
    }
   
    }
   
    ).then(result=>result.json().then(data=>callback())).catch(err=>console.log(err))}
    const insertUser=(employeedetails)=>{
        alert(JSON.stringify(employeedetails));

        fetch("http://localhost:8085/SpringMVCHibernateCRUD/employee/saveEmployees",{
       
        method:'POST',
       
        body:JSON.stringify(employeedetails),
       
        headers:{
       
        'content-type':'application/json'
       
        }
       
        }
       
        ).then(result=>result.json().then(data=>console.log(data))).catch(err=>console.log(err))}
       
        
  export {fetchUsers,insertUser,updateUser,deleteUser}     
       