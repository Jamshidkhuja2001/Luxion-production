import React, { useState, useEffect, Component } from "react";
import { Row } from "./Row";
import axios from "axios";

export const List = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("/luxion")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(products);

  // const prods = [
  //   {
  //     category: "category",
  //     subCategory: "subCategory",
  //     name: "yrwyw",
  //     types: "yrwywy",
  //     purchase: 5325,
  //     sale: 6426,
  //   },
  //   {
  //     category: "category",
  //     subCategory: "subCategory",
  //     name: "yrwyw",
  //     types: "yrwywy",
  //     purchase: 5325,
  //     sale: 6426,
  //   },
  //   {
  //     category: "category",
  //     subCategory: "subCategory",
  //     name: "yrwyw",
  //     types: "yrwywy",
  //     purchase: 5325,
  //     sale: 6426,
  //   },
  //   {
  //     category: "category",
  //     subCategory: "subCategory",
  //     name: "yrwyw",
  //     types: "yrwywy",
  //     purchase: 5325,
  //     sale: 6426,
  //   },
  // ];
  return (
    <table style={{ width: "100%" }} className="my-2">
      <thead>
        <tr>
          <th>№</th>
          <th>Категория</th>
          <th>Суб-категория</th>
          <th>Имя продукта</th>
          <th>Тип</th>
          <th>Покуп</th>
          <th>Продаж</th>
          {/* <th>-</th>
        <th>edit</th> */}
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
          />
        ))}
      </tbody>
    </table>
  );
};

// class List extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       category: this.category,
//       subCategory: this.subCategory,
//       name: this.name,
//       types: this.types,
//       purchase: this.purchase,
//       sale: this.sale,
//     };
//   }
//   componentDidMount() {
//     axios
//       .get("/luxion")
//       .then((res) => {
//         let products = res.data.products;
//         products = this.state;
//         console.log(products);
//       })
//       .catch((error) => console.log(error));
//   }
//   render() {
//     const { prods } = this.state;

//     return (
//       <table style={{ width: "100%" }} className="my-2">
//         <thead>
//           <tr>
//             <th>№</th>
//             <th>Категория</th>
//             <th>Суб-категория</th>
//             <th>Имя продукта</th>
//             <th>Тип</th>
//             <th>Покуп</th>
//             <th>Продаж</th>
//             {/* <th>-</th>
//           <th>edit</th> */}
//           </tr>
//         </thead>
//         <tbody>
//           {prods.map((data) => (
//             <Row category={data.category} />
//           ))}
//         </tbody>
//       </table>
//     );
//   }
// }

// export default List;
