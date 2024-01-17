import { Grid, Box, Typography, Button, Fab } from "@mui/material";
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
// import WORK from "../../public/image/aboutimg1.jpeg";
import WORK from "../../public/image/home_image_4.png";
import aboutImg1 from "../../../src/public/home/about_who_are_we.jpg";
import ourVision from "../../../src/public/home/ourVision.png";
import about_obj_1 from "../../../src/public/home/about_obj_1.jpeg";
import about_obj_2 from "../../../src/public/home/about_obj_2.jpeg";
import about_obj_3 from "../../../src/public/home/about_obj_3.jpeg";
import about_obj_4 from "../../../src/public/home/about_obj_4.jpeg";
import missionLogo from "../../../src/public/home/mission_about.jpeg";
import goalLogo from "../../../src/public/home/goal_about.jpeg";
const objectiveImages = [
  {
    src: about_obj_1,
    alt: "Image 1",
    text: "Land Development & Improved Yield",
  },
  { src: about_obj_2, alt: "Image 2", text: "Social Impact" },
  { src: about_obj_3, alt: "Image 3", text: "Import Substitute" },
  { src: about_obj_4, alt: "Image 4", text: "Bio Diversity" },
];
export default function Main() {
  const { id } = useParams();
  useEffect(() => {
    console.log(useParams);
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
    <Box>
      <Title title={"Home"}></Title>

      {/* Who are we  */}

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
            <strong>Who are we?</strong>
          </Typography>
          <Typography
            align="start"
            fontFamily="Poppins"
            mb={3}
            color="text.secondary"
            textAlign={"justify"}
          >
            Green Corporate Initiative (Private) Limited has been established
            with the aim to manage and undertake modern agriculture farming on
            the culturable state wastelands within the Green Pakistan
            Initiative.
          </Typography>

          {/* Our Goal */}
          {/* <Typography
            align="start"
            fontSize={30}
            mb={0}
            fontFamily="Poppins"
            color="black"
          >
            <strong>Our Goal</strong>
          </Typography>
          <Typography
            align="start"
            fontFamily="Poppins"
            mb={0}
            color="text.secondary"
            textAlign={"justify"}
          >
            Through real-time data collection, analysis and reporting, maintain
            necessary insights to make informed decisions, identify challenges,
            and implement timely interventions for improved production
          </Typography> */}
        </Grid>

        {/* Image on the Right */}
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
            mainCardImage={aboutImg1}
            mainCardImageHeight={width < 1200 ? "250px" : "300px"}
            mainCardMaxWidth={"425px"}
            mainCardBoxShadow={"none"}
            mainCardHeight={width < 1200 ? "250px" : "400px"}
            mainCardMaxHeight={"400px"}
            mainCardBorderRadius={"25px"}
            mainCardWriteOnImage={null}
            basicCard={false}
          />
        </Grid>

        {width < 1200 && width > 800 ? <Grid xs={1}></Grid> : null}
        {width >= 1200 ? <Grid lg={1} xl={2}></Grid> : null}
      </Grid>

      {/* Mission */}

      <Grid
        item
        xs={width <= 800 ? 12 : 9}
        lg={12}
        xl={12}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          paddingLeft: "40px",
          paddingRight: "40px",
          marginTop: width < 1200 ? "50px" : "0px",
          margin: "0 auto",
          width: width > 1200 ? "67%" : "100%",
        }}
        container
        // mt="50px"
      >
        <Typography
          align="start"
          fontSize={30}
          mb={4}
          fontFamily="Poppins"
          color="black"
        >
          <span>
            <img
              src={missionLogo}
              alt="Mission Logo"
              style={{ width: "40px", marginRight: "10px" }}
            />
          </span>
          <strong>Mission</strong>
        </Typography>
        <Typography
          align="start"
          fontFamily="Poppins"
          mb={3}
          color="text.secondary"
          textAlign={"justify"}
        >
          Green Corporate Initiative (Private) Limited has been established with
          the aim to manage and undertake modern agriculture farming on the
          culturable state wastelands within the Green Pakistan Initiative.
        </Typography>
      </Grid>

      {/* Goal */}

      <Grid
        item
        xs={width <= 800 ? 12 : 9}
        lg={12}
        xl={12}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          paddingLeft: "40px",
          paddingRight: "40px",
          marginTop: width < 1200 ? "50px" : "0px",
          margin: "0 auto",
          width: width > 1200 ? "67%" : "100%",
        }}
        container
        // mt="50px"
      >
        <Typography
          align="start"
          fontSize={30}
          mb={4}
          fontFamily="Poppins"
          color="black"
        >
          <span>
            <img
              src={goalLogo}
              alt="Mission Logo"
              style={{ width: "40px", marginRight: "10px" }}
            />
          </span>
          <strong>Goal</strong>
        </Typography>
        <Typography
          align="start"
          fontFamily="Poppins"
          mb={3}
          color="text.secondary"
          textAlign={"justify"}
        >
          Our goal is to turn our brown wastelands into grain yielding green
          lands
        </Typography>
      </Grid>

      {/* Our Vision */}
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
            paddingRight: "10px",
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
            <strong>Our Vision</strong>
          </Typography>
          <Typography
            align="start"
            fontFamily="Poppins"
            mb={3}
            color="text.secondary"
            textAlign={"justify"}
          >
            To consolidate all state culturable wastelands for agriculture
            purposes, invest in Agri R&D, switch to Precision Agriculture, adopt
            Best Agri Practices, achieve Yield Optimization, Add Value to our
            products, adapt as per Weather Factors and Promote Exports resulting
            into Rural Development, Poverty Alleviation and ensuring FOOD
            SECURITY
          </Typography>
        </Grid>

        {/* Image on the Right */}
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
            mainCardImage={ourVision}
            mainCardImageHeight={width < 1200 ? "250px" : "450px"}
            mainCardMaxWidth={"525px"}
            mainCardBoxShadow={"none"}
            mainCardHeight={width < 1200 ? "250px" : "500px"}
            mainCardMaxHeight={"500px"}
            mainCardBorderRadius={"25px"}
            mainCardWriteOnImage={null}
            basicCard={false}
          />
        </Grid>

        {width < 1200 && width > 800 ? <Grid xs={1}></Grid> : null}
        {width >= 1200 ? <Grid lg={1} xl={2}></Grid> : null}
      </Grid>

      {/* Our Objectives */}

      <div style={{ margin: "0 280px", alignItems: "center" }} container>
        <Typography variant="h4" gutterBottom sx={{ color: "black" }}>
          <strong>Our Objectives</strong>
        </Typography>

        <Grid container spacing={2}>
          {objectiveImages.map((image, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <img
                src={image.src}
                alt={image.alt}
                style={{ width: "100%", height: "100%" }}
              />
              <Typography variant="subtitle1" align="center" gutterBottom>
                {image.text}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </div>
      {/* Value Section */}
      {/* <Grid
        container
        justifyContent="center"
        alignItems="center"
        mt="10px"
        p={5}
      >
        <Grid item xs={12} md={10}>
          <Typography
            align="start"
            variant="h5"
            fontFamily="Poppins"
            style={{
              borderBottom: "1px solid rgb(101,77,52)",
              marginBottom: "5px",
              paddingBottom: "5px",
            }}
          >
            <strong>Values</strong>
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={width < 1800 ? 10 : 7}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"start"}
          flexDirection={width < 786 ? "column" : "row"}
        >
          <Box display={"flex"} flexDirection={"column"}>
            <Box display={"flex"} mt="20px" mb="15px">
              <SecurityIcon style={{ color: "#372d21", marginRight: "10px" }} />
              <Typography
                align="start"
                fontFamily="Poppins"
                color="text.secondary"
                textAlign={"justify"}
              >
                Food Security
              </Typography>
            </Box>
            <Box display={"flex"} mt="20px" mb="15px">
              <StarBorderOutlinedIcon
                style={{ color: "#372d21", marginRight: "10px" }}
              />
              <Typography
                align="start"
                fontFamily="Poppins"
                color="text.secondary"
                textAlign={"justify"}
              >
                Best Agri Practices.
              </Typography>
            </Box>
            <Box display={"flex"} mt="20px" mb="15px">
              <PrecisionManufacturingOutlinedIcon
                style={{ color: "#372d21", marginRight: "10px" }}
              />
              <Typography
                align="start"
                fontFamily="Poppins"
                color="text.secondary"
                textAlign={"justify"}
              >
                Precision Agriculture.
              </Typography>
            </Box>
            <Box display={"flex"} mt="20px" mb="15px">
              <ScienceOutlinedIcon
                style={{ color: "#372d21", marginRight: "10px" }}
              />
              <Typography
                align="start"
                fontFamily="Poppins"
                color="text.secondary"
                textAlign={"justify"}
              >
                Yield Optimization.
              </Typography>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Box display={"flex"} mt="20px" mb="15px">
              <DataSaverOnOutlinedIcon
                style={{ color: "#372d21", marginRight: "10px" }}
              />
              <Typography
                align="start"
                fontFamily="Poppins"
                color="text.secondary"
                textAlign={"justify"}
              >
                Value Addition.
              </Typography>
            </Box>
            <Box display={"flex"} mt="20px" mb="15px">
              <CloudOutlinedIcon
                style={{ color: "#372d21", marginRight: "10px" }}
              />
              <Typography
                align="start"
                fontFamily="Poppins"
                color="text.secondary"
                textAlign={"justify"}
              >
                Weather Factors.
              </Typography>
            </Box>
            <Box display={"flex"} mt="20px" mb="15px">
              <LandscapeOutlinedIcon
                style={{ color: "#372d21", marginRight: "10px" }}
              />
              <Typography
                align="start"
                fontFamily="Poppins"
                color="text.secondary"
                textAlign={"justify"}
              >
                Land Consolidation.
              </Typography>
            </Box>
            <Box display={"flex"} mt="20px" mb="15px">
              <AgricultureOutlinedIcon
                style={{ color: "#372d21", marginRight: "10px" }}
              />
              <Typography
                align="start"
                fontFamily="Poppins"
                color="text.secondary"
                textAlign={"justify"}
              >
                Agriculture R&D.
              </Typography>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Box display={"flex"} mt="20px" mb="15px">
              <HolidayVillageOutlinedIcon
                style={{ color: "#372d21", marginRight: "10px" }}
              />
              <Typography
                align="start"
                fontFamily="Poppins"
                color="text.secondary"
                textAlign={"justify"}
              >
                Rural Development.
              </Typography>
            </Box>
            <Box display={"flex"} mt="20px" mb="15px">
              <RestaurantMenuOutlinedIcon
                style={{ color: "#372d21", marginRight: "10px" }}
              />
              <Typography
                align="start"
                fontFamily="Poppins"
                color="text.secondary"
                textAlign={"justify"}
              >
                Poverty Alleviation.
              </Typography>
            </Box>
            <Box display={"flex"} mt="20px" mb="15px">
              <ImportExportOutlinedIcon
                style={{ color: "#372d21", marginRight: "10px" }}
              />
              <Typography
                align="start"
                fontFamily="Poppins"
                color="text.secondary"
                textAlign={"justify"}
              >
                Exports Promotion.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid> */}

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
  );
}
