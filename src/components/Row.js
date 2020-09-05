import React from "react";
import axios from "axios";
export const Row = (props) => {
  let deleteHandler = (id) => {
    axios.delete(`/delete/${id}`).then(() => window.location.reload(false));
  };
  return (
    <tr>
      <td>1</td>
      <td>{props.category}</td>
      <td>{props.subCategory}</td>
      <td>{props.name}</td>
      <td>{props.types}</td>
      <td>{props.purchase}</td>
      <td>{props.sale}</td>
      <button class="btn-danger" onClick={() => deleteHandler(props._id)}>
        -
      </button>
    </tr>
  );
};
