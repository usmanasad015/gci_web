import { Grid, Box, Typography, Button, Fab, Container } from "@mui/material";
import { useCallback, useEffect } from "react";
import { useWindowScrollPositions } from "../hooks/getScrollPositions";
import { useNavigate } from "react-router-dom";
import Card from "../utils/CustomCards";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import DataSaverOnOutlinedIcon from "@mui/icons-material/DataSaverOnOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import LandscapeOutlinedIcon from "@mui/icons-material/LandscapeOutlined";
import SecurityIcon from "@mui/icons-material/Security";
import AgricultureOutlinedIcon from "@mui/icons-material/AgricultureOutlined";
import HolidayVillageOutlinedIcon from "@mui/icons-material/HolidayVillageOutlined";
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
import ImportExportOutlinedIcon from "@mui/icons-material/ImportExportOutlined";
import useWindowDimensions from "../hooks/getScreenDimensions";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import Title from "../utils/Title";
import WORK from "../../public/image/aboutimg1.jpeg";
import home_image_1 from "../../public/home/home_image_1.jpeg";
import home_image_2 from "../../public/home/home_image_2.jpeg";
import home_image_3 from "../../public/home/home_image_3.jpeg";
import home_image_4 from "../../public/home/home_image_4.png";
import home_image_5 from "../../public/home/home_image_5.png";
import home_lims_image from "../../public/home/home_lims_image_0.png";
import home_lims_image2 from "../../public/home/home_lims_image_2.png";
import home_lims_image3 from "../../public/home/home_lims_image_3.png";
import home_water_management from "../../public/home/home_water_manage_1.png";
import home_water_deliver from "../../public/home/home_water_deliver.png";
import Header from "../utils/Header";
import Footer from "../utils/Footer";
import Services from "./Services";
import ImageWithOverlay from "../utils/ImageWithOverlay";
import image from "../../public/banner/03.jpg";
import agri_mall_new_header from "../../public/home/agri_mall_new_header.png";
import agri_mall_new_header_img from "../../public/home/agri_mall_header_img.jpeg";
import agri_mall_footer_img from "../../public/home/agri_mall_footer_img.png";

export default function AgriMalls() {
  const { id } = useParams();
  useEffect(() => {
    console.log(useParams);
    // console.log("Not Working")
  }, []);
  const { width } = useWindowDimensions();
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const { scrollY } = useWindowScrollPositions();
  const navigate = useNavigate();
  const moveToWeatherAdbisoryPage = () => {
    navigate("/weather-advisory");
  };
  return (
    <>
      <Header />
      <Box>
        <Title title={"Home"}></Title>
        <ImageWithOverlay
          image={agri_mall_new_header}
          height="450px"
          // titlePartOne="Agri
          // "
          // titlePartTwo="Malls"
        />

        {/*  New Agri Malls */}

        {/* Main Text */}

        <Container>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="30vh"
          >
            <Typography
              variant="h4"
              style={{
                textAlign: "center",
                padding: "10px",
                border: "7px solid darkgreen",
                borderRadius: "10px",
                fontSize: "35px",
                fontWeight: "bold",
                color: "darkgreen",
              }}
            >
              We provide one-stop solution platform for farmers to cater pre to
              post-harvest solutions
            </Typography>
          </Box>

          <h2 style={{ fontWeight: "bold", color: "dark blue" }}>SERVICES</h2>
          <Typography
            variant="h4"
            style={{
              padding: "10px",
              fontSize: "25px",
              color: "dark blue",
            }}
          >
            Fertilizer, Agro-Chem, Seed & Bank Facilities collocated with PSO
            Petrol Pumps with Buy Back Options
          </Typography>

          <h2
            style={{
              fontWeight: "bold",
              color: "dark blue",
              padding: "10px",
              marginTop: "40px",
            }}
          >
            Our Partners
          </h2>
          <img
            src={agri_mall_footer_img}
            style={{ width: "100%", height: "100%" }}
          />
        </Container>

        {/*  Old Agri Malls */}

        {/* <Grid container mt="50px">
          {width >= 1200 ? <Grid lg={1} xl={2}></Grid> : null}

          <Grid
            item
            xs={width <= 800 ? 12 : 9}
            lg={5}
            xl={4}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              paddingLeft: "40px",
              paddingRight: "40px",
              marginTop: width < 1200 ? "50px" : "40px",
            }}
          >
            <Typography
              align="start"
              fontSize={30}
              mb={4}
              fontFamily="Poppins"
              color="black"
            >
              <strong>Agriculture Malls</strong>
            </Typography>
            <Typography
              align="start"
              fontFamily="Poppins"
              mb={3}
              color="text.secondary"
              textAlign={"justify"}
            >
              Agri malls stand as a revolutionary one-stop solution platform,
              seamlessly connecting farmers with a comprehensive range of pre to
              post-harvest solutions. With services encompassing fertilizers,
              agro-chemicals, and seed facilities, these agri malls also host
              seed banks alongside PSO petrol pumps. The strategic placement of
              50 locations across Pakistan, particularly in underdeveloped
              areas, emphasizes their commitment to reaching and uplifting
              farming communities.
              <br /> This integrated approach not only facilitates the
              accessibility of essential agricultural inputs but also offers
              crop buy-back options, empowering farmers with a holistic support
              system for sustainable and prosperous farming practices. <br />
              <br />
            </Typography>
          </Grid>
          {width < 1200 && width > 800 ? <Grid xs={1}></Grid> : null}
          <Grid
            item
            pl={2}
            pr={2}
            xs={12}
            lg={5}
            xl={width < 1800 ? 4 : 3}
            alignItems="flex-end"
            style={{
              display: "flex",
              justifyContent: width < 1200 ? "center" : "end",
            }}
          >
            <Card
              mainCardImage={home_water_management}
              mainCardImageHeight={width < 1200 ? "250px" : "400px"}
              mainCardMaxWidth={"425px"}
              mainCardBoxShadow={"none"}
              mainCardHeight={width < 1200 ? "250px" : "400px"}
              mainCardMaxHeight={"400px"}
              mainCardBorderRadius={"25px"}
              mainCardWriteOnImage={null}
              basicCard={false}
              style={{ objectFit: "fill" }}
            />
          </Grid>
          {width < 1200 && width > 800 ? <Grid xs={1}></Grid> : null}
          {width >= 1200 ? <Grid lg={1} xl={2}></Grid> : null}
        </Grid> */}

        {/* Downlaod PDF */}
        <Box
          role="presentation"
          sx={{
            display: "block",
            position: "fixed",
            bottom: 32,
            left: 22,
            zIndex: 1,
            transition: "transform 0.3s ease-in-out",
            transform: "scale(1)",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Fab
            color="success"
            aria-label="Scroll back to top"
            variant={"extended"}
          >
            <CloudDownloadOutlinedIcon
              style={{ color: "white" }}
              sx={{ mr: 2 }}
            />
            Download PDF
          </Fab>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
