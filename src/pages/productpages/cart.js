import React, { Component } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      total: null
    };
  }
  
 
 
  render() {
    if (this.props.cart.length !== 0) {
      var cartitems = this.props.cart.map(
        ({ title, image, desc, price, id }) => (
          <Card key={title} id={id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={image} width="10rem" height="180rem" />
            <Card.Body>
              <Card.Title className="title">{title}</Card.Title>
              <Card.Text className="cardtext">
                {desc} <br />
                {price}
              </Card.Text>
              <Button
                variant="btn btn-warning itembutton"
                onClick={() => this.props.Removefromcart(id)}
              >
                Remove from cart
              </Button>
            </Card.Body>
          </Card>
        )
      );
      return (
        <div className="FullPage Container">
          <div className="ItemList row">{cartitems}</div>
          <button className="btn btn-success checkoutbutton" onClick={() => alert("Sorry, this isn't a real company")}>Checkout</button>
        </div>
      );
    } else {
      return (
<Container className="paper">
        <h1 className="nocart">
          Add items to your cart and they will appear here.
        </h1></Container>
      );
    }
  }
}
export default Cart;
