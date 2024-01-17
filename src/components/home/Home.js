import { Grid, Typography, Box, Fab } from "@mui/material";
import { useCallback, useEffect } from "react";
import { useWindowScrollPositions } from "../hooks/getScrollPositions";
import { useNavigate } from "react-router-dom";
import Card from "../utils/CustomCards";
import { useParams } from "react-router-dom";
import useWindowDimensions from "../hooks/getScreenDimensions";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
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
import Title from "../utils/Title";
import WORK from "../../public/image/work.jpg";
import home_image_1 from "../../public/home/home_image_1.jpeg";
import home_image_2 from "../../public/home/home_image_2.jpeg";
import home_image_3 from "../../public/home/home_image_3.jpeg";
import home_image_4 from "../../public/home/home_image_4.png";
import home_image_5 from "../../public/home/home_image_5.png";
// import home_lims_image from "../../public/home/home_lims_image_1.png";
import home_lims_image2 from "../../public/home/home_lims_image_2.png";
import home_lims_image3 from "../../public/home/home_lims_image_3.png";
import home_water_management from "../../public/home/home_water_manage_1.png";
import home_water_deliver from "../../public/home/home_water_deliver.png";
import home_lims_image from "../../public/home/home_lims_image_0.png";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useState } from "react";
// import corporatefarming from "../../../src/public/home/corporate.mp4";
// import Afforestation from "../../../src/public/home/Afforestation.mp4";
// import Livestock from "../../../src/public/home/Livestock.mp4";
import sample5s from "../../../src/public/home/sample-5s.mp4";
import corporateFarming from "../../../src/public/home/corporatefarming.jpg";
import Afforestation from "../../../src/public/home/Afforestation.jpg";
import Livestock from "../../../src/public/home/Livestock.jpg";
import home_horizontal_image from "../../../src/public/home/home_horizontal_image.png";
import home_tractor from "../../../src/public/home/home_tractor.jpg";

const VideoCard = ({ title, videoUrl, playbackSpeed }) => {
  return (
    <Item>
      <div className="video-container">
        <video
          width="400px"
          height="600"
          src={videoUrl}
          title={title}
          allowFullScreen
          autoPlay
          loop
          muted
        ></video>
        <Typography variant="subtitle1" className="video-title">
          {title}
        </Typography>
      </div>
    </Item>
  );
};

// Video cards Style
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#e0e0e0",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
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

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const gridItems = [
    { imageSrc: corporateFarming, title: "Corporate Farming" },
    { imageSrc: Afforestation, title: "Afforestation" },
    { imageSrc: Livestock, title: "Livestock" },
  ];

  return (
    <Box>
      <Title title={"Home"}></Title>

      {/* --------------- 3 Image Cards ---------------  */}
      <Box sx={{ flexGrow: 1, margin: "30px 50px" }}>
        <Grid container spacing={5} justifyContent="center">
          {gridItems.map((item, index) => (
            <Grid
              item
              md={4}
              key={index}
              style={{
                position: "relative",
                filter:
                  hoveredIndex !== null && hoveredIndex === index
                    ? "brightness(100%)"
                    : "brightness(50%)",
                transition: "filter 0.3s ease-in-out",
                transition: "filter 0.3s ease-in-out",
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={item.imageSrc}
                alt={item.title}
                style={{ width: "100%", height: "600px" }}
              />
              <Typography
                variant="subtitle1"
                align="center"
                style={{
                  position: "absolute",
                  top: "80%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  // backgroundColor: "rgba(0, 0, 0, 0.7)",
                  padding: "10px",
                  fontSize: "50px",
                  fontWeight: "bold",
                }}
              >
                {item.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* An Initiative For Technology Driven Large Scale Farming & Livestock */}

      <Typography
        variant="h5"
        gutterBottom
        style={{
          padding: "20px",
          textAlign: "center",
          backgroundColor: "darkGreen",
          width: "93%",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
          color: "white",
          fontWeight: "bold",
          fontSize: "20px",
          fontFamily: "sans-serif",
          borderRadius: "20px",
          margin: "50px auto",
        }}
      >
        An Initiative For Technology Driven Large Scale Farming & Livestock{" "}
      </Typography>
      <Paper
        elevation={3}
        style={{ padding: "20px", margin: "20px 0px", textAlign: "center" }}
      >
        <Grid container spacing={1} justifyContent="center">
          <Grid>
            <img
              src={home_horizontal_image}
              alt="Description of the image"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Paper>

      {/* ----------------- What is GCI -----------------  */}

      <br />

      {/*  LIMS - Home Section */}

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
            Land Information & Management System (LIMS) revolutionizes precision
            agriculture, utilizing drones for farm support, temperature
            monitoring, and weather forecasting. Integrating modern machinery
            and soil/crop monitoring, LIMS enhances productivity. It also
            supports small farmers, providing tailored advice, and ensures
            efficient water management. The system marks a transformative step
            towards sustainable and technology-driven farming practices.
          </Typography>
        </Grid>
        {width < 1200 && width > 800 ? <Grid xs={1}></Grid> : null}
        {width >= 1200 ? <Grid lg={1} xl={2}></Grid> : null}
      </Grid> */}

      {/* Deliverables - LIMS */}

      {/*  Home - Corporate Farming */}

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
            <strong>Corporate Farming in Pakistan</strong>
          </Typography>
          <Typography
            align="start"
            fontFamily="Poppins"
            mb={3}
            color="text.secondary"
            textAlign={"justify"}
          >
            Pakistan is blessed with all four seasons, diverse terrain, abundant
            resources and sturdy human resource. Its culturable wastelands makes
            it a perfect place for undertaking farming under Corporate format
            for not only ensuring Food Security for Pakistan but also generating
            Export Surplus thus contributing towards food Security in the
            Region. <br /> Vast wastelands provide excellent opportunity for
            Investments in Agriculture as well as other Agri Related Projects
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
            mainCardImage={home_tractor}
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
      </Grid>

      <Box
        role="presentation"
        onClick={() => navigate("/download-pdf")}
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
