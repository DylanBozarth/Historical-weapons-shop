import React, { Component } from "react";

class Neolithic extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          title: "Neolithic Rock art",
          imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.appstate.edu%2F_images%2Finfo-icon.png&f=1&nofb=1",
          price: "$300",
          id: 1,
          desc: "Own a (reproduction) priceless piece of human history. ",
        },
        {
          title: "Neolithic axe",
          imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.appstate.edu%2F_images%2Finfo-icon.png&f=1&nofb=1",
          price: "$10",
          id: 2,
          desc: '"Ung like, rock hard." - A satisfied customer"',
        },
        {
          title: "Neolithic Spear",
          imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.appstate.edu%2F_images%2Finfo-icon.png&f=1&nofb=1",
          price: "$15",
          id: 3,
          desc: "A rock on the end of a stick, Classic.",
        },
        {
          title: "Neolithic Dagger",
          imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.appstate.edu%2F_images%2Finfo-icon.png&f=1&nofb=1",
          price: "$5",
          id: 3,
          desc: "Just in case you lose your spear or axe",
        },
        {
          title: "Book about the Stone age",
          imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.appstate.edu%2F_images%2Finfo-icon.png&f=1&nofb=1",
          price: "$15",
          id: 3,
          desc:
            "Unlike stone age people, you can read! So you should read about stone age people, because they cannot read about you. ",
        },
      ],
    };
  }
  render() {
    var displayitems = this.state.items.map(
      ({ title, imageUrl, desc, price, id }) => (
        <div key={id} className="itemlist row">
          {" "}
          <h1>{title}</h1> <img className="" width="200px" height="200px" src={imageUrl} /> <p>{desc} </p> <p>{price}</p>
        </div>
      )
    );
    return <div className="container">{displayitems} </div>;
  }
}

export default Neolithic;
