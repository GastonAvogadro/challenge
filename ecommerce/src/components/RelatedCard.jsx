import cart from "../assets/cart.png";
import heart from "../assets/related/heart-filled.png";

function RelatedCard({ product }) {
  const handleLabel = () => {
    if (product.label === "new") {
      return (
        <div className="bg-[#12A05C] text-[0.75rem] font-medium rounded-[100px] w-[67px] h-[26px] flex justify-center items-center">
          <p className="text-[0.75rem] font-medium text-white">NEW</p>
        </div>
      );
    } else if (product.label === "discount") {
      return (
        <div className="bg-redPrimary text-[0.75rem] font-medium rounded-[100px] w-[67px] h-[26px] flex justify-center items-center">
          <p className="text-[0.75rem] font-medium text-white">-10%</p>
        </div>
      );
    } else if (product.label === "hot") {
      return (
        <div className="bg-[#FF9900] text-[0.75rem] font-medium rounded-[100px] w-[67px] h-[26px] flex justify-center items-center">
          <p className="text-[0.75rem] font-medium text-white">HOT</p>
        </div>
      );
    } else if (product.label === "warranty") {
      return (
        <div className="bg-[#7F7CF6] text-[0.75rem] font-medium rounded-[100px] w-[67px] h-[26px] flex justify-center items-center">
          <p className="text-[0.75rem] font-medium text-white">2 Years Warranty</p>
        </div>
      );
    }
  };

  return (
    <div className="relative">
      <div className="absolute top-7 left-7">{handleLabel()}</div>
      {product.label === "new" ? (
        <div className="absolute top-3 right-7 rounded-full border border-[#D7D7D7] p-4">
          <img src={heart} alt="heart" />
        </div>
      ) : null}
      <div className="bg-[#F1F1F1] w-[300px] h-[430px] flex flex-col justify-center items-center">
        <img src={product.url} alt={product.title} className="h-[257px] object-contain" />
        <button className="flex justify-center items-center gap-4 w-[203px] h-[51px] bg-white">
          <img src={cart} alt="cart" className="w-[17px] mb-1" />
          <p className="text-[1.1rem] font-medium">Add to cart</p>
        </button>
      </div>
      <div className="mt-8 flex flex-col gap-2 justify-center items-center">
        <p className="text-[1.25rem]">{product.title}</p>
        <div className="flex gap-2 justify-center items-center">
          <p className="text-[1.25rem] font-semibold">${product.price.toFixed(2)}</p>
          {product.prevPrice ? (
            <p className="text-[1.25rem] font-semibold text-[#D9D9D9] line-through">
              ${product.prevPrice}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default RelatedCard;
