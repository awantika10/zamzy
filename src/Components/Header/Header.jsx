import React, { useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import Logo from "../../assets/images/Logo.png";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";

function Header() {
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
      <Navbar bg="white" expand="lg" className="nav">
        <Container className="navContainer">
          <Navbar.Brand href="#home" className="navBrand">
            <img src={Logo} alt="Logo Zamzy" className="logoHeader" id="home" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navCollapse">
            <Nav className="me-auto navClass">
              <Nav.Link href="#home" className="navLink">
                Home
              </Nav.Link>
              <Nav.Link href="#story" className="navLink">
                Stories
              </Nav.Link>
              <Nav.Link href="#consult" className="navLink">
                Consult
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
    </div>
  );
}

export default Header;
