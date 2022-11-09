import React from "react";

const SingleDataInputUI = ({ dataInputUi }) => {
  const {
    serial,asset,year,ragistrationNumber,rc,yardRent,expenceDocu,transportMils,petrol,spareParts,patchPaint,cost,priceSold,amount,insurance,tyre,ser,other,totalExp} = dataInputUi;

    const profiet = parseInt(amount)- parseInt(yardRent) - parseInt(expenceDocu) - parseInt(transportMils) - parseInt(petrol) - parseInt(spareParts) -  parseInt(patchPaint) - parseInt(insurance) - parseInt(tyre) - parseInt(ser) - parseInt(other) - parseInt(totalExp) - parseInt(cost)
  return (
      <tr>
        <td>
          <p className="text-heading font-semibold"> {serial}</p>
        </td>
        <td>
          <p className="text-heading font-semibold">{asset}</p>
        </td>
        <td>
          <p className="text-heading font-semibold">{rc}</p>
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
          <p className="text-heading font-semibold">{insurance}</p>
        </td>
        <td>
          <p className="text-heading font-semibold">{tyre}</p>
        </td>
        <td>
          <p className="text-heading font-semibold">{ser}</p>
        </td>
        <td>
          <p className="text-heading font-semibold">{other}</p>
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
          <p className="text-heading font-semibold">{profiet}</p>
        </td>
      </tr>
  );
};

export default SingleDataInputUI;
