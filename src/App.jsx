function App() {
  //OBJECTS
  const products = [
    { name: "Book", price: 30, quantity: 4 },
    { name: "Car", price: 40, quantity: 5 },
    { name: "Darts", price: 50, quantity: 2 },
    { name: "Speaker", price: 60, quantity: 9 },
  ];

  function calculateTotalPrice(products) {
    return products.price * products.quantity;
  }

  function printProductInfo() {
    const allProducts = [];

    products.forEach((product, index) => {
      allProducts.push(
        <div
          key={index}
          style={{
            border: "1px solid grey",
            marginBottom: "10px",
            borderRadius: "8px",
            padding: "5px",
          }}
        >
          <h2>
            The product's name:
            <span style={{ color: "purple" }}>{product.name}</span>
          </h2>
          <p>The Product's Price: {product.price}</p>
          <p>The product's quantity: {product.quantity}</p>
          <h3>
            The product's total price:
            <span style={{ color: "green" }}>
              &nbsp;${calculateTotalPrice(product)}
            </span>
          </h3>
        </div>
      );
    });
    return <div>{allProducts}</div>;
  }

  return printProductInfo();
}

export default App;
