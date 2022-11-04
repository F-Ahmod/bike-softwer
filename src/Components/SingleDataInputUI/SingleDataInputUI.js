import React from "react";

const SingleDataInputUI = ({ dataInputUi }) => {
  const {
    
   
   
   
  
    _id,
    SellingPrice,
    BuyingPrice,
    purchasedBy,
    RagistrationNumber,
    date,
    model,
    rc,
  } = dataInputUi;
  return (
      <tr>
        <td>
          <p className="text-heading font-semibold"> {date}</p>
        </td>
        <td>
          <p className="text-heading font-semibold">{SellingPrice}</p>
        </td>
        <td>
          <p className="text-heading font-semibold">{RagistrationNumber}</p>
        </td>
        <td>
          <p className="text-heading font-semibold">{_id}</p>
        </td>
        <td>
          <p className="text-heading font-semibold">{model}</p>
        </td>
        <td>
          <p className="text-heading font-semibold">{BuyingPrice}</p>
        </td>
        <td>
          <p className="text-heading font-semibold">{purchasedBy}</p>
        </td>
        {/* <td>
          <p className="text-heading font-semibold">{companyName}</p>
        </td> */}
        {/* <td>
          <p className="text-heading font-semibold">{date}</p>
        </td> */}
        <td>
          <p className="text-heading font-semibold">{rc}</p>
        </td>
      </tr>
  );
};

export default SingleDataInputUI;
