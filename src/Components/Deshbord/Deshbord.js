import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
import useFirebase from "../../Firebase/useFirebase";
import Accordion from "react-bootstrap/Accordion";

import "./Deshbord.css";

const Deshbord = () => {
  const { leLogout, user } = useFirebase();

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

            <Link className="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" to="/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh_k-PXFEOg0WLls_i5Fdmv_3xffkwSmi63F-zWlby&s"
                alt="..."
              />
            </Link>

            <div className="navbar-user d-lg-none">
              <div className="dropdown"></div>
            </div>

            <div className="collapse navbar-collapse" id="sidebarCollapse">
              <ul className="navbar-nav">
                <li className="nav-item mb-3">
                  <Link className="nav-link " to="/dasHader">
                    <i className="bi bi-people ms-2"></i> Home
                  </Link>
                </li>
              </ul>

              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0" className=" mb-3 ">
                  <Accordion.Header className="">
                    <i className="bi bi-people me-4 "></i>Manage Vechecal
                  </Accordion.Header>
                  <Accordion.Body>
                    <Link className="nnav-link mb-1" to="/AllBike">
                      All Bike
                    </Link>
                    <Link className="nnav-link" to="/AddBike">
                      Add bike
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="mb-4">
                  <Accordion.Header>
                    <i className="bi bi-people me-4"></i> Purchase
                  </Accordion.Header>
                  <Accordion.Body>
                    <Link className="nnav-link" to="/listAlllPurchases">
                      List all purchases
                    </Link>
                    <Link className="nnav-link" to="/newPurchacs">
                      New purchase
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="mb-4">
                  <Accordion.Header>
                    <i className="bi bi-people me-4"></i> Bike Sale
                  </Accordion.Header>
                  <Accordion.Body>
                    <Link className="nnav-link" to="/BuyerDetails">
                      Buyer details
                    </Link>
                    <Link className="nnav-link" to="/invoice">
                      Invoice
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <ul className="navbar-nav">
                <li className="nav-item mb-5">
                  <Link className="nav-link  " to="/buyForm">
                    <i className="bi bi-people ms-2"></i> Bike Purchase
                  </Link>
                </li>

                <li className="nav-item mb-3">
                  <Link className="nav-link" to="/makeadmin">
                    <i className="bi bi-bar-chart ms-2"></i> Make Staf
                  </Link>
                </li>
                <li className="nav-item mb-3">
                  <Link className="nav-link" to="/dataInput">
                    <i className="bi bi-bar-chart ms-2"></i> DataInput
                  </Link>
                </li>
                <li className="nav-item mb-3">
                  <Link className="nav-link" to="/dataInputUI">
                    <i className="bi bi-bar-chart ms-2"></i> DataInputUI
                  </Link>
                </li>
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
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Deshbord;
