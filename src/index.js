import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Card } from "./components/Card/Card";
import { Carousel } from "./components/Carousel/Carousel";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Card>
        <h6 className="card--title">Card title</h6>
        <Carousel>
          <h1>Hello</h1>
          <p>And another view</p>
          <form>
            <label>
              Name:
              <input type="text" />
            </label>
          </form>
          {/* add more children here to see more carousel screens */}
        </Carousel>
      </Card>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
