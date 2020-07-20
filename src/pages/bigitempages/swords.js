import React, { Component } from 'react';

import {Card, Button} from 'react-bootstrap';

class Swords extends Component {
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
          title: 'Bronze buffed sword',
          imageUrl: '/itemphotos/swords/swordbuffed.jpg',
          price: 45,
          id: 'Bronze buffed sword',
          desc: 'Solid Bronze, buffed to look great for ceremonial purposes.'
        },
        {
          title: 'Iron longsword and shortsword',
          imageUrl: '/itemphotos/swords/swordiron.jpg',
          price: 150,
          id: 'Iron longsword and shortsword',
          desc: '23 inch long sword, with a 9 inch short sword included.'
        },
        {
          title: 'Bronze Greek style sword',
          imageUrl: '/itemphotos/swords/swordnice.jpg',
          price: 75,
          id: 'Bronze Greek style sword',
          desc: 'Made of bronze with a wood handle'
        },
        {
          title: 'Irish style Iron sword',
          imageUrl: '/itemphotos/ironage/sword irish.jpg',
          price: 150,
          id: 'Irish style Iron sword',
          desc: "Modeled after a historic unknown Irish lords' sword"
        }
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
        <div>
        <h1 className="pageInfo">Swords from around the world</h1>
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
    <Button variant="primary" onClick={e => this.handleAddToCart(e, { title, image : imageUrl, desc, price })}>Add to cart</Button>
  </Card.Body>
</Card>
        ))}
            </div> 
            
            </div>
            
            </div>
        )
    }
} 
        
export default Swords;