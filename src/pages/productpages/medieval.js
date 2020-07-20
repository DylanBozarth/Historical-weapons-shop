import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
class Medieval extends Component {
    constructor() {
        super();
    this.state = { items: [
        {
          title: 'Barbarian Sword',
          imageUrl: "/itemphotos/medieval/barbariansword.jpg",
          price: 300,
          id: 'Barbarian Sword',
          desc: "Over 5 feet in length. Classic sword of the Βάρβαρος."
        },
        {
          title: "Crusader's sword",
          imageUrl: '/itemphotos/medieval/cursadersword.jpg',
          price: 160,
          id: "Crusader's sword",
          desc: 'Great for bringing to the holy land.'
        },
        {
          title: 'Medieval Dagger',
          imageUrl: '/itemphotos/medieval/dagger.jpg',
          price: 25,
          id: 'Medieval Dagger',
          desc: 'A perfect sidearm for a merchant or traveling scholar'
        },
        {
          title: 'Islamic style sword',
          imageUrl: '/itemphotos/medieval/islamicstylesword.jpg',
          price: 145,
          id: 'Islamic style sword',
          desc: 'Used widely Seljuk Turks, and partially by the Fatimids.'
        },
        {
          title: 'Medieval Longsword',
          imageUrl: '/itemphotos/medieval/longsword.jpg',
          price: 150,
          id: 'Medieval Longsword',
          desc: 'French style Medieval sword. Made for a knight.'
        },
        {
          title: "Saladin's Damascus steel sword.",
          imageUrl: '/itemphotos/medieval/saladin.jpg',
          price: 1500,
          id: "Saladin's Damascus steel sword.",
          desc: "Modeled after the famous leader of the Saracens, Sala-al-din's (صلاح الدين يوسف بن أيوب) Sword. "
        },
        {
          title: 'Scottish Claymore Sword',
          imageUrl: '/itemphotos/medieval/scottishclaymore.jpg',
          price: 250,
          id: 'Scottish Claymore Sword',
          desc: 'Over 6 feet long. Great for wielding whilst screaming "Freedom!"'
        },
        {
          title: 'Medieval Spear',
          imageUrl: '/itemphotos/medieval/spear.jpg',
          price: 65,
          id: 'Medieval Spear',
          desc: 'Steel tip, Cedar wood. The most common weapon of the Medieval era.'
        },
        {
          title: 'Viking style sword',
          imageUrl: '/itemphotos/medieval/vikingsword.jpg',
          price: 150,
          id: 'Viking style sword',
          desc: 'The most common sword of the vikings. Made for thrusts and occasional slice against unarmored targets.'
        },
        {
          title: 'Medieval Warhammer',
          imageUrl: '/itemphotos/medieval/warhammer.jpg',
          price: 250,
          id: 'Medieval Warhammer',
          desc: 'Very uncommon weapon, with only a few documented uses. Most likely due to the stregth required to wield this devastating weapon.'
        },
      ] 
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
        <h1 className="pageInfo">"Your chances of dying a violent death are 1/500th of what they used to be during medieval times."

-Peter Diamandis</h1>
        <div className="ItemList row">
        {
             
             this.state.items.map(({title, imageUrl, desc, price, id }) => (
              <Card key={title} id={id}  style={{ width: '18rem'}}>
  <Card.Img variant="top" src={imageUrl} width='10rem' height='180rem' />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      {desc} <br />
       $ {price}
    </Card.Text>
    <Button variant="primary" onClick={e => this.handleAddToCart(e, { title, image : imageUrl, desc, price, id })} >Add to cart</Button>
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