import React from "react";
import ProductDashBoard from "./components/ProductDashBoard";

const getProduct = async () => {
  const res = await fetch(
    "https://nextjs13-ecommerce.onrender.com/api/product",
    { next: { revalidate: 0 } }
  );

  if (!res.ok) {
    console.log("Failed to fetch data");
  }

  const product = await res.json();
  return product;
};

async function Products() {
  const productData = await getProduct();

  return (
    <main className="flex flex-col items-center h-screen justify-center max-w-[1150px] w-full">
      <ProductDashBoard  />
    </main>
  );
}

export default Products;
