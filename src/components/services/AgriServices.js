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
import agri_service_header1 from "../../public/home/agri_service_header1.jpeg";
import agri_service_header2 from "../../public/home/agri_service_header2.jpeg";
import agri_service_header_img from "../../public/home/agri_service_header_img.png";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import WaterIcon from "@mui/icons-material/Water"; // Import the Water icon
import agri_service_img2 from "../../public/home/agri_service_img2.jpeg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function AgriServices() {
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

  const bulletPoints = [
    "Enhance agricultural productivity by reducing labor-intensive tasks    ",
    "Improve efficiency in planting, harvesting & post-harvest processes    ",
    "Promote sustainable farming practices - reduced fuel consumption & minimized soil compaction    ",
    "Enable precision agriculture through data collection and analysis    ",
    "Facilitate adoption of mechanized farming in small and large-scale operations    ",
  ];
  return (
    <>
      <Header />
      <Box>
        <Title title={"Home"}></Title>
        <ImageWithOverlay
          image={agri_service_header_img}
          height="450px"
          style={{ position: "relative" }}
          // titlePartOne="Agri
          // "
          // titlePartTwo="Services"
        />

        {/* Header 2nd Image */}
        {/* <img
          src={agri_service_header2}
          style={{ position: "absolute", top: 0, left: 0 }}
        /> */}

        {/* Agriculture Services Comapny*/}

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
                border: "7px solid black",
                borderRadius: "10px",
                fontSize: "25px",
                fontWeight: "bold",
                color: "darkgreen",
              }}
            >
              We seek to strengthen agriculture production through progressive &
              augmented technologies, engagement of partners, sustainable
              practices to ensure high quality yields, economic-friendly
              approaches and maximum efficiency
            </Typography>
          </Box>
        </Container>

        {/* Main Content */}

        <Grid container mt="50px">
          {width >= 1200 ? <Grid lg={1} xl={2}></Grid> : null}

          {/* Points on the left */}
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
            {/* <div> */}
            <Typography
              align="start"
              fontSize={30}
              mb={4}
              fontFamily="Poppins"
              color="black"
            >
              <strong>Objectives</strong>
            </Typography>
            <Typography
              align="start"
              fontFamily="Poppins"
              mb={3}
              color="text.secondary"
              textAlign={"justify"}
            >
              <List>
                {bulletPoints.map((point, index) => (
                  <ListItem
                    key={index}
                    disablePadding
                    style={{ padding: "5px" }}
                  >
                    <ListItemIcon>
                      <ChevronRightIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={point} />
                  </ListItem>
                ))}
              </List>
            </Typography>
          </Grid>

          {width < 1200 && width > 800 ? <Grid xs={1}></Grid> : null}

          {/* Image on the right */}
          <Grid
            item
            xs={12}
            lg={5}
            xl={width < 1800 ? 4 : 3}
            alignItems="flex-end"
            style={{
              display: "flex",
              justifyContent: width < 1200 ? "center" : "end",
              paddingTop: "40px",
            }}
          >
            <div>
              <Card
                mainCardImage={agri_service_img2}
                mainCardImageHeight={width < 1200 ? "250px" : "500px"}
                mainCardMaxWidth={"525px"}
                mainCardBoxShadow={"none"}
                mainCardHeight={width < 1200 ? "250px" : "550px"}
                mainCardMaxHeight={"400px"}
                mainCardBorderRadius={"25px"}
                mainCardWriteOnImage={null}
                basicCard={false}
                style={{ objectFit: "fill" }}
              />
            </div>
          </Grid>

          {width < 1200 && width > 800 ? <Grid xs={1}></Grid> : null}
          {width >= 1200 ? <Grid lg={1} xl={2}></Grid> : null}
        </Grid>
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
