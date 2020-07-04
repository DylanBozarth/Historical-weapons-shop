import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';

class Bronze extends Component {
    constructor() {
        super();
    this.state = { items: [
        {
          title: "Bronze commoners' axe",
          imageUrl: '/itemphotos/bronzeage/axe.jpg',
          price: '$300',
          id: 1,
          desc: "Own a (reproduction) priceless piece of human history. "
        },
        {
          title: "Bronze noblemens' axe",
          imageUrl: '/itemphotos/bronzeage/axefancy.jpg',
          price: '$10',
          id: 2,
          desc: '"Ung like, rock hard." - A satisfied customer"'
        },
        {
          title: 'Bronze Spear',
          imageUrl: '/itemphotos/bronzeage/dagger.jpg',
          price: '$15',
          id: 5,
          desc: 'A rock on the end of a stick, Classic.'
        },
        {
          title: 'Bronze Dagger',
          imageUrl: '/itemphotos/bronzeage/spearhead.jpg',
          price: '$5',
          id: 3,
          desc: 'Just in case you lose your spear or axe'
        },
        {
          title: 'Book about the Stone age',
          imageUrl: '/itemphotos/bronzeage/sword.jpg',
          price: '$15',
          id: 4,
          desc: 'Unlike stone age people, you can read! So you should read about stone age people, because they cannot read about you. '
        },
        {
          title: 'Book about the Stone age',
          imageUrl: '/itemphotos/bronzeage/swordbuffed.jpg',
          price: '$15',
          id: 4,
          desc: 'Unlike stone age people, you can read! So you should read about stone age people, because they cannot read about you. '
        },
        {
          title: 'Book about the Stone age',
          imageUrl: '/itemphotos/bronzeage/swordnice.jpg',
          price: '$15',
          id: 4,
          desc: 'Unlike stone age people, you can read! So you should read about stone age people, because they cannot read about you. '
        },
      ] 
    }
  }
    render() { 
        return ( 
        <div className="FullPage Container"> 
        <div className="BronzeInfo">
        <h1>The Bronze age, also known as the stone age. Was the age where humans used stone as the primary material for all technology.</h1>
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
        
export default Bronze;