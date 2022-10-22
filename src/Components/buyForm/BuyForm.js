import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./BuyForm.css";

const BuyForm = () => {
  const [bikes, setBikes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/plans")
      .then((data) => data.json())
      .then((res) => {
        setBikes(res);
      });
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit =async (data) => {
   
    await axios.post('http://localhost:5000/purchase ',data)
  };
  console.log(errors);

  return (
    <div className="bg-light mt-5 p-5 p-1">
      <form  onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
        <div className="col-6">
          <div>
            <label className="d-block">Owner name</label>
            <input
              style={{ width: "100%" }}
              className=""
              type="text"
              //   placeholder="Owner name"
              {...register("ownerName", { required: true })}
            />
          </div>

          <div>
            <label className="d-block">Mobile number</label>
            <input
              style={{ width: "100%" }}
              className=""
              type="tel"
              //   placeholder="Mobile number"
              {...register("mobileNumber", {
                required: true,
               
              })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </div>
          {/* <div>
            <label className="d-block">Company Name</label>
            <input
              style={{ width: "100%" }}
              className=""
              type="text"
              {...register("companyName", {
                required: true
              
              })}
            />
          </div> */}
          {/* <div>
            <label className="d-block">Company licence</label>
            <input
              style={{ width: "100%" }}
              className=""
              type="text"
              {...register("companyLicence", {
                required: true,
               
              })}
            />
          </div> */}
          {/* <div>
            <label className="d-block">Registration Number</label>
            <input
              style={{ width: "100%" }}
              className=""
              type="text"
              {...register("registrationNumber", {
                required: true,
               
              })}
            />
          </div> */}

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

         
          {/* <div>
            <label className="d-block">Amount</label>
            <input
              style={{ width: "100%" }}
              className=""
              type="number"
              {...register("amount", { required: true })}
            />
          </div> */}
          
        </div>
        <div className="col-6">
          <div>
            <label className="d-block">Email</label>

            <input
              style={{ width: "100%" }}
              className=""
              type="text"
              {...register("email", { required: true})}
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
          

        
         

          <div>
            <label className="d-block">Modle</label>
            <input
              style={{ width: "100%" }}
              className=""
              type="text"
              {...register("modle", { required: true })}
            />
          </div>
        

          
        </div>
        </div>
        <div className="row">
          <div className="col-6">
          <div>
            <label className="d-block">Bike name</label>
            <select {...register("bikeName")}
             style={{ width: "100%" }}
            >
              {
              bikes.map(bike =>  <option value={bike.title}>{bike.title}</option>)
              }
              
            </select>
          </div>
          <div>
            <label className="d-block">Purchas Date</label>
            <input
              style={{ width: "100%" }}
              className=""
              type="date"
              {...register("date", { required: true})}
            />
          </div>
          
          </div>
          <div className="col-6">
          <div>
            <label className="d-block">RC</label>
            <input
              style={{ width: "100%" }}
              className=""
              {...register("rc", {  })}
              type="radio"
              value="Yes"
            />

            <input
              style={{ width: "50%" }}
              className=""
              {...register("rc", {  })}
              type="radio"
              value="No"
            />
          </div>
          <div>
            <label className="d-block">prossed By</label>
            <input
              style={{ width: "100%" }}
              className=""
              type="text"
              //   placeholder="Owner name"
              {...register("prossedName", { required: true })}
            />
          </div>


          </div>

        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default BuyForm;
