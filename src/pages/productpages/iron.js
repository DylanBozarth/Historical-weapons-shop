import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';

class ironage extends Component {
    constructor() {
        super();
    this.state = { items: [
        {
          title: 'ironage Rock art',
          imageUrl: "/itemphotos/ironage/axe.jpg",
          price: '$300',
          id: 1,
          desc: "Own a (reproduction) priceless piece of human history. "
        },
        {
          title: 'ironage axe',
          imageUrl: '/itemphotos/ironage/dagger.jpg',
          price: '$10',
          id: 2,
          desc: '"Ung like, rock hard." - A satisfied customer"'
        },
        {
          title: 'ironage Spear',
          imageUrl: '/itemphotos/ironage/hammer.jpg',
          price: '$15',
          id: 5,
          desc: 'A rock on the end of a stick, Classic.'
        },
        {
          title: 'ironage Dagger',
          imageUrl: '/itemphotos/ironage/sword.jpg',
          price: '$5',
          id: 3,
          desc: 'Just in case you lose your spear or axe'
        },
        {
          title: 'Book about the Stone age',
          imageUrl: '/itemphotos/ironage/sword irish.jpg',
          price: '$15',
          id: 4,
          desc: 'Unlike stone age people, you can read! So you should read about stone age people, because they cannot read about you. '
        },
        {
          title: 'Book about the Stone age',
          imageUrl: '/itemphotos/ironage/throwingaxe.jpg',
          price: '$15',
          id: 4,
          desc: 'youu'
        },
      ] 
    }
  }
    render() { 
        return ( 
        <div className="FullPage Container"> 
        <div className="ironageInfo">
        <h1>The ironage age</h1>
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
        
export default ironage;