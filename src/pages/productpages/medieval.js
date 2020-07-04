import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
class Medieval extends Component {
    constructor() {
        super();
    this.state = { items: [
        {
          title: 'Medieval Rock art',
          imageUrl: "/itemphotos/medieval/barbariansword.jpg",
          price: '$300',
          id: 1,
          desc: "Own a (reproduction) priceless piece of human history. "
        },
        {
          title: 'Medieval axe',
          imageUrl: '/itemphotos/medieval/cursadersword.jpg',
          price: '$10',
          id: 2,
          desc: '"Ung like, rock hard." - A satisfied customer"'
        },
        {
          title: 'Medieval Spear',
          imageUrl: '/itemphotos/medieval/dagger.jpg',
          price: '$15',
          id: 5,
          desc: 'A rock on the end of a stick, Classic.'
        },
        {
          title: 'Medieval Dagger',
          imageUrl: '/itemphotos/medieval/islamicstylesword.jpg',
          price: '$5',
          id: 3,
          desc: 'Just in case you lose your spear or axe'
        },
        {
          title: 'Book about the Stone age',
          imageUrl: '/itemphotos/medieval/longsword.jpg',
          price: '$15',
          id: 4,
          desc: 'Unlike stone age people, you can read! So you should read about stone age people, because they cannot read about you. '
        },
        {
          title: 'Book about the Stone age',
          imageUrl: '/itemphotos/medieval/saladin.jpg',
          price: '$15',
          id: 4,
          desc: 'Unlike stone age people, you can read! So you should read about stone age people, because they cannot read about you. '
        },
        {
          title: 'Book about the Stone age',
          imageUrl: '/itemphotos/medieval/scottishclaymore.jpg',
          price: '$15',
          id: 4,
          desc: 'Unlike stone age people, you can read! So you should read about stone age people, because they cannot read about you. '
        },
        {
          title: 'Book about the Stone age',
          imageUrl: '/itemphotos/medieval/spear.jpg',
          price: '$15',
          id: 4,
          desc: 'Unlike stone age people, you can read! So you should read about stone age people, because they cannot read about you. '
        },
        {
          title: 'Book about the Stone age',
          imageUrl: '/itemphotos/medieval/vikingsword.jpg',
          price: '$15',
          id: 4,
          desc: 'Unlike stone age people, you can read! So you should read about stone age people, because they cannot read about you. '
        },
        {
          title: 'Book about the Stone age',
          imageUrl: '/itemphotos/medieval/warhammer.jpg',
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
        <div className="MedievalInfo">
        <h1>The Medieval age</h1>
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
        
export default Medieval;