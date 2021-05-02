//jshint esversion: 8

import React from "react"

addProduct = (product, callback) => {
  let products = this.state.products.slice();
  products.push(product);
  this.setState({ products }, () => callback && callback());
};

export default App;
