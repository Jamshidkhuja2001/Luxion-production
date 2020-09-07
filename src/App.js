import React, { useState } from "react";
import "./App.scss";
// import Axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { Form } from "./components/Form";
import { List } from "./components/List";
function App() {
  const [renderState, setRenderState] = useState(false);

  return (
    <div className="App">
      <div className="px-5 py-2">
        <Form renderState={setRenderState} />
        <List renderState={renderState} setRenderState={setRenderState} />
      </div>
    </div>
  );
}

export default App;
