import { Button } from "react-bootstrap";
import React, { useState} from "react";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import useFirebase from "../../Firebase/useFirebase";
import { v4 } from "uuid";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  
} from "firebase/storage";

const AddBike = () => {
  const { storage } = useFirebase();
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [name,setName] = useState('')

  const onSubmit = async () => {
   try{
    const date = new Date().toISOString().split("T")[0];
    if (imageUrls.length===0){
      return alert('U have to upload image')
    };
    if(!name)return alert("Title required");
    setIsLoading(true);
    await axios.post("https://bike-soft.herokuapp.com/addBikes ", {
      title:name,
      imageUrls,
      created_at: date,
      updated_at: date,
    });
    setMsg(() => "Bike Added succesfully");
    setIsLoading(false);
    setName("")
    setImageUrls([])
    setTimeout(() => setMsg(""), 3000);
   }catch(err){
    console.log(err)
    setIsLoading(false)
   }
  };
  const imagesListRef = ref(storage, "images/");
  const uplodFile = () => {
    if (imageUpload == null) return;
    if(imageUrls.length=== 4){
      return alert("Uploaded images maxiumum 4.")
    }
    setIsLoading(true)
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
    setIsLoading(false)
        
      });
    });
  };

  return (
    <div
      style={{ width: "90%", background: "#FFFFFF" }}
      className="rounded shadow-sm mt-5 mx-auto  p-3 "
    >
      {msg && <Alert variant="success">{msg}</Alert>}
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <input
          style={{ width: "80%" }}
          className="input-field"
          defaultValue={name}
          onChange={e => setName(e.target.value)}
          placeholder="Title"
        />
        <br />
      
        <input
          type="file"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />
        <button onClick={uplodFile}>uploded</button>
        {imageUrls.map((url) => {
          return <img width="100px" height="100%" src={url} alt=""/>;
        })}
        

        <br />
        {isLoading ? (
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        ) : (
          <input className="mt-3 buttom" type="button" value="submit" onClick={onSubmit} />
        )}
      {/* </form> */}


    </div>
  );
};

export default AddBike;
