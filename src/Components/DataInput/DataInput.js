import axios from "axios";
import React, { useState } from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";

const DataInput = () => {
  const [isLoading, setIsLoading] = useState(false);
//   const [bikes, setBikes] = useState([]);
  const [message, setMessage] = useState("");

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    setIsLoading(true);
    setMessage("");
    await axios.post("http://localhost:5000/dataInput ", data);
    setMessage("data Added successfully.");
    setTimeout(() => setMessage(""), 3000);
    setIsLoading(false);
    reset();
  };
  return (
    <div className=" mt-5 p-5 p-1" style={{ backgroundColor: "#FFFFFF" }}>
      {message && <Alert variant="success">{message}</Alert>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row"></div>
        <div className="row">
          <hr className="inputColor" />

          <div className="col-6 mt-5">
            
            <div>
              <label className="d-block  mt-3">Bike Modle</label>
              <input
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("modle", { required: true })}
              />
            </div>

            <div>
              <label className="d-block mt-3">Purchas Date</label>
              <input
                style={{ width: "100%" }}
                className=""
                type="date"
                {...register("date", { required: true })}
              />
            </div>
            <div>
              <label className="d-block mt-3">Selling Price</label>
              <input
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("SellingPrice", { required: true })}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="">
              <label className="d-block">RC</label>

              <div className="d-flex align-items-center">
                <input
                  type="radio"
                  {...register("rc")}
                  id="yes"
                  name="fav_language"
                  value="Yes"
                />
                <label for="yes" className="ms-2">
                  Yes
                </label>
                <br /> {" "}
                <input
                  {...register("rc")}
                  className="ms-2"
                  type="radio"
                  id="no"
                  name="fav_language"
                  value="No"
                />
                  <label for="no">No</label>
                <br />
              </div>
            </div>
            <div>
              <label className="d-block mt-2">Ragistration number</label>
              <input
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("RagistrationNumber", { required: true })}
              />
            </div>
            <div>
              <label className="d-block mt-3">Previous Name </label>
              <input
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("PreviousOwnerName", { required: true })}
              />
            </div>
            <div>
              <label className="d-block  mt-3">Purchased By</label>
              <input
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("purchasedBy", { required: true })}
              />
            </div>
            <div>
              <label className="d-block mt-3">Buying price</label>
              <input
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("BuyingPrice", { required: true })}
              />
            </div>
          </div>
        </div>

        {/* {!isLoading ? <input type="submit" /> : <h6>Submiting...</h6> } */}
        {isLoading ? (
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Submiting...
          </Button>
        ) : (
          <input className="mt-3 buttom" type="submit" />
        )}
      </form>
    </div>
  );
};

export default DataInput;
