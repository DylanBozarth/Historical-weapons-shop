import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      total: null,
    };
  }
  componentDidMount() {
    console.log(this.props.cart);
  }

  render() {
    if (this.props.cart.length !== 0) {
      var cartitems = this.props.cart.map(
        ({ title, image, desc, price, id }) => (
          <Card key={title} id={id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={image} width="10rem" height="180rem" />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {desc} <br />
                {price}
              </Card.Text>
              <Button
                variant="btn btn-warning"
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
          <h1 className="yourtotal"> Your total is: $ {this.props.total}</h1>
        </div>
      );
    } else {
      return (
        <h1 className="nocart">
          Add items to your cart and they will appear here.
        </h1>
      );
    }
  }
}
export default Cart;
