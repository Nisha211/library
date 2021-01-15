import React, { Component } from 'react'
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
    onIncClick=()=> {
        this.setState(
            {
                counter: this.state.counter + 1
            }
        )
        console.log(this.state.counter);
    }
    onDecClick=()=> {
        this.setState(
            {
                counter: this.state.counter - 1
            }
        );
        console.log(this.state.counter);
    }
    render() {
        return (
            <div>
                <button type="button" onClick={this.onDecClick}>-</button>
                products:{this.state.counter}
                <button type="button" onClick={this.onIncClick}>+</button>
                {this.state.counter <0&& <h3>you dont have any products</h3>}
            </div>

        );
    }
}
export default Counter
