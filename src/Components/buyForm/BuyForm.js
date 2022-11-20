import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { useForm } from "react-hook-form";
import useFirebase from "../../Firebase/useFirebase";
import "./BuyForm.css";
//import { v4 } from "uuid";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router";
const BuyForm = ({ updatedBike }) => {
  const { storage } = useFirebase();
  //const [imageUpload, setImageUpload] = useState(null);
  //const [imageUrls, setImageUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [bikes, setBikes] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  const name = month[d.getMonth()];

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
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setIsLoading(true);
    setMessage("");
    await axios.post("https://bike-soft.herokuapp.com/purchase", {...data,month:name});
    setMessage("Added successfully.");
    setTimeout(() => setMessage(""), 3000);
    setIsLoading(false);
    reset();
    navigate("/listAlllPurchases");
  };
  ref(storage, "images/");
  
  return (
    <div className=" mt-5 p-5 p-1" style={{ backgroundColor: "#FFFFFF" }}>
      {message && <Alert variant="success">{message}</Alert>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <h4>Owner Details</h4>
          <div className="col-6">
            <div>
              <label className="d-block mt-2">Owner name</label>
              <input
                defaultValue={updatedBike?.ownerName}
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("ownerName", { required: true })}
              />
            </div>

            <div>
              <label className="d-block mt-2">Mobile number</label>
              <input
                defaultValue={updatedBike?.mobileNumber}
                style={{ width: "100%" }}
                className=""
                type="tel"
                {...register("mobileNumber", {
                  required: true,
                })}
              />
              {errors.exampleRequired && <span>This field is required</span>}
            </div>

            <div>
              <label className="d-block mt-2">Addres</label>
              <input
                defaultValue={updatedBike?.addres}
                style={{ width: "100%" }}
                type="text"
                className=""
                {...register("addres", {
                  required: true,
                })}
              />
            </div>
            <hr />
          </div>
          <div className="col-6">
            <div>
              <label className="d-block mt-2">Email</label>

              <input
                defaultValue={updatedBike?.email}
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("email", { required: true })}
              />
            </div>

            <div>
              <label className="d-block mt-2">National id number</label>
              <input
                defaultValue={updatedBike?.nationalIdNumber}
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("nationalIdNumber", {
                  required: true,
                })}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <hr className="inputColor" />
          <h4>Bike Details</h4>
          <div className="col-6 mt-5">
            <div>
              <label className="d-block">Bike name</label>
              <select {...register("bikeName")} style={{ width: "100%" }}>
                {bikes?.map((bike) => (
                  <option value={bike?.title}>{bike?.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="d-block  mt-3">Bike Modle</label>
              <input
                defaultValue={updatedBike?.modle}
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("modle", { required: true })}
              />
            </div>
            {/* uplode bike imagee */}
            {/* <div className="mb-2">
              <label className="d-block  mt-3">Bike image</label>
              <input
              
                type="file"
                onChange={(event) => {
                  setImageUpload(event.target.files[0]);
                }}
              />
              <button className="ms-2 rounded-1" onClick={uplodFile}>
                Upload
              </button>
              {imageUrls.map((url) => {
                return <img width="100px" height="100%" src={url} alt="" />;
              })}
            </div> */}
            <div>
              <label className="d-block mt-3">Purchas Date</label>
              <input
                defaultValue={updatedBike?.date}
                style={{ width: "100%" }}
                className=""
                type="date"
                {...register("date", { required: true })}
              />
            </div>
            <div>
              <label className="d-block mt-3">Selling Price</label>
              <input
                defaultValue={updatedBike?.sellingPrice}
                style={{ width: "100%" }}
                className=""
                type="number"
                {...register("sellingPrice", { required: true })}
              />
            </div>
          </div>
          <div className="col-6">
            {/* <div className="">
              <label className="d-block">RC</label>

              <div className="d-flex align-items-center">
                <input
                defaultValue={updatedBike?.rc}
                  type="radio"
                  {...register("rcYes")}
                  id="yes"
                  name="fav_language"
                  value="Yes"
                />
                <label for="yes" className="ms-2">
                  Yes
                </label>
                <br /> {" "}
                <input
                defaultValue={updatedBike?.rc}
                  {...register("rcNo")}
                  className="ms-2"
                  type="radio"
                  id="no"
                  name="fav_language"
                  value="No"
                />
                  <label for="no">No</label>
                <br />
              </div>
            </div> */}
            <div className="mt-3">
              <label className="d-block">RC</label>
              <div className="d-flex align-items-center">
                <input
                  type="radio"
                  id="yes"
                  name="fav_language"
                  value="Yes"
                  {...register("rc")}
                />
                <label for="yes" className="ms-2">
                  Yes
                </label>
                <br /> {" "}
                <input
                  className="ms-2"
                  type="radio"
                  id="no"
                  name="fav_language"
                  value="No"
                  {...register("rc")}
                />
                  <label for="no">No</label>
                <br />
              </div>
            </div>
            <div>
              <label className="d-block mt-2">Ragistration number</label>
              <input
                defaultValue={updatedBike?.ragistrationNumber}
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("ragistrationNumber", { required: true })}
              />
            </div>
            {/* <div>
              <label className="d-block mt-3">Previous Name </label>
              <input
                defaultValue={updatedBike?.previousOwnerName}
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("previousOwnerName", { required: true })}
              />
            </div> */}
            <div>
              <label className="d-block  mt-3">Purchased By</label>
              <input
                defaultValue={updatedBike?.purchasedBy}
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("purchasedBy", { required: true })}
              />
            </div>
            <div>
              <label className="d-block mt-3">Buying price</label>
              <input
                defaultValue={updatedBike?.buyingPrice}
                style={{ width: "100%" }}
                className=""
                type="number"
                {...register("buyingPrice", { required: true })}
              />
            </div>
          </div>
        </div>
        <hr className="inputColor" />
        {/* <div className="row">
          <div className="col-6">
            <div>
              <h4>Purchase Expenses</h4>
              <select
              defaultValue={updatedBike?.purchasedExpenses}
                className="inputColor rounded mt-5"
                {...register("purchasedExpenses")}
                style={{ width: "100%" }}
              >
                <option>----Seclet One----</option>
                <option value="RCclearanceExpense">RC clearance expense</option>
                <option value="DocumentClearanceExpense">
                  Document clearance expense
                </option>
                <option value="MechanicalWorkExpence">
                  Mechanical work expence
                </option>
                <option value="YardRent">Yard rent</option>
                <option value="UsedSparePartsExpenses">
                  Used spare parts expenses
                </option>
              </select>
            </div>
          </div>

          <div className="col-6">
            <div>
              <h4 className="">Selling expenses</h4>
              <select
                defaultValue={updatedBike?.sellingExpenses}
                className="inputColor rounded mt-5"
                {...register("sellingExpenses")}
                style={{ width: "100%" }}
              >
                <option>----Seclet One----</option>
                <option value="ExpenseChargesGivenToMediator">
                  Expense charges given to mediator
                </option>
                <option value="ExpensechargesGivenToDistributor">
                  Expense charges given to distributor
                </option>
              </select>
            </div>
          </div>

          <div className="col-6  ">
            <div className="">
              <label className="d-block ">Amount</label>
              <input
                defaultValue={updatedBike?.amount}
                style={{ width: "100%" }}
                className=""
                type="number"
                {...register("amount1", { required: true })}
              />
            </div>
          </div>
          <div className="col-6 ">
            <div className="">
              <label className="d-block ">Amount</label>
              <input
                defaultValue={updatedBike?.amount}
                style={{ width: "100%" }}
                className=""
                type="number"
                {...register("amount2", { required: true })}
              />
            </div>
          </div>
        </div> */}

        {/* {!isLoading ? <input type="submit" /> : <h6>Submiting...</h6> } */}
        {isLoading ? (
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Submiting...
          </Button>
        ) : (
          <input className="mt-3 buttom" type="submit" />
        )}
      </form>
    </div>
  );
};

export default BuyForm;
