import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./MakeAdmin.css";
const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();
  const [loding, setLoding] = useState(false);
  const [msg, setMsg] = useState("");

  const onSubmit = (data) => {
    setLoding(true);
    fetch("https://bike-soft.herokuapp.com/makeAdmin", {
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
      class="rounded  mt-5 mx-auto"
    >
      {loding && <h3 class="text-center mt-5">Loading...</h3>}

      <form onSubmit={handleSubmit(onSubmit)} class=" ">
        <input
          style={{ width: "80%", background: "#fff"  }}
          class="makeAdminBottom w-50 d-block p-2"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        {msg && (
          <div class="alert alert-success" role="alert">
            {msg}
          </div>
        )}
        <input class="bott mt-3" type="submit" value="Make a Staf" />
      </form>
    </div>
  );
};

export default MakeAdmin;
