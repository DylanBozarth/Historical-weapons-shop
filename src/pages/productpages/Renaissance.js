import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';

class Renaissance extends Component {
    constructor() {
        super();
    this.state = { items: [
        {
          title: 'Renaissance Rock art',
          imageUrl: "/itemphotos/Renaissance/decorativeswords.jpg",
          price: '$300',
          id: 1,
          desc: "Own a (reproduction) priceless piece of human history. "
        },
        {
          title: 'Renaissance axe',
          imageUrl: '/itemphotos/Renaissance/duelers.jpg',
          price: '$10',
          id: 2,
          desc: '"Ung like, rock hard." - A satisfied customer"'
        },
        {
          title: 'Renaissance Spear',
          imageUrl: '/itemphotos/Renaissance/duelsword.jpg',
          price: '$15',
          id: 5,
          desc: 'A rock on the end of a stick, Classic.'
        },
        {
          title: 'Renaissance Dagger',
          imageUrl: '/itemphotos/Renaissance/flintlock.jpg',
          price: '$5',
          id: 3,
          desc: 'Just in case you lose your spear or axe'
        },
        {
          title: 'Renaissance Dagger',
          imageUrl: '/itemphotos/Renaissance/matchlock.jpg',
          price: '$5',
          id: 3,
          desc: 'Just in case you lose your spear or axe'
        },
        {
          title: 'Renaissance Dagger',
          imageUrl: '/itemphotos/Renaissance/matchlockrifle.jpg',
          price: '$5',
          id: 3,
          desc: 'Just in case you lose your spear or axe'
        },
        {
          title: 'Book about the Stone age',
          imageUrl: '/itemphotos/Renaissance/halberd.jpg',
          price: '$15',
          id: 4,
          desc: 'Unlike stone age people, you can read! So you should read about stone age people, because they cannot read about you. '
        }
      ] 
    }
  }
    render() { 
        return ( 
        <div className="FullPage Container"> 
        <div className="RenaissanceInfo">
        <h1>The Renaissance age</h1>
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
        
export default Renaissance;