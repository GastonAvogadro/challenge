import RelatedCard from "../components/RelatedCard";
import image1 from "../assets/related/image1.png";
import image2 from "../assets/related/image2.png";
import image3 from "../assets/related/image3.png";
import image4 from "../assets/related/image4.png";
import bulletEmpty from "../assets/related/bullet-empty.png";
import bulletFilled from "../assets/related/bullet-filled.png";

const DATA = [
  {
    title: "Sony BRAVIA XR Android Tv",
    price: 800.22,
    prevPrice: 1000.66,
    url: image1,
    label: "new",
  },
  {
    title: "Mi P1 Smart Android HD TV",
    price: 400.0,
    prevPrice: 0,
    url: image2,
    label: "discount",
  },
  {
    title: "Konka OLED Android Tv",
    price: 700.0,
    prevPrice: 0,
    url: image3,
    label: "hot",
  },
  {
    title: "TCL Roku Android Tv",
    price: 800.0,
    prevPrice: 0,
    url: image4,
    label: "warranty",
  },
];

function RelatedProducts() {
  return (
    <section className="flex flex-col gap-12 items-center pb-14 px-[25px] md:px-0">
      <h3 className="font-medium text-[2rem]">RelatedProducts</h3>
      <article className="flex flex-wrap gap-6 gap-y-16 items-center justify-center md:justify-start">
        {DATA.map((product) => (
          <RelatedCard key={product.title} product={product} />
        ))}
      </article>
      <div className="flex gap-2">
        <img src={bulletFilled} />
        <img src={bulletEmpty} />
        <img src={bulletEmpty} />
        <img src={bulletEmpty} />
      </div>
    </section>
  );
}

export default RelatedProducts;
