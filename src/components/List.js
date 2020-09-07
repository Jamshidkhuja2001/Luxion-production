import React, { useState, useEffect } from "react";
import { Row } from "./Row";
import axios from "axios";

export const List = (props) => {
  const [render, setRender] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("/luxion")
      .then((res) => {
        setProducts(res.data.products);
        setRender(false);
        props.setRenderState(false);
      })
      .catch((error) => console.log(error));
  }, [render, props.renderState]);

  return (
    <table className="table table-striped table-responsive-md table-responsive-sm">
      <thead>
        <tr>
          <th>№</th>
          <th>Категория</th>
          <th>Суб-категория</th>
          <th>Имя продукта</th>
          <th>Тип</th>
          <th>Покуп</th>
          <th>Продаж</th>
          <th>Операции</th>
        </tr>
      </thead>
      <tbody>
        {products.map((data) => (
          <Row
            key={data._id}
            _id={data._id}
            category={data.category}
            subCategory={data.subCategory}
            name={data.name}
            types={data.types}
            purchase={data.purchase}
            sale={data.sale}
            number={products.indexOf(data)}
            renderState={setRender}
            render={props.setRenderState}
            renderValue={props.renderState}
          />
        ))}
      </tbody>
    </table>
  );
};
