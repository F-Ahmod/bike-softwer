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
    await axios.post("https://bike-soft.herokuapp.com/dataInput ", data);
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
          <div className="col-6 ">
            {/* right site  */}

            <div>
              <label className="d-block  mt-3">Serial</label>
              <input
                style={{ width: "100%" }}
                className=""
                type="number"
                {...register("serial", { required: true })}
              />
            </div>
            <div>
              <label className="d-block  mt-3">Asset</label>
              <input
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("asset", { required: true })}
              />
            </div>

            {/* <div>
              <label className="d-block mt-3">Year</label>
              <input
                style={{ width: "100%" }}
                type="number"
                min="1900"
                max="2099"
                {...register("year", { required: true })}
              />
            </div> */}

            <div>
              <label className="d-block mt-3">Transport</label>
              <input
                style={{ width: "100%" }}
                className=""
                type="number"
                {...register("transportMils", { required: true })}
              />
            </div>

            <div>
              <label className="d-block mt-3">Petrol</label>
              <input
                style={{ width: "100%" }}
                className=""
                type="number"
                {...register("petrol", { required: true })}
              />
            </div>

            <div>
              <label className="d-block mt-3">Spare parts</label>
              <input
                style={{ width: "100%" }}
                className=""
                type="number"
                {...register("spareParts", { required: true })}
              />
            </div>

            <div>
              <label className="d-block mt-3">Patch/Paint</label>
              <input
                style={{ width: "100%" }}
                type="number"
                {...register("patchPaint", { required: true })}
              />
            </div>

            <div>
              <label className="d-block mt-3">Cost</label>
              <input
                style={{ width: "100%" }}
                className=""
                type="number"
                {...register("cost", { required: true })}
              />
            </div>

            <div>
              <label className="d-block mt-3">Price Sold</label>
              <input
                style={{ width: "100%" }}
                className=""
                type="number"
                {...register("priceSold", { required: true })}
              />
            </div>

            <div className="mt-3">
              <label className="d-block">RC</label>
              <div className="d-flex align-items-center">
                <input
                  type="radio"
                  id="yes"
                  name="fav_language"
                  value="Yes"
                  {...register("rc")}
                />
                <label for="yes" className="ms-2">
                  Yes
                </label>
                <br /> {" "}
                <input
                  className="ms-2"
                  type="radio"
                  id="no"
                  name="fav_language"
                  value="No"
                  {...register("rc")}
                />
                  <label for="no">No</label>
                <br />
              </div>
            </div>
          </div>

          {/* left site */}

          <div className="col-6">
            {/* <div>
              <label className="d-block mt-2">Ragistration number</label>
              <input
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("RagistrationNumber", { required: true })}
              />
            </div> */}

            <div className="">
              <label className="d-block mt-3">Amount</label>
              <input
                style={{ width: "100%" }}
                className=""
                type="number"
                {...register("amount", { required: true })}
              />
            </div>

            <div className="">
              <label className="d-block mt-3">Expense</label>
              <input
                style={{ width: "100%" }}
                className=""
                type="number"
                {...register("expenceDocu", { required: true })}
              />
            </div>

            <div className="">
              <label className="d-block mt-3">Yard rent</label>
              <input
                style={{ width: "100%" }}
                className=""
                type="number"
                {...register("yardRent", { required: true })}
              />
            </div>

            <div>
              <label className="d-block mt-3">Insurance</label>
              <input
                style={{ width: "100%" }}
                className=""
                type="number"
                {...register("insurance", { required: true })}
              />
            </div>

            <div>
              <label className="d-block mt-3">Tyre</label>
              <input
                style={{ width: "100%" }}
                className=""
                type="number"
                {...register("tyre", { required: true })}
              />
            </div>

            <div>
              <label className="d-block mt-3">SER</label>
              <input
                style={{ width: "100%" }}
                className=""
                type="number"
                {...register("ser", { required: true })}
              />
            </div>

            <div>
              <label className="d-block mt-3">Other</label>
              <input
                style={{ width: "100%" }}
                className=""
                type="number"
                {...register("other", { required: true })}
              />
            </div>

            <div>
              <label className="d-block mt-3">Total exp</label>
              <input
                style={{ width: "100%" }}
                className=""
                type="number"
                {...register("totalExp", { required: true })}
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
