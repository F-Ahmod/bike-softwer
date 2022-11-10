import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleListPurchase from "../SingleListPurchase/SingleListPurchase";

const NewPurchacs = () => {
  const [bikes, setBikes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    const res = await axios.post("https://bike-soft.herokuapp.com/newpurhase", {
      date: new Date().toISOString().split("T")[0],
    });
    setBikes(res.data);
    setIsLoading(false);
  };
  return (
    <div>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          {bikes?.length > 0 ? (
            <div className="card shadow border-0 mb-7">
              <div className="card-header">
                <h5 className="mb-0">
                  Today purchases {new Date().toISOString().split("T")[0]}
                </h5>
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
                    {bikes?.map((purchase) => (
                      <SingleListPurchase
                        purchase={purchase}
                      ></SingleListPurchase>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <h6 className="d-flex justify-content-center mt-5">No any purchased today.</h6>
          )}
        </div>
      )}
    </div>
  );
};

export default NewPurchacs;
