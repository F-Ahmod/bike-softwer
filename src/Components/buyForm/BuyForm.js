import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { useForm } from "react-hook-form";
import useFirebase from "../../Firebase/useFirebase";
import "./BuyForm.css";
import { v4 } from "uuid";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
const BuyForm = () => {
  const { storage } = useFirebase();
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [bikes, setBikes] = useState([]);
  const [message, setMessage] = useState("");

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
    await axios.post("https://bike-soft.herokuapp.com/purchase ", data);
    setMessage("Added successfully.");
    setTimeout(() => setMessage(""), 3000);
    setIsLoading(false);
    reset();
  };
   ref(storage, "images/");
  const uplodFile = () => {
    if (imageUpload == null) return;
    if (imageUrls.length === 4) {
      return alert("Uploaded images maxiumum 4.");
    }
    setIsLoading(true);
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        setIsLoading(false);
      });
    });
  };

  return (
    <div className=" mt-5 p-5 p-1" style={{ backgroundColor: "#FFFFFF" }}>
      {message && <Alert variant="success">{message}</Alert>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <h5>Owner Details</h5>
          <div className="col-6">
            <div>
              <label className="d-block r">Owner name</label>
              <input
                style={{ width: "100%" }}
                className=""
                type="text"
               
                {...register("ownerName", { required: true })}
              />
            </div>

            <div>
              <label className="d-block">Mobile number</label>
              <input
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
          </div>
          <div className="col-6">
            <div>
              <label className="d-block">Email</label>

              <input
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("email", { required: true })}
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
          </div>
        </div>
        <div className="row">
          <hr className="inputColor" />
          <h5>Bike Details</h5>
          <div className="col-6 mt-3">
            <div>
              <label className="d-block">Bike name</label>
              <select {...register("bikeName")} style={{ width: "100%" }}>
                {bikes?.map((bike) => (
                  <option value={bike?.title}>{bike?.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="d-block">Bike Modle</label>
              <input
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("modle", { required: true })}
              />
            </div>
            <div className="mb-2">
              <label className="d-block">Bike image</label>
              <input
                type="file"
                onChange={(event) => {
                  setImageUpload(event.target.files[0]);
                }}
              />
              <button className="ms-2 rounded-1" onClick={uplodFile}>
                uploded
              </button>
              {imageUrls.map((url) => {
                return <img width="100px" height="100%" src={url} alt="" />;
              })}
            </div>
            <div>
              <label className="d-block">Purchas Date</label>
              <input
                style={{ width: "100%" }}
                className=""
                type="date"
                {...register("date", { required: true })}
              />
            </div>
            <div>
              <label className="d-block">Selling Price</label>
              <input
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("SellingPrice", { required: true })}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="">
              <label className="d-block">RC</label>

              <div className="d-flex align-items-center">
                <input
                  type="radio"
                  {...register("rc")}
                  id="yes"
                  name="fav_language"
                  value="Yes"
                />
                <label for="yes" className="ms-2">
                  Yes
                </label>
                <br /> {" "}
                <input
                  {...register("rc")}
                  className="ms-2"
                  type="radio"
                  id="no"
                  name="fav_language"
                  value="No"
                />
                  <label for="no">No</label>
                <br />
              </div>
            </div>
            <div>
              <label className="d-block">Ragistration number</label>
              <input
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("RagistrationNumber", { required: true })}
              />
            </div>
            <div>
              <label className="d-block">Previous Name </label>
              <input
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("PreviousOwnerName", { required: true })}
              />
            </div>
            <div>
              <label className="d-block">Purchased By</label>
              <input
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("purchasedBy", { required: true })}
              />
            </div>
            <div>
              <label className="d-block">Buying price</label>
              <input
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("BuyingPrice", { required: true })}
              />
            </div>
          </div>
        </div>
        <hr className="inputColor" />
        <div className="row">
          <div className="col-6">
            <div>
              <h4>Purchase Expenses</h4>
              <select
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
                className="inputColor rounded mt-5"
                {...register("SellingExpenses")}
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
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("amount", { required: true })}
              />
            </div>
          </div>
          <div className="col-6 ">
            <div className="">
              <label className="d-block ">Amount</label>
              <input
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("amount", { required: true })}
              />
            </div>
          </div>
        </div>

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
