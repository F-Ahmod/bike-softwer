import React from "react";
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
  const [data, setData] = useState({
    labels: [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "First Dataset",
        data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
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
  });
  const [secendData, setSecendData] = useState({
    labels: [
        "Jan",
        
        "Dec",
      ],
    datasets: [
      {
        label: "secend Dataset",
        data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
        backgroundColor: "AliceBlue",
        borderColor: "green",
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
    labels: [
        "Jan",
        "June",
        "Dec"
      ],
    datasets: [
      {
        label: "Thred Dataset",
        data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
        backgroundColor: "AliceBlue",
        borderColor: "green",
        tension: 0.4,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "red",
        showLine: true,
      },
    ],
  });
  return (
    <div className="row">
    <div className="col-md-8" >
      <Line data={data}></Line>
    </div>
    <div className="col-md-4">
     
     <div >
     <Line data={secendData}></Line>
     </div>
    
     <div >
     <Line data={thredData}></Line>
     </div>
     </div>
     
    
    </div>
  );
};

export default GrapChat;
