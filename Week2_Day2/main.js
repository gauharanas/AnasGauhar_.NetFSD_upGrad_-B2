import { generateInvoice } from "./problem2.js";

const products = [
  { name: "Laptop", price: 50000, quantity: 1 },
  { name: "Mouse", price: 500, quantity: 2 },
  { name: "Keyboard", price: 1500, quantity: 1 },
];

console.log(generateInvoice(products));
