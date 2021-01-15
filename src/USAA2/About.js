import React from 'react';
import { Nav, Navbar,Figure, NavDropdown, Button, Carousel, Collapse, Breadcrumb, Accordion, Card } from 'react-bootstrap';

function About() {

   
    return (
        <div className="home">
            <div>
                {/* <div className="card"> */}
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="https://www.villadicapo.com/wp-content/uploads/2017/08/event-management2.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary" >Go somewhere</Button>
           
                        
                    </Card.Body>

                    
                </Card>

                <Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src="https://www.villadicapo.com/wp-content/uploads/2017/08/event-management2.jpg"
  />
  <Figure.Caption>
    Nulla vitae elit libero, a pharetra augue mollis interdum.
  </Figure.Caption>
</Figure>


            </div>

            {/* </div> */}







            <div className="coll">
                <h1>Collapse Example</h1>




                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Wedding Events
</Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>This is wedding invitation </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Corporate Events
</Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>This is corporate invitation</Card.Body>
                        </Accordion.Collapse>
                    </Card>


                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                Corporate Events
</Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>This is corporate invitation</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                

                


                
            </div>

            
           
        </div>
    );
}
export default About;