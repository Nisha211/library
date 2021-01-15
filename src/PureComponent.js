import React  from 'react'

class PureComponent extends React.PureComponent{
    
    render(){
        console.log("This is my pure component")
        return(
            <div>
                This is my pure component value  {this.props.count}
            </div>
        )
    }
}
export default PureComponent;