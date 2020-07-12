import React, { Component } from 'react';


class Archery extends Component {
    constructor() {
        super();
    this.state = { items: [
        {
          title: 'Archery arm guard',
          imageUrl: "/itemphotos/archery/armguard.jpg",
          price: '$15',
          id: 1,
          desc: "Made from leather. "
        },
        {
          title: 'Bronze arrowhead',
          imageUrl: '/itemphotos/archery/bronzearrowhead.png',
          price: '$5',
          id: 2,
          desc: 'Solid bronze'
        },
        {
          title: 'Bronze Crossbow',
          imageUrl: '/itemphotos/archery/bronzecrossbow.jpg',
          price: '$150',
          id: 5,
          desc: 'Solid bronze. '
        },
        {
          title: 'Chinese style repeater crossbow',
          imageUrl: '/itemphotos/archery/chinesecrossbow.jpg',
          price: '$250',
          id: 3,
          desc: 'A hail of crossbow bolts is great fun. '
        },
        {
          title: 'Copper thumb ring.',
          imageUrl: '/itemphotos/archery/copperthumbring.jpg',
          price: '$15',
          id: 3,
          desc: 'How ancient archers used to use heavy bows for hours on end.'
        },
        {
          title: 'Hip quiver',
          imageUrl: '/itemphotos/archery/hipquiver.jpg',
          price: '$45',
          id: 3,
          desc: "This does not go on your back, this isn't hollywood!"
        },
        {
          title: 'Hunting bow',
          imageUrl: '/itemphotos/archery/huntingbow.jpg',
          price: '$45',
          id: 3,
          desc: '45lbs draw weight. '
        },
        {
          title: 'Iron arrowhead',
          imageUrl: '/itemphotos/archery/ironarrowhead.jpg',
          price: '$5',
          id: 3,
          desc: 'Sharper than bronze, but vulnerable to rust.'
        },
        {
          title: 'Medieval crossbow',
          imageUrl: '/itemphotos/archery/medcrossbow.jpg',
          price: '$110',
          id: 3,
          desc: '700lbs draw weight. '
        },
        {
          title: 'Mongolian horsebow.',
          imageUrl: '/itemphotos/archery/mongolian.jpg',
          price: '$60',
          id: 3,
          desc: '45lbs draw weight, short enough to use on a horse.'
        },
        {
          title: 'Stone arrowhead',
          imageUrl: '/itemphotos/archery/stonearrowhead.jpg',
          price: '$5',
          id: 3,
          desc: 'Native American style'
        },
        {
          title: 'Stone bow',
          imageUrl: '/itemphotos/archery/stonebox.jpg',
          price: '$80',
          id: 3,
          desc: 'Not made of stone, made for shooting stones. Great for hunting small game or target practice.'
        },
        {
          title: 'Wooden arrows, 50 count',
          imageUrl: '/itemphotos/archery/woodenarrows.jpg',
          price: '$120',
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
              <div className="Card  col-lg-4" key={title}> 
              <div className="thumbnail">
                        <img className="cardImg" height='150' width='200' src={`${imageUrl}`} alt='' />
                <div className="caption" >
                  <h3>{title}</h3>
                  <p className="flex-text desc">{desc} <br /> {price}</p>
                  <p>
                    <button className="btn btn-primary" href="#" onClick={e => this.handleAddToCart(e, this.state.items)} >Add to cart</button>
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