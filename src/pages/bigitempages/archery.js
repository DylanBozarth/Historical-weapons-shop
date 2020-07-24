import React, { Component } from 'react';

import {Card, Button} from 'react-bootstrap';

class Archery extends Component {
    constructor() {
        super();
    this.state = { items: [
        {
          title: 'Archery arm guard',
          imageUrl: "/itemphotos/archery/armguard.jpg",
          price: 15,
          id: 'Archery arm guard',
          desc: "Made from leather. "
        },
        {
          title: 'Bronze arrowhead',
          imageUrl: '/itemphotos/archery/bronzearrowhead.png',
          price: 5,
          id: 'Bronze arrowhead',
          desc: 'Solid bronze'
        },
        {
          title: 'Bronze Crossbow',
          imageUrl: '/itemphotos/archery/bronzecrossbow.jpg',
          price: 150,
          id: 'Bronze Crossbow',
          desc: 'Solid bronze. '
        },
        {
          title: 'Chinese style repeater crossbow',
          imageUrl: '/itemphotos/archery/chinesecrossbow.jpg',
          price: 250,
          id: 'Chinese style repeater crossbow',
          desc: 'A hail of crossbow bolts is great fun. '
        },
        {
          title: 'Copper thumb ring.',
          imageUrl: '/itemphotos/archery/copperthumbring.jpg',
          price: 15,
          id: 'Copper thumb ring.',
          desc: 'How ancient archers used to use heavy bows for hours on end.'
        },
        {
          title: 'Hip quiver',
          imageUrl: '/itemphotos/archery/hipquiver.jpg',
          price: 45,
          id: 'Hip quiver',
          desc: "This does not go on your back, this isn't hollywood!"
        },
        {
          title: 'Hunting bow',
          imageUrl: '/itemphotos/archery/huntingbow.jpg',
          price: 45,
          id: 'Hunting bow',
          desc: '45lbs draw weight. '
        },
        {
          title: 'Iron arrowhead',
          imageUrl: '/itemphotos/archery/ironarrowhead.jpg',
          price: 5,
          id: 'Iron arrowhead',
          desc: 'Sharper than bronze, but vulnerable to rust.'
        },
        {
          title: 'Medieval crossbow',
          imageUrl: '/itemphotos/archery/medcrossbow.jpg',
          price: 110,
          id:  'Medieval crossbow',
          desc: '700lbs draw weight. '
        },
        {
          title: 'Mongolian horsebow.',
          imageUrl: '/itemphotos/archery/mongolian.jpg',
          price: 60,
          id: 'Mongolian horsebow.',
          desc: '45lbs draw weight, short enough to use on a horse.'
        },
        {
          title: 'Stone arrowhead',
          imageUrl: '/itemphotos/archery/stonearrowhead.jpg',
          price: 5,
          id: 'Stone arrowhead',
          desc: 'Native American style'
        },
        {
          title: 'Stone bow',
          imageUrl: '/itemphotos/archery/stonebox.jpg',
          price: 80,
          id: 'Stone bow',
          desc: 'Not made of stone, made for shooting stones. Great for hunting small game or target practice.'
        },
        {
          title: 'Wooden arrows, 50 count',
          imageUrl: '/itemphotos/archery/woodenarrows.jpg',
          price: 120,
          id: 3,
          desc: 'Made from poplar wood. Tipless'
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
        <h1 className="pageInfo">"Archery does not get difficult or hard to understand until the arrow misses." -Milan E. Elott</h1>
        <div className="ItemList row">
        {
             
             this.state.items.map(({title, imageUrl, desc, price, id }) => (
              <Card key={title} id={id}  style={{ width: '18rem'}}>
  <Card.Img variant="top" src={imageUrl} width='10rem' height='180rem' />
  <Card.Body>
    <Card.Title className="title">{title}</Card.Title>
    <Card.Text className="cardtext">
      {desc} <br />
     $ {price}
    </Card.Text>
    <Button className="itembutton" variant="primary" onClick={e => this.handleAddToCart(e, { title, image : imageUrl, desc, price, id  })}>Add to cart</Button>
  </Card.Body>
</Card>
        ))}
            </div> 
            
            </div>
            
            </div>
        )
    }
} 
        
export default Archery;