import React from "react";
import "./Login.css";
import { AiOutlineHome } from "react-icons/ai";
import { GrUserManager } from "react-icons/gr";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useFirebase from "../../../Firebase/useFirebase";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { loginUser } = useFirebase();
  const location = useLocation();

  const onSubmit = (data) => {
    loginUser(data.email, data.password, location, navigate);
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
        <form
          class="p-3 logingBackground"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            class="input-field "
            name="email"
            placeholder="Email"
            type="email"
            {...register("email", { required: true })}
          />
          <br />
          <input
            class="input-field"
            name="password"
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <br />

          <select class="w-100" name="cars" id="cars">
            <option value="volvo">Select User Type</option>
            <option value="saab">Admin</option>
            <option value="opel">Castomer</option>
            <option value="audi">Mashine</option>
          </select>
          <input class="submit-button " type="submit" value="SING IN" />
          <br />
        </form>
        <div class="">
          <NavLink class="" to="/forgetPassword">
            <button class="Forget_Password">
              <GrUserManager />
              Forget Password
            </button>
          </NavLink>
          <NavLink class="" to="/register">
            <button class="Forget_Password">
              IF YOU DON'T HAVE ACCOUNT
            </button>
          </NavLink>
        </div>
        <br />

        <br />
      </div>
    </div>
  );
};

export default Login;
