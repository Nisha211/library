import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header1 from './ShoppingCart/Header1';
import Footer1 from './ShoppingCart/Footer1'

export class List extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header1 />
                    <Footer1 />
                </Router>

            </div>
        )
    }
}

export default List
