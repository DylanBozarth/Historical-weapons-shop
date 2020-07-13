import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';


class Cart extends Component {
    constructor() {
        super();
    this.state = { 
      cart: [],
      total: 0
    }
  }
  componentDidMount() {
      console.log(this.props.cart)
  }
    render() { 
        if (this.props.cart.length !== 0) {
         
          var cartitems = this.props.cart.map(({title, imageUrl, desc, price }) => (
           
            <Card key={title}  style={{ width: '18rem'}}>
<Card.Img variant="top" src={imageUrl} width='10rem' height='180rem' />
<Card.Body>
  <Card.Title>{title}</Card.Title>
  <Card.Text>
    {desc} <br />
    {price}
  </Card.Text>
  <Button variant="primary" onClick={e => this.handleAddToCart(e, { title, image : imageUrl, desc, price })}>Add to cart</Button>
</Card.Body>
</Card> 

         ));
          return (
            <div> <h1>Your total is: {this.state.total}</h1>
            {cartitems}</div>

          )

        }
        else {
          return(
            <h1 className="nocart">
                Add items to your cart and they will appear here.
              </h1>
          )
        }
         
        }
      }
export default Cart