import menu from "../assets/menu.png";
import search from "../assets/mobileMenu/search.png";
import profile from "../assets/mobileMenu/profile.png";
import heart from "../assets/mobileMenu/heart.png";
import cart from "../assets/mobileMenu/cart.png";

function MobileHeader() {
  return (
    <header className="flex justify-between items-center px-[25px] py-1">
      <img src={menu} alt="menu" />
      <h1 className="font-inconsolata font-bold text-[2rem]">
        Needus<span className="text-redPrimary">.</span>
      </h1>
      <div className="flex gap-2 items-center">
        <img src={search} alt="search" />
        <img src={profile} alt="profile" />
        <img src={heart} alt="heart" />
        <img src={cart} alt="cart" />
      </div>
    </header>
  );
}

export default MobileHeader;
