import Carousel from "../components/Carousel";
import arrow from "../assets/arrow-down.png";

function Inspirations() {
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
    <section id="inspirations" className="py-[30px] md:py-[70px]">
      <article className="flex flex-col md:flex-row justify-between px-[30px] md:px-[100px] pb-14">
        <div>
          <p className="font-merriweather text-[#121212] text-[2.18rem] leading-[40px] tracking-[-0.3px]">
            Be aware of the latest trends
          </p>
          <p className="font-varta text-brownLight opacity-90 text-[1.1rem] leading-[25px] mt-4 md:mt-0">
            Stay informed of new trends, but also of our various offers.
          </p>
          <p
            onClick={handleScroll}
            className="text-[1.05rem] text-terracotta font-karla font-bold
            tracking-[0.3px] mt-6 cursor-pointer transition duration-200 hover:scale-[1.02] w-fit hover:opacity-70"
          >
            Learn more {">"}
          </p>
        </div>
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center mt-10 md:mt-0">
          <input
            type="text"
            placeholder="email@address.com"
            className="font-varta text-brownLight/90 text-[1.12rem] p-4 bg-[#F3EEE84D]/30 placeholder-current w-full md:w-[296px]"
          />
          <button
            type="button"
            className="font-karla font-bold text-[1.05rem] tracking-[0.3px] text-white bg-brownDark py-4 px-8 w-full md:w-fit"
          >
            Subscribe
          </button>
        </div>
      </article>
      <div className="flex flex-col-reverse gap-20 md:gap-0 md:flex-col">
        <Carousel />
        <article className="px-[30px] md:px-[100px] mt-2 md:mt-10 flex flex-col gap-4 md:flex-row justify-between">
          <h3 className="font-merriweather text-[2.18rem] md:text-[2.81rem] text-brownDark tracking-[-0.3px] font-light">
            Inspirations
          </h3>
          <p className="font-varta text-[1.1rem] text-brownLight leading-[25px] max-w-[700px]">
            Our experts are keen to stay on top of trends in order to offer you new
            inspirations for your interior and exterior every day. Remember that to
            inspire you we have to inspire ourselves and we want to share that with you.
          </p>
          <div className="hidden md:flex flex-col gap-4 mr-12">
            <div className="flex gap-3">
              <img src={arrow} className="rotate-90 w-[40px]" />
              <img src={arrow} className="-rotate-90 w-[40px]" />
            </div>
            <p className="font-varta text-brownLight/80 text-[1.1rem]">01 / 05</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Inspirations;
