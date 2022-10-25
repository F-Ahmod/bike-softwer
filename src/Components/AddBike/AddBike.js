import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";

const AddBike = () => {
  const { register, handleSubmit,reset } = useForm();

  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    const date = new Date().toISOString().split("T")[0];
    setIsLoading(true);
    await axios.post("https://bike-soft.herokuapp.com/addBikes ", {
      ...data,
      created_at: date,
      updated_at: date,
    });
    setMsg(() => "Bike Added succesfully");
    setIsLoading(false);
    setTimeout(() => setMsg(""), 3000);
    reset();
  };

  return (
    <div
      style={{ width: "90%", background: "#FFFFFF" }}
      class="rounded shadow-sm mt-5 mx-auto  p-3 "
    >
      {msg && <Alert variant="success">{msg}</Alert>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          style={{ width: "80%" }}
          class="input-field"
          {...register("title", { required: true })}
          placeholder="Title"
        />
        <br />
        {isLoading ? (
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        ) : (
          <input class="mt-3 buttom" type="submit" />
        )}
        
      </form>
      
    </div>
  );
};

export default AddBike;
