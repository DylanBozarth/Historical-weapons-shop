import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';

class Roman extends Component {
    constructor() {
        super();
    this.state = { items: [
        {
          title: 'Dane axe',
          imageUrl: "/itemphotos/roman/daneaxe.jpg",
          price: '$300',
          id: 1,
          desc: "Own a (reproduction) priceless piece of human history. "
        },
        {
          title: 'Early Roman weapons, full set',
          imageUrl: "/itemphotos/roman/fullset.jpg",
          price: '$300',
          id: 1,
          desc: "Own a (reproduction) priceless piece of human history. "
        },
        {
          title: 'gladiator sword',
          imageUrl: "/itemphotos/roman/gladiator.jpg",
          price: '$300',
          id: 1,
          desc: "Own a (reproduction) priceless piece of human history. "
        },
        {
          title: 'Dane axe',
          imageUrl: "/itemphotos/roman/lateheavysword.jpg",
          price: '$300',
          id: 1,
          desc: "Own a (reproduction) priceless piece of human history. "
        },
        {
          title: 'Dane axe',
          imageUrl: "/itemphotos/roman/officerssword.jpg",
          price: '$300',
          id: 1,
          desc: "Own a (reproduction) priceless piece of human history. "
        },
        {
          title: 'Dane axe',
          imageUrl: "/itemphotos/roman/officerssword.jpg",
          price: '$300',
          id: 1,
          desc: "Own a (reproduction) priceless piece of human history. "
        },
        {
          title: 'Dane axe',
          imageUrl: "/itemphotos/roman/pilum.jpg",
          price: '$300',
          id: 1,
          desc: "Own a (reproduction) priceless piece of human history. "
        },
        {
          title: 'Dane axe',
          imageUrl: "/itemphotos/roman/pugio.jpg",
          price: '$300',
          id: 1,
          desc: "Own a (reproduction) priceless piece of human history. "
        },
        {
          title: 'Dane axe',
          imageUrl: "/itemphotos/roman/romanspear.jpg",
          price: '$300',
          id: 1,
          desc: "Own a (reproduction) priceless piece of human history. "
        },
      ] 
    }
  }
    render() { 
        return ( 
        <div className="FullPage Container"> 
        <div className="RomanInfo">
        <h1>The Roman age</h1>
        <div className="ItemList row">
        {
             
             this.state.items.map(({title, imageUrl, desc, price, id }) => (
              <Card style={{ width: '18rem'}}>
  <Card.Img variant="top" src={imageUrl} key={id} width='10rem' height='180rem' />
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
            
            </div>
            
            </div>
        )
    }
} 
        
export default Roman;