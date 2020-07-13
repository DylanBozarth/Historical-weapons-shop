import React from "react";

export const About = () => (
  <div className="container">
    <h1 className="abouttitle">History's Armory </h1>
    <div className="row">
      <div className="col-lg">
        <p className="name">
          {" "}
          Founder <br /> Chad Ferguson
        </p>
        <img
          className="cardImg"
          height="250"
          width="300"
          src="./itemphotos/guy1.jpg"
        ></img>
      </div>
      <div className="col-lg">
        <p className="name">
          {" "}
          Co-Founder <br />
          Craig Williams
        </p>
        <img
          className="cardImg"
          height="250"
          width="300"
          src="./itemphotos/guy2.jpg"
        ></img>
      </div>
    </div>
    <p className="aboutinfo">
      {" "}
      Our passion has always been history. Whether it was researching, teaching,
      or collecting. In our youth there were plenty of resources for research,
      however for collecting we were left on our own. {" "}
    </p>
  </div>
);
