import React from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useForm } from "react-hook-form";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";


const ForgetPassword = () => {
  const { register, handleSubmit } = useForm();
  const auth = getAuth();
  const onSubmit = (data) => {
    sendPasswordResetEmail(auth, data.email)
  .then(() => {
    // Password reset email sent!
    // ..
    alert("email sent")
   
  })
  .catch((error) => {
    console.log(error);
    //const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

  };

  return (
    <div className="d-flex justify-content-center align-items-center"
    style={{height: "100vh"}}>
      <div
        className="  rounded  logingBackground"
        style={{ width: "350px" }}
      >
        <p className="homeIccons">
        <a href="/" >
          <AiOutlineHome className="" />
        </a>
        </p>
        <br />
        <img
          className="p-3"
          style={{ width: "80%", height: "90px" }}
          src="https://i.ibb.co/VMVjmm6/logo-1.png"
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

          {/* <select className="w-100" name="cars" id="cars">
            <option value="volvo">Select User Type</option>
            <option value="saab">Admin</option>
            <option value="opel">Castomer</option>
            <option value="audi">Mashine</option>
          </select> */}

          <input className="submit-button " type="submit" value="SUBMIT" />
          <Link to="/login">
            <input
              className="submit-button "
              type="submit"
              value="BACK TO LOGIN"
            />
          </Link>
          <br />
        </form>

        <br />
        {/* <NavLink className="register mb-5" to="/register">
        <button>register</button>
      </NavLink> */}
        <br />
      </div>
    </div>
  );
};

export default ForgetPassword;
