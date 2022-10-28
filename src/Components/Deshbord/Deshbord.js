import React from "react";
import { Dropdown, DropdownButton, NavDropdown } from "react-bootstrap";
import { AiOutlineLogin } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
import useFirebase from "../../Firebase/useFirebase";
import Accordion from "react-bootstrap/Accordion";

import "./Deshbord.css";

const Deshbord = () => {
  const { leLogout, user, admin } = useFirebase();

  return (
    <div>
      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <nav
          className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0  navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
          id="navbarVertical"
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler ms-n2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#sidebarCollapse"
              aria-controls="sidebarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <a className="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh_k-PXFEOg0WLls_i5Fdmv_3xffkwSmi63F-zWlby&s"
                alt="..."
              />
            </a>

            <div className="navbar-user d-lg-none">
              <div className="dropdown"></div>
            </div>

            <div className="collapse navbar-collapse" id="sidebarCollapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/dasHader">
                    <i className="bi bi-people"></i> Home
                  </Link>
                </li>
              </ul>

              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Manage Vechecal</Accordion.Header>
                  <Accordion.Body>
                    <Link className="nav-link" to="/AllBike">
                      <i className="bi bi-people"></i> All Bike
                    </Link>
                    <Link className="nav-link" to="/AddBike">
                      <i className="bi bi-plus"></i> Add bike
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Purchase</Accordion.Header>
                  <Accordion.Body>
                    <Link className="nav-link" to="/listAlllPurchases">
                      <i className="bi bi-bag"></i> List all purchases
                    </Link>
                    <Link className="nav-link" to="/newPurchacs">
                      <i className="bi bi-people"></i> New Purchas
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Bike Sale</Accordion.Header>
                  <Accordion.Body>
                    <Link className="nav-link" to="/BuyerDetails">
                     Buyer details
                    </Link>
                    <Link className="nav-link" to="/invoice">
                     Invoice
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/buyForm">
                    <i className="bi bi-people"></i> Bike Purchase
                  </Link>
                </li>
                {/* {admin && ( */}
                <li className="nav-item">
                  <Link className="nav-link" to="/makeadmin">
                    <i className="bi bi-bar-chart"></i> Make Staf
                  </Link>
                </li>
                {/* )} */}
              </ul>

              <hr className="navbar-divider opacity-20" />

              <div className="mt-auto"></div>

              <ul className="navbar-nav">
                <li className="nav-item">
                  {user?.email ? (
                    <>
                      <button className="nav-link" onClick={leLogout}>
                        <i className="bi bi-box-arrow-left"></i> Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link className="nav-link active" to="/login">
                        <AiOutlineLogin /> Login
                      </Link>
                    </>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="h-screen flex-grow-1 overflow-y-lg-auto">
          {/* <DasHader/> */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Deshbord;
