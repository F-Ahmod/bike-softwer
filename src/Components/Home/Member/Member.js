import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import useFirebase from "../../../Firebase/useFirebase";
import "./Member.css";

const Member = () => {
  const { handleUserRegister } = useFirebase();
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    handleUserRegister(data.email, data.password, location, navigate);
  
  };
  return (
    <div className="wrapperr">
      {/* <form className="fromm" action="#" method="GET">
        <fieldset className="contact-info">
          <div className="ccontainer">
            <legend>Contact Information</legend>
            <p>
              <label for="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Required"
                title="Please fill out this field"
              />
            </p>
            <p>
              <label for="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="Required"
                title="Please fill out this field"
              />
            </p>
            <p>
              <label for="address">Street Adress</label>
              <input type="text" id="address" name="user_address" />
            </p>
            <p>
              <label for="city">City</label>
              <input type="text" id="city" name="user_city" />
            </p>
            
            <p>
              <label for="zipcode">Zipcode</label>
              <input type="number" id="zipcode" name="user_zipcode" />
            </p>
          </div>
        </fieldset>

        
        <NavLink style={{ textDecoration: "none" }} to="/login">
          <Button className="text-light" variant="text">
            Already Register? Please Login
          </Button>
        </NavLink>
      </form> */}
      <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
        <p className="field required">
          <label className="label required" for="name">
            Full name
          </label>
          <input
            className="text-input"
            id="name"
            name="name"
            required
            type="text"
            {...register("Name", { required: true })}
          />
        </p>
        <p className="field required half">
          <label className="label" for="email">
            E-mail
          </label>
          <input
            className="text-input"
            id="email"
            name="email"
            required
            type="email"
            {...register("email", { required: true })}
          />
        </p>
        <p className="field half">
          <label className="label" for="phone">
            Phone
          </label>
          <input
            className="text-input"
            id="phone"
            name="phone"
            type="phone"
            {...register("password", { required: true })}
          />
        </p>
        {/* <p className='field half required error'>
    <label className='label' for='login'>Login</label>
    <input className='text-input' id='login' name='login' required type='text' value='mican'/>
  </p> */}
        <p className="field half required">
          <label className="label" for="password">
            Password
          </label>
          <input
            className="text-input"
            id="password"
            name="password"
            required
            type="password"
            {...register("password", { required: true })}
          />
        </p>
        <br />

        <p>
          <label className="label">Gender</label>
          <ul className="options">
            <li className="option">
              <input
                className="option-input"
                id="option-0"
                name="option"
                type="radio"
                value="0"
                {...register("password", { required: true })}
              />
              <label className="option-label" for="option-0">
                Male
              </label>
            </li>
            <li className="option">
              <input
                className="option-input"
                id="option-1"
                name="option"
                type="radio"
                value="1"
                {...register("password", { required: true })}
              />
              <label className="option-label" for="option-1">
                female
              </label>
            </li>
          </ul>
        </p>

        <p className="field half">
          <input className="button" type="submit" value="Send" />
        </p>
      </form>
    </div>
  );
};

export default Member;
