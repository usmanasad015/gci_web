import Header from "../utils/Header";
import Footer from "../utils/Footer";
import Projects from "./Projects";
import ImageWithOverlay from "../utils/ImageWithOverlay";

import image from "../../public/banner/03.jpg";
export default function CompleteProject() {
  return (
    <>
      <Header />
      <ImageWithOverlay
        image={image}
        height="300px"
        titlePartOne="All"
        titlePartTwo="Projects"
      />
      <Projects />
      <Footer />
    </>
  );
}
