
export const calculateTotal = (products) =>
  products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

export const generateInvoice = (products) => {
  const itemsList = products
    .map(
      (p) =>
        `${p.name} (₹${p.price} x ${p.quantity}) = ₹${
          p.price * p.quantity
        }`
    )
    .join("\n");

  const total = calculateTotal(products);

  return `
  -------- INVOICE --------
  ${itemsList}
  -------------------------
  Total: ₹${total}
  `;
};
