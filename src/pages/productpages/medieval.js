import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
class Medieval extends Component {
    constructor() {
        super();
    this.state = { items: [
        {
          title: 'Barbarian Sword',
          imageUrl: "/itemphotos/medieval/barbariansword.jpg",
          price: '$300',
          id: 1,
          desc: "Over 5 feet in length. Classic sword of the Βάρβαρος."
        },
        {
          title: "Crusader's sword",
          imageUrl: '/itemphotos/medieval/cursadersword.jpg',
          price: '$160',
          id: 2,
          desc: 'Great for bringing to the holy land.'
        },
        {
          title: 'Medieval Dagger',
          imageUrl: '/itemphotos/medieval/dagger.jpg',
          price: '$25',
          id: 5,
          desc: 'A perfect sidearm for a merchant or traveling scholar'
        },
        {
          title: 'Islamic style sword',
          imageUrl: '/itemphotos/medieval/islamicstylesword.jpg',
          price: '$145',
          id: 3,
          desc: 'Used widely Seljuk Turks, and partially by the Fatimids.'
        },
        {
          title: 'Medieval Longsword',
          imageUrl: '/itemphotos/medieval/longsword.jpg',
          price: '$150',
          id: 4,
          desc: 'French style Medieval sword. Made for a knight.'
        },
        {
          title: "Saladin's Damascus steel sword.",
          imageUrl: '/itemphotos/medieval/saladin.jpg',
          price: '$1500',
          id: 4,
          desc: "Modeled after the famous leader of the Saracens, Sala-al-din's (صلاح الدين يوسف بن أيوب) Sword. "
        },
        {
          title: 'Scottish Claymore Sword',
          imageUrl: '/itemphotos/medieval/scottishclaymore.jpg',
          price: '$250',
          id: 4,
          desc: 'Over 6 feet long. Great for wielding whilst screaming "Freedom!"'
        },
        {
          title: 'Medieval Spear',
          imageUrl: '/itemphotos/medieval/spear.jpg',
          price: '$65',
          id: 4,
          desc: 'Steel tip, Cedar wood. The most common weapon of the Medieval era.'
        },
        {
          title: 'Viking style sword',
          imageUrl: '/itemphotos/medieval/vikingsword.jpg',
          price: '$150',
          id: 4,
          desc: 'The most common sword of the vikings. Made for thrusts and occasional slice against unarmored targets.'
        },
        {
          title: 'Medieval Warhammer',
          imageUrl: '/itemphotos/medieval/warhammer.jpg',
          price: '$250',
          id: 4,
          desc: 'Very uncommon weapon, with only a few documented uses. Most likely due to the stregth required to wield this devastating weapon.'
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