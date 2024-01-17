import { Grid, Box, Typography, Button, Fab } from "@mui/material";
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
  return (
    <Box>
      <Title title={"Home"}></Title>

      {/* What is GCI */}

      <Grid container mt="50px">
        {width >= 1200 ? <Grid lg={1} xl={2}></Grid> : null}
        <Grid
          item
          pl={2}
          pr={2}
          xs={12}
          lg={6}
          xl={width < 1800 ? 4 : 3}
          alignItems="flex-end"
          style={{
            display: "flex",
            justifyContent: width < 1200 ? "center" : "end",
          }}
        >
          <Card
            mainCardImage={WORK}
            mainCardImageHeight={width < 1200 ? "250px" : "400px"}
            mainCardMaxWidth={"1000px"}
            mainCardBoxShadow={"none"}
            mainCardHeight={width < 1200 ? "250px" : "450px"}
            mainCardMaxHeight={"400px"}
            mainCardBorderRadius={"15px"}
            mainCardWriteOnImage={null}
            basicCard={false}
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
            fontFamily="Poppins"
            color="rgb(101,77,52)"
          ></Typography>
          <Typography
            align="start"
            fontSize={30}
            mb={2}
            fontFamily="Poppins"
            color="black"
          >
            <strong>What is Green Corporate Initiative</strong>
          </Typography>
          <Typography
            align="start"
            fontFamily="Poppins"
            mb={3}
            line-height="10px"
            word-spacing="15px"
            color="text.secondary"
            textAlign={"justify"}
          >
            Green Corporate Initiative (Private) Limited has been established
            with the aim to manage and undertake modern agriculture farming
            within the Green Pakistan Initiative. Under its auspices, Land
            Information & Management System (LIMS) was established in April 2023
            and inaugurated by Prime Minister of Islamic Republic of Pakistan
            and Chief of Army Staff on 7 July 2023. This is a paradigm shift in
            our approach to land administration and agricultural development.
            <br />
            This state-of-the-art System will revolutionize means to steer
            agricultural development through real time information about soil,
            crops, weather, water resource pest monitoring under one roof.
          </Typography>
        </Grid>
        {width < 1200 && width > 800 ? <Grid xs={1}></Grid> : null}
        {width >= 1200 ? <Grid lg={1} xl={2}></Grid> : null}
      </Grid>

      {/* HOW WE WORK */}

      <br />

      {/*  LIMS - Home Section */}

      <Grid container mt="50px">
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
      </Grid>

      {/* Deliverables - LIMS */}

      {/*  LIMS - Water Management Section */}

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
            initiation and sustained operations of corporate farming, the Green
            Corporate Initiative (Private) Limited has established the Green
            Pakistan Water Management Division. This division is dedicated to
            ensuring efficient water management practices, underscoring the
            commitment to sustainable and responsible corporate farming. By
            addressing water-related challenges, the division aims to contribute
            to a greener and more resilient agricultural landscape in Pakistan.
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
      </Grid>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        mt="10px"
        p={5}
      >
        <Grid item xs={12} md={width < 1800 ? 10 : 7}>
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
            <strong>Mandate</strong>
          </Typography>
        </Grid>
        <Grid item xs={12} md={width < 1800 ? 10 : 7}>
          <Typography
            align="start"
            mt="20px"
            mb="15px"
            fontFamily="Poppins"
            color="text.secondary"
            textAlign={"justify"}
          >
            The mandate is to convert waste and barren state land into
            cultivable land through incorporating modern techniques and
            agri-best practices. Its intent is to revolutionize the country’s
            agriculture sector horizontally and vertically, hence ensuring its
            food security. Moreover, will enable us to explore export
            opportunities and contribute to the growth of our economy.
            <strong>
              Thank you for choosing GCI as your partner in agricultural
              innovation.
            </strong>
          </Typography>
        </Grid>
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
