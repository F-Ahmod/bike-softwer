import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const LisstAllStaff = () => {
  const [allAdmin, setAllAdmin] = useState([]);
  
  const reamingData = (id) => {
    setAllAdmin(allAdmin.filter((admin) => admin._id !== id));
  };
  useEffect(() => {
    fetch("https://bike-soft.herokuapp.com/admin")
      .then((data) => data.json())
      .then((res) => {
        setAllAdmin(res);
      });
  }, []);
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
        fetch(`https://bike-soft.herokuapp.com/admin/${id}`, {
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
    <div>
      <div className="table-responsive">
        <table className="table table-hover mt-3 ms-5">
          <thead className="thead-light">
           
              <th  scope="col" >All Staff Email</th>
              <th scope="col">Action</th>
           
          </thead>
          <tbody>
            {allAdmin?.map((admin) => (
              
                <tr>
                  <td className="ms-3">
                    <p className="text-heading font-semibold ">
                      {admin.email}
                    </p>
                  </td>
                  <td>
                    <button
                      onClick={() => handelDelete(admin._id)}
                      type="button"
                      className="btn btn-sm btn-square btn-neutral text-danger-hover bg-danger"
                    >
                      <i className="bi bi-trash text-light"></i>
                    </button>
                  </td>
                </tr>
             
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LisstAllStaff;
