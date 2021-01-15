import React from 'react'
import { Route, Link } from 'react-router-dom'
import './style1.css'

const About = ({ match }) => {

    return (
        <div className="about">
            <h3>List of topics on react</h3>
            <ul className="link">
                <li><Link to={`${match.url}/Lifecycle`}>Lifecycle</Link></li><br></br>
                <li><Link to={`${match.url}/state`}>state and props</Link></li><br></br>
                <li><Link to={`${match.url}/topicId`}>props</Link></li><br></br>
                <li><Link to={`${match.url}/HigherOrder`}>Higher order component</Link></li><br></br>

            </ul>
            <Route path={`${match.path}/:name`} render={({ match }) => (<div><h3> {match.params.name} </h3></div>)} />
        </div>

    )
}
export default About;
