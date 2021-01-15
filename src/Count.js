import React, { Component } from 'react';
import './Button.css';

class Count extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    onClickIncrease = () => {
        this.setState({
            count: this.state.count + 1

        })
    }
    onClickDecrease = () => {
        this.setState({
            count: this.state.count - 1

        })
    }



    render() {
        return (
            <div className="buttons">
                <h2>counter increment and counter decrement</h2>
                <button className="btn btn-primary" onClick={this.onClickIncrease}>Count increase</button>
                <button className="btn btn-primary" onClick={this.onClickDecrease}>count decrease</button>
                <h2>counter value={this.state.count}</h2>

            </div>

        )

    }
}
export default Count;
