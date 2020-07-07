import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';

class Renaissance extends Component {
    constructor() {
        super();
    this.state = { items: [
        {
          title: 'Renaissance Decorative sword',
          imageUrl: "/itemphotos/Renaissance/decorativeswords.jpg",
          price: '$300',
          id: 1,
          desc: "With the advent of gunpowder, swords went from being an essential weapon to more of a status symbol."
        },
        {
          title: "Duelers' swords set",
          imageUrl: '/itemphotos/Renaissance/duelers.jpg',
          price: '$450',
          id: 2,
          desc: 'Settle an argument the proper way with these two dueling swords. '
        },
        {
          title: 'Single Dueling Sword',
          imageUrl: '/itemphotos/Renaissance/duelsword.jpg',
          price: '$150',
          id: 5,
          desc: 'Looks great over the fireplace'
        },
        {
          title: 'Flintlock rifle.',
          imageUrl: '/itemphotos/Renaissance/flintlock.jpg',
          price: '$250',
          id: 3,
          desc: 'An improvement on matchlocks, less likely to misfire in the rain. No background check is needed for black powder firearms.'
        },
        {
          title: 'Matchlock Pistol',
          imageUrl: '/itemphotos/Renaissance/matchlock.jpg',
          price: '$180',
          id: 3,
          desc: 'Not reccomended for long distances. No background check is needed for black powder firearms.'
        },
        {
          title: 'Matchlock Rifle',
          imageUrl: '/itemphotos/Renaissance/matchlockrifle.jpg',
          price: '$260',
          id: 3,
          desc: 'Looks great over a fireplace. No background check is needed for black powder firearms.'
        },
        {
          title: 'Late middle ages Halberd.',
          imageUrl: '/itemphotos/Renaissance/halberd.jpg',
          price: '$180',
          id: 4,
          desc: 'Still in use by the Swiss guard. '
        }
      ] 
    }
  }
    render() { 
        return ( 
        <div className="FullPage Container"> 
        <div>
        <h1 className="pageInfo">"Not much was really invented during the Renaissance, if you don't count modern civilization."

-P. J. O'Rourke</h1>
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