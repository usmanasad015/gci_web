import { Grid, Box, Typography, Button, Fab, Paper } from "@mui/material";
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
import service_lims_header from "../../public/home/services_lims_header.png";
import services_Lims_1 from "../../public/home/services_Lims_1.jpeg";
import lims_deli_crop1 from "../../public/home/lims_deli_crop1.jpeg";
import lims_deli_crop2 from "../../public/home/lims_deli_crop2.jpeg";
import lims_deli_crop3 from "../../public/home/lims_deli_crop3.jpeg";
import lims_deli_crop4 from "../../public/home/lims_deli_crop4.jpeg";
import lims_deli_soil from "../../public/home/lims_deli_soil.jpeg";
import lims_deli_optimal from "../../public/home/lims_deli_optimal.jpeg";
import lims_deli_weather from "../../public/home/lims_deli_weather.jpeg";

export default function Lims() {
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

  const limsDeliverables = [
    {
      id: 1,
      image: lims_deli_optimal,
      title: "OPTIMAL LAND UTILIZATION      ",
      text: "Grow Crops As Per Land Suitability      ",
    },
    {
      id: 2,
      image: lims_deli_weather,
      title: "WEATHER MONITORING      ",
      text: "Multi Source Real Time Weather Monitoring      ",
    },
    {
      id: 3,
      image: lims_deli_soil,
      title: "SOIL MANAGEMENT SYSTEM      ",
      text: "Soil Viability Mapping      ",
    },
    {
      id: 3,
      image: lims_deli_crop1,
      title: "CROP PRODUCTION SYSTEM      ",
      text: "Decision Support Systems      ",
    },
    {
      id: 3,
      image: lims_deli_crop2,
      title: "CROP PROTECTION SYSTEM      ",
      text: "Ai Based Disease, Weed & Pest Detection      ",
    },
    {
      id: 3,
      image: lims_deli_crop3,
      title: "CROP HARVESTING SYSTEM      ",
      text: "Yield Forecasting & Monitoring      ",
    },
    {
      id: 3,
      image: lims_deli_crop4,
      title: "CROP MARKETING SYSTEM      ",
      text: "Crop Traceability      ",
    },
    // Add more deliverables as needed
  ];
  return (
    <>
      <Header />
      <Box>
        <Title title={"Home"}></Title>
        <ImageWithOverlay
          image={service_lims_header}
          height="400px"
          titlePartOne="Land Information and 
          "
          titlePartTwo="Management System"
          titlePartThree="(LIMS)"
          titlePartFour="A Way Towards Precision Agriculture
          "
        />

        {/* Our Services - LIMS  */}

        {/* <Grid container mt="50px">
          {width >= 1200 ? <Grid lg={1} xl={2}></Grid> : null}
          <Grid
            item
            pl={2}
            pr={2}
            mo
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
              mainCardImage={home_lims_image}
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
              marginTop: width < 1200 ? "50px" : "0px",
            }}
          >
            <Typography
              align="start"
              fontSize={30}
              mb={4}
              fontFamily="Poppins"
              color="black"
            >
              <strong>Land Information and Management</strong>
            </Typography>
            <Typography
              align="start"
              fontFamily="Poppins"
              mb={3}
              color="text.secondary"
              textAlign={"justify"}
            >
              Land Information & Management System (LIMS) revolutionizes
              precision agriculture, utilizing drones for farm support,
              temperature monitoring, and weather forecasting. Integrating
              modern machinery and soil/crop monitoring, LIMS enhances
              productivity. It also supports small farmers, providing tailored
              advice, and ensures efficient water management. The system marks a
              transformative step towards sustainable and technology-driven
              farming practices.
            </Typography>
          </Grid>
          {width < 1200 && width > 800 ? <Grid xs={1}></Grid> : null}
          {width >= 1200 ? <Grid lg={1} xl={2}></Grid> : null}
        </Grid> */}

        {/* What is LIMS*/}

        <Grid container mt="50px">
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
              <strong>What is LIMS?</strong>
            </Typography>
            <Typography
              align="start"
              fontFamily="Poppins"
              mb={3}
              color="text.secondary"
              textAlign={"justify"}
            >
              LIMS is GIS based system and aims to streamline the digitization
              of farming processes. It gives farmers online access to data on
              climate shifts, satellite-based crop monitoring, water usage,
              fertilizer application, and targeted spray zones.
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
              mainCardImage={services_Lims_1}
              mainCardImageHeight={width < 1200 ? "250px" : "400px"}
              mainCardMaxWidth={"625px"}
              mainCardBoxShadow={"none"}
              mainCardHeight={width < 1200 ? "250px" : "500px"}
              mainCardMaxHeight={"500px"}
              mainCardBorderRadius={"25px"}
              mainCardWriteOnImage={null}
              basicCard={false}
              style={{ objectFit: "fill" }}
            />
          </Grid>
          {width < 1200 && width > 800 ? <Grid xs={1}></Grid> : null}
          {width >= 1200 ? <Grid lg={1} xl={2}></Grid> : null}
        </Grid>

        {/* NEW Deliverables - LIMS */}
        <Grid container spacing={4} style={{ placeContent: "center" }}>
          <Grid item xs={12} md={8}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                gutterBottom
                style={{ fontWeight: "bold", paddingBottom:"10px" }}
              >
                LIMS Deliverables
              </Typography>
            </Grid>
            <Grid container spacing={2}>
              {limsDeliverables.map((deliverable) => (
                <Grid item xs={12} key={deliverable.id}>
                  <Paper elevation={3} style={{ padding: "16px" }}>
                    <Grid container spacing={2}>
                      {/* Image */}
                      <Grid item xs={12} md={3}>
                        <img
                          src={deliverable.image}
                          alt={`Deliverable ${deliverable.id}`}
                          style={{ width: "150px", height: "150px" }}
                        />
                      </Grid>
                      {/* Heading and Text */}
                      <Grid item xs={12} md={8} style={{ alignSelf: "center" }}>
                        <Typography
                          variant="h6"
                          gutterBottom
                          style={{
                            color: "gray",
                            fontWeight: "bold",
                            fontSize: "20px",
                          }}
                        >
                          {deliverable.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          style={{
                            color: "red",
                            fontWeight: "bold",
                            fontSize: "20px",
                          }}
                        >
                          {deliverable.text}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        {/* Deliverables - LIMS */}
        {/* <Grid container mt="50px">
          {width >= 1200 ? <Grid lg={1} xl={2}></Grid> : null}
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
              mainCardImage={home_lims_image3}
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
              <strong>LIMS Deliverables</strong>
            </Typography>
            <Typography
              align="start"
              fontFamily="Poppins"
              mb={3}
              color="text.secondary"
              textAlign={"justify"}
            >
              The Land Information & Management System (LIMS) ensures optimal
              land utilization by guiding farmers to grow crops suited for their
              land. With a focus on real-time weather monitoring from multiple
              sources, LIMS enhances decision-making. The system employs soil
              viability mapping for effective soil management, while its crop
              production system incorporates decision support tools. LIMS
              employs AI-based technologies for disease, weed, and pest
              detection in crop protection. Additionally, it facilitates yield
              forecasting and monitoring in the crop harvesting process,
              ensuring a comprehensive approach from cultivation to marketing
              with crop traceability.
            </Typography>
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
