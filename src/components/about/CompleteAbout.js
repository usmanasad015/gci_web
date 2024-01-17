import Header from "../utils/Header";
import Footer from "../utils/Footer";
import Main from "./Main";
import ImageWithOverlay from "../utils/ImageWithOverlay";

import image from "../../public/banner/03.jpg";
export default function CompleteAbout() {
  return (
    <>
      <Header />
      <ImageWithOverlay
        image={image}
        height="300px"
        titlePartOne="About"
        titlePartTwo="Us"
      />
      <Main />
      <Footer />
    </>
  );
}
