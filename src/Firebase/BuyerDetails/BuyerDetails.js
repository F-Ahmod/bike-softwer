import axios from "axios";
import React, { useState } from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";


const BuyerDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setIsLoading(true);
    setMessage("");
    await axios.post("https://bike-soft.herokuapp.com/BuyerDetails ", data);
    setMessage("Added successfully.");
    setTimeout(() => setMessage(""), 3000);
    setIsLoading(false);
    reset();
  };
  return (
    <div className=" mt-5 p-5 p-1" style={{ backgroundColor: "#FFFFFF" }}>
      {message && <Alert variant="success">{message}</Alert>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <h5>Owner Details</h5>
          <div className="col-6">
            <div>
              <label className="d-block r">Owner name</label>
              <input
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("ownerName", { required: true })}
              />
            </div>

            <div>
              <label className="d-block">Mobile number</label>
              <input
                style={{ width: "100%" }}
                className=""
                type="tel"
                {...register("mobileNumber", {
                  required: true,
                })}
              />
              {errors.exampleRequired && <span>This field is required</span>}
            </div>

            <div>
              <label className="d-block">Addres</label>
              <input
                style={{ width: "100%" }}
                type="text"
                className=""
                {...register("addres", {
                  required: true,
                })}
              />
            </div>
            <hr />
          </div>
          <div className="col-6">
            <div>
              <label className="d-block">Email</label>

              <input
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("email", { required: true })}
              />
            </div>

            <div>
              <label className="d-block">National id number</label>
              <input
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("nationalIdNumber", {
                  required: true,
                })}
              />
            </div>
          </div>
        </div>

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

export default BuyerDetails;
