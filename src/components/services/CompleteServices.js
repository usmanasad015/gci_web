import Header from "../utils/Header";
import Footer from "../utils/Footer";
import Services from "./Services";
import ImageWithOverlay from "../utils/ImageWithOverlay";

import image from "../../public/banner/03.jpg";
export default function CompleteServices() {
  return (
    <>
      <Header />

      <ImageWithOverlay
        image={image}
        height="300px"
        titlePartOne="Our"
        titlePartTwo="Services"
      />
      <Services />
      <Footer />
    </>
  );
}
