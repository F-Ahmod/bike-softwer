import React, { useEffect, useState } from "react";
import SingleListPurchase from "../SingleListPurchase/SingleListPurchase";

const ListAlllPurchases = () => {
  const [purchases, setPurchases] = useState([]);
  const [loding, setLoding] = useState(false);

  useEffect(() => {
    setLoding(true);
    fetch("http://localhost:5000/purchase")
      .then((data) => data.json())

      .then((res) => {
        console.log(res);

        setPurchases(res);
        setLoding(false);
      });
  }, []);
  return (
    <div>
      {loding && <h3 className="text-center mt-5">Loading...</h3>}
      {/* <div style={{  background: "#FFFFFF" }}
      className="wrapper p-5 ">
      {
       purchases?.map(purchase => <SingleListPurchase purchase={purchase}>

       </SingleListPurchase>
        
       ) 
      } */}
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
              {purchases?.map((purchase) => (
                <SingleListPurchase purchase={purchase}></SingleListPurchase>
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
      {/* </div> */}
    </div>
  );
};

export default ListAlllPurchases;
