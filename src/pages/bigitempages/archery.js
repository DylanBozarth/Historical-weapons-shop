import React, { Component } from 'react';


class Archery extends Component {
    constructor() {
        super();
    this.state = { items: [
        {
          title: 'Archery Rock art',
          imageUrl: "/itemphotos/archery/armguard.jpg",
          price: '$300',
          id: 1,
          desc: "Own a (reproduction) priceless piece of human history. "
        },
        {
          title: 'Archery axe',
          imageUrl: '/itemphotos/archery/bronzearrowhead.png',
          price: '$10',
          id: 2,
          desc: '"Ung like, rock hard." - A satisfied customer"'
        },
        {
          title: 'Archery Spear',
          imageUrl: '/itemphotos/archery/bronzecrossbow.jpg',
          price: '$15',
          id: 5,
          desc: 'A rock on the end of a stick, Classic.'
        },
        {
          title: 'Archery Dagger',
          imageUrl: '/itemphotos/archery/chinesecrossbow.jpg',
          price: '$5',
          id: 3,
          desc: 'Just in case you lose your spear or axe'
        },
        {
          title: 'Archery Dagger',
          imageUrl: '/itemphotos/archery/copperthumbring.jpg',
          price: '$5',
          id: 3,
          desc: 'Just in case you lose your spear or axe'
        },
        {
          title: 'Archery Dagger',
          imageUrl: '/itemphotos/archery/hipquiver.jpg',
          price: '$5',
          id: 3,
          desc: 'Just in case you lose your spear or axe'
        },
        {
          title: 'Archery Dagger',
          imageUrl: '/itemphotos/archery/huntingbow.jpg',
          price: '$5',
          id: 3,
          desc: 'Just in case you lose your spear or axe'
        },
        {
          title: 'Archery Dagger',
          imageUrl: '/itemphotos/archery/ironarrowhead.jpg',
          price: '$5',
          id: 3,
          desc: 'Just in case you lose your spear or axe'
        },
        {
          title: 'Archery Dagger',
          imageUrl: '/itemphotos/archery/medcrossbow.jpg',
          price: '$5',
          id: 3,
          desc: 'Just in case you lose your spear or axe'
        },
        {
          title: 'Archery Dagger',
          imageUrl: '/itemphotos/archery/mongolian.jpg',
          price: '$5',
          id: 3,
          desc: 'Just in case you lose your spear or axe'
        },
        {
          title: 'Archery Dagger',
          imageUrl: '/itemphotos/archery/stonearrowhead.jpg',
          price: '$5',
          id: 3,
          desc: 'Just in case you lose your spear or axe'
        },
        {
          title: 'Archery Dagger',
          imageUrl: '/itemphotos/archery/stonebox.jpg',
          price: '$5',
          id: 3,
          desc: 'Just in case you lose your spear or axe'
        },
        {
          title: 'Archery Dagger',
          imageUrl: '/itemphotos/archery/woodenarrows.jpg',
          price: '$5',
          id: 3,
          desc: 'Just in case you lose your spear or axe'
        }
      ] 
    }
  }
    render() { 
        return ( 
        <div className="FullPage Container"> 
        <div className="ArcheryInfo">
        <h1>The Archery age</h1>
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
        
export default Archery;