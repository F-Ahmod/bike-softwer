import React, { useEffect, useState } from "react";
import ReactPrint from "react-to-print";
import { useRef } from "react";
import "./Invoice.css";

import { useParams } from "react-router-dom";

const Invoice = () => {
  const { _id } = useParams();

  const [details, setDetails] = useState([]);
  const [total, setTotal] = useState([]);
  const [amount_Paid, setAmount_Paid] = useState([]);

  const handleTotal = event => {
    setTotal(event.target.value);
  }; 
  console.log(total);
  const handleAmount_Paid = event => {
    setAmount_Paid(event.target.value);
  }; 
 const totalDue= total-amount_Paid



  useEffect(() => {
    fetch(`https://bike-soft.herokuapp.com/purchase`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  const mach = details?.find((a) => a?._id === _id);

  const ref = useRef();
  return (
    <div ref={ref} className="header mx-auto  m-5">
      <h1 className="h1 mb-5">Invoice</h1>
 
      <hr className="bg-dark" />
      <address>
        <h5>Recive</h5>
        <p>
          <>Owner {mach?.ownerName}</>
          <br />
          <>Adddress {mach?.addres}</>
        </p>
      </address>
      <table className="meta table">
        <tr>
          <th className="">
            <span>Invoice_id</span>
          </th>
          <td className="td">
            <span>{mach?._id.slice(0, 5)}</span>
          </td>
        </tr>
      </table>
      <article>
        <div className="mb-5 mt-5">
          <table class="table table-bordered ">
            <thead>
              <p className="mb-3 info">Information</p>
              <tr>
                <th scope="col">Bike Model</th>
                <th scope="col">Year</th>
                <th scope="col">Ragistration Number</th>
                <th scope="col">Company Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{mach?.modle}</th>
                <td>{mach?.year}</td>
                <td>{mach?.ragistrationNumber}</td>
                <td>{mach?.companyName}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="">
          <table class="table table-bordered ">
            <thead>
              <tr>
                <th scope="col">Bike Model</th>
                <th scope="col">Year</th>
                <th scope="col">Ragistration Number</th>
                <th scope="col">Company Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{mach?.modle}</th>
                <td>{mach?.year}</td>
                <td>{mach?.ragistrationNumber}</td>
                <td>{mach?.companyName}</td>
              </tr>
            </tbody>
          </table>
        </div>
       
        <table className="balance">
          <tr>
            <th className="th">
              <span className="span mt-3">Total</span>
            </th>
            <td >
            <input className="text-center" type="number" placeholder="$ 000" onChange={handleTotal}/>
            </td>
          </tr>
          <tr>
            <th >
              <span className=" mt-3 me-3">Amount_Paid</span>
            </th>
            <td >
            <input className=" text-center" type="number" placeholder="$ 000" onChange={handleAmount_Paid}/>
            </td>
          </tr>
          <tr>
            <th>
              <span >Balance_Due</span>
            </th>
            <td className="mt-3">
           <span style={{marginRight:"95px"}} >$ {totalDue}</span>
            </td>
          </tr>


          
        </table>
      </article>
      <hr />
      <aside>
        {/* <h1 className="h1">
          <span >Additional Notes</span>
        </h1> */}
        <div>
          {/* <p>
            A finance charge of 1.5% will be made on unpaid balances after 30
            days.
          </p> */}
        </div>
      </aside>

    
      <ReactPrint
        trigger={() => <button>Print</button>}
        content={() => ref.current}
      />

    </div>
    
  );
};

export default Invoice;
