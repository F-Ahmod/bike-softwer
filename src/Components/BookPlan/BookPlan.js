import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./BookPlan.css"
const BookPlan = () => {

    const { planId } = useParams();
    const [plan, setPlan] = useState({});
    const [value, onChange] = useState(new Date());

    useEffect(() => {
      fetch(`https://bike-soft.herokuapp.com/planDetails/${planId}`)
        .then((data) => data.json())
        .then((res) => setPlan(res));
    }, [planId]);
  

    return (
        <div className="d-flex justify-content-center align-items-center">

          <Calendar style={{height:"100vh"}}  className="calander p-2 mt-5" onChange={onChange} value={value} />

      </div>
    );
};

export default BookPlan;