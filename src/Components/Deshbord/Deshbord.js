import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { BiHome } from "react-icons/bi";
import { RiMotorbikeLine } from "react-icons/ri";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { GiJerusalemCross } from "react-icons/gi";
import { GiExpense } from "react-icons/gi";
import { BiPurchaseTag } from "react-icons/bi";
import { GiCrescentStaff } from "react-icons/gi";
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
                    <BiHome className="me-2 text-dark" /> Home
                  </Link>
                </li>
              </ul>

              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0" className=" mb-3 ">
                  <Accordion.Header className="">
                    <RiMotorbikeLine className="me-4" />
                    Manage vehicle
                  </Accordion.Header>
                  <Accordion.Body>
                    <Link className="nnav-link" to="/AddBike">
                      a. Add bike
                    </Link>
                    <Link className="nnav-link mb-1" to="/AllBike">
                      b. List all bike
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="mb-4">
                  <Accordion.Header>
                    <BiPurchaseTagAlt className="me-4" /> Bike purchase
                  </Accordion.Header>
                  <Accordion.Body>
                    <Link className="nnav-link" to="/listAlllPurchases">
                      a. All purchases
                    </Link>
                    <Link className="nnav-link" to="/newPurchacs">
                      b. New purchase
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>

                {/* <Accordion.Item eventKey="2" className="mb-4">
                  <Accordion.Header>
                    <GiJerusalemCross className="me-4" /> Bike sale
                  </Accordion.Header>

                  <Accordion.Body>
                    
                    <Accordion.Item eventKey="2" className="mb-4">
                      <Accordion.Header>
                        <GiJerusalemCross className="me-4" /> A sale
                      </Accordion.Header>
                      <Accordion.Body>
                        <Link className="nnav-link" to="/BuyerDetails">
                          Buyer details
                        </Link>
                        <Link className="nnav-link" to="/BuyerDetails">
                          Buyer details
                        </Link>
                      </Accordion.Body>
                    </Accordion.Item>


                    <Accordion.Item eventKey="2" className="mb-4">
                      <Accordion.Header>
                        <GiJerusalemCross className="me-4" /> A sale
                      </Accordion.Header>
                      <Accordion.Body>
                        <Link className="nnav-link" to="/BuyerDetails">
                          Buyer details
                        </Link>
                        <Link className="nnav-link" to="/BuyerDetails">
                          Buyer details
                        </Link>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion.Body>
                </Accordion.Item> */}

                <Accordion.Item eventKey="2" className="mb-4">
                  <Accordion.Header>
                    <GiExpense className="me-4" /> Bike Expences
                  </Accordion.Header>
                  <Accordion.Body>
                    <Link className="nnav-link" to="/dataInput">
                      Add Purchase Expense
                    </Link>
                    <Link className="nnav-link" to="/dataInputUI">
                      All Purchase Expenses
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className=" mb-3 ">
                  <Accordion.Header className="">
                  <GiCrescentStaff className="me-4 " />
                    Manage Staff
                  </Accordion.Header>
                  <Accordion.Body>
                    <Link className="nnav-link" to="/listAllStafff">
                      a. List all Staff
                    </Link>
                    <Link className="nnav-link mb-1" to="/makeStaff">
                      b. Add new staff
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <ul className="navbar-nav">
                <li className="nav-item mb-5">
                  <Link className="nav-link  " to="/buyForm">
                    <BiPurchaseTag className="me-2 text-dark" /> Bike purchase
                  </Link>
                </li>

                {/* <li className="nav-item mb-3">
                  <Link className="nav-link" to="/makeadmin">
                    <GiCrescentStaff className="me-2 text-dark" /> Manage Staff
                  </Link>
                </li> */}
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
