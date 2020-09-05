import React from "react";
import "./App.scss";
// import Axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { Form } from "./components/Form";
import { List } from "./components/List";
function App() {
  // Axios({
  //   method: "GET",
  //   url: "/",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // }).then((req, res) => {
  //   console.log(res.data);
  // });
  return (
    <div className="App">
      <div className="px-5 py-2">
        <Form />
        <List />
      </div>
    </div>
  );
}

export default App;
