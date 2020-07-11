import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';


class Cart extends Component {
    constructor() {
        super();
    this.state = { 
      cart: []
    }
  }
  componentDidMount() {
      console.log(this.props.cart)
  }
    render() { 
        if (this.props.cart.length !== 0) {
            var cartitems = this.props.cart.map(cartitems => {
              return (
                <div className="ItemList row">
        {
             
             this.state.cart.map(({title, imageUrl, desc, price }) => (
              <Card key={title} style={{ width: '18rem'}}>
  <Card.Img variant="top" src={imageUrl}  width='10rem' height='180rem' />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      {desc} <br />
      {price}
    </Card.Text>
    <Button variant="primary">Add to cart</Button>
  </Card.Body>
</Card>
        ))}
            </div> 
              );
            });
          } else
            return (
              <h1 className="nocart">
                Add items to your cart and they will appear here.
              </h1>
            );
      
          return (
            <div className="cart-container">
              {cartitems}
              <div className="cartfooter">
                <h4 className="yourtotal">Your total: </h4>
              </div>
            </div>
          );
        }
      }
export default Cart