import * as React from "react";
import "./global";
import { ProductsContainer } from "./components/products";
import { hot } from "react-hot-loader/root";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <ProductsContainer />
    </div>
  );
}

export default hot(App);
