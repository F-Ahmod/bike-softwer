import React, { useEffect, useState } from "react";
import "./AllBike.css";
import Plans from "./Plans/Plans";
const AllBike = () => {
  const [loding, setLoding] = useState(false);
  const [plans, setPlans] = useState([]);

const reamingData=(id)=>{
  setPlans(plans.filter(plan => plan._id !== id))
}

const loadData = async () => {
  setLoding(true);
  fetch("https://bike-soft.herokuapp.com/addBikes")
    .then((data) => data.json())
    .then((res) => {
      setPlans(res);
      setLoding(false);
    });
}

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div class="mt-5 p-5">
      { loding ? <h3 class="ml-3 mt-5">Loading...</h3>
      :
      <div class="card shadow border-0 mb-7">
        <div class="card-header">
          <h5 class="mb-0">Applications</h5>
        </div>
        <div class="table-responsive">
          <table class="table table-hover ">
            <thead class="thead-light">
              <th class="ps-5" scope="col">Name</th>
              <th class="ps-5" scope="col">image</th>

              <th class="d-flex justify-content-end" scope="col"
              style={{paddingRight:"60px"}}>
                Action
              </th>
            </thead>
            <tbody>
              {plans?.map((plan) => (
                <Plans loadData={loadData} reamingData={reamingData} plan={plan}></Plans>
              ))}
            </tbody>
          </table>
        </div>
        
      </div>
    }
    </div>
  );
};

export default AllBike;
