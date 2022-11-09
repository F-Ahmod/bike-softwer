import React, { useEffect, useState } from "react";
import SingleDataInputUI from "../SingleDataInputUI/SingleDataInputUI";

const DataInputUI = () => {
  const [dataInputUi, setDataInputUi] = useState([]);
  const [loding, setLoding] = useState(false);
  useEffect(() => {
    setLoding(true);
    fetch("https://bike-soft.herokuapp.com/dataInput")
      .then((data) => data.json())
      .then((res) => {
        setDataInputUi(res);
        setLoding(false);
      });
  }, []);

  return (
    <div>
      {loding && <h3 className="text-center mt-5">Loading...</h3>}

      <div className="card shadow border-0 mb-7">
        {/* <div className="card-header">
          <h5 className="mb-0">All Purchases</h5>
        </div> */}
        <div className="table-responsive">
          <table className="table table-hover ">
            <thead className="thead-light">
              <tr>
                <th scope="col">Serial</th>
                <th scope="col">Asset</th>
                <th scope="col">RC</th>
                <th scope="col">Amount</th> 
                <th scope="col">Yard Rent</th>
                <th scope="col">Expense</th>
                <th scope="col">Transport</th>
                <th scope="col">Petrol</th>
                <th scope="col">Spare Parts</th>
                <th scope="col">Patch/Paint</th>
                <th scope="col">Insurance</th>
                <th scope="col">Tyre</th>
                <th scope="col">SER</th>
                <th scope="col">Other</th>
                <th scope="col">Total Expense</th>
                <th scope="col">Cost</th>
                <th scope="col">Price Sold</th>
                <th scope="col">Profit</th>
               
              </tr>
            </thead>
            <tbody>
              {dataInputUi?.map((dataInputUi) => (
                <SingleDataInputUI dataInputUi={dataInputUi} key={dataInputUi._id}></SingleDataInputUI>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataInputUI;
