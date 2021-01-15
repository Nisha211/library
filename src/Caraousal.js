import React, { Component } from 'react'

import Carousel from 'react-bootstrap/Carousel'
import "bootstrap/dist/css/bootstrap.min.css";
class caraousal extends Component {
    render() {
        return (
            <div className="boost">


                <div className='container-fluid' >

                    <Carousel>

                        <Carousel.Item style={{ 'height': "300px" }} >

                            <img style={{ 'height': "300px" }}

                                className="d-block w-100"

                                src={'Images/3image.jfif'} />

                            <Carousel.Caption>

                                <h3>Bridal makeup </h3>
                                <p>Every bride dreams of her wedding day and wants to be at her best appearance that day. Bridal make up is an important part of bridal dressing. Along with the shinning jewellery and a gorgeous wedding dress if the make up and the hair do is inappropriate then their beauty are also marred. So it’s very important to know about the right kind of bridal make up that would suit the brides taste and skin tone. Though Indian bridal make up is a bit gorgeous with red and gold hues predominating but the make up shouldn't be over the top and should naturally enhance the dewy radiance of the bride. Bridal make up can effective correct any imperfection or marks that the bride may have in her face. So over all bridal make up form and integral part of a brides repertoire.</p>

                            </Carousel.Caption>
                        </Carousel.Item  >

                        <Carousel.Item style={{ 'height': "300px" }}>

                            <img style={{ 'height': "300px" }}

                                className="d-block w-100"

                                src={'Images/3image.jfif'} />

                            <Carousel.Caption>

                                <h3>Airbrush makeup</h3>
                                <p>Airbrush makeup is makeup sprayed onto the skin using an airbrush machine instead of being applied with sponges, brushes, fingers, or other methods.[1] A typical airbrush system uses a compressor to create airflow through a hose connected to a trigger-controlled spray painting gun. The airbrush pressure can be adjusted to apply various types of makeup, such as lighter, heavier, or more detailed styles. Airbrushes are used in film, theater, bridal makeup, and sunless tanning. Airbrush systems designed for personal, in-home use are usually smaller and work at a lower pressure than systems used in professional applications.</p>

                            </Carousel.Caption>

                        </Carousel.Item>

                        <Carousel.Item style={{ 'height': "300px" }}>

                            <img style={{ 'height': "300px" }}

                                className="d-block w-100"

                                src={'Images/3image.jfif'} />

                            <Carousel.Caption>

                                <h3>personal grooming</h3>
                                <p>In humankind, mutual grooming relates closely to social grooming, which is defined as the process by which human beings fulfill one of their basic instincts, such as socializing, cooperating and learning from each other.[5] In research conducted by Holly Nelson (from the University of New Hampshire) and Glenn Geher (State University of New York at Paltz), individuals who chose their romantic partner reported more mutual grooming than others who focused in other types of relationships. Hence, this study hypothesized that mutual grooming related to relationship satisfaction, trust and previous experience of affection within the family. They claim that even though humans do not groom each other with the same fervor that other species do, they are groomers par excellence.</p>

                            </Carousel.Caption>

                        </Carousel.Item>

                    </Carousel>

                </div>
            </div>
        )
    }
}

export default caraousal;