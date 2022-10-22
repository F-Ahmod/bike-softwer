import React from "react";
import { Dropdown, DropdownButton, NavDropdown } from "react-bootstrap";
import { AiOutlineLogin } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
import useFirebase from "../../Firebase/useFirebase";

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
              <div className="dropdown">
                {/* <Link
                  to="#"
                  id="sidebarAvatar"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="avatar-parent-child">
                    <img
                      alt="Image Placeholder"
                      src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                      className="avatar avatar- rounded-circle"
                    />
                    <span className="avatar-child avatar-badge bg-success"></span>
                  </div>
                </Link> */}

                {/* <div
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="sidebarAvatar"
                >
                  <a href="#" className="dropdown-item">
                    Profile
                  </a>
                  <a href="#" className="dropdown-item">
                    Settings
                  </a>
                  <a href="#" className="dropdown-item">
                    Billing
                  </a>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item"  onClick={leLogout}>Logout</a>

                  
                </div> */}
              </div>
            </div>

            <div className="collapse navbar-collapse" id="sidebarCollapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/dasHader">
                    <i className="bi bi-people"></i> Home
                  </Link>
                </li>

                

                <NavDropdown title="Manage Vicals" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/AllBike">
                    All Bike
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/AddBike">
                    add bike
                  </NavDropdown.Item>
                </NavDropdown>


                <NavDropdown title="Purchase" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/listAlllPurchases">
                    List all purchases
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    New Purchas
                    </NavDropdown.Item>
                </NavDropdown>

                <li className="nav-item">
                  <Link className="nav-link" to="/buyForm">
                    <i className="bi bi-people"></i> Purchas
                  </Link>
                </li>
                {admin && (
                  <li className="nav-item">
                    {/* <Link className="nav-link" to="/AddBike">
                      <i className="bi bi-house"></i> add bike
                    </Link> */}
                    <Link className="nav-link" to="/makeadmin">
                      <i className="bi bi-bar-chart"></i> Make Staf
                    </Link>
                  </li>
                )}
              </ul>
              

              <hr className="navbar-divider opacity-20" />

              {/* <ul className="navbar-nav mb-md-4">
                <li>
                  <div
                    className="nav-link text-xs font-semibold text-uppercase text-muted ls-wide"
                    href="#"
                  >
                    Contacts
                    <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-4">
                      13
                    </span>
                  </div>
                </li>
                <li>
                  <a href="#" className="nav-link d-flex align-items-center">
                    <div className="me-4">
                      <div className="position-relative d-inline-block text-white">
                        <img
                          alt="Image Placeholder"
                          src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                          className="avatar rounded-circle"
                        />
                        <span className="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle"></span>
                      </div>
                    </div>
                    <div>
                      <span className="d-block text-sm font-semibold">
                        Marie Claire
                      </span>
                      <span className="d-block text-xs text-muted font-regular">
                        Paris, FR
                      </span>
                    </div>
                    <div className="ms-auto">
                      <i className="bi bi-chat"></i>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link d-flex align-items-center">
                    <div className="me-4">
                      <div className="position-relative d-inline-block text-white">
                        <span className="avatar bg-soft-warning text-warning rounded-circle">
                          JW
                        </span>
                        <span className="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle"></span>
                      </div>
                    </div>
                    <div>
                      <span className="d-block text-sm font-semibold">
                        Michael Jordan
                      </span>
                      <span className="d-block text-xs text-muted font-regular">
                        Bucharest, RO
                      </span>
                    </div>
                    <div className="ms-auto">
                      <i className="bi bi-chat"></i>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link d-flex align-items-center">
                    <div className="me-4">
                      <div className="position-relative d-inline-block text-white">
                        <img
                          alt="..."
                          src="https://images.unsplash.com/photo-1610899922902-c471ae684eff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                          className="avatar rounded-circle"
                        />
                        <span className="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-danger rounded-circle"></span>
                      </div>
                    </div>
                    <div>
                      <span className="d-block text-sm font-semibold">
                        Heather Wright
                      </span>
                      <span className="d-block text-xs text-muted font-regular">
                        London, UK
                      </span>
                    </div>
                    <div className="ms-auto">
                      <i className="bi bi-chat"></i>
                    </div>
                  </a>
                </li>
              </ul> */}

              <div className="mt-auto"></div>

              <ul className="navbar-nav">
                {/* <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="bi bi-person-square"></i> Account
                  </a>
                </li> */}
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
