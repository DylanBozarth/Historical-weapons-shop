import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';

class Roman extends Component {
    constructor() {
        super();
    this.state = { items: [
        {
          title: 'Dane axe',
          imageUrl: "/itemphotos/roman/daneaxe.jpg",
          price: 300,
          id: 1,
          desc: "Weilded by the famous Varagian guard of the Late roman empire. Over 5 feet in length, this axe requires great strength to swing."
        },
        {
          title: "Early Roman soldiers' kit",
          imageUrl: "/itemphotos/roman/fullset.jpg",
          price: 250,
          id: 1,
          desc: "A member of Caesar's legions would be very familiar with these weapons."
        },
        {
          title: 'Gladiator sword',
          imageUrl: "/itemphotos/roman/gladiator.jpg",
          price: 120,
          id: 1,
          desc: "Are you not entertained?!"
        },
        {
          title: 'Late roman sword',
          imageUrl: "/itemphotos/roman/lateheavysword.jpg",
          price: 110,
          id: 1,
          desc: "As the Roman empire carried on, the classic shortsword was made to be longer in order to compensate for better armor.  "
        },
        {
          title: "Centurion's sword.",
          imageUrl: "/itemphotos/roman/officerssword.jpg",
          price: 250,
          id: 1,
          desc: "Centurion's sword. Commander of One hundred men. "
        },
        {
          title: 'Roman Throwing spear',
          imageUrl: "/itemphotos/roman/pilum.jpg",
          price: 50,
          id: 1,
          desc: "A pilum, used for throwing at the enemy before engaging with your Gladius."
        },
        {
          title: 'Roman Pugio',
          imageUrl: "/itemphotos/roman/pugio.jpg",
          price: 30,
          id: 1,
          desc: "Dagger of a common Roman citizen in the early empire."
        },
        {
          title: 'Roman spear',
          imageUrl: "/itemphotos/roman/romanspear.jpg",
          price: 50,
          id: 1,
          desc: "The weapon of the common citizen called to defend the empire in times of need."
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
        <h1 className="pageInfo">"The world survived the fall of the Roman empire and will no doubt outlast our own so much more splendid civilisation."

          -James Buchan
        </h1>
        <div className="ItemList row">
        {
             
             this.state.items.map(({title, imageUrl, desc, price, id }) => (
              <Card key={title} id={id} style={{ width: '18rem'}}>
  <Card.Img variant="top" src={imageUrl}  width='10rem' height='180rem' />
  <Card.Body>
    <Card.Title className="title">{title}</Card.Title>
    <Card.Text className="cardtext">
      {desc} <br />
     $ {price}
    </Card.Text>
    <Button  className="itembutton" variant="primary" onClick={e => this.handleAddToCart(e, { title, image : imageUrl, desc, price, id })}>Add to cart</Button>
  </Card.Body>
</Card>
        ))}
            </div> 
            
            </div>
            
            </div>
        )
    }
} 
        
export default Roman;