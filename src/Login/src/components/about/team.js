import React, { Component } from "react";
import "./team.css";
import img1 from "./developers/ritesh1.jpeg";
import img2 from "./developers/shubham.jpeg";
import img3 from "./developers/harsh.jpg";


function team(){
  return (
    <div className="background-2">
      <div className="center">
        <h1 className="feature-head">Meet Our Team</h1>
        <hr className="fancy-line"/>
      </div>
      <div className="row center col-xs-12 col-sm-6 col-md-6 col-lg-3">
          <img className="developer" src={img2} alt="img"/>
          <h3>Shubham Singh</h3>
          <p>Developer</p>
          <a className="linkedin" href="https://www.linkedin.com/in/riccoshubham/">LinkedIn</a>
      </div>
      <div className="row center col-xs-12 col-sm-6 col-md-6 col-lg-3">
          <img className="developer" src={img1} alt="img"/>
          <h3>Ritesh Yadav</h3>
          <p>Developer</p>
          <a className="linkedin" href="https://www.linkedin.com/in/ritesh-yadav-3628b3209/">LinkedIn</a>
      </div>
      <div className="row center col-xs-12 col-sm-6 col-md-6 col-lg-3">
          <img className="developer" src={img3} alt="img"/>
          <h3>Harsh Mohan Sahay</h3>
          <p>Developer</p>
          <a className="linkedin" href="www.linkedin.com/in/harsh-mohan-sahay-06989a201/">LinkedIn</a>
      </div>
     
    </div>
  );
  }

export default team;
