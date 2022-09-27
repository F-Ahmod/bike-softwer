import React, { useEffect, useState } from "react";
//import img from "../images/images (10).jpg"
import "./Facilities.css";
import Plans from "./Plans/Plans";
const Facilities = () => {
  const [plans, setPlans]=useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/plans')
    .then(data=>data.json())
    .then(res=>setPlans(res))
  }, [])
  return (
    <div>
      <h6 className="justify-content-center">Facilities</h6>
      <h1 className="h11">Our Facilities</h1>
      <div class="wrapper">
      {
                plans.map(plan => <Plans
                plan={plan}></Plans>)
            }
        {/* <div class="cardd">

          <h3 class="cardd-title">Basic</h3>         
          <p ><span className="fs-3">RS 50</span> / month</p>
          <li class="cardd-content fs-6">
            Contrary to popular 
          </li>          
          <li class="cardd-content fs-6">
            Contrary to popular 
          </li>          
          <li class="cardd-content fs-6">
            Contrary to popular 
          </li>         
          <li class="cardd-content fs-6">
            Contrary to popular 
          </li>          
          <li class="cardd-content fs-6">
            Contrary to popular 
          </li> 
          <li class="cardd-content fs-6">
            Contrary to popular 
          </li>
          <li class="cardd-content fs-6">
            Contrary to popular 
          </li>

          <button class="cardd-btn mt-2">READ MORE</button>
        </div>
        <div class="cardd">
          <h3 class="cardd-title">Basic</h3>         
          <p ><span className="fs-3">RS 50</span> / month</p>
          <li class="cardd-content fs-6">
            Contrary to popular 
          </li>          
          <li class="cardd-content fs-6">
            Contrary to popular 
          </li>          
          <li class="cardd-content fs-6">
            Contrary to popular 
          </li>         
          <li class="cardd-content fs-6">
            Contrary to popular 
          </li>          
          <li class="cardd-content fs-6">
            Contrary to popular 
          </li> 
          <li class="cardd-content fs-6">
            Contrary to popular 
          </li>
          <li class="cardd-content fs-6">
            Contrary to popular 
          </li>

          <button class="cardd-btn mt-2">READ MORE</button>
        </div>
        <div class="cardd">
          <h3 class="cardd-title">Basic</h3>         
          <p ><span className="fs-3">RS 50</span> / month</p>
          <li class="cardd-content fs-6">
            Contrary to popular 
          </li>          
          <li class="cardd-content fs-6">
            Contrary to popular 
          </li>          
          <li class="cardd-content fs-6">
            Contrary to popular 
          </li>         
          <li class="cardd-content fs-6">
            Contrary to popular 
          </li>          
          <li class="cardd-content fs-6">
            Contrary to popular 
          </li> 
          <li class="cardd-content fs-6">
            Contrary to popular 
          </li>
          <li class="cardd-content fs-6">
            Contrary to popular 
          </li>

          <button class="cardd-btn mt-2">READ MORE</button>
        </div>
      
        <div class="cardd">
          <h3 class="cardd-title">Basic</h3>         
          <p ><span className="fs-3">RS 50</span> / month</p>
          <li class="cardd-content fs-6">
            Contrary to popular 
          </li>          
          <li class="cardd-content fs-6">
            Contrary to popular 
          </li>          
          <li class="cardd-content fs-6">
            Contrary to popular 
          </li>         
          <li class="cardd-content fs-6">
            Contrary to popular 
          </li>          
          <li class="cardd-content fs-6">
            Contrary to popular 
          </li> 
          <li class="cardd-content fs-6">
            Contrary to popular 
          </li>
          <li class="cardd-content fs-6">
            Contrary to popular 
          </li>

          <button class="cardd-btn mt-2">READ MORE</button>
        </div> */}
      </div>
      
    </div>
  );
};

export default Facilities;
