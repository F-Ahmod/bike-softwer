import React from "react";
import img from "../images/logo2.png";
import useFirebase from "../../../Firebase/useFirebase";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const Header = () => {
  const { leLogout, user } = useFirebase();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Link className="foioterpj" to="/home">
              <img className="rounded" src={img} alt="" width="40" />{" "}
              <Navbar.Brand href="#home">
                <span className="pj">Bike Managment</span>
              </Navbar.Brand>
            </Link>
            <Nav className="ms-auto ">
              <Link className="nav-link active" to="/">
                {" "}
                Home{" "}
              </Link>
              <Link className="nav-link active" to="/">
                {" "}
                Das2{" "}
              </Link>
              {/* <Link className="nav-link active" to="/AllBike">
                {" "}
                AllBike{" "}
              </Link> */}
              {/* <Link className="nav-link active" to="/gallery">
                {" "}
                Gallery{" "}
              </Link> */}

              {user?.email ? (
                <>
                  <Link className="nav-link active" to="/">
                    DashBoard
                  </Link>
                  <Button
                    className="bg-danger"
                    onClick={leLogout}
                    variant="secondary"
                    size="sm"
                  >
                    LogOut
                  </Button>
                </>
              ) : (
                <>
                  <Link className="nav-link active" to="/login">
                    Login
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
    </div>
  );
};

export default Header;
