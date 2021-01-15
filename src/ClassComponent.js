import React, { Component } from 'react';
import './Button.css';
export class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayItem: [10, 20, 30, 40, 50, 60],

        }
    }
    onClick = () => {
        const { arrayItem } = this.state;
        alert("alert button is clicked");
        arrayItem.push(10);
        arrayItem.pop(20);
        arrayItem.push(30);
        this.setState({ arrayItem });
        for (const arr of arrayItem) {
            console.log(arr);
        }
        arrayItem.pop();
        console.log(arrayItem);
    }


    render() {
        const fruits = this.props.Skills();
        const number=this.props.numbers();
        const items = [];
        
        const object = this.props.objectElement
        console.log(object)
        for (const value of fruits) {
            items.push(<li key={value}>{value}</li>)
        }
        for (const value in fruits) {
            items.push(<li key={value}>{value}</li>)
        }
        for (const value of fruits) {
            items.pop(<li key={value}>{value}</li>)
        }
        const mapping = number.map((numbervalue) => numbervalue * 2);
        console.log(mapping);

        const filter = number.filter((number) => number >= 300);
        console.log(filter);
 
        const includes = number.includes(300);
        console.log(includes);
 
        const find = number.find((number) => number > 200);
        console.log(find);
 
        var slice = fruits.slice(100, 300);
        console.log(slice);
       
       
        return (
            <div>
                <h2>Welcome to my {this.props.name}</h2>
                <ul>

                    {items}
                  

                </ul>
                {this.props.element()}
                {this.props.propsFunction()}
               
                <button className="btn btn-primary" onClick={() => this.onClick()}>alert button</button>
                <h2>{this.state.sessionDetails}</h2>
            </div>

        )


    }
}
export default ClassComponent;