import React, { useState } from "react";
import axios from "axios";
import { EditModal } from "./EditModal";

export const Row = (props) => {
  const [editBtn, setEditBtn] = useState(false);
  let deleteHandler = (id) => {
    axios.delete(`/delete/${id}`).then(() => window.location.reload(false));
  };
  let updateHandler = (id) => {
    // axios.patch(`/update/${id}`).then(() => window.location.reload(false));
    console.log(id);
  };
  return (
    <tr>
      <td>{props.number + 1}</td>
      <td>{props.category}</td>
      <td>{props.subCategory}</td>
      <td>{props.name}</td>
      <td>{props.types}</td>
      <td>{props.purchase}</td>
      <td>{props.sale}</td>
      <td>
        {" "}
        <button
          className="btn btn-danger mr-3"
          onClick={() => deleteHandler(props._id)}
        >
          Удалить
        </button>
        <button
          type="button"
          class="btn btn-warning"
          onClick={() => setEditBtn(true)}
        >
          Изменить
        </button>
        {editBtn ? (
          <EditModal click={() => setEditBtn(false)} _id={props._id} />
        ) : null}
      </td>
    </tr>
  );
};
