import React, { useEffect, useState } from "react";
import ReactPrint from "react-to-print";
import { useRef } from "react";
import "./Invoice.css";
import useFirebase from "../../Firebase/useFirebase";
import { Link } from "react-router-dom";

const Invoice = () => {
  const [purchases, setPurchases] = useState([]);
  
  useEffect(() => { 
    fetch("https://bike-soft.herokuapp.com/purchase")
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        setPurchases(res);
        
      });
  }, []);
  const {  user } = useFirebase();
  console.log(user?._id);
  const ref=useRef();
  return (
    <div ref={ref} className="header mx-auto align-self-center m-5">
     
      <div  className="">
        <h1 className="h1 mb-5">Invoice</h1>
        <hr />
        <address >
          <p>Email: {user?.email}</p>
         
          {/* {purchases?.map((data) => (
             <p>{data.addres}</p>   
              ))} */}
             
            
         
          {/* <p>Phone: (800) 555-1234</p>  */}
        </address>
        <span className="span">
          <img
            alt=""
            src="http://www.jonathantneal.com/examples/invoice/logo.png"
          />
          <input type="file" accept="image/*" />
        </span>
      </div>
      <article>
        {/* <h1 className="h1">Recipient</h1>
        <address >
          <p>
            Some Company
            <br />
            c/o Some Guy
          </p>
        </address> */}
        <table className="meta table">
          <tr>
            <th className="">
              <span >Invoice_id</span>
            </th>
            <td className="td">
              <span >{user?._id}</span>
            </td>
          </tr>
          {/* <tr>
            <th className="th">
              <span >Date</span>
            </th>
            <td className="td">
              <span >January 1, 2012</span>
            </td>
          </tr> */}
          <tr>
            <th className="th">
              <span >Amount_Due</span>
            </th>
            <td className="td">
              {/* <span className="span" id="prefix" >
                $
              </span> */}
              <span className="span">$ 600.00</span>
            </td>
          </tr>
        </table>
        <table className="inventory">
          <thead>
            <tr>
              <th className="th">
                <span >Item</span>
              </th>
              <th className="th">
                <span >Description</span>
              </th>
              <th className="th">
                <span >Rate</span>
              </th>
              <t className="th">
                <span >Quantity</span>
              </t>
              <th className="th">
                <span >Price</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="td">
                <Link  href="" className="#">-</Link>
                <span >Bike</span>
              </td>
              <td className="td">
                <span >Experience Review</span>
              </td>
              <td className="td">
                {/* <span data-prefix>$</span> */}
                <span >150.00</span>
              </td>
              <td className="td">
                <span >4</span>
              </td>
              <td className="td">
                {/* <span data-prefix>$</span> */}
                <span>600.00</span>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <a className="add">+</a> */}
        <table className="balance">
          <tr>
            <th className="th">
              <span className="span" >
                Total
              </span>
            </th>
            <td className="td">
              {/* <span data-prefix>$</span> */}
              <span>$ 600.00</span>
            </td>
          </tr>
          <tr>
            <th className="th">
              <span >Amount_Paid</span>
            </th>
            <td className="td">
              {/* <span data-prefix>$</span> */}
              <span >$ 0.00</span>
            </td>
          </tr>
          <tr>
            <th className="th">
              <span >Balance_Due</span>
            </th>
            <td>
              {/* <span data-prefix>$</span> */}
              <span>$ 600.00</span>
            </td>
          </tr>
        </table>
      </article>
      <hr />
      <aside>
        {/* <h1 className="h1">
          <span >Additional Notes</span>
        </h1> */}
        <div >
          {/* <p>
            A finance charge of 1.5% will be made on unpaid balances after 30
            days.
          </p> */}
        </div>
      </aside>
      <ReactPrint trigger={()=><button>Print</button>} content={()=>ref.current}/>
    </div>
  );
};

export default Invoice;
