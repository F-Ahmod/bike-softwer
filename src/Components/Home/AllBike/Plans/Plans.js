import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import useFirebase from "../../../../Firebase/useFirebase";

const Plans = ({ plan }) => {
  const { title, _id } = plan;
  const [msg, setMsg] = useState("");
  const { user } = useFirebase();

  return (
    <tr>
      <td>
        <p className="text-heading font-semibold">
          {title}
        </p>
      </td>

      <td className="text-end">
        <a href="#" className="btn btn-sm btn-neutral me-2">
          Update
        </a>
        <button
          type="button"
          className="btn btn-sm btn-square btn-neutral text-danger-hover"
        >
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default Plans;
