import SocialMedia from "../components/SocialMedia";
import footerImg from "../assets/footer-img.jpg";

function Footer() {
  const handleScroll = () => {
    const inspirationsSection = document.getElementById("inspirations");
    if (inspirationsSection) {
      window.scrollTo({
        top: inspirationsSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-cream px-[30px] md:px-[100px] flex flex-col items-center py-12">
      <section className="flex flex-col md:flex-row justify-between items-start w-full">
        <h2 className="w-full md:w-fit text-center text-[2.12rem] font-merriweather font-bold text-brownDark tracking-[2px]">
          antic
        </h2>
        <nav className="flex flex-col md:flex-row gap-10 md:gap-16 mt-8 md:mt-2 ">
          <div>
            <h3 className="font-varta font-semibold tracking-[-0.2px] text-[1.56rem] text-brownDark">
              Products
            </h3>
            <ul className="font-varta text-brownLight flex flex-col gap-3 mt-4 text-[1.1rem]">
              <li>Furniture</li>
              <li>Decoration</li>
              <li>Storage</li>
              <li>Baby and child</li>
              <li>Connected home</li>
            </ul>
          </div>
          <div>
            <h3 className="font-varta font-semibold tracking-[-0.2px] text-[1.56rem] text-brownDark">
              Rooms
            </h3>
            <ul className="font-varta text-brownLight flex flex-col gap-3 mt-4 text-[1.1rem]">
              <li>Living room</li>
              <li>Dining room</li>
              <li>Cooked</li>
              <li>Bedroom</li>
              <li>Bathroom</li>
              <li>Office</li>
              <li>Laundry</li>
              <li>Garage</li>
            </ul>
          </div>
          <div>
            <h3 className="font-varta font-semibold tracking-[-0.2px] text-[1.56rem] text-brownDark">
              Services
            </h3>
            <ul className="font-varta text-brownLight flex flex-col gap-3 mt-4 text-[1.1rem]">
              <li>Click and collect</li>
              <li>Conception</li>
              <li>Installation</li>
              <li>Advices</li>
              <li>Gift card</li>
            </ul>
          </div>
          <div>
            <h3 className="font-varta font-semibold tracking-[-0.2px] text-[1.56rem] text-brownDark">
              About
            </h3>
            <ul className="font-varta text-brownLight flex flex-col gap-3 mt-4 text-[1.1rem]">
              <li>Our story</li>
              <li>Our stores</li>
              <li>Our partners</li>
            </ul>
          </div>
        </nav>
        <div className="mt-10 md:mt-2 flex flex-col gap-4">
          <p className="font-varta font-semibold tracking-[-0.2px] text-[1.56rem] text-brownDark">
            We respect our planet
          </p>
          <img src={footerImg} />
          <p className="font-varta text-brownLight leading-[25px] w-[250px]">
            We’re taking positive steps to reduce our impact on the planet. For us, that
            means retailing responsibly.
          </p>
          <p
            onClick={handleScroll}
            className="text-[1.05rem] text-terracotta font-karla font-bold
          tracking-[0.3px] cursor-pointer transition duration-200 hover:scale-[1.02] w-fit hover:opacity-70"
          >
            Learn more {">"}
          </p>
        </div>
      </section>
      <SocialMedia />
      <section className="flex flex-col-reverse md:flex-row justify-between w-full">
        <p className="font-varta text-[1.1rem] text-brownLight/70 mt-10">
          © 2021 Agence Dnd
        </p>
        <div className="flex flex-wrap gap-8 font-varta text-[1.1rem] text-brownLight/70">
          <p>Privacy policy</p>
          <p>Term of service</p>
          <p>Language</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
