import Navbar from "../components/Navbar";
import heroImg from "../assets/hero-img.jpg";
import arrowDown from "../assets/arrow-down.png";
import arrowDownWhite from "../assets/arrow-down-white.png";
import contactChat from "../assets/contact-chat.png";

function Hero() {
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
    <section className="bg-cream">
      <section className="flex w-full h-screen justify-center items-center relative">
        <div className="relative z-10 md:w-[50%] max-h-screen flex flex-col justify-center items-center gap-4 px-[30px] md:px-[100px] h-full">
          <Navbar />
          <div className="text-center md:text-left">
            <p className="text-[0.87rem] font-varta font-bold text-white md:text-terracotta">
              HOME DESIGN
            </p>
            <p className="text-[2.18rem] md:text-[3.12rem] tracking-[-0.4px] font-merriweather font-light leading-[40px] md:leading-[70px] text-white md:text-terracotta mt-6">
              Elegance for Interiors & Exteriors
            </p>
            <p className="text-[1.1rem] md:text-[1.37rem] font-varta font-light leading-[30.8px] text-white md:text-brownLight opacity-90 mt-4">
              We provide everyone with modern, trendy, quality furniture
            </p>
            <img
              src={arrowDown}
              onClick={handleScroll}
              className="mt-6 cursor-pointer transition duration-200 hover:scale-[1.02] hover:opacity-70 hidden md:block"
            />
            <img
              src={arrowDownWhite}
              onClick={handleScroll}
              className="mt-6 cursor-pointer transition duration-200 hover:scale-[1.02] hover:opacity-70 ml-auto mr-auto md:hidden"
            />
          </div>
        </div>
        <div className="absolute top-0 left-0 md:relative md:w-[50%] h-screen">
          <img src={contactChat} className="hidden md:block absolute top-7 right-7" />
          <img src={heroImg} className="object-cover h-full w-full" alt="lamps" />
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 px-[30px] md:px-[100px] py-14">
        <div>
          <p className="font-merriweather text-[2.18rem] md:text-[3.43rem] tracking-[-0.6px] leading-[60px] text-brownLight">
            We stay by your side to design your projects
          </p>
          <p
            onClick={handleScroll}
            className="text-[1.05rem] text-terracotta font-karla font-bold
            tracking-[0.3px] mt-6 cursor-pointer transition duration-200 hover:scale-[1.02] w-fit hover:opacity-70"
          >
            Find out more {">"}
          </p>
        </div>
        <div>
          <div className="flex flex-col md:flex-row items-center md:items-start mt-5 gap-4">
            <div className="flex flex-col gap-3">
              <h3 className="text-[1.56rem] font-varta font-semibold tracking-[-0.2px] text-terracotta">
                Our Advices
              </h3>
              <p className="font-varta text-[1.1rem] leading-[25px] w-[314px]">
                What if you took advantage of this rather special period to rethink your
                interior? You spend more time at home so you might as well feel good
                there.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-[1.56rem] font-varta font-semibold tracking-[-0.2px] text-terracotta">
                Click and Collect
              </h3>
              <p className="font-varta text-[1.1rem] leading-[25px] w-[314px]">
                Adapted and contactless. Free from € 200 of purchases in stores offering
                the service.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start mt-6 gap-4">
            <div className="flex flex-col gap-3">
              <h3 className="text-[1.56rem] font-varta font-semibold tracking-[-0.2px] text-terracotta">
                Conception Service
              </h3>
              <p className="font-varta text-[1.1rem] leading-[25px] w-[314px]">
                Personalized service with an expert advisor for your interior and exterior
                decoration or layout projects.{" "}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-[1.56rem] font-varta font-semibold tracking-[-0.2px] text-terracotta">
                Installation Service
              </h3>
              <p className="font-varta text-[1.1rem] leading-[25px] w-[314px]">
                Our furniture packaged in flat packs are designed for easy assembly. But
                you can call on our partner.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Hero;
