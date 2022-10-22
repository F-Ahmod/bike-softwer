import React from "react";

const SingleListPurchase = ({ purchase }) => {
  console.log(purchase);
  const { ownerName,email, addres, companyName,nationalIdNumber,registrationNumber,amount,_id,mobileNumber,date,rc,expence,prossedName,modle } = purchase;
  return (
    // <div className="me-2 ">
    //   <div className="card" style={{ width: "18rem" }}>
    //     <div className="card-body">
    //       <h6 className="card-title">Owner Name:- {ownerName}</h6>
    //       <h6 className="card-subtitle mb-2 ">Company Name:- {companyName}</h6>
    //       <h6 className="card-subtitle mb-2 ">Addres:-  {addres}</h6>
         
    //     </div>
    //   </div>
    // </div>
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
