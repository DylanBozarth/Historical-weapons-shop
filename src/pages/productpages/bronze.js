import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';

class Bronze extends Component {
    constructor() {
        super();
    this.state = { items: [
        {
          title: "Bronze commoners' axe",
          imageUrl: '/itemphotos/bronzeage/axe.jpg',
          price: 25,
          id: "Bronze commoners' axe",
          desc: "An simple axe made from a single piece of wood with a bronze blade attached."
        },
        {
          title: "Bronze Noblemens' axe",
          imageUrl: '/itemphotos/bronzeage/axefancy.jpg',
          price: 55,
          id: "Bronze Noblemens' axe",
          desc: 'An ornate axe, made of bronze. .'
        },
        {
          title: 'Bronze Dagger',
          imageUrl: '/itemphotos/bronzeage/dagger.jpg',
          price: 15,
          id: 'Bronze Dagger',
          desc: 'An Egyptian style dagger from the bronze age '
        },
        {
          title: 'Bronze Spear Head',
          imageUrl: '/itemphotos/bronzeage/spearhead.jpg',
          price: 5,
          id: 'Bronze Spear Head',
          desc: 'Solid Bronze'
        },
        {
          title: 'Bronze Age Sword',
          imageUrl: '/itemphotos/bronzeage/sword.jpg',
          price: 110,
          id: 'Bronze Age Sword',
          desc: '23 inches in length, solid bronze '
        },
        {
          title: 'Ornate Bronze Sword',
          imageUrl: '/itemphotos/bronzeage/swordbuffed.jpg',
          price: 250,
          id: 'Ornate Bronze Sword',
          desc: "Modeled after what was most likely a king or governers' sword found in Egypt "
        },
        {
          title: 'Ornate Bronze Polished Sword',
          imageUrl: '/itemphotos/bronzeage/swordnice.jpg',
          price: 250,
          id: 'Ornate Bronze Polished Sword',
          desc: "Modeled after what was most likely a king or governers' sword, found in Syria"
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
        <div>
        <h1 className="pageInfo">"Bronze in the mirror of the form, wine of the mind.""

-Aeschylus</h1>
        <div className="ItemList row">
        {
             
             this.state.items.map(({title, imageUrl, desc, price, id }) => (
              <Card className="carditem" key={id} id={id}  style={{ width: '18rem'}}>
  <Card.Img variant="top" src={imageUrl} width='10rem' height='180rem' />
  <Card.Body>
    <Card.Title className="title">{title}</Card.Title>
    <Card.Text className="cardtext">
      {desc} <br />
     $ {price}
    </Card.Text>
    <Button className="itembutton" variant="primary" onClick={e => this.handleAddToCart(e, { title, image : imageUrl, desc, price, id })}>Add to cart</Button>
  </Card.Body>
</Card>
        ))}
            </div> 
            
            </div>
            
            </div>
        )
    }
} 
        
export default Bronze;