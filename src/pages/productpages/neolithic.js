import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';

class Neolithic extends Component {
    constructor() {
      
        super();
      
    this.state = { items: [
        {
          title: 'Neolithic Rock art',
          imageUrl: "/itemphotos/stoneage/art.jpg",
          price: 160,
          id: 'Neolithic Rock art',
          desc: "Own a (reproduction) priceless piece of human history. "
        },
        {
          title: 'Neolithic axe',
          imageUrl: './itemphotos/stoneage/stoneaxe.jpg',
          price: 18,
          id: 'Neolithic axe',
          desc: 'One of the first tools ever made, looks great on a wall.'
        },
        {
          title: 'Stone dagger',
          imageUrl: './itemphotos/stoneage/dagger.jpg',
          price: 35,
          id: 'Stone dagger',
          desc: 'Sharpened stone.'
        },
        {
          title: 'Stone Hammer',
          imageUrl: './itemphotos/stoneage/stonehammer.jpg',
          price: 25,
          id: 'Stone Hammer',
          desc: 'Most likely used as a cooking tool.'
        },
        {
          title: 'Neolithic Spear',
          imageUrl: './itemphotos/stoneage/spear.jpg',
          price: 15,
          id: 'Neolithic Spear',
          desc: 'A rock on the end of a stick, Classic.'
        },
        
        {
          title: 'Book about the stone age',
          imageUrl: './itemphotos/stoneage/book.jpg',
          price: 10,
          id: 'Book about the stone age',
          desc: 'If you want to learn more about this era.'
        }
      ],
      cart: []
      
    }
  }
  handleAddToCart = (e, items) => {
    this.props.addToCart(items);
    e.target.classList.add("btn-success");
    e.target.innerHTML = "Added to cart";
  };
    render() { 
        return ( 
        <div className="FullPage Container"> 
        <div >
        <h1 className="pageInfo">"For a novelist, the great thing about the Stone Age people is that we know virtually nothing about their beliefs - which means that I get to make it up! But it's still got to be plausible."

-Michelle Paver</h1>
        <div className="ItemList row">
        {
             
             this.state.items.map(({title, imageUrl, desc, price, id }) => (
              <Card key={title} id={id} style={{ width: '18rem'}}>
  <Card.Img variant="top" src={imageUrl}  width='10rem' height='180rem' />
  <Card.Body>
    <Card.Title className="title">{title}</Card.Title>
    <Card.Text>
      {desc} <br />
     $ {price}
    </Card.Text>
    <Button variant="primary" onClick={e => this.handleAddToCart(e, { title, image : imageUrl, desc, price, id })}>Add to cart</Button>
  </Card.Body>
</Card>
        ))}
            </div> 
            
            </div>
            
            </div>
        )
    }
} 
        
export default Neolithic;