import React, { useEffect } from "react";
import "./GrapChat.css";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
import axios from "axios";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);
const GrapChat = () => {
  const [looding, setLooding] = useState(true);
  const [monthData, setMonthData] = useState([]);
  const [values, setValues] = useState([]);

  const month = async () => {
    setLooding(true);
    const a = await axios.post("https://bike-soft.herokuapp.com/monthPurchase");
    let months = a?.data[1]?.months;
    let values = a?.data[0]?.sellValue;
    // convet to arrary of object
    let arr = [];
    for (const property in values) {
      arr.push(values[property]);
    }
    setValues(arr);
    let sorted = months.sort((a, b) => a.month - b.month);
    setMonthData(sorted);
    setLooding(false);
  };

  useEffect(() => {
    month();
  }, []);

  const data = {
    // sorted by month
    labels: monthData,
    datasets: [
      {
        label: "Month wise purchase",
        data: values,
        backgroundColor: "AliceBlue",
        borderColor: "green",
        tension: 0.4,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
    ],
  };

  const [secendData, setSecendData] = useState({
    labels: ["Jan", "Dec"],
    datasets: [
      {
        label: "secend Dataset",
        data: [monthData.length, monthData.length + 10],
        backgroundColor: "AliceBlue",
        // borderColor: "green",
        tension: 0.4,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "red",
        showLine: true,
      },
    ],
  });
  const [thredData, setThredData] = useState({
    labels: ["Jan", "June", "Dec"],
    datasets: [
      {
        label: "Thred Dataset",
        data: [10, 30, 51, 82, 31, 59, 73, 58],
        backgroundColor: "AliceBlue",
        // borderColor: "green",
        tension: 0.4,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "red",
        showLine: true,
      },
    ],
  });
  if (looding) {
    return;
  }

  return (
    <div >
      {!looding && (
        <>
          <div >
            <Line data={data}></Line>
          </div>
          {/* <div className="col-md-4">
            <div>
              <Line data={secendData}></Line>
            </div>

            <div>
              <Line data={thredData}></Line>
            </div>
          </div> */}
        </>
      )}
    </div>
  );
};

export default GrapChat;