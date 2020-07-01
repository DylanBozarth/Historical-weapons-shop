import React, { Component } from 'react';
import { DisplayItem } from '../itemdisplayer/itemdisplayer'


class Neolithic extends Component {
    constructor() {
        super();
    this.state = { items: [
        {
          title: 'Neolithic Rock art',
          imageUrl: "./itemphotos/stoneage/art.jpg",
          price: '$300',
          id: 1,
          desc: "Own a (reproduction) priceless piece of human history. "
        },
        {
          title: 'Neolithic axe',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$10',
          id: 2,
          desc: '"Ung like, rock hard." - A satisfied customer"'
        },
        {
          title: 'Neolithic Spear',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$15',
          id: 5,
          desc: 'A rock on the end of a stick, Classic.'
        },
        {
          title: 'Neolithic Dagger',
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
        <div className="NeolithicInfo">
        <h1>The Neolithic age, also known as the stone age. Was the age where humans used stone as the primary material for all technology.</h1>
        <div className="ItemList row">
        {
             
            this.state.items.map(({title, imageUrl, desc, price, id }) => (
            <DisplayItem key={id} title={title} imageUrl={imageUrl} desc={desc} price={price} />
        ))} 
            </div> 
            
            </div>
            
            </div>
        )
    }
} 
        
export default Neolithic;