import React,{Component} from 'react'


class NotFound extends Component{
    goBack=()=>{
        this.props.history.push('/');
    }
    render(){
        return(
            <div>
                <h1>page 404 not found</h1>
                <button onClick={this.goBack}>Go to home page</button>
            </div>

        )
    }
}
export default NotFound;
