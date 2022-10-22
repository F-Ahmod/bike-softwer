import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./MakeAdmin.css";
const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();
  const [loding, setLoding] = useState(false);
  const [msg, setMsg] = useState("");

  const onSubmit = (data) => {
    setLoding(true);
    fetch("http://localhost:5000/makeAdmin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => setLoding(false));
    
    console.log(data);
    setMsg("Staf Added succesfull");
    setTimeout(() => setMsg(""), 3000);
  };
  return (
    <div
      style={{ width: "90%", }}
      className="rounded  mt-5 mx-auto"
    >
      {loding && <h3 className="text-center mt-5">Loading...</h3>}

      <form onSubmit={handleSubmit(onSubmit)} className=" ">
        <input
          style={{ width: "80%", background: "#fff"  }}
          className="makeAdminBottom w-50 d-block p-2"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        {msg && (
          <div className="alert alert-success" role="alert">
            {msg}
          </div>
        )}
        <input className="bott mt-3" type="submit" value="Make a Staf" />
      </form>
    </div>
  );
};

export default MakeAdmin;
