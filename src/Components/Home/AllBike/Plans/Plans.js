import React, { useState } from "react";
import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

const Plans = ({ plan, reamingData, loadData }) => {
  const { title,_id, imageUrls } = plan;
  const [updatedName, setUpdatedName] = useState(title || "");
 // const [updatedImage, setUpdatedImage] = useState(imageUrls || "");
  const [show, setShow] = useState(false);
  //const [showw, setShoww] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 // const handleShoww = () => setShoww(true);

  const updateName = async () => {
    setLoading(true);
    await axios.put(
      `https://bike-soft.herokuapp.com/updateName?id=${plan._id}`,
      { name: updatedName }
    );
    loadData();
    setLoading(false);
    handleClose();
  };

  // const updateImage = async () => {
  //   setLoading(true);
  //   await axios.put(
  //     `https://bike-soft.herokuapp.com/updateImage?id=${plan._id}`,
  //     { imageUrls: updatedImage }
  //   );
  //   loadData();
  //   setLoading(false);
  //   handleClose();
  // };

  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Delete forever",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://bike-soft.herokuapp.com/addBikes/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            reamingData(id);

            if (data.deletedCount > 0) {
              Swal.fire("Deleted", "this Order deleted.", "successful");
              // setDelete(true);
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
              // setDelete(false);
            }
          });
      }
    });
  };
  return (
    <>
      <tr>
        <td>
          <p className="text-heading font-semibold">{title}</p>
        </td>
        <td>
          <p className="text-heading font-semibold">{_id.slice(3, 7)}</p>
        </td>
        <td>
        
          {/* {imageUrls?.map((url) => { */}
             <img width="100px" height="100%" src={imageUrls[0]} alt="" />;
          {/* })} */}
        </td>

        <td className="text-end">
          

          <button
            onClick={handleShow}
            type="button"
            className="btn btn-sm me-2 btn-square btn-neutral text-danger-hover bg-success"
          >
            <i className="bi bi-pen text-light"></i>
          </button>
          {/* <button
            onClick={handleShoww}
            type="button"
            className="btn btn-sm me-2 btn-square btn-neutral text-danger-hover bg-success"
          >
            <i className="bi bi-pen text-light"></i>
          </button> */}

          <button
            onClick={() => handelDelete(plan._id)}
            type="button"
            className="btn btn-sm btn-square btn-neutral text-danger-hover bg-danger"
          >
            <i className="bi bi-trash text-light"></i>
          </button>
        </td>
      </tr>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            defaultValue={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
            classNameName="w-100 d-block"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {loading ? (
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
            <Button variant="primary" onClick={updateName}>
              Save
            </Button>
          )}
        </Modal.Footer>
      </Modal>
{/* 
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            defaultValue={updatedName}
            onChange={(e) => updateImage(e.target.value)}
            classNameName="w-100 d-block"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {loading ? (
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
            <Button variant="primary" onClick={updateImage}>
              Save
            </Button>
          )}
        </Modal.Footer>
      </Modal> */}
    </>
  );
};

export default Plans;
