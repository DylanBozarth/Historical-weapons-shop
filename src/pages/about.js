import React from "react";

export const About = () => (
  <div className="container">
    <h1 className="abouttitle">History's Armory </h1>
    <div className="row">
      <div className="col-sm-6">
        <p className="aboutinfo">
          {" "}
          Founder <br /> Chad Ferguson
        </p>
        <img
          className="cardImg"
          height="250"
          width="300"
          src="./itemphotos/guy1.jpg"
          alt="chad"
        ></img>
      </div>
      <div className="col-sm-6">
        <p className="aboutinfo">
          {" "}
          Co-Founder <br />
          Craig Williams
        </p>
        <img
          className="cardImg"
          height="250"
          width="300"
          src="./itemphotos/guy2.jpg"
          alt="craig"
        ></img>
      </div>
    </div>
    <p className="aboutinfo">
      {" "}
      Our passion has always been history. Whether it was researching, teaching,
      or collecting. In our youth there were plenty of resources for research,
      however for collecting we were left on our own. That's why we started
      History's Armory. To provide the common man with the equipment nessisary
      to be counted amongst the ranks of legitimate collectors, and not for an
      arm and a leg either!{" "}
    </p>
  </div>
);
