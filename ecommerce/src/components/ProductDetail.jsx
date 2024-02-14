import { useState } from "react";
import tv1 from "../assets/detail/tv1.jpg";
import tv2 from "../assets/detail/tv2.jpg";
import tv3 from "../assets/detail/tv3.jpg";
import tv4 from "../assets/detail/tv4.jpg";
import starFilled from "../assets/detail/star-filled.png";
import starEmpty from "../assets/detail/star-empty.png";
import Payment from "./Payment";
import Description from "./Description";

const ProductGallery = () => {
  const images = [
    { original: tv1 },
    { original: tv2 },
    { original: tv3 },
    { original: tv4 },
  ];

  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);

  const handleThumbnailClick = (index) => {
    setSelectedThumbnailIndex(index);
  };

  const handleSizeClick = (index) => {
    setSelectedSize(index);
  };

  const handleRating = (rating) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <img
            key={i}
            src={starFilled}
            alt="star filled"
            className="w-[16px] md:w-[25px]"
          />
        );
      } else {
        stars.push(
          <img
            key={i}
            src={starEmpty}
            alt="star empty"
            className="w-[16px] md:w-[25px]"
          />
        );
      }
    }

    return <div className="flex">{stars}</div>;
  };

  return (
    <>
      <section className="max-w-[90%] flex flex-col md:flex-row gap-10 my-0 md:my-20 px-[25px] md:px-0">
        <article className="flex flex-col-reverse md:flex-row items-center md:items-start">
          <div className="flex md:flex-col flex-wrap md:flex-nowrap justify-center md:justify-start gap-5 mr-2">
            {images.map((image, index) => (
              <div
                key={index}
                className={`flex justify-center items-center w-[100px] md:w-[152px] md:h-[115px] border cursor-pointer ${
                  index === selectedThumbnailIndex ? "border-redPrimary" : ""
                }`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img src={image.original} alt={`Thumbnail ${index}`} />
              </div>
            ))}
          </div>
          <div className="md:w-[528px] h-[400px] md:h-[548px] flex justify-center items-center md:bg-[#F1F1F1]">
            <img src={images[selectedThumbnailIndex].original} alt={`main image`} />
          </div>
        </article>
        <article>
          <div>
            <div className="flex flex-col gap-2">
              <p className="text-[0.8rem] md:text-[1.1rem]">
                Brand: <span className="font-light">LG</span>
              </p>
              <p className="text-[0.8rem] md:text-[1.1rem]">
                Model: <span className="font-light">OLED42C2PSA</span>
              </p>
              <p className="text-[0.8rem] md:text-[1.1rem]">
                Availability: <span className="font-light">Only 2 in Stock</span>
              </p>
              <p className="font-medium md:text-[2rem] leading-[38.73px] md:w-[550px]">
                LG C2 42 (106cm) 4K Smart OLED evo TV | WebOS | Cinema HDR
              </p>
            </div>
            <div className="my-4">{handleRating(3)}</div>
            <div className="flex flex-col gap-2 mb-6 text-[0.8rem] md:text-[1rem]">
              <div className="flex items-center gap-1">
                <div className="w-[5px] h-[5px] md:w-[8px] md:h-[8px] bg-black rounded-full"></div>
                <p className="font-light">
                  α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling
                </p>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-[5px] h-[5px] md:w-[8px] md:h-[8px] bg-black rounded-full"></div>
                <p className="font-light">
                  Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume
                </p>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-[5px] h-[5px] md:w-[8px] md:h-[8px] bg-black rounded-full"></div>
                <p className="font-light">Hands-free Voice Control, Always Ready</p>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-[5px] h-[5px] md:w-[8px] md:h-[8px] bg-black rounded-full"></div>
                <p className="font-light">
                  Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode
                </p>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-[5px] h-[5px] md:w-[8px] md:h-[8px] bg-black rounded-full"></div>
                <p className="font-light">
                  Eye Comfort Display: Low-Blue Light, Flicker-Free
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap max-w-[650px] py-8 border-y-2 border-[#F0F0F0]">
            <div
              onClick={() => handleSizeClick(0)}
              className={`w-[200px] h-[60px] flex justify-center items-center cursor-pointer ${
                selectedSize === 0
                  ? "text-redPrimary border border-redPrimary"
                  : "text-[#6F6F6F] font-light"
              }`}
            >
              <p className="text-[1.1rem] ">106 cm (42)</p>
            </div>
            <div
              onClick={() => handleSizeClick(1)}
              className={`w-[200px] h-[60px] flex justify-center items-center cursor-pointer ${
                selectedSize === 1
                  ? "text-redPrimary border border-redPrimary"
                  : "text-[#6F6F6F] font-light"
              }`}
            >
              <p className="text-[1.1rem]">121 cm (48)</p>
            </div>
            <div
              onClick={() => handleSizeClick(2)}
              className={`w-[200px] h-[60px] flex justify-center items-center cursor-pointer ${
                selectedSize === 2
                  ? "text-redPrimary border border-redPrimary"
                  : "text-[#6F6F6F] font-light"
              }`}
            >
              <p className="text-[1.1rem]">139 cm (55)</p>
            </div>
            <div
              onClick={() => handleSizeClick(3)}
              className={`w-[200px] h-[60px] flex justify-center items-center cursor-pointer ${
                selectedSize === 3
                  ? "text-redPrimary border border-redPrimary"
                  : "text-[#6F6F6F] font-light"
              }`}
            >
              <p className="text-[1.1rem]">164 cm (65)</p>
            </div>
            <div
              onClick={() => handleSizeClick(4)}
              className={`w-[200px] h-[60px] flex justify-center items-center cursor-pointer ${
                selectedSize === 4
                  ? "text-redPrimary border border-redPrimary"
                  : "text-[#6F6F6F] font-light"
              }`}
            >
              <p className="text-[1.1rem]">196 cm (77)</p>
            </div>
            <div
              onClick={() => handleSizeClick(5)}
              className={`w-[200px] h-[60px] flex justify-center items-center cursor-pointer ${
                selectedSize === 5
                  ? "text-redPrimary border border-redPrimary"
                  : "text-[#6F6F6F] font-light"
              }`}
            >
              <p className="text-[1.1rem]">210 cm (83)</p>
            </div>
          </div>
          <Payment />
        </article>
      </section>
      <Description />
    </>
  );
};

export default ProductGallery;
