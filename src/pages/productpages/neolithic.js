import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';

class Neolithic extends Component {
    constructor() {
        super();
    this.state = { items: [
        {
          title: 'Neolithic Rock art',
          imageUrl: "/itemphotos/stoneage/art.jpg",
          price: '$300',
          id: 1,
          desc: "Own a (reproduction) priceless piece of human history. "
        },
        {
          title: 'Neolithic axe',
          imageUrl: './itemphotos/stoneage/stoneaxe.jpg',
          price: '$10',
          id: 2,
          desc: '"Ung like, rock hard." - A satisfied customer"'
        },
        {
          title: 'Neolithic Spear',
          imageUrl: './itemphotos/stoneage/dagger.jpg',
          price: '$15',
          id: 3,
          desc: 'A rock on the end of a stick, Classic.'
        },
        {
          title: 'Neolithic Dagger',
          imageUrl: './itemphotos/stoneage/stoneaxe.jpg',
          price: '$5',
          id: 4,
          desc: 'Just in case you lose your spear or axe'
        },
        {
          title: 'Neolithic Spear',
          imageUrl: './itemphotos/stoneage/book.jpg',
          price: '$15',
          id: 3,
          desc: 'A rock on the end of a stick, Classic.'
        },
        {
          title: 'Neolithic Dagger',
          imageUrl: './itemphotos/stoneage/stonehammer.jpg',
          price: '$5',
          id: 4,
          desc: 'Just in case you lose your spear or axe'
        },
        {
          title: 'Neolithic Spear',
          imageUrl: './itemphotos/stoneage/stoneset.jpg',
          price: '$15',
          id: 3,
          desc: 'A rock on the end of a stick, Classic.'
        }
      ] 
    }
  }
    render() { 
        return ( 
        <div className="FullPage Container"> 
        <div >
        <h1 className="producttitle">The Neolithic age, also known as the stone age. Was the age where humans used stone as the primary material for all technology.</h1>
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
        
export default Neolithic;