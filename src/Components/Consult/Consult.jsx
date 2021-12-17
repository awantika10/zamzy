import React from "react";
import ConsultImg from "../../assets/images/Consult.png";

function Banner() {
  return (
    <div className="Banner" id = "consult">
      <div className="bannerCont">
        <div className="banneHead">
          <h1>Get consulted by your peers and psychologist</h1>
          <div className="bannerPara">
            <h4 className="para" style={{ fontWeight: 400 }}>
            We have a community of psychologist  who can help  women to get out of depression, anxitey and help with emotional wellness.
            </h4>
          </div>
        </div>
      </div>
      <div className="bannerImg">
        <img
          src={ConsultImg}
          alt="ConsultImg"
          className="bannerImage img-fluid"
        />
      </div>
    </div>
  );
}

export default Banner;
