import React, { Component } from 'react';


class Swords extends Component {
    constructor() {
        super();
    this.state = { items: [
      {
        title: 'Barbarian Sword',
        imageUrl: "/itemphotos/medieval/barbariansword.jpg",
        price: '$300',
        id: 1,
        desc: "Over 5 feet in length. Classic sword of the Βάρβαρος."
      },
      {
        title: "Crusader's sword",
        imageUrl: '/itemphotos/medieval/cursadersword.jpg',
        price: '$160',
        id: 2,
        desc: 'Great for bringing to the holy land.'
      },
      {
        title: 'Medieval Dagger',
        imageUrl: '/itemphotos/medieval/dagger.jpg',
        price: '$25',
        id: 5,
        desc: 'A perfect sidearm for a merchant or traveling scholar'
      },
      {
        title: 'Islamic style sword',
        imageUrl: '/itemphotos/medieval/islamicstylesword.jpg',
        price: '$145',
        id: 3,
        desc: 'Used widely Seljuk Turks, and partially by the Fatimids.'
      },
      {
        title: 'Medieval Longsword',
        imageUrl: '/itemphotos/medieval/longsword.jpg',
        price: '$150',
        id: 4,
        desc: 'French style Medieval sword. Made for a knight.'
      },
      {
        title: "Saladin's Damascus steel sword.",
        imageUrl: '/itemphotos/medieval/saladin.jpg',
        price: '$1500',
        id: 4,
        desc: "Modeled after the famous leader of the Saracens, Sala-al-din's (صلاح الدين يوسف بن أيوب) Sword. "
      },
      {
        title: 'Scottish Claymore Sword',
        imageUrl: '/itemphotos/medieval/scottishclaymore.jpg',
        price: '$250',
        id: 4,
        desc: 'Over 6 feet long. Great for wielding whilst screaming "Freedom!"'
      },
        {
          title: 'Bronze buffed sword',
          imageUrl: '/itemphotos/swords/swordbuffed.jpg',
          price: '$45',
          id: 3,
          desc: 'Solid Bronze, buffed to look great for ceremonial purposes.'
        },
        {
          title: 'Iron longsword and shortsword',
          imageUrl: '/itemphotos/swords/swordiron.jpg',
          price: '$150',
          id: 3,
          desc: '23 inch long sword, with a 9 inch short sword included.'
        },
        {
          title: 'Bronze Greek style sword',
          imageUrl: '/itemphotos/swords/swordnice.jpg',
          price: '$75',
          id: 3,
          desc: 'Made of bronze with a wood handle'
        },
        {
          title: 'Irish style Iron sword',
          imageUrl: '/itemphotos/ironage/sword irish.jpg',
          price: '$150',
          id: 4,
          desc: "Modeled after a historic unknown Irish lords' sword"
        }
      ] 
    }
  }
    render() { 
        return ( 
        <div className="FullPage Container"> 
        <div className="SwordsInfo">
        <h1>The Swords age</h1>
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
        
export default Swords;