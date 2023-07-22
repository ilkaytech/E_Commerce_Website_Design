function productsFunc() {
  const products = JSON.parse(localStorage.getItem("products"));

  products.forEach((item) => {
    console.log(item);
  });
}

export default productsFunc();
