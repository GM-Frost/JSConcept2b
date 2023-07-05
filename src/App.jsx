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

  function printProductInfo(products) {
    return (
      <>
        <div>The Product's name is : {products.name}</div>
        <div>The product's price : {products.price}</div>
        <div>The product's quantity : {calculateTotalPrice(products)}</div>
      </>
    );
  }
  return printProductInfo(products[0]);
}

export default App;
