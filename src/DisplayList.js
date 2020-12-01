import React from 'react'
import ReactDom from 'react-dom'
import './App.css';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class DisplayList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Row>
                    {this.props.list.map(item =>
                        <Col sm="6">
                            <Card className="prod-card my-3">
                                <Card.Img variant="top" src={'/images/' + item.image} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>{item.brand}</ListGroup.Item>
                                    <ListGroup.Item>{item.type}</ListGroup.Item>
                                </ListGroup>
                                <Card.Body className="py-2">
                                    <Row className="justify-content-center">
                                        <Col className="price py-1">
                                            ${item.price}
                                        </Col>
                                    </Row>
                                    <Row  className="justify-content-center py-1">
                                        <Button variant="primary" onClick={() => this.props.addToCart(item.name)}>Add to Cart</Button>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>)}
                </Row>
            </div>
        );
    }
}

export default DisplayList