import React, { useEffect, useState } from "react";
import "./Registration.css";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import useFirebase from "../../../Firebase/useFirebase";
import { AiOutlineHome } from "react-icons/ai";
import { GrUserManager } from "react-icons/gr";

const Registration = () => {
  const { handleUserRegister } = useFirebase("");
  const [msg, setMsg] = useState("");
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    handleUserRegister(data.email, data.password);
    return navigate("/");
  };

  return (
    <div
      class="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div class=" rounded   logingBackground" style={{ width: "350px" }}>
        <p class="homeIccons">
          <a href="/">
            <AiOutlineHome class="" />
          </a>
        </p>
        <br />
        <img
          class="p-3"
          style={{ width: "80%", height: "90px" }}
          src="https://i.ibb.co/VMVjmm6/logo-1.png"
          alt=""
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            class="input-field"
            name="Name"
            placeholder="Your Name"
            type="text"
            {...register("Name", { required: true })}
          />
          <br />
          <input
            class="input-field "
            name="email"
            placeholder="Email"
            type="email"
            {...register("email", { required: true })}
          />
          <br />

          <input
            class="input-field "
            name="password"
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <br />

          <input class="submit-button mb-2" type="submit" value="Register" />

          <NavLink class="" to="/login">
            <button class="Forget_Password">
              IF YOU ALREDY RAGISTER? LOGIN!!
            </button>
          </NavLink>
          {msg && (
            <div class="alert alert-success" role="alert">
              {msg}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Registration;
