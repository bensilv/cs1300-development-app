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

    // Makes cart by creating a dictionary from item name to quantity for each of the items passed in, with quantity
    // initialized to 0.
    makeCart = () => {
        let cart = {}
        this.props.list.forEach(item => cart[item.name] = 0)
        return cart
    }

    // Sets cart price by multiplying the quantity of each item in the cart by its price.
    setCartPrice = () => {
        this.setState({
            cartPrice: this.props.list.reduce((acc, cur) => acc + (cur.price * this.state.cart[cur.name]), 0)
        })
    }

    // handles adding to the cart by increasing the quantity of that item in the cart.
    addToCart = (item) => {
        const cart = this.state.cart;
        cart[item] += 1
        this.setState({ cart });
        this.setCartPrice()
    }

    // handles removing from the cart by decreasing the quantity of that item in the cart.
    removeFromCart = (item) => {
        const cart = this.state.cart;
        cart[item] -= 1
        this.setState({ cart });
        this.setCartPrice()
    }

    // handles setting a new brand when user changes the brand
    onSelectBrand = event => {
        this.setState({
            brand: event
        })
    };

    // handles setting a new type when user changes the type
    onSelectType = event => {
        this.setState({
            type: event
        })
    };

    // handles setting a new sort when user changes the sort
    onSelectSort = event => {
        this.setState({
            sort: event
        })
    };

    // method responsible for filtering the cameras, handles multiple filters together
    matchesFilters = item => {
        // and statement used to combine both filters
        return (this.state.brand === "All" || this.state.brand === item.brand)
            && (this.state.type === "All" || this.state.type === item.type)
    }

    // method used for sorting cameras
    sortItems = items => {
        if (this.state.sort === "Default") {
            return items
        } else if (this.state.sort === "Low to High") {
            // sorts via sort method with comparator based on price
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
                                <DisplayList list={this.sortItems(this.props.list.filter(this.matchesFilters))}
                                             addToCart={this.addToCart} />
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="4">
                        <Cart cart={this.state.cart} cartPrice={this.state.cartPrice}
                              addToCart={this.addToCart} removeFromCart={this.removeFromCart}/>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default FilteredList