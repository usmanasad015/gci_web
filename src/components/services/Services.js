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
import aboutImg1 from "../../../src/public/home/about_who_are_we.jpg";
import ourServices_pic2 from "../../../src/public/home/Our_services_Picture2.png";
import ourServices_pic3 from "../../../src/public/home/Our_services_Picture3.png";
import ourServices_pic4 from "../../../src/public/home/Our_services_Picture4.png";
import ourServices_pic5 from "../../../src/public/home/Our_services_Picture5.png";

const objectiveImages = [
  {
    src: ourServices_pic2,
    alt: "ourServices_pic3",
    text: "Land Information & Management System",
    link: "Lims",
  },
  {
    src: ourServices_pic3,
    alt: "ourServices_pic3",
    text: "Water Management",
    link: "water-management",
  },
  {
    src: ourServices_pic4,
    alt: "ourServices_pic4",
    text: "Agri Malls",
    link: "agri-malls",
  },
  {
    src: ourServices_pic5,
    alt: "ourServices_pic5",
    text: "Agri Service Company",
    link: "agri-services",
  },
];
export default function Services() {
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

  const handleDivClick = (link) => {
    navigate(`/${link}`);
  };
  return (
    <Box>
      <Title title={"Home"}></Title>

      {/* 4 cards images  */}

      <div
        style={{ margin: "0 280px", alignItems: "center", padding: "30px 0" }}
        container
      >
        <Grid container spacing={2}>
          {objectiveImages.map((image, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <div
                style={{ position: "relative", cursor: "pointer" }}
                onClick={() => handleDivClick(image.link)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{ width: "100%", height: "auto" }}
                />
                <Typography
                  variant="subtitle1"
                  align="center"
                  gutterBottom
                  style={{
                    position: "absolute",
                    top: "85%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "white", // Customize text color
                    fontSize: "25px",
                    fontSize: "19px",
                    lineHeight: "1.2",
                    fontWeight: "bold",
                  }}
                >
                  {image.text}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
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
  );
}
