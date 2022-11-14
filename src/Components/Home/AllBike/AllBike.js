import React, { useEffect, useState } from "react";
import "./AllBike.css";
import Plans from "./Plans/Plans";
const AllBike = () => {
  const [loding, setLoding] = useState(false);
  const [plans, setPlans] = useState([]);

  const reamingData = (id) => {
    setPlans(plans.filter((plan) => plan._id !== id));
  };

  const loadData = async () => {
    setLoding(true);
    fetch("https://bike-soft.herokuapp.com/addBikes")
      .then((data) => data.json())
      .then((res) => {
        setPlans(res);
        setLoding(false);
      });
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className="mt-5 p-5">
      {loding ? (
        <h3 className="ml-3 mt-5">Loading...</h3>
      ) : (
        <div className="card shadow border-0 mb-7">
          <div className="card-header">
            <h5 className="mb-0">All Bikes</h5>
          </div>
          <div className="table-responsive">
            <table className="table table-hover ">
              <thead className="thead-light">
                <th className="ps-5" scope="col">
                  Name
                </th>
                <th className="ps-5" scope="col">
                  Invoice ID
                </th>
                <th className="ps-5" scope="col">
                  image
                </th>

                <th
                  className="d-flex justify-content-end"
                  scope="col"
                  style={{ paddingRight: "60px" }}
                >
                  Action
                </th>
              </thead>
              <tbody>
                {plans?.map((plan) => (
                  <Plans
                    loadData={loadData}
                    reamingData={reamingData}
                    plan={plan}
                    key={plan._id}
                  ></Plans>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllBike;
