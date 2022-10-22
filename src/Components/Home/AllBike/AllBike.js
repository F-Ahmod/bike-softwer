import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
//import img from "../images/images (10).jpg"
import "./AllBike.css";
import Plans from "./Plans/Plans";
const AllBike = () => {
  const [loding, setLoding] = useState(false);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    setLoding(true);
    fetch("http://localhost:5000/addBikes")
      .then((data) => data.json())
      .then((res) => {
        setPlans(res);
        setLoding(false);
      });
  }, []);
  return (
    <div className="mt-5 p-5">
      {loding && <h3 className="text-center mt-5">Loading...</h3>}
      <div className="card shadow border-0 mb-7">
        <div className="card-header">
          <h5 className="mb-0">Applications</h5>
        </div>
        <div className="table-responsive">
          <table className="table table-hover ">
            <thead className="thead-light">
              <th className="ps-5" scope="col">Name</th>

              <th className="d-flex justify-content-end" scope="col"
              style={{paddingRight:"60px"}}>
                Action
              </th>
            </thead>
            <tbody>
              {plans?.map((plan) => (
                <Plans plan={plan}></Plans>
              ))}
            </tbody>
          </table>
        </div>
        {/* <div className="card-footer border-0 py-5">
              <span className="text-muted text-sm">
                Showing 10 items out of 250 results found
              </span>
            </div> */}
      </div>
    
    </div>
  );
};

export default AllBike;
