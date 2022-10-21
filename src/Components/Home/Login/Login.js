import React from "react";
import "./Login.css";
import { AiOutlineHome } from "react-icons/ai";
import { GrUserManager } from "react-icons/gr";
import img from "../images/logo (1).png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useFirebase from "../../../Firebase/useFirebase";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { singinWithGoogle, loginUser } = useFirebase();
  const location = useLocation();

  const onSubmit = (data) => {
    loginUser(data.email, data.password, location, navigate);
  };

  const handleGoogleSignIn = () => {
    singinWithGoogle(location, navigate);
  };

  return (
    <div className="">
      <div
        className="mt-3 mb-3 mx-auto  rounded  logingBackground"
        style={{ width: "350px" }}
      >
        <p className="homeIccons">
          <AiOutlineHome className="" />
        </p>
        <br />
        <img
          className="p-3"
          style={{ width: "80%", height: "90px" }}
          src={img}
          alt=""
        />
        <form
          className="p-3 logingBackground"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="input-field "
            name="email"
            placeholder="Email"
            type="email"
            {...register("email", { required: true })}
          />
          <br />
          <input
            className="input-field "
            name="password"
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <br />

          <select className="w-100" name="cars" id="cars">
            <option value="volvo">Select User Type</option>
            <option value="saab">Admin</option>
            <option value="opel">Castomer</option>
            <option value="audi">Mashine</option>
          </select>

          <input className="submit-button " type="submit" value="SING IN" />
          <br />
        </form>
        <NavLink className="" to="">
          <button className="Forget_Password">
            {" "}
            <GrUserManager />
            Forget Password
          </button>
        </NavLink>
        <br />
        {/* <NavLink className="register mb-5" to="/register">
        <button>register</button>
      </NavLink> */}
        <br />
      </div>
    </div>
  );
};

export default Login;
