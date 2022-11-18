import React, { useEffect, useState } from "react";

const LisstAllStaff = () => {
  const [allAdmin, setAllAdmin] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/admin")
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        setAllAdmin(res);
      });
  }, []);

  return (
    <div>
      <div className="table-responsive">
        <table className="table table-hover ">
          <thead className="thead-light">
            <tr>
              <th scope="col">All Staff Email</th>
            </tr>
          </thead>
          <tbody>
            {allAdmin?.map((admin) => (
              <div>
                <tr >
                  <td>
                    <p className="text-heading font-semibold ms-5">{admin.email}</p>
                  </td>
                </tr>
              </div>
            ))}
          </tbody>


        </table>
        
      </div>
    </div>
  );
};

export default LisstAllStaff;
