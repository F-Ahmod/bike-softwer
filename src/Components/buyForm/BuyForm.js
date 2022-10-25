import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { useForm } from "react-hook-form";
import "./BuyForm.css";

const BuyForm = () => {
  const [bikes, setBikes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://bike-soft.herokuapp.com/addBikes")
      .then((data) => data.json())
      .then((res) => {
        setBikes(res);
      });
  }, []);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setIsLoading(true);
    setMessage("");
    await axios.post("https://bike-soft.herokuapp.com/purchase ", data);
    setMessage("Added successfully.");
    setTimeout(() => setMessage(""), 3000);
    setIsLoading(false);
    reset()
  };
  console.log(errors);

  return (
    <div class=" mt-5 p-5 p-1" style={{ backgroundColor: "#FFFFFF" }}>
      {message && <Alert variant="success">{message}</Alert>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="row">
          <h5>Owner Details</h5>
          <div class="col-6">
            <div>
              <label class="d-block r">Owner name</label>
              <input
                style={{ width: "100%" }}
                class=""
                type="text"
                //   placeholder="Owner name"
                {...register("ownerName", { required: true })}
              />
            </div>

            <div>
              <label class="d-block">Mobile number</label>
              <input
                style={{ width: "100%" }}
                class=""
                type="tel"
                //   placeholder="Mobile number"
                {...register("mobileNumber", {
                  required: true,
                })}
              />
              {errors.exampleRequired && <span>This field is required</span>}
            </div>

            <div>
              <label class="d-block">Addres</label>
              <input
                style={{ width: "100%" }}
                type="text"
                class=""
                {...register("addres", {
                  required: true,
                })}
              />
            </div>
            <hr />
          </div>
          <div class="col-6">
            <div>
              <label class="d-block">Email</label>

              <input
                style={{ width: "100%" }}
                class=""
                type="text"
                {...register("email", { required: true })}
              />
            </div>

            <div>
              <label class="d-block">National id number</label>
              <input
                style={{ width: "100%" }}
                class=""
                type="text"
                {...register("nationalIdNumber", {
                  required: true,
                })}
              />
            </div>
          </div>
        </div>
        <div class="row">
          <hr className="inputColor" />
          <h5>Bike Details</h5>
          <div class="col-6">
            <div>
              <label class="d-block">Bike name</label>
              <select {...register("bikeName")} style={{ width: "100%" }}>
                {bikes?.map((bike) => (
                  <option value={bike?.title}>{bike?.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label class="d-block">Modle</label>
              <input
                style={{ width: "100%" }}
                class=""
                type="text"
                {...register("modle", { required: true })}
              />
            </div>
            <div>
              <label class="d-block">Purchas Date</label>
              <input
                style={{ width: "100%" }}
                class=""
                type="date"
                {...register("date", { required: true })}
              />
            </div>
          </div>
          <div class="col-6">
            <div className="mt-5">
              <label class="d-block">RC</label>

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
              <label class="d-block">Purchased By</label>
              <input
                style={{ width: "100%" }}
                class=""
                type="text"
                {...register("purchasedBy", { required: true })}
              />
            </div>
          </div>
        </div>
        <hr className="inputColor" />
        <div class="row">
          <p>Purchased Expenses</p>
          <div class="col-6">
            <div >
              <select className="inputColor rounded mt-5" {...register("purchasedExpenses")}
              style={{ width: "100%" }}>
                <option value="abcd1">ABCD1</option>
                <option value="abcd2">ABCD2</option>
                <option value="abcd3">ABCD3</option>
              </select>
            </div>
          </div>
          <div class="col-6">
            <div>
              <label class="d-block">Amount</label>
              <input
                style={{ width: "100%" }}
                class=""
                type="text"
                {...register("amount", { required: true })}
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
          <input  class="mt-3 buttom" type="submit" />
        )}
      </form>

      
    </div>
  );
};

export default BuyForm;
