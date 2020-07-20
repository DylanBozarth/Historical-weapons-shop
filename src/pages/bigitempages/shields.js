import React, { Component } from 'react';

import {Card, Button} from 'react-bootstrap';

class Shields extends Component {
    constructor() {
        super();
    this.state = { items: [
        {
          title: 'Bronze shield',
          imageUrl: "/itemphotos/shields/bronzeshield.jpg",
          price: 150,
          id: 'Bronze shield',
          desc: "Be sure to oil regularly "
        },
        {
          title: 'Dark ages shield',
          imageUrl: '/itemphotos/shields/darkages.jpg',
          price: 80,
          id: 'Dark ages shield',
          desc: 'Worse quality than Roman shields, as they did not have the same materials or skills.'
        },
        {
          title: 'Early Roman shield',
          imageUrl: '/itemphotos/shields/earlyroman.jpg',
          price: 100,
          id: 'Early Roman shield',
          desc: 'Mostly made from wood.'
        },
        {
          title: 'English Coat of arms shield ',
          imageUrl: '/itemphotos/shields/english.jpg',
          price: 65,
          id: 'English Coat of arms shield ',
          desc: 'By the grace of Saint George we are able to offer this item. '
        },
        {
          title: 'Iron age shield',
          imageUrl: '/itemphotos/shields/ironshield.jpg',
          price: 45,
          id: 'Iron age shield',
          desc: 'Much harder than bronze'
        },
        {
          title: 'Late Roman Chi-ro shield',
          imageUrl: '/itemphotos/shields/lateroman.jpg',
          price: 100,
          id: 'Late Roman Chi-ro shield',
          desc: 'The standard shield for all Roman soldiers after the reign of Constantine the great.'
        },
        {
          title: 'Leather Shield',
          imageUrl: '/itemphotos/shields/leather.jpg',
          price: 35,
          id:  'Leather Shield',
          desc: 'For roleplay or LARP purposes '
        },
        {
          title: 'Templar shield',
          imageUrl: '/itemphotos/shields/templar.jpg',
          price: 120,
          id: 'Templar shield',
          desc: "Heavy Crusader's shield, made of steel and wood."
        },
        {
          title: 'Viking style shield',
          imageUrl: '/itemphotos/shields/viking.jpg',
          price: 100,
          id: 'Viking style shield',
          desc: 'Ask about adding Nordic runes to your shield at checkout.'
        },
        {
          title: 'Holy Roman Empire coat of arms shield',
          imageUrl: '/itemphotos/shields/hre.jpg',
          price: 120,
          id: 'Holy Roman Empire coat of arms shield',
          desc: 'Fit for Barbarossa himself.'
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
        <h1 className="pageInfo">A strong shield can be the difference between life and death</h1>
        <div className="ItemList row">
        {
             
             this.state.items.map(({title, imageUrl, desc, price, id }) => (
              <Card key={title} id={id}  style={{ width: '18rem'}}>
  <Card.Img variant="top" src={imageUrl} width='10rem' height='180rem' />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      {desc} <br />
    $  {price}
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
        
export default Shields;