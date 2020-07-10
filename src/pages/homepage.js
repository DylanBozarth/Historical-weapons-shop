import React from "react";

import { Link } from "react-router-dom";

export const Homepage = () => (
  <div>
    
    <div className="banner"><h1 className="hometitle">Your Weapons and Armor supplier</h1><br /> <br /> <br /> <br /> <br /> <br /> <br /></div>
    
    <div className="container">
      <div className="row eratype">
        <div className="col-sm">
          <Link to="/Neolithic" className="col-sm col">
            <div className="col-sm  neolithic">
              <p className="home-square-title">Neolithic Age</p>
            </div>
          </Link>
        </div>
        <div className="col-sm">
          <Link to="/Bronze" className="col-sm col">
            {" "}
            <div className="col-sm  bronze">
              <p className="home-square-title">Bronze Age</p>
            </div>
          </Link>
        </div>
        <div className="col-sm">
          <Link to="/Iron" className="col-sm col">
            <div className="col-sm iron">
              <p className="home-square-title">Iron Age</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="row eratype">
        <div className="col-sm">
          <Link to="/Roman" className="col-sm col">
            <div className="col-sm roman">
              <p className="home-square-title">Roman Era</p>
            </div>
          </Link>
        </div>
        <div className="col-sm">
          <Link to="/Medieval" className="col-sm col">
            <div className="col-sm medieval">
              <p className="home-square-title">Medieval Era</p>
            </div>
          </Link>
        </div>
        <div className="col-sm">
          <Link to="/Renaissance" className="col-sm col">
            <div className="col-sm renaissance">
              <p className="home-square-title">The Renaissance </p>
            </div>
          </Link>
        </div>
      </div>
    
      <div className="row catagorytype">
        <div className="col-sm">
          <Link to="/Swords" className="col-sm col">
            <div className="col-sm swords">
              <p className="home-square-title">Swords</p>
            </div>
          </Link>
        </div>
        <div className="col-sm">
          <Link to="/Shields" className="col-sm col">
            <div className="col-sm shields">
              <p className="home-square-title">Shields</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="row">
      <div className="col-sm">
          <Link to="/Archery" className="col-sm col">
            <div className="col-sm archery">
              <p className="home-square-title">Archery</p>
            </div>
          </Link>
        </div>
        <div className="col-sm">
          <Link to="/Armor" className="col-sm col">
            <div className="col-sm armor">
              <p className="home-square-title">Armor</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
