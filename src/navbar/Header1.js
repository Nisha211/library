import React from "react";

import { Navbar,NavLink,Nav, NavItem,Button,Collapse } from "react-bootstrap";

function Header1(){
    return(
        <div className="header">
         
         <Navbar>
        
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="About">About</Nav.Link>
          <Nav.Link href="Contact">Contact</Nav.Link>
          
        </Nav>
        <h2>Make me good</h2>
      </Navbar.Collapse>
    </Navbar>
   
     
    
         
     </div>
    )
}
export default Header1;