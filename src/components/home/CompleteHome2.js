import Video from './Video'
import Footer from '../utils/Footer';
import Home from './Home';
import CustomCarousel from './CustomCarousel';
import Header from '../utils/Header'
export default function CompleteHome() {
    return (
      <>
      
        <Header home={true}/>
        <Video/>
        {/* <CustomCarousel/> */}
        <Home />
        <Footer />
      </>
    );
  }
  