import React from 'react'
import ReactDom from 'react-dom'
import './App.css';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from "react-bootstrap/Button";
import {ButtonGroup} from "react-bootstrap";

class Cart extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="cart sticky-top">
                <Row className="justify-content-lg-center">
                    <Col>
                        <Card>
                            <Card.Header>Cart</Card.Header>
                                <ListGroup varient="flush">
                                    {/*Filter cart to only show items with quantity > 0*/}
                                    {Object.keys(this.props.cart).filter((key) => this.props.cart[key] > 0).map(key =>
                                        <ListGroup.Item>
                                            <Row className="justify-content-center">
                                                <Col lg="8" className="my-auto">
                                                    <h4>{key}: {this.props.cart[key]}</h4>
                                                </Col>
                                                <Col lg="4">
                                                    {/*Add buttons to add and remove items from the cart*/}
                                                    <ButtonGroup>
                                                        <Button variant="primary" onClick={() => this.props.removeFromCart(key)}>-</Button>
                                                        <Button variant="primary" onClick={() => this.props.addToCart(key)}>+</Button>
                                                    </ButtonGroup>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>)}
                                </ListGroup>
                            <Card.Footer>
                                <Row className="justify-content-center">
                                    Total: ${this.props.cartPrice}
                                </Row>
                                <Row className="justify-content-center">
                                    <Button variant="primary">Purchase</Button>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Cart