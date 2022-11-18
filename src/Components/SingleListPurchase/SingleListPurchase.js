import React from "react";
import { Link } from "react-router-dom";
import { FaFileInvoiceDollar } from 'react-icons/fa';

const SingleListPurchase = ({ purchase }) => {
  const {
    ownerName,
    email,
    addres,
    amount1,
    amount2,
    
    nationalIdNumber,
    ragistrationNumber,
    _id,
    mobileNumber,
    date,
    rc
  } = purchase;
  return (
    <tr>
      <td>
        <p className="text-heading font-semibold">{ownerName}</p>
      </td>
      <td>
        <p className="text-heading font-semibold">{email}</p>
      </td>
      <td>
        <p className="text-heading font-semibold">{mobileNumber}</p>
      </td>
      <td>
        <p className="text-heading font-semibold">{_id.slice(3,7)}</p>
      </td>
      <td>
        <p className="text-heading font-semibold">{addres}</p>
      </td>
      <td>
        <p className="text-heading font-semibold">{nationalIdNumber}</p>
      </td>
      <td>
        <p className="text-heading font-semibold">{ragistrationNumber}</p>
      </td>
      {/* <td>
        <p className="text-heading font-semibold">{companyName}</p>
      </td> */}
      <td>
        <p className="text-heading font-semibold">{date}</p>
      </td>
      
    
      <td>
      <p className="text-heading font-semibold">{rc}</p>
     
      </td>
      
      <td>
      <Link to={`/updateForm/${_id}`}>
            <button
              // onClick={handleShow}
              type="button"
              className="btn btn-sm me-2 btn-square btn-neutral text-danger-hover bg-success"
            >
              <i className="bi bi-pen text-light"></i>
            </button>
          </Link>

          <Link to={`/invoice/${_id}`}>
            <button
              // onClick={handleShow}
              type="button"
              className="btn btn-sm me-2 btn-square btn-neutral text-danger-hover bg-dark"
            >
              <FaFileInvoiceDollar className="text-light"/>
             
            </button>
          </Link>
      </td>
    </tr>
  );
};

export default SingleListPurchase;
