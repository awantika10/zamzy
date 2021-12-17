import React from "react";
import aboutImg from "../../assets/images/About.png";
import Avatar from "../../assets/images/Avatar.png";

function About() {
  return (
    <div className="About">
      <div className="aboutImg">
        <img
          src={aboutImg}
          alt="AboutrImg"
          className="aboutImage img-fluid"
        />
      </div>
      <div className="aboutCont">
        <div className="aboutHead">
          <h1>Crafting your doodle story</h1>
          <div className="aboutPara">
            <div className = "boxOne">
              <h4 className = "oneName">Cameron Williamson</h4>
              <h4 className = "onePara">I worked at Amazon for three years. It was an amazing experience.</h4>
              <img src = {Avatar} className = "img-fluid avatar" alt = "Avatar" />
              <h4 className = "oneDetail">Dana Robertsons<br /><p>(684) 555-0102</p></h4>
            </div>
            <div className = "boxTwo">
            <h4 className = "oneName">Cameron Williamson</h4>
              <h4 className = "onePara">I worked at Amazon for three years. It was an amazing experience.</h4>
              <img src = {Avatar} className = "img-fluid avatar" alt = "Avatar" />
              <h4 className = "oneDetail">Dana Robertsons<br /><p>(684) 555-0102</p></h4>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default About;
