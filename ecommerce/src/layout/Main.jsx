import React from "react";
import ProductDetail from "../components/ProductDetail";

function Main() {
  return (
    <main>
      <header className="uppercase flex flex-col">
        <div className="flex flex-col gap-2 justify-center items-center py-6 md:py-20 bg-[#F4F5F8]">
          <h2 className="text-[1.1rem] md:text-[2.5rem] font-medium">TV Collection</h2>
          <p className="text-[0.62rem] md:text-[1.1rem] font-light tracking-[3px]">
            Home / Product / Tv Collection
          </p>
        </div>
      </header>
      <section className="flex flex-col items-center w-full">
        <ProductDetail />
      </section>
    </main>
  );
}

export default Main;
