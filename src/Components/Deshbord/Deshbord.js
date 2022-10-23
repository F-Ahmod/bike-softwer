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
      <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <nav
          class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0  navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
          id="navbarVertical"
        >
          <div class="container-fluid">
            <button
              class="navbar-toggler ms-n2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#sidebarCollapse"
              aria-controls="sidebarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <a class="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh_k-PXFEOg0WLls_i5Fdmv_3xffkwSmi63F-zWlby&s"
                alt="..."
              />
            </a>

            <div class="navbar-user d-lg-none">
              <div class="dropdown"></div>
            </div>

            <div class="collapse navbar-collapse" id="sidebarCollapse">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link" to="/dasHader">
                    <i class="bi bi-people"></i> Home
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="/buyForm">
                    <i class="bi bi-people"></i> Purchas
                  </Link>
                </li>
                {admin && (
                  <li class="nav-item">
                   
                    <Link class="nav-link" to="/makeadmin">
                      <i class="bi bi-bar-chart"></i> Make Staf
                    </Link>
                  </li>
                )}
              </ul>

              
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Manage Vechecal</Accordion.Header>
                  <Accordion.Body>
                    <Link class="nav-link" to="/AllBike">
                      <i class="bi bi-people"></i> All Bike
                    </Link>
                    <Link class="nav-link" to="/AddBike">
                      <i class="bi bi-plus"></i> Add bike
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Purchase</Accordion.Header>
                  <Accordion.Body>
                    <Link class="nav-link" to="/listAlllPurchases">
                      <i class="bi bi-bag"></i> List all purchases
                    </Link>
                    <Link class="nav-link" to="/newPurchacs">
                      <i class="bi bi-people"></i> New Purchas
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <hr class="navbar-divider opacity-20" />

              <div class="mt-auto"></div>

              <ul class="navbar-nav">
                <li class="nav-item">
                  {user?.email ? (
                    <>
                      <button class="nav-link" onClick={leLogout}>
                        <i class="bi bi-box-arrow-left"></i> Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link class="nav-link active" to="/login">
                        <AiOutlineLogin /> Login
                      </Link>
                    </>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="h-screen flex-grow-1 overflow-y-lg-auto">
          {/* <DasHader/> */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Deshbord;
