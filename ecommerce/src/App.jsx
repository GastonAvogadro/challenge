import { useState, useEffect } from "react";
import Header from "./layout/Header";
import MobileHeader from "./layout/MobileHeader";
import Main from "./layout/Main";
import RelatedProducts from "./layout/RelatedProducts";
import Footer from "./layout/Footer";
import "./App.css";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  const isMobile = windowWidth <= 768;

  return (
    <div className="font-inter text-blackPrimary">
      {isMobile ? <MobileHeader /> : <Header />}
      <Main />
      <RelatedProducts />
      <Footer />
    </div>
  );
}

export default App;
