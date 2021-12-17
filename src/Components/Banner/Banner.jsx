import React from "react";
import BannerImg from "../../assets/images/Banner.png";
import { Button, Nav } from "react-bootstrap";

function Banner() {
  return (
    <div className="Banner" id = "story">
      <div className="bannerCont">
        <div className="banneHead">
          <h1>Beautiful Doodles To Tell Your Story</h1>
          <div className="bannerPara">
            <h4 className="para" style={{ fontWeight: 400 }}>
              Share any stories and encourage women to uplift the community!
            </h4>
            <h4 className="para" style={{ fontWeight: 400 }}>
              Women communities become spaces where women can share career
              advice and create opportunities for each other, together.
            </h4>
          </div>
        </div>
        <Nav className="me-auto navBtn">
          <Button variant="outline-success" className="bannerBtn">
            SignUp
          </Button>
          <Button variant="dark" className="bannerBtn">
            Login
          </Button>
        </Nav>
      </div>
      <div className="bannerImg">
        <img
          src={BannerImg}
          alt="BannerImg"
          className="bannerImage img-fluid"
        />
      </div>
    </div>
  );
}

export default Banner;
