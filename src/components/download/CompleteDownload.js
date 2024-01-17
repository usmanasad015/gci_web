import Footer from '../utils/Footer';
import Header from '../utils/Header'
import Download from './DownloadPDF';
import ImageWithOverlay from "../utils/ImageWithOverlay";
import image from "../../public/banner/03.jpg";
export default function CompleteHome() {
    return (
      <>
      
        <Header/>
        <ImageWithOverlay
        image={image}
        height="300px"
        titlePartOne="Documents"
        titlePartTwo=""
        />
        <Download/>
        <Footer />
      </>
    );
  }
  