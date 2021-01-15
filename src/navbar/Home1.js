import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Collapse } from "react-bootstrap";

function Home1() {
    const [open, setOpen] = useState(false);
    return (
        <div className="home">

            <Button

                onClick={() => setOpen(!open)}

                aria-controls="example-collapse-text"

                aria-expanded={open}

            >

                Welcome

      </Button>



            <Collapse in={open}>

                <div id="example-collapse-text" >

                    <div className="card card-body">
                        Many businesses send welcome messages to customers, and some of them do it in a truly brilliant way. Browse our collection of the best website welcome message examples that can inspire you to make a unique message inviting your customers to start on a long journey with you. Each message in our list is designed to achieve a certain goal

          </div>

                </div>

            </Collapse>



            <p>Motivated, dedicated, kind and professional makeup artist, Vivian Williams Johnson began her beauty
            career at a young age when she was hired for her first makeup job at age fourteen. </p>
        </div>

    )
}
export default Home1;