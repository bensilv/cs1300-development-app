import React from 'react'
import ReactDom from 'react-dom'
import Nav from 'react-bootstrap/Nav'
import './App.css';
import DisplayList from './DisplayList.js';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Cart from "./Cart";

class FilteredList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            brand: "All",
            type: "All",
            sort: "Default",
            cart: this.makeCart(),
            cartPrice: 0
        };

        this.setCartPrice();
    }

    makeCart = () => {
        let cart = {}
        this.props.list.forEach(item => cart[item.name] = 0)
        return cart
    }

    setCartPrice = () => {
        this.setState({
            cartPrice: this.props.list.reduce((acc, cur) => acc + (cur.price * this.state.cart[cur.name]), 0)
        })
    }

    addToCart = (item) => {
        const cart = this.state.cart;
        cart[item] += 1
        this.setState({ cart });
        this.setCartPrice()
    }

    removeFromCart = (item) => {
        const cart = this.state.cart;
        cart[item] -= 1
        this.setState({ cart });
        this.setCartPrice()
    }

    onSelectBrand = event => {
        this.setState({
            brand: event
        })
    };

    onSelectType = event => {
        this.setState({
            type: event
        })
    };

    onSelectSort = event => {
        this.setState({
            sort: event
        })
    };

    matchesFilters = item => {
        return (this.state.brand === "All" || this.state.brand === item.brand)
            && (this.state.type === "All" || this.state.type === item.type)
    }

    sortItems = items => {
        if (this.state.sort === "Default") {
            return items
        } else if (this.state.sort === "Low to High") {
            return items.sort((a, b) => a.price - b.price)
        } else {
            return items.sort((a, b) => b.price - a.price)
        }
    }

    render() {
        return (
            <div className="Main">
                <Row className="justify-content-lg-center">
                    <Col sm="8">
                        <Row className="justify-content-lg-center">
                            <Col>
                                <Card>
                                    <Card.Header>Filter & Sort</Card.Header>
                                    <ListGroup varient="flush">
                                        <ListGroup.Item>
                                            <Nav fill variant="pills" onSelect={this.onSelectBrand} defaultActiveKey="All">
                                                <Nav.Item><Nav.Link eventKey="disabled" disabled>Brand:</Nav.Link></Nav.Item>
                                                <Nav.Item><Nav.Link eventKey="All">All</Nav.Link></Nav.Item>
                                                <Nav.Item><Nav.Link eventKey="Sony">Sony</Nav.Link></Nav.Item>
                                                <Nav.Item><Nav.Link eventKey="Nikon">Nikon</Nav.Link></Nav.Item>
                                                <Nav.Item><Nav.Link eventKey="Canon">Canon</Nav.Link></Nav.Item>
                                            </Nav>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Nav fill variant="pills" onSelect={this.onSelectType} defaultActiveKey="All">
                                                <Nav.Item><Nav.Link eventKey="disabled" disabled>Type:</Nav.Link></Nav.Item>
                                                <Nav.Item><Nav.Link eventKey="All">All</Nav.Link></Nav.Item>
                                                <Nav.Item><Nav.Link eventKey="Compact">Compact</Nav.Link></Nav.Item>
                                                <Nav.Item><Nav.Link eventKey="Mirrorless">Mirrorless</Nav.Link></Nav.Item>
                                                <Nav.Item><Nav.Link eventKey="DSLR">DSLR</Nav.Link></Nav.Item>
                                            </Nav>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Nav fill variant="pills" onSelect={this.onSelectSort} defaultActiveKey="Default">
                                                <Nav.Item><Nav.Link eventKey="disabled" disabled>Sort by Price:</Nav.Link></Nav.Item>
                                                <Nav.Item><Nav.Link eventKey="Default">Default</Nav.Link></Nav.Item>
                                                <Nav.Item><Nav.Link eventKey="Low to High">Low to High</Nav.Link></Nav.Item>
                                                <Nav.Item><Nav.Link eventKey="High to Low<">High to Low</Nav.Link></Nav.Item>
                                            </Nav>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <DisplayList list={this.sortItems(this.props.list.filter(this.matchesFilters))} addToCart={this.addToCart} />
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="4">
                        <Cart cart={this.state.cart} cartPrice={this.state.cartPrice} addToCart={this.addToCart} removeFromCart={this.removeFromCart}/>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default FilteredList