import SocialMedia from "../components/SocialMedia";
import phone from "../assets/phone.png";
import location from "../assets/location.png";

function Footer() {
  return (
    <footer className="bg-blueDark text-white px-[25px] md:px-[100px] flex flex-col items-center">
      <div className="flex flex-col gap-4 md:gap-0 md:flex-wrap justify-between py-8 w-full">
        <div>
          <p className="text-[1.1rem] md:text-[1.75rem] font-medium">Join our newsletter and get offers</p>
          <p className="text-[0.9rem] md:text-[1.25rem]">Sign up our newsletter</p>
        </div>
        <div className="w-full md:w-[715px] h-[60px] md:h-[73px] flex">
          <input
            type="text"
            placeholder="Enter your email"
            className="text-[1.25rem] w-full px-8"
          />
          <button className="bg-redPrimary w-full text-white font-semibold text-[1.25rem]">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <nav className="flex flex-col gap-4 md:gap-0 md:flex-row w-full justify-between mt-8 mb-24">
        <div className="flex flex-col gap-5">
          <h3 className="underline md:no-underline md:text-[1.5rem] font-medium">ABOUT US</h3>
          <p className="hidden md:block max-w-[328px] text-[1.1rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet
            lacinia nulla ut laoreet. Quisque ultricies et tortor nec laoreet.
          </p>
          <SocialMedia />
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="underline md:no-underline md:text-[1.5rem] font-medium">INFORMATION</h3>
          <ul className="hidden md:flex flex-col gap-2 text-[1.1rem]">
            <li>About</li>
            <li>Delivery information</li>
            <li>Privacy Policy</li>
            <li>Sales</li>
            <li>Terms & Conditions </li>
            <li>EMI Payment</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="underline md:no-underline md:text-[1.5rem] font-medium">ACCOUNT</h3>
          <ul className="hidden md:flex flex-col gap-2 text-[1.1rem]">
            <li>My Account</li>
            <li>My Orders</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>Wishlist</li>
            <li>Account Details</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="underline md:no-underline md:text-[1.5rem] font-medium">STORE</h3>
          <ul className="hidden md:flex flex-col gap-2 text-[1.1rem]">
            <li>Affiliate</li>
            <li>Discounts</li>
            <li>Sale</li>
            <li>Contact</li>
            <li>All Collections</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="underline md:no-underline md:text-[1.5rem] font-medium">CONTACT US</h3>
          <p className="hidden md:block max-w-[343px]">
            If you have any query, please contact us{" "}
            <span className="text-redPrimary">needus24@gmail.com</span>
          </p>
          <div className="hidden md:flex gap-2 items-center">
            <img src={location} alt="location" />
            <p>California, USA</p>
          </div>
          <div className="hidden md:flex gap-2 items-center">
            <img src={phone} alt="phone" />
            <p>+12012987481</p>
          </div>
        </div>
      </nav>
      <div className="border-t-[1px] border-[#FFF] w-full">
        <p className="my-10 md:my-24 text-center text-[0.95rem]">Copyright. 2023 All Right Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
