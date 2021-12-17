import React, { useState } from "react";
import Header from "../Header/Header";
import Avatar from "../../assets/images/Avatar.png";
import { FiSend } from "react-icons/fi";  
import { FiShare2 } from "react-icons/fi";  
import { FiEye } from "react-icons/fi";  
import { FiVideo } from "react-icons/fi";  
import { FiHeart } from "react-icons/fi";  
import GoogleLogin from "react-google-login";
import Logo from "../../assets/images/Logo.png";
import {Card, Navbar, Container, Nav, Button} from "react-bootstrap"

function Dashboard() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );
  const handleFailure = (result) => {
    alert(result);
  };
  const handleLogin = async (googleData) => {
    const res = await fetch("api/google-login", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setLoginData(data);
    localStorage.setItem("loginData", JSON.stringify(data));
  };
  const handleLogout = () => {
    localStorage.removeItem("loginData");
    setLoginData(null);
  };
  return (
    <div className="navBar">
      <Navbar bg="#FFE5E9" expand="lg" className="nav">
        <Container className="navContainer">
          <Navbar.Brand href="#home" className="navBrand">
            <img src={Logo} alt="Logo Zamzy" className="logoHeader" id="home" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navCollapse">
            <Nav className="me-auto navClass">
              <Nav.Link href="/dashboard" className="navLink">
                Wall
              </Nav.Link>
              <Nav.Link href="/message" className="navLink">
                Messaging
              </Nav.Link>
              <Nav.Link href="#consult" className="navLink">
                Career
              </Nav.Link>
            </Nav>
            <Nav className="me-auto navBtn">
              {loginData ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h5 style={{ fontSize: "medium", margin: 3 }}>
                    Hey, {loginData.name}
                  </h5>
                  <Nav.Link href="/dashboard" className="navLink">
                    Dashboard
                  </Nav.Link>
                  <Button variant="outline-danger" onClick={handleLogout}>
                    Logout
                  </Button>
                </div>
              ) : (
                <GoogleLogin
                  clientId="385906146305-t45b9m0dtvjbnr2plbhg4enki4lpos26.apps.googleusercontent.com"
                  buttonText="Login Here !!"
                  onSuccess={handleLogin}
                  onFailure={handleFailure}
                  cookiePolicy={"single_host_origin"}
                  theme="dark"
                />
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="stories">
        <div className="head">
          <h4>Story :</h4>
        </div>
        <div className="pictures">
          <img src={Avatar} alt = "Story" className="story" />
          <img src={Avatar} alt = "Story" className="story" />
          <img src={Avatar} alt = "Story" className="story" />
          <img src={Avatar} alt = "Story" className="story" />
          <img src={Avatar} alt = "Story" className="story" />
          <img src={Avatar} alt = "Story" className="story" />
          <img src={Avatar} alt = "Story" className="story" />
          <img src={Avatar} alt = "Story" className="story" />
          <img src={Avatar} alt = "Story" className="story" />
          <img src={Avatar} alt = "Story" className="story" />
          <img src={Avatar} alt = "Story" className="story" />
        </div>
      </div>
      <div className="card">
        <div className="profile">
          <img src={Avatar} alt="Avatar" className="profileImg"/>
          <div className="profile-name">
            <h4 className="name">Malvika Singh</h4>
            <h5 className="place">Delhi, 2012</h5>
          </div>
        </div>
        <input type = "message" className="message" placeholder="Write your Caption Here . . ."/>
        <div className = "icons">
          <h4 className="name" type = "file"><FiVideo /> Post a Video</h4>
          <h4 className="name"><FiShare2 /> Share a Message</h4>
          <h4 className="name"><FiEye /> 2 People Viewed</h4>
        </div>
        <div className="profile-comment">
          <img src={Avatar} alt="Avatar" className="profileImg"/>
          <div className="profile-name">
        <input type = "message" className="comment" placeholder="Comments"/>
        <FiSend style = {{cursor: "pointer"}}/>
          </div>
        </div>
      </div>
      <div className = "postCard">
      <Card className = "card">
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1469086681958-23241118bb0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className = "postImg"/>
    <Card.Body>
      <div className="icon">
        <FiHeart className = "heart" size = {25}/>
        <FiShare2 />
        <input type = "message" alt = 'message' placeholder="Comment" className = "comment"/>
        <FiSend />
      </div>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className = "card">
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1581404917879-53e19259fdda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" className = "postImg"/>
    <Card.Body>
      <div className="icon">
        <FiHeart className = "heart" size = {25}/>
        <FiShare2 />
        <input type = "message" alt = 'message' placeholder="Comment" className = "comment"/>
        <FiSend />
      </div>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card><Card className = "card">
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1469086681958-23241118bb0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className = "postImg"/>
    <Card.Body>
      <div className="icon">
        <FiHeart className = "heart" size = {25}/>
        <FiShare2 />
        <input type = "message" alt = 'message' placeholder="Comment" className = "comment"/>
        <FiSend />
      </div>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
      </div>
    </div>
  );
}

export default Dashboard;
