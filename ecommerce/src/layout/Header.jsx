import search from "../assets/search.png";
import arrow from "../assets/arrow.png";
import arrowBlack from "../assets/arrow-black.png";
import heart from "../assets/heart.png";
import cart from "../assets/cart.png";
import menu from "../assets/categories-menu.png";
import callcenter from "../assets/callcenter.png";

function Header() {
  return (
    <header className="w-full flex flex-col justify-center items-center">
      <article className="h-[60px] px-[100px] bg-blueDark w-full flex justify-between items-center text-white">
        <p className="font-light ml-6">Welcome to Needus & Get the best product</p>
        <div className="flex gap-4 justify-center items-center">
          <div className="flex justify-center items-center gap-2">
            <p>ENG</p>
            <img src={arrow} alt="arrow" className="w-[10px]" />
          </div>
          <p>|</p>
          <div className="flex justify-center items-center gap-2">
            <p>USD</p>
            <img src={arrow} alt="arrow" className="w-[10px]" />
          </div>
        </div>
      </article>
      <nav className="flex justify-between px-[100px] w-full py-12">
        <h1 className="font-inconsolata font-bold text-[3rem]">
          Needus<span className="text-redPrimary">.</span>
        </h1>
        <div className="flex font-light text-[1.25rem] w-[925px] ml-auto">
          <div className="flex items-center justify-center h-[76px] border-2 border-[#F0F0F0]">
            <input
              type="text"
              placeholder="Search Products"
              className="pl-10 h-full w-[400px]"
            />
            <div className="w-[63px] h-[66px] mr-[3px] bg-blueDark flex justify-center items-center">
              <img src={search} alt="search" />
            </div>
          </div>
          <div className="flex items-center justify-between px-6 h-[76px] border-y-2 border-r-2 border-[#F0F0F0] w-full">
            <div className="flex justify-center items-center">
              <p>All Categories</p>
              <img src={arrowBlack} alt="arrow" className="fill-black" />
            </div>
            <p>
              Login <span className="text-[#F0F0F0]">|</span> Signup{" "}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 pl-10">
          <img src={heart} alt="heart" />
          <div className="relative">
            <div className="absolute bottom-[10px] left-[10px] flex justify-center items-center text-white font-bold w-[30px] h-[30px] bg-[#E23000] rounded-full text-center">
              <span>6</span>
            </div>
            <img src={cart} alt="cart" />
          </div>
        </div>
      </nav>
      <nav className="w-full flex h-[76px]">
        <div className="flex text-white items-center w-[25%] bg-redPrimary pl-[100px]">
          <img src={menu} alt="menu" />
          <p className="text-[1.5rem] font-medium px-6">All Categories</p>
          <img src={arrow} alt="arrow" />
        </div>
        <div className="flex w-[75%] bg-blueDark text-white pr-[100px] justify-end">
          <ul className="flex gap-6 uppercase mr-[8%]">
            <li className="flex justify-center items-center gap-2">
              <p>Home</p>
              <img src={arrow} alt="arrow" className="w-[12px]" />
            </li>
            <li className="flex justify-center items-center gap-2">
              <p>About</p>
              <img src={arrow} alt="arrow" className="w-[12px]" />
            </li>
            <li className="flex justify-center items-center gap-2">
              <p>Product</p>
              <img src={arrow} alt="arrow" className="w-[12px]" />
            </li>
            <li className="flex justify-center items-center gap-2">
              <p>Pages</p>
              <img src={arrow} alt="arrow" className="w-[12px]" />
            </li>
            <li className="flex justify-center items-center gap-2">
              <p>Contact</p>
              <img src={arrow} alt="arrow" className="w-[12px]" />
            </li>
          </ul>
          <div className="flex items-center gap-5 border-l-2 border-[#F0F0F0] pl-5">
            <img src={callcenter} alt="callcenter" />
            <div className="flex flex-col gap-1">
              <p className="uppercase text-[0.93rem] font-light">Contact Us 24/7</p>
              <p className="font-medium text-[1.1rem]">+12012987481</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
