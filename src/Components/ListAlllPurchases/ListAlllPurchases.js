import React, { useEffect, useState } from "react";
import SingleListPurchase from "../SingleListPurchase/SingleListPurchase";

const ListAlllPurchases = () => {
  const [purchases, setPurchases] = useState([]);
  const [loding, setLoding] = useState(false);
  const [sarch, setSarch] = useState([]);
  useEffect(() => {
    setLoding(true);
    fetch("https://bike-soft.herokuapp.com/purchase")
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        setPurchases(res);
        setLoding(false);
        setSarch(res);
      });
  }, []);
  const handelSaerch = (e) => {
    const bikeSarch = purchases.filter((bike) =>
      bike?.ownerName?.toLowerCase().includes(e?.target?.value?.toLowerCase())
    );
    setSarch(bikeSarch);
   
  };
  return (
    <div>
      {loding && <h3 className="text-center mt-5">Loading...</h3>}

      <div className="card shadow border-0 mb-7">
        <div className="row mt-5 mb-3">
          <div className=" col-md-6">
            <h5 className="">All Purchases</h5>
          </div>
          <div className="col-md-6">
            <input
              className=" w-50 bg-light border rounded"
              placeholder="Search Bike"
              type="text"
              onChange={(e) => handelSaerch(e)}
            />
          </div>
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
                <th scope="col">Date</th>
                <th scope="col">Rc</th>
                <th scope="col">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {[...sarch].reverse()?.map((purchase) => (
                <SingleListPurchase
                  purchase={purchase}
                  key={purchase._id}
                ></SingleListPurchase>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListAlllPurchases;
