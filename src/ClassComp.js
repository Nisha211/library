import React from "react";
import './Button.css';
class ClassComp extends React.Component {
    render() {
        const { name } = this.props;
        return (
            <React.Fragment>
                <h2 className="header">welcome to my {name}</h2>
            </React.Fragment>
        )
    }

}
export default ClassComp;