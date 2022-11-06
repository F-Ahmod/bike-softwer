import React from "react";

const SingleDataInputUI = ({ dataInputUi }) => {
  const {
    serial,name,year,RagistrationNumber,rc,yardRent,expenceDocu,transportMils,petrol,spareParts,patchPaint,cost,priceSold,amount,insur,tyre,ser,oter,totalExp,profit} = dataInputUi;
  return (
      <tr>
        <td>
          <p className="text-heading font-semibold"> {serial}</p>
        </td>
        <td>
          <p className="text-heading font-semibold">{name}</p>
        </td>
        <td>
          <p className="text-heading font-semibold">{rc}</p>
        </td>
        <td>
          <p className="text-heading font-semibold">{year}</p>
        </td>
        <td>
          <p className="text-heading font-semibold">{RagistrationNumber}</p>
        </td>
        <td>
          <p className="text-heading font-semibold">{amount}</p>
        </td>
        <td>
          <p className="text-heading font-semibold">{yardRent}</p>
        </td>
        <td>
          <p className="text-heading font-semibold">{expenceDocu}</p>
        </td>
        <td>
          <p className="text-heading font-semibold">{transportMils}</p>
        </td>
        <td>
          <p className="text-heading font-semibold">{petrol}</p>
        </td>
        <td>
          <p className="text-heading font-semibold">{spareParts}</p>
        </td>
        <td>
          <p className="text-heading font-semibold">{patchPaint}</p>
        </td>
        <td>
          <p className="text-heading font-semibold">{insur}</p>
        </td>
        <td>
          <p className="text-heading font-semibold">{tyre}</p>
        </td>
        <td>
          <p className="text-heading font-semibold">{ser}</p>
        </td>
        <td>
          <p className="text-heading font-semibold">{oter}</p>
        </td>
        <td>
          <p className="text-heading font-semibold">{totalExp}</p>
        </td>
        <td>
          <p className="text-heading font-semibold">{cost}</p>
        </td>
        <td>
          <p className="text-heading font-semibold">{priceSold}</p>
        </td>
        <td>
          <p className="text-heading font-semibold">{profit}</p>
        </td>
      </tr>
  );
};

export default SingleDataInputUI;
