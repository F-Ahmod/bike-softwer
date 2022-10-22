import { Button, Badge } from "react-bootstrap";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddBike = () => {
  const { register, handleSubmit } = useForm();

  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  

  const onSubmit =async (data) => {
    setMsg("Your succes");
    await axios.post('http://localhost:5000/addBikes ',data)
    setMsg("Bike Added succesfully");
    setTimeout(() => setMsg(""), 3000).catch((error) => {});
  };

  return (
    <div
      style={{ width: "90%", background: "#FFFFFF" }}
      className="rounded shadow-sm mt-5 mx-auto  p-3 "
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          style={{ width: "80%" }}
          className="input-field"
          {...register("title", { required: true })}
          placeholder="Title"
        />
<br />
        <input className="mt-3 buttom" type="submit" />
      </form>
    </div>
  );
};

export default AddBike;
