import React, { Component } from 'react';


class Armor extends Component {
    constructor() {
        super();
    this.state = { items: [
        {
          title: 'Armor Rock art',
          imageUrl: "/itemphotos/armor/30yearswarhelmet.jpg",
          price: '$300',
          id: 1,
          desc: "Own a (reproduction) priceless piece of human history. "
        },
        {
          title: 'Armor axe',
          imageUrl: '/itemphotos/armor/avar helmet.jpg',
          price: '$10',
          id: 2,
          desc: '"Ung like, rock hard." - A satisfied customer"'
        },
        {
          title: 'Armor axe',
          imageUrl: '/itemphotos/armor/conquistador.jpg',
          price: '$10',
          id: 2,
          desc: '"Ung like, rock hard." - A satisfied customer"'
        },
        {
          title: 'Armor axe',
          imageUrl: '/itemphotos/armor/crusaderhelmet.jpg',
          price: '$10',
          id: 2,
          desc: '"Ung like, rock hard." - A satisfied customer"'
        },
        {
          title: 'Armor axe',
          imageUrl: '/itemphotos/armor/vikinghelmet.jpg',
          price: '$10',
          id: 2,
          desc: '"Ung like, rock hard." - A satisfied customer"'
        },
        {
          title: 'Armor axe',
          imageUrl: '/itemphotos/armor/bronzeage.jpg',
          price: '$10',
          id: 2,
          desc: '"Ung like, rock hard." - A satisfied customer"'
        },
        {
          title: 'Armor axe',
          imageUrl: '/itemphotos/armor/myceneanarmor.jpg',
          price: '$10',
          id: 2,
          desc: '"Ung like, rock hard." - A satisfied customer"'
        },
        {
          title: 'Armor axe',
          imageUrl: '/itemphotos/armor/earlyroman.jpg',
          price: '$10',
          id: 2,
          desc: '"Ung like, rock hard." - A satisfied customer"'
        },
        {
          title: 'Armor axe',
          imageUrl: '/itemphotos/armor/lateroman.jpg',
          price: '$10',
          id: 2,
          desc: '"Ung like, rock hard." - A satisfied customer"'
        },
        {
          title: 'Armor axe',
          imageUrl: '/itemphotos/armor/gambeson.jpg',
          price: '$10',
          id: 2,
          desc: '"Ung like, rock hard." - A satisfied customer"'
        },
        {
          title: 'Armor axe',
          imageUrl: '/itemphotos/armor/gothicplate.jpg',
          price: '$10',
          id: 2,
          desc: '"Ung like, rock hard." - A satisfied customer"'
        },
        {
          title: 'Armor Spear',
          imageUrl: '/itemphotos/armor/mongolarmor.jpg',
          price: '$15',
          id: 5,
          desc: 'A rock on the end of a stick, Classic.'
        },
        {
          title: 'Armor Dagger',
          imageUrl: '/itemphotos/armor/mughalarmor.jpg',
          price: '$5',
          id: 3,
          desc: 'Just in case you lose your spear or axe'
        },
        {
          title: 'Book about the Stone age',
          imageUrl: '/itemphotos/armor/teutonicarmor.jpg',
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