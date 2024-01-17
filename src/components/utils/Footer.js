import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import EmailIcon from "@mui/icons-material/Email";
import Box from "@mui/material/Box";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import { Grid, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import WHITE_LOGO from "../../public/logo/WHITE_LOGO.png";

const redirectToLinkedin = () => {
  // window.location.href = 'https://www.linkedin.com/company/limscoe/';
};
const redirectToInsta = () => {
  // window.location.href = 'https://instagram.com/lims_coe?igshid=MzMyNGUyNmU2YQ==';
};

export default function Footer() {
  let myCurrentDate = new Date();
  const typographyStyle = {
    fontFamily: "Poppins, sans-serif",
  };
  return (
    <Box
      className="text-center text-lg-start"
      style={{ color: "white", backgroundColor: "#372d21" }}
    >
      <section className="">
        <Grid
          container
          mt={10}
          alignItems="start"
          spacing={3}
          className="text-start"
          padding={5}
        >
          <Grid item md={5} lg={5} xl={5} xs={12} className="p-1">
            <Typography
              variant="h6"
              className="text-uppercase fw-bold mb-4"
              style={typographyStyle}
            >
              <img
                src={WHITE_LOGO}
                alt="Alt Text"
                className="m-3"
                style={{
                  width: "70px",
                  height: "70px",
                }}
              />
            </Typography>
            <Typography
              className="m-3"
              style={{ ...typographyStyle, textAlign: "justify" }}
            >
              Lands Information & Management System (LIMS) revolutionizes
              precision agriculture, utilizing drones for farm support,
              temperature monitoring, and weather forecasting. Integrating
              modern machinery and soil/crop monitoring, LIMS enhances
              productivity. It also supports small farmers, providing tailored
              advice, and ensures efficient water management. The system marks a
              transformative step towards sustainable and technology-driven
              farming practices.
            </Typography>
            <Typography className="m-3" style={{ color: "#3AA8FF" }}>
              <a
                href="https://www.linkedin.com/company/limscoe/"
                className="me-4 text-reset"
              >
                <LinkedInIcon style={{ color: "white" }} />
              </a>
              <a
                href="https://instagram.com/lims_coe?igshid=MzMyNGUyNmU2YQ=="
                className="me-4 text-reset"
              >
                <InstagramIcon style={{ color: "white" }} />
              </a>
              <a
                href="mailto:info@limspakistan.com"
                className="me-4 text-reset"
              >
                <EmailOutlinedIcon style={{ color: "white" }} />
              </a>
            </Typography>
          </Grid>
          <Grid item spacing={20} mt={"20"} md={3} lg={3} xl={3} xs={12}>
            <Typography
              variant="h6"
              className="text-uppercase fw-bold mb-4"
              style={typographyStyle}
            >
              Contact Us
            </Typography>
            <Typography
              className="mb-2"
              style={{
                ...typographyStyle,
                lineHeight: "30px",
                textAlign: "justify",
              }}
            >
              <LocationOnOutlinedIcon
                className="me-2"
                style={{ color: "white" }}
              />
              Rumi House, Old Airport Rd., Askari 10 Chaklala Cantt.,
              Rawalpindi, Punjab 46000
            </Typography>
            <Typography
              className="mb-2"
              style={{ ...typographyStyle, lineHeight: "25px" }}
            >
              <EmailIcon className="me-3" style={{ color: "white" }} />
              info@gcipakistan.com
            </Typography>
            <Typography
              className="mb-2"
              style={{ ...typographyStyle, lineHeight: "25px" }}
            >
              <PhoneIcon className="me-3" style={{ color: "white" }} />{" "}
              051-9286355
            </Typography>

            <Typography
              className="mb-2"
              style={{ ...typographyStyle, lineHeight: "25px" }}
            >
              <WhatsAppIcon className="me-3" style={{ color: "white" }} />{" "}
              0336-4996661
            </Typography>
          </Grid>
          <Grid item md={2} lg={2} xl={2} xs={12}>
            <Typography
              variant="h6"
              className="text-uppercase fw-bold mb-4"
              style={typographyStyle}
            >
              MAIN MENU
            </Typography>
            <Typography className="mb-2">
              <a href="/about" className="text-reset" style={typographyStyle}>
                About Us
              </a>
            </Typography>
            <Typography className="mb-2">
              <a href="/contact" className="text-reset" style={typographyStyle}>
                Contact us
              </a>
            </Typography>
            <Typography className="mb-2">
              <a
                href="/download-pdf"
                className="text-reset"
                style={typographyStyle}
              >
                Download PDF
              </a>
            </Typography>
            <Typography className="mb-2">
              <a
                href="/book-appointment"
                className="text-reset"
                style={typographyStyle}
              >
                Book Appointment
              </a>
            </Typography>
          </Grid>

          {/* 
          <Grid item md={2} lg={2} xl={2} xs={12}>
            <Typography variant="h6" className="text-uppercase fw-bold mb-4" style={typographyStyle}>
            Useful Links
            </Typography>
            <Typography className="mb-2">
              <a href="/wheat-registration" className="text-reset" style={typographyStyle}>
              Wheat Farm Registration
              </a>
            </Typography> 
            <Typography className="mb-2">
              <a href="/farm-recommendation" className="text-reset" style={typographyStyle}>
               Wheat Land Prepration Advisory
              </a>
            </Typography>
 
          </Grid> */}
        </Grid>
      </section>
      <div className="p-4" style={{ backgroundColor: "#372d21" }}>
        <a className="text-reset fw-bold" href="!#" style={typographyStyle}>
          © {myCurrentDate.getFullYear()} GCI. All rights reserved.
        </a>
      </div>
    </Box>
  );
}
