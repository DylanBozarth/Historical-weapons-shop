import React, { Component } from 'react';


class Armor extends Component {
    constructor() {
        super();
    this.state = { items: [
        {
          title: 'Armor Rock art',
          imageUrl: "/itemphotos/stoneage/art.jpg",
          price: '$300',
          id: 1,
          desc: "Own a (reproduction) priceless piece of human history. "
        },
        {
          title: 'Armor axe',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$10',
          id: 2,
          desc: '"Ung like, rock hard." - A satisfied customer"'
        },
        {
          title: 'Armor Spear',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$15',
          id: 5,
          desc: 'A rock on the end of a stick, Classic.'
        },
        {
          title: 'Armor Dagger',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$5',
          id: 3,
          desc: 'Just in case you lose your spear or axe'
        },
        {
          title: 'Book about the Stone age',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$15',
          id: 4,
          desc: 'Unlike stone age people, you can read! So you should read about stone age people, because they cannot read about you. '
        }
      ] 
    }
  }
    render() { 
        return ( 
        <div className="FullPage Container"> 
        <div className="ArmorInfo">
        <h1>The Armor age</h1>
        <div className="ItemList row">
        {
             
             this.state.items.map(({title, imageUrl, desc, price, id }) => (
              <div className="Card  col-lg-4" key={id}> 
              <div className="thumbnail">
                        <img className="cardImg" height='150' width='200' src={`${imageUrl}`} alt='' />
                <div className="caption" key={id}>
                  <h3>{title}</h3>
                  <p className="flex-text desc">{desc} <br /> {price}</p>
                  <p>
                    <button className="btn btn-primary" href="#">Add to cart</button>
                  </p>
                </div>
                
              </div>
            
            </div>
        ))}
            </div> 
            
            </div>
            
            </div>
        )
    }
} 
        
export default Armor;