import React from "react";

const SingleListPurchase = ({ purchase }) => {
 
  const { ownerName,email, addres, companyName,nationalIdNumber,registrationNumber,_id,mobileNumber,date,rc } = purchase;
  return (
  
    <tr>
   
    <td>
      <p className="text-heading font-semibold">
     {ownerName}
      </p>
    </td>
    <td>
      <p className="text-heading font-semibold">
     {email}
      </p>
    </td>
    <td>
      <p className="text-heading font-semibold">
     {mobileNumber}
      </p>
    </td>
    <td>
      <p className="text-heading font-semibold">
     {_id}
      </p>
    </td>
    <td>
      <p className="text-heading font-semibold">
     {addres}
      </p>
    </td>
    <td>
      <p className="text-heading font-semibold">
     {nationalIdNumber}
      </p>
    </td>
    <td>
      <p className="text-heading font-semibold">
     {registrationNumber}
      </p>
    </td>
    <td>
      <p className="text-heading font-semibold">
     {companyName}
      </p>
    </td>
    <td>
      <p className="text-heading font-semibold">
     {date}
      </p>
    </td>
    <td>
      <p className="text-heading font-semibold">
     {rc}
      </p>
    </td>

    
  </tr>
  );
};

export default SingleListPurchase;
