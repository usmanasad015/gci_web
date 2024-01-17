import Video from "./Video";
import Footer from "../utils/Footer";
import Home from "./Home";
import Home3 from "./Home_3";
import CustomCarousel from "./CustomCarousel";
import Header from "../utils/Header";
import CustomCarousel_home3 from "./CustomCarousel_home3";
export default function CompleteHome() {
  return (
    <>
      <Header home={true} />
      {/* <Video/> */}
      <CustomCarousel_home3 />
      <Home3 />
      <Footer />
    </>
  );
}
