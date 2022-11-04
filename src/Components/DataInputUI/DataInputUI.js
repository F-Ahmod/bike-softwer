import React, { useEffect, useState } from "react";
import SingleDataInputUI from "../SingleDataInputUI/SingleDataInputUI";

const DataInputUI = () => {
  const [dataInputUi, setDataInputUi] = useState([]);
  const [loding, setLoding] = useState(false);
  useEffect(() => {
    setLoding(true);
    fetch("http://localhost:5000/dataInput")
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        setDataInputUi(res);
        setLoding(false);
      });
  }, []);

  return (
    <div>
      {loding && <h3 className="text-center mt-5">Loading...</h3>}

      <div className="card shadow border-0 mb-7">
        <div className="card-header">
          <h5 className="mb-0">All Purchases</h5>
        </div>
        <div className="table-responsive">
          <table className="table table-hover ">
            <thead className="thead-light">
              <tr>
                <th scope="col">Owner Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile Number</th>
                <th scope="col">Id</th>
                <th scope="col">Address</th>
                <th scope="col">National Id Number</th>
                <th scope="col">Registration Number</th>
                <th scope="col">Company Name</th>
                <th scope="col">Date</th>
                <th scope="col">Rc</th>
                <th></th>
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
