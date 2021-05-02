//jshint esversion: 8

import React from "react"

addProduct = (product, callback) => {
  let products = this.state.products.slice();
  products.push(product);
  this.setState({ products }, () => callback && callback());
};

async componentDidMount() {
  let user = localStorage.getItem("user");
  const products = await axios.get('http://localhost:3001/products');
  user = user ? JSON.parse(user) : null;
  this.setState({ user,  products: products.data });
}

export default App;
