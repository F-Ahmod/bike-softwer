import React from "react";

const SingleListPurchase = ({ purchase }) => {
  console.log(purchase);
  const { ownerName,email, addres, companyName,nationalIdNumber,registrationNumber,amount,_id,mobileNumber,date,rc,expence,purchasedBy,modle } = purchase;
  return (
  
    <tr>
   
    <td>
      <p class="text-heading font-semibold">
     {ownerName}
      </p>
    </td>
    <td>
      <p class="text-heading font-semibold">
     {email}
      </p>
    </td>
    <td>
      <p class="text-heading font-semibold">
     {mobileNumber}
      </p>
    </td>
    <td>
      <p class="text-heading font-semibold">
     {_id}
      </p>
    </td>
    <td>
      <p class="text-heading font-semibold">
     {addres}
      </p>
    </td>
    <td>
      <p class="text-heading font-semibold">
     {nationalIdNumber}
      </p>
    </td>
    <td>
      <p class="text-heading font-semibold">
     {registrationNumber}
      </p>
    </td>
    <td>
      <p class="text-heading font-semibold">
     {companyName}
      </p>
    </td>
    <td>
      <p class="text-heading font-semibold">
     {date}
      </p>
    </td>
    <td>
      <p class="text-heading font-semibold">
     {rc}
      </p>
    </td>

    
  </tr>
  );
};

export default SingleListPurchase;
