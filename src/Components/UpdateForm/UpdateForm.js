import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Spinner } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { useForm } from "react-hook-form";
import useFirebase from "../../Firebase/useFirebase";
import { v4 } from "uuid";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useParams } from "react-router";
import "./UpdateForm.css"
const UpdateForm = () => {
  const { _id } = useParams();
  const { storage } = useFirebase();
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [bikes, setBikes] = useState([]);
  const [message, setMessage] = useState("");

  const [details, setDetails] = useState([]);
  fetch(`https://bike-soft.herokuapp.com/purchase`)
    .then((res) => res.json())
    .then((data) => setDetails(data));
  const mach = details?.find((a) => a?._id === _id);

  console.log(mach);

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
    await axios.put("https://bike-soft.herokuapp.com/updaateForm", { ...data, _id });
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
      
     
      
      <div className="row mb-5 details ">
      <div className="col-md-6">
      <h5>Owner Details</h5>
       <p>Owner Name {mach?.ownerName}</p>
       <p>Email {mach?.email}</p>
       <p>Mobile Number {mach?.mobileNumber}</p>
       <p>Address {mach?.addres}</p>
       <p>National Id Number {mach?.nationalIdNumber}</p>
      </div>
      <div className="col-md-6">
        <h5>Bike Details</h5>
        <p>Ragistration Number{mach?.ragistrationNumber}</p>
        <p>Bike Name {mach?.bikeName}</p>
        <p>Year {mach?.year}</p>
        <p>Model {mach?.model}</p>
        <p>Purchas Date {mach?.date}</p>

      </div>
      </div>

      {message && <Alert variant="success">{message}</Alert>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <h4>Update Owner Details</h4>
          <div className="col-6">
            <div>
              <label className="d-block mt-2">Owner name</label>
              <input
                defaultValue={mach?.ownerName}
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("ownerName")}
              />
            </div>

            <div>
              <label className="d-block mt-2">Mobile number</label>
              <input
                defaultValue={mach?.mobileNumber}
                style={{ width: "100%" }}
                className=""
                type="tel"
                {...register("mobileNumber")}
              />
              {/* {errors.exampleRequired && <span>This field is required</span>} */}
            </div>

            <div>
              <label className="d-block mt-2">Addres</label>
              <input
                defaultValue={mach?.addres}
                style={{ width: "100%" }}
                type="text"
                className=""
                {...register("addres")}
              />
            </div>
            <hr />
          </div>
          <div className="col-6">
            <div>
              <label className="d-block mt-2">Email</label>

              <input
                defaultValue={mach?.email}
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("email")}
              />
            </div>

            <div>
              <label className="d-block mt-2">National id number</label>
              <input
                defaultValue={mach?.nationalIdNumber}
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("nationalIdNumber")}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <hr className="inputColor" />
          <h4>Update Bike Details</h4>
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
                defaultValue={mach?.modle}
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("modle")}
              />
            </div>
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
                defaultValue={mach?.date}
                style={{ width: "100%" }}
                className=""
                type="date"
                {...register("date")}
              />
            </div>
            <div>
              <label className="d-block mt-3">Selling Price</label>
              <input
                defaultValue={mach?.sellingPrice}
                style={{ width: "100%" }}
                className=""
                type="number"
                {...register("sellingPrice")}
              />
            </div>
            <div className="">
              <label className="d-block">RC</label>

              <div className="d-flex align-items-center">
                <input
                  defaultValue={mach?.rc}
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
                  defaultValue={mach?.rc}
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
          </div>
          <div className="col-6">
           
            <div>
              <label className="d-block mt-2">Ragistration number</label>
              <input
                defaultValue={mach?.ragistrationNumber}
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("ragistrationNumber")}
              />
            </div>
            <div>
              <label className="d-block mt-3">Previous Name </label>
              <input
                defaultValue={mach?.previousOwnerName}
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("previousOwnerName")}
              />
            </div>
            <div>
              <label className="d-block  mt-3">Purchased By</label>
              <input
                defaultValue={mach?.purchasedBy}
                style={{ width: "100%" }}
                className=""
                type="text"
                {...register("purchasedBy")}
              />
            </div>
            <div>
              <label className="d-block mt-3">Buying price</label>
              <input
                defaultValue={mach?.buyingPrice}
                style={{ width: "100%" }}
                className=""
                type="number"
                {...register("buyingPrice")}
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
                defaultValue={mach?.purchasedExpenses}
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
                defaultValue={mach?.sellingExpenses}
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
                defaultValue={mach?.amount}
                style={{ width: "100%" }}
                className=""
                type="number"
                {...register("amount1")}
              />
            </div>
          </div>
          <div className="col-6 ">
            <div className="">
              <label className="d-block ">Amount</label>
              <input
                defaultValue={mach?.amount}
                style={{ width: "100%" }}
                className=""
                type="number"
                {...register("amount2")}
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

export default UpdateForm;
