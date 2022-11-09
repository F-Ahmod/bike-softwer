import axios from "axios";
import React, { useEffect, useState } from "react";
import GrapChat from "../GrapChat/GrapChat";
import ListAlllPurchases from "../ListAlllPurchases/ListAlllPurchases";

const DasHader = () => {
  const [purchases, setPurchases] = useState([]);
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    fetch("https://bike-soft.herokuapp.com/purchase")
      .then((data) => data.json())

      .then((res) => {
        console.log(res);

        setPurchases(res);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.post("https://bike-soft.herokuapp.com/newpurhase", {
      date: new Date().toISOString().split("T")[0],
    });
    setBikes(res.data);
  };
  return (
    <div>
      <header className="bg-surface-primary border-bottom pt-6">
        <div className="container-fluid">
          <div className="mb-npx">
            <div className="row align-items-center">
              <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                <h1 className="h2 mb-0 ls-tight">
                  Bike showroom management system
                </h1>
              </div>

              <div className="col-sm-6 col-12 text-sm-end"></div>
            </div>

            {/* <ul className="nav nav-tabs mt-4 overflow-x border-0">
              <li className="nav-item ">
                <Link className="nav-link" to="/buyForm">
                purchase 
                </Link>
              </li> 
               <li className="nav-item">
                <Link to="/listAlllPurchases" className="nav-link font-regular">
                  List Alll Purchase
                </Link>
              </li>
             <li className="nav-item">
                <Link to="/buyForm" className="nav-link font-regular">
                  Purchas
                </Link>
              </li> 
            </ul> */}
          </div>
        </div>
      </header>

      <main className="py-6 bg-surface-secondary">
        <div className="container-fluid">
          <div className="row g-6 mb-6">
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card shadow border-0">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                        All sale
                      </span>
                      <span className="h3 font-bold mb-0">
                        {purchases.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card shadow border-0">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                        Today bike
                      </span>
                      <span className="h3 font-bold mb-0">{bikes.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card shadow border-0">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                        Amount
                      </span>
                      <span className="h3 font-bold mb-0">{bikes.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card shadow border-0">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                        Total pofite
                      </span>
                      <span className="h3 font-bold mb-0">{bikes.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card shadow border-0 mb-7">
            {/* <ListAlllPurchases /> */}
            <GrapChat/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DasHader;
