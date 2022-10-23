import axios from "axios";
import React, { useEffect, useState } from "react";
import Alert from 'react-bootstrap/Alert';
import { useForm } from "react-hook-form";
import "./BuyForm.css";

const BuyForm = () => {
  const [bikes, setBikes] = useState([]);
const [isLoading,setIsLoading] = useState(false)
const [message,setMessage] = useState('')
  
  useEffect(() => {
    fetch("https://bike-soft.herokuapp.com/addBikes")
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
    setIsLoading(true)
    setMessage('')
    await axios.post('https://bike-soft.herokuapp.com/purchase ',data)
    setMessage('Added successfully.')
    setTimeout(() => setMessage(""),3000)
    setIsLoading(false)
  };
  console.log(errors);

  return (
    <div class="bg-light mt-5 p-5 p-1">
      <form  onSubmit={handleSubmit(onSubmit)}>
        <div class="row">
        <div class="col-6">
          <div>
            <label class="d-block">Owner name</label>
            <input
              style={{ width: "100%" }}
              class=""
              type="text"
              //   placeholder="Owner name"
              {...register("ownerName", { required: true })}
            />
          </div>

          <div>
            <label class="d-block">Mobile number</label>
            <input
              style={{ width: "100%" }}
              class=""
              type="tel"
              //   placeholder="Mobile number"
              {...register("mobileNumber", {
                required: true,
               
              })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </div>
           

<div>
            <label class="d-block">Addres</label>
            <input
              style={{ width: "100%" }}
              type="text"
              class=""
              {...register("addres", {
                required: true,
                
              })}
            />
          </div>
          <hr />

         
         
          
        </div>
        <div class="col-6">
          <div>
            <label class="d-block">Email</label>

            <input
              style={{ width: "100%" }}
              class=""
              type="text"
              {...register("email", { required: true})}
            />
          </div>

          <div>
            <label class="d-block">National id number</label>
            <input
              style={{ width: "100%" }}
              class=""
              type="text"
              {...register("nationalIdNumber", {
                required: true,
               
              })}
            />
          </div>
          

        
         

          <div>
            <label class="d-block">Modle</label>
            <input
              style={{ width: "100%" }}
              class=""
              type="text"
              {...register("modle", { required: true })}
            />
          </div>
        

          
        </div>
        </div>
        <div class="row">
          <div class="col-6">
          <div>
            <label class="d-block">Bike name</label>
            <select {...register("bikeName")}
             style={{ width: "100%" }}
            >
              {
              bikes?.map(bike =>  <option value={bike?.title}>{bike?.title}</option>)
              }
              
            </select>
          </div>
          <div>
            <label class="d-block">Purchas Date</label>
            <input
              style={{ width: "100%" }}
              class=""
              type="date"
              {...register("date", { required: true})}
            />
          </div>
          
          </div>
          <div class="col-6">
          <div>
            <label class="d-block">RC</label>
      
          <div className="d-flex align-items-center">

          <input type="radio" {...register("rc")} id="yes" name="fav_language" value="Yes" />
 <label  for="yes" className="ms-2">Yes</label><br/>
  <input {...register("rc" )}  className="ms-2" type="radio" id="no" name="fav_language"  value="No" />
  <label for="no">No</label><br/>

          </div>
           
          </div>
          <div>
            <label class="d-block">prossed By</label>
            <input
              style={{ width: "100%" }}
              class=""
              type="text"
              //   placeholder="Owner name"
              {...register("prossedName", { required: true })}
            />
          </div>


          </div>

        </div>

{
  !isLoading ?
  <input type="submit" />
:
<h6>Loading...</h6>
}


      </form>

   {message&&   <Alert variant='success'>
         {message}
        </Alert>}

    </div>
  );
};

export default BuyForm;
