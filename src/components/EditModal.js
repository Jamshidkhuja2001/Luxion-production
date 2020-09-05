import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Ochishenie,
  Uxod,
  Dekorativ,
  Gigienik,
  Nabor,
  Parfyum,
} from "./options/index";

export const EditModal = (props) => {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [name, setName] = useState("");
  const [types, setTypes] = useState("");
  const [purchase, setPurchase] = useState("");
  const [sale, setSale] = useState("");
  const [product, setProduct] = useState("");
  useEffect(() => {
    axios
      .get(`/luxion/${props._id}`)
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const [selectedCategory, setSelectedCategory] = useState("");
  let Option = () => <ochishenie />;
  if (selectedCategory === "Очищение") Option = () => <Ochishenie />;
  if (selectedCategory === "Уход") Option = () => <Uxod />;
  if (selectedCategory === "Декоратив") Option = () => <Dekorativ />;
  if (selectedCategory === "Гигиеник") Option = () => <Gigienik />;
  if (selectedCategory === "Набор") Option = () => <Nabor />;
  if (selectedCategory === "Парфюм") Option = () => <Parfyum />;

  const handleSubmit = (e) => {
    const product = {
      category: category,
      subCategory: subCategory,
      name: name,
      types: types,
      purchase: purchase,
      sale: sale,
    };
    const updatedProduct = {
      category,
      subCategory,
      name,
      types,
      purchase,
      sale,
    };
    // JSON.parse(product);
    axios.patch(`/update/${props._id}`, updatedProduct).then((res) => {
      console.log(res.data);
    });

    console.log(product);
  };
  return (
    <form onSubmit={handleSubmit} className="form-edit pb-4">
      <button
        onClick={props.click}
        type="button"
        class="close"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <div className="d-flex flex-column">
        <label htmlFor="cars">Категория</label>
        <select
          name=""
          id=""
          className="selector"
          onChange={(e) => {
            console.log(e.target.value);
            setSelectedCategory(e.target.value);
            return setCategory(e.target.value) && props.state(e.target.value);
          }}
          value={category}
        >
          <option value="">Выберите</option>
          <option value="Очищение">Очищение</option>
          <option value="Уход">Уход</option>
          <option value="Декоратив">Декоратив</option>
          <option value="Гигиеник">Гигиеник</option>
          <option value="Набор">Набор</option>
          <option value="Парфюм">Парфюм</option>
        </select>
      </div>
      <div className="d-flex flex-column">
        <label htmlFor="cars">Суб-Категория</label>
        <select
          name=""
          id=""
          className="selector"
          onChange={(e) => setSubCategory(e.target.value)}
          value={subCategory}
        >
          <Option />
        </select>
      </div>
      <div className="d-flex flex-column">
        <label htmlFor="cars">Имя Продукта</label>
        <input
          required
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
        />
      </div>
      <div className="d-flex flex-column">
        <label htmlFor="cars">Тип Продукта</label>
        <input
          required
          type="text"
          onChange={(e) => setTypes(e.target.value)}
          value={types}
        />
      </div>
      <div className="d-flex flex-column">
        <label htmlFor="cars">Покупаемая Цена </label>
        <input
          required
          type="number"
          onChange={(e) => setPurchase(e.target.value)}
          value={purchase}
        />
      </div>
      <div className="d-flex flex-column">
        <label htmlFor="cars">Продаваемая Цена </label>
        <input
          required
          type="number"
          onChange={(e) => setSale(e.target.value)}
          value={sale}
        />
      </div>
      <div className="d-flex flex-column mt-4">
        <button type="submit" className="btn btn-primary">
          Изменить
        </button>
      </div>
    </form>
  );
};
