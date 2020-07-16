import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';

class ironage extends Component {
    constructor() {
        super();
    this.state = { items: [
        {
          title: 'iron age axe',
          imageUrl: "/itemphotos/ironage/axe.jpg",
          price: '$45',
          desc: "Iron axes are keep their edges significantly beter than bronze."
        },
        {
          title: 'iron dagger',
          imageUrl: '/itemphotos/ironage/dagger.jpg',
          price: '$15',
          desc: 'Excellent for concealed carry. '
        },
        {
          title: 'Iron hammer',
          imageUrl: '/itemphotos/ironage/hammer.jpg',
          price: '$30',
          desc: 'The most common tool from this era.'
        },
        {
          title: 'Iron sword',
          imageUrl: '/itemphotos/ironage/sword.jpg',
          price: '$75',
          desc: 'Retains its edge better than bronze, but not as well as later swords.'
        },
        {
          title: 'Irish style Iron sword',
          imageUrl: '/itemphotos/ironage/sword irish.jpg',
          price: '$150',
          desc: "Modeled after a historic unknown Irish lords' sword"
        },
        {
          title: 'Iron throwing axe',
          imageUrl: '/itemphotos/ironage/throwingaxe.jpg',
          price: '$15',
          desc: 'Best used with the proper training. '
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
        <h1 className="pageInfo">"Iron rusts from disuse; water loses its purity from stagnation... even so does inaction sap the vigor of the mind."

-Leonardo da Vinci</h1>
        <div className="ItemList row">
        {
             
             this.state.items.map(({title, imageUrl, desc, price }) => (
              <Card key={title}  style={{ width: '18rem'}}>
  <Card.Img variant="top" src={imageUrl} width='10rem' height='180rem' />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      {desc} <br />
      {price}
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
        
export default ironage;