const fetchBooks = (callback) => {
 
    fetch("http://localhost:8080/SpringMVCHibernateCRUD/employee/getEmployees").then(
        res => {
            console.log(res.json()
                .then(endRes => { callback(endRes); return endRes }))
 
        })
        .catch(err => console.log(err))
}
 
const deleteBooks = (bookId) => {
    const apiUrl = `http://localhost:8080/SpringMVCHibernateCRUD/employee/deleteBook/${bookId}`;
    console.log(bookId);
    try {
        fetch(apiUrl, {
            method: "DELETE"
        }).then(data => {
            if(data.status > 400){
                alert("Data Cannot be deleted")
            }else{
           alert("Data Successfully deleted")
            }
            return data.json;
        }).then(data => alert("data Successfully deleted"));
    } catch (err) {
        console.log(err);
    }
}
const insertBooks = (bookdetails) => {
    fetch("http://localhost:8080/SpringMVCHibernateCRUD/employee/saveEmployees", {
        method: 'POST',
        body: JSON.stringify(bookdetails),
        headers: {
            'content-type': 'application/json'
        }
    }
    ).then(result => result.json().then(data => console.log(data))).catch(err => console.log(err))
}
 
const updateBooks = (bookdetails, callback) => {
    fetch("http://localhost:8080/SpringMVCHibernateCRUD/employee/updateBook", {
        method: 'PUT',
        body: JSON.stringify(bookdetails),
        headers: {
            'content-type': 'application/json'
        }
    }
    ).then(result => result.json().then(data => callback())).catch(err => console.log(err))
}
 
export { fetchBooks, deleteBooks, insertBooks, updateBooks }