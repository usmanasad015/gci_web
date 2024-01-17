import Header from "../utils/Header";
import Footer from "../utils/Footer";
import Investors from "./Investors";
import ImageWithOverlay from "../utils/ImageWithOverlay";
import Investors_header_img from "../../public/home/Investors_header_img.png";

import im from "../../public/banner/03.jpg";
export default function CompleteAbout() {
  return (
    <>
      <Header />
      <ImageWithOverlay
        image={Investors_header_img}
        height="500px"
        // titlePartOne="About"
        // titlePartTwo="Us"
      />
      <Investors />
      <Footer />
    </>
  );
}
