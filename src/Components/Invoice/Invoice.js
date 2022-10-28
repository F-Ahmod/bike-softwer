import React from "react";
import "./Invoice.css";

const Invoice = () => {
  return (
    <div className="header mx-auto align-self-center m-5">
     
      <div>
        <h1 className="h1 mb-5">Invoice</h1>
        <hr />
        <address contenteditable>
          <p>Name: Jonathan Neal</p>
          <p>
            Address: 101 E. Chapman Ave
            <br />
            Orange, CA 92866
          </p>
          <p>Phone: (800) 555-1234</p>
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
        <address contenteditable>
          <p>
            Some Company
            <br />
            c/o Some Guy
          </p>
        </address> */}
        <table class="meta table">
          <tr>
            <th className="">
              <span >Invoice_id</span>
            </th>
            <td className="td">
              <span >101138</span>
            </td>
          </tr>
          <tr>
            <th className="th">
              <span >Date</span>
            </th>
            <td className="td">
              <span >January 1, 2012</span>
            </td>
          </tr>
          <tr>
            <th className="th">
              <span >Amount_Due</span>
            </th>
            <td className="td">
              {/* <span className="span" id="prefix" contenteditable>
                $
              </span> */}
              <span className="span">$ 600.00</span>
            </td>
          </tr>
        </table>
        <table class="inventory">
          <thead>
            <tr>
              <th className="th">
                <span >Item</span>
              </th>
              <th className="th">
                <span contenteditable>Description</span>
              </th>
              <th className="th">
                <span contenteditable>Rate</span>
              </th>
              <t className="th">
                <span contenteditable>Quantity</span>
              </t>
              <th className="th">
                <span contenteditable>Price</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="td">
                <a  href="" class="#">-</a>
                <span contenteditable>Bike</span>
              </td>
              <td className="td">
                <span contenteditable>Experience Review</span>
              </td>
              <td className="td">
                {/* <span data-prefix>$</span> */}
                <span contenteditable>150.00</span>
              </td>
              <td className="td">
                <span contenteditable>4</span>
              </td>
              <td className="td">
                {/* <span data-prefix>$</span> */}
                <span>600.00</span>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <a class="add">+</a> */}
        <table class="balance">
          <tr>
            <th className="th">
              <span className="span" contenteditable>
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
              <span contenteditable>Amount_Paid</span>
            </th>
            <td className="td">
              {/* <span data-prefix>$</span> */}
              <span contenteditable>$ 0.00</span>
            </td>
          </tr>
          <tr>
            <th className="th">
              <span contenteditable>Balance_Due</span>
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
          <span contenteditable>Additional Notes</span>
        </h1> */}
        <div contenteditable>
          <p>
            A finance charge of 1.5% will be made on unpaid balances after 30
            days.
          </p>
        </div>
      </aside>
    </div>
  );
};

export default Invoice;
