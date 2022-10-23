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
            <Link class="foioterpj" to="/home">
              <img class="rounded" src={img} alt="" width="40" />{" "}
              <Navbar.Brand href="#home">
                <span class="pj">Bike Managment</span>
              </Navbar.Brand>
            </Link>
            <Nav class="ms-auto ">
              <Link class="nav-link active" to="/">
                {" "}
                Home{" "}
              </Link>
              <Link class="nav-link active" to="/">
                {" "}
                Das2{" "}
              </Link>
              {/* <Link class="nav-link active" to="/AllBike">
                {" "}
                AllBike{" "}
              </Link> */}
              {/* <Link class="nav-link active" to="/gallery">
                {" "}
                Gallery{" "}
              </Link> */}

              {user?.email ? (
                <>
                  <Link class="nav-link active" to="/">
                    DashBoard
                  </Link>
                  <Button
                    class="bg-danger"
                    onClick={leLogout}
                    variant="secondary"
                    size="sm"
                  >
                    LogOut
                  </Button>
                </>
              ) : (
                <>
                  <Link class="nav-link active" to="/login">
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
