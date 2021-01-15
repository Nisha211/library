import React from 'react';
import Links from './USAA2/Links';
import Navi from './USAA2/Navi';
import Login from './USAA2/Login';
import Shop from './USAA2/Shop';
import {BrowserRouter as Router} from 'react-router-dom'
import Submit from './USAA2/Submit';
class App extends React.Component{
  render(){
    return(

        <div className="app">
          <Router>
           <Links/>
                       <Navi/>
                       <Login/>
                    
                      
                       </Router>
         
        </div>
    
    );
  }
}

export default App;
