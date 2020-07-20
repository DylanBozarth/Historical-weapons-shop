import React, { Component } from 'react';

import {Card, Button} from 'react-bootstrap';

class Armor extends Component {
    constructor() {
        super();
    this.state = { items: [
        {
          title: 'Helmet from the 30 years war',
          imageUrl: "/itemphotos/armor/30yearswarhelmet.jpg",
          price: 120,
          id: 'Helmet from the 30 years war',
          desc: "Used by French armies during the 30 years war "
        },
        {
          title: 'Helmet of the Avars',
          imageUrl: '/itemphotos/armor/avar helmet.jpg',
          price: 100,
          id: 'Helmet of the Avars',
          desc: 'Used by the nomadic Avar Khanganate. '
        },
        {
          title: "Conquistador's helm",
          imageUrl: '/itemphotos/armor/conquistador.jpg',
          price: 150,
          id: "Conquistador's helm",
          desc: 'One solid peice of steel. '
        },
        {
          title: "Crusader's helm ",
          imageUrl: '/itemphotos/armor/crusaderhelmet.jpg',
          price: 130,
          id: "Crusader's helm ",
          desc: 'Used by the Crusader states in the 11th century.'
        },
        {
          title: 'Viking helmet',
          imageUrl: '/itemphotos/armor/vikinghelmet.jpg',
          price: 70,
          id: 'Viking helmet',
          desc: 'No horns on this helmet.'
        },
        {
          title: 'Bronze armor',
          imageUrl: '/itemphotos/armor/bronzeage.jpg',
          price: 150,
          id: 'Bronze armor',
          desc: 'Softer than Iron, but certianly looks good.'
        },
        {
          title: 'Mycenean Bronze armor set',
          imageUrl: '/itemphotos/armor/myceneanarmor.jpg',
          price: 250,
          id: 'Mycenean Bronze armor set',
          desc: 'Oversized in order to protect the wearer.'
        },
        {
          title: 'Early Roman armor',
          imageUrl: '/itemphotos/armor/earlyroman.jpg',
          price: 150,
          id: 'Early Roman armor',
          desc: 'Early roman armor set. Commonly known as Lorica Segmentum'
        },
        {
          title: 'Late Roman armor',
          imageUrl: '/itemphotos/armor/lateroman.jpg',
          price: 130,
          id: 'Late Roman armor',
          desc: 'More flexible than early roman armor, but not as good against stabbing attacks.'
        },
        {
          title: 'Gambeson',
          imageUrl: '/itemphotos/armor/gambeson.jpg',
          price: 60,
          id: 'Gambeson',
          desc: 'Thick linen. Used underneath armor, or alone.'
        },
        {
          title: 'Gothic plate armor',
          imageUrl: '/itemphotos/armor/gothicplate.jpg',
          price: 200,
          id: 'Gothic plate armor',
          desc: 'The heaviest armor before the age of gunpowder.'
        },
        {
          title: 'Mongol Armor',
          imageUrl: '/itemphotos/armor/mongolarmor.jpg',
          price: 130,
          id: 'Mongol Armor',
          desc: 'For use on top of a horse. '
        },
        {
          title: 'Mughal Armor',
          imageUrl: '/itemphotos/armor/mughalarmor.jpg',
          price: 150,
          id: 'Mughal Armor',
          desc: 'One of the latest armors made before the age of gunpowder.'
        },
        {
          title: 'Teutonic Armor set',
          imageUrl: '/itemphotos/armor/teutonicarmor.jpg',
          price: 250,
          id: 'Teutonic Armor set',
          desc: ''
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
        <div >
        <h1 className="pageInfo">"Fortitude is the marshal of thought, the armor of the will, and the fort of reason." -Francis Bacon</h1>
        <div className="ItemList row">
        {
             
             this.state.items.map(({title, imageUrl, desc, price, id }) => (
              <Card key={title} id={id} style={{ width: '18rem'}}>
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
        
export default Armor;