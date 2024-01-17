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
import header_water_management from "../../public/home/header_water_management.jpg";
import services_water_img2 from "../../public/home/services_water_img2.jpeg";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import WaterIcon from "@mui/icons-material/Water"; // Import the Water icon

export default function WaterManagement() {
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
    "Provision of water up to farms through bulk water transmission and distribution system",
    "Study availability of subsoil water, its extraction and provision through solar based smart pumping and distribution system",
    "Plan and improve water conveyance efficiency by developing on-farm irrigation conveyance network in both canal and non-canal areas",
    "Support climate-resilient agriculture through the promotion of reformatory crop production, renewable energy, and on-farm water management technologies",
    "Monitor, distribute, regulate, supervise, and control water supply to farms through an IoT-based centralized platform",
  ];
  return (
    <>
      <Header />
      <Box>
        <Title title={"Home"}></Title>
        <ImageWithOverlay
          image={header_water_management}
          height="450px"
          titlePartOne="Green Pakistan Water Management  "
          titlePartTwo="Company"
          titlePartFour="We Bring Life
          "
        />

        {/*  Water Management Section */}

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
              }}
            >
              Recognizing significance of water in timely commencement, and
              operations of corporate farming activities, a Water Management
              Division has been incorporated by Green Corporate Initiative
              (Private) Limited
            </Typography>
          </Box>
        </Container>

        {/* Old Water Management - Deliverables */}

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
              <strong>Water Management</strong>
            </Typography>
            <Typography
              align="start"
              fontFamily="Poppins"
              mb={3}
              color="text.secondary"
              textAlign={"justify"}
            >
              In acknowledgment of the vital role water plays in the timely
              initiation and sustained operations of corporate farming, the
              Green Corporate Initiative (Private) Limited has established the
              Green Pakistan Water Management Division. This division is
              dedicated to ensuring efficient water management practices,
              underscoring the commitment to sustainable and responsible
              corporate farming. By addressing water-related challenges, the
              division aims to contribute to a greener and more resilient
              agricultural landscape in Pakistan.
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

        {/* New Water Management - Deliverables */}

        <Grid container mt="50px">
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
            <div>
              <Typography
                align="start"
                fontSize={30}
                mb={4}
                fontFamily="Poppins"
                color="black"
              >
                <strong>GPWM Deliverables</strong>
              </Typography>

              <Card
                mainCardImage={services_water_img2}
                mainCardImageHeight={width < 1200 ? "250px" : "400px"}
                mainCardMaxWidth={"425px"}
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
              fontFamily="Poppins"
              mb={3}
              color="text.secondary"
              textAlign={"justify"}
            >
              <List>
                {bulletPoints.map((point, index) => (
                  <ListItem key={index} disablePadding style={{padding:"5px"}}>
                    <ListItemIcon>
                      <WaterIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={point} />
                  </ListItem>
                ))}
              </List>
            </Typography>
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
