import React from 'react'
import { Card } from 'react-bootstrap';
import './style.css'
class Submit extends React.Component {
    constructor(props) {
        super(props)

        this.state = { count: 0 }
        this.handleClick = this.handleClick.bind(this)
    }
    increment() {
        this.setState({
            count: this.state.count + 1  
        });
    };
    handleClick() {
        this.setState({ count: this.state.count + 1 }) 
    }

    onClickme = () => { 
        this.setState({
            count: this.state.count + 1,

        })
    }
    render() {
        return (


            <div className="jumbo">

                <div className="edit">
                    <h3>Our Products</h3>
                </div>
                <div className="column">
                    <Card >
                        <Card.Img variant="top" src="https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/n/y/nyknet_hdbwgl.jpeg" />

                        <Card.Body>
                            <Card.Title>Moisturizer</Card.Title>
                            <Card.Text>
                                While specific formulations tend to vary among products, a few of the most common types of silicone used are dimethicone, polysiloxane, and phenyl trimethicone. Other ingredients that make up this type of foundation include mineral oil, alcohol, and minerals like titanium oxide and zinc oxide.
                            <b>Cost: $950</b>
                            </Card.Text>
                            <button className='btn btn-warning' onClick={this.onClickme}>Add to Cart</button><br /><br />
                        </Card.Body>
                    </Card><br></br>
                </div>
                <div className="column">
                    <Card >
                        <Card.Img variant="top" src="https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/6/9/6902395685845.1_1.jpg" />
                        <Card.Body>
                            <Card.Title>Concealer</Card.Title>
                            <Card.Text>
                                A concealer or color corrector is a type of cosmetic that is used to mask dark circles, age spots, large pores, and other small blemishes visible on the skin. It is similar to foundation, but thicker and used to hide different pigments by blending the imperfection into the surrounding skin tone.
                          <b>Cost:$850</b>
                            </Card.Text>
                            <button className='btn btn-warning' onClick={this.onClickme}>Add to Cart</button><br /><br />
                        </Card.Body>
                    </Card>
                </div>
                <div className="column">
                    <Card >
                        <Card.Img variant="top" src="https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/8/9/8904245702106_goo_1.jpg" />
                        <Card.Body>
                            <Card.Title>Compact Powder</Card.Title>
                            <Card.Text>
                                A compact (also powder box, powder case and flapjack) is a cosmetic product. It is usually a small round metal case and contains two or more of the following: a mirror, pressed or loose face powder with a gauze sifter and a powder puff.
                       <b> Cost: $300</b>
                            </Card.Text>
                            <button className='btn btn-warning' onClick={this.onClickme}>Add to Cart</button><br /><br />
                        </Card.Body>
                    </Card>
                </div>
                <h3 className="items">Total Items added to cart : {this.state.count}</h3>
            </div>
        )
    }
}
export default Submit