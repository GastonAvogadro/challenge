import { useState } from "react";
import remove from "../assets/detail/remove.png";
import add from "../assets/detail/add.png";

function Payment() {
  const [counter, setCounter] = useState(1);

  const handleDecrement = () => counter > 1 && setCounter((prev) => prev - 1);
  const handleIncrement = () => counter < 9 && setCounter((prev) => prev + 1);

  return (
    <section className="my-6 mb-14 md:mb-0">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div>
          <p>USD(incl. of all taxes)</p>
          <div className="flex gap-2 items-center my-2">
            <p className="text-[2rem]">$600.72</p>
            <p className="text-[1.5rem] text-[#D9D9D9] line-through mt-[4px]">$800.00</p>
          </div>
        </div>
        <div className="flex border border-[#F0F0F0] w-fit my-5 md:my-0">
          <button onClick={handleDecrement} className="py-1 px-6">
            <img src={remove} alt="remove" />
          </button>
          <p className="text-[2rem] border border-x-1 border-[#F0F0F0] px-8 py-1">
            {counter}
          </p>
          <button onClick={handleIncrement} className="py-1 px-6">
            <img src={add} alt="add" />
          </button>
        </div>
      </div>
      <div className="flex justify-between gap-2">
        <button className="px-6 bg-redPrimary w-[202px] h-[60px] text-white">
          Buy Now
        </button>
        <button className="px-6 w-[202px] h-[60px] text-redPrimary border border-redPrimary">
          Add to Cart
        </button>
      </div>
    </section>
  );
}

export default Payment;
