import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import { List, ListItem, Grid } from "@mui/material";
import investor_hand from "../../public/home/investors_hand_img.jpeg";
import investors_tree from "../../public/home/imvestor_tree_img.jpeg";
import investor_chart from "../../public/home/investor_chart_img.jpeg";

import Investors_img2 from "../../public/home/Investors_img2.jpg";
export default function Investors() {
  return (
    <>
      <Typography
        style={{
          position: "absolute",
          top: "20%",
          left: "22%",
          fontSize: "50px",
          fontWeight: "bold",
        }}
      >
        <span
          style={{
            WebkitTextStroke: "2px",
            WebkitTextFillColor: "transparent", // Use camelCase for CSS property names in inline styles
          }}
        >
          {" "}
          Investment{" "}
        </span>
        <br /> Opportunities
      </Typography>
      <Container>
        <Typography variant="h4" mt={5} mb={3} style={{ fontWeight: "bold" }}>
          Crop Cultivation Projects
        </Typography>

        <Box position="relative">
          {/* Full-width image */}
          <img
            src={Investors_img2} // Replace with the actual path to your image
            alt="Crop Cultivation Projects"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />

          {/* Text in the bottom right corner */}
          <Box
            position="absolute"
            bottom={0}
            right={0}
            p={2}
            fontWeight={"bold"}
            color={"white"}
          >
            <Typography variant="body1" style={{ fontSize: "30px" }}>
              Agriculture Projects over 4.8 Mn Acres of Land
            </Typography>
          </Box>
        </Box>

        {/* Other Investment Avenues */}
        <Typography variant="h4" mt={5} mb={3} style={{ fontWeight: "bold" }}>
          Other Investment Avenues
        </Typography>

        {/* Two Columns of Bullet Points */}
        <Box display="flex" justifyContent="space-between">
          {/* Left Column */}
          <Box width="45%">
            <Typography variant="body1" style={{ lineHeight: "2" }}>
              <ul>
                <li>Farm Mechanization Projects</li>
                <li>Value Addition Projects</li>
                <li>Solar Based Energy Projects</li>
                <li>High Efficiency Irrigation System Projects</li>
                <li>Infrastructure Development Projects</li>
              </ul>
            </Typography>
          </Box>

          {/* Right Column */}
          <Box width="45%">
            <Typography variant="body1" style={{ lineHeight: "2" }}>
              <ul>
                <li>Farm to Market Roads Projects</li>
                <li>Pipeline Based Irrigation System Projects</li>
                <li>Canal Based Irrigation Systems Projects</li>
                <li>Agri Investments / Insurance Projects</li>
                <li>Supply Chain Management Projects</li>
              </ul>
            </Typography>
          </Box>
        </Box>

        {/* Our Investment Models */}

        <Typography paddingTop={5}>
          <h2 style={{ fontWeight: "bold" }}>Our Investment Models</h2>
        </Typography>
        <Grid container spacing={3}>
          {/* Left side */}
          <Grid item xs={12} md={6}>
            <Paper elevation={0} style={{ padding: "20px" }}>
              <Typography variant="h5" gutterBottom>
                ► Joint Venture Model
              </Typography>
              <List>
                <ListItem>
                  <Typography component="span" variant="body1">
                    • Join us under the Joint Venture Model for 30 years
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography component="span" variant="body1">
                    • You bring in the investment; Land will be our equity
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography component="span" variant="body1">
                    • Dividends shared as per agreed terms
                  </Typography>
                </ListItem>
              </List>
            </Paper>
          </Grid>

          {/* Right side */}
          <Grid item xs={12} md={6}>
            <Paper elevation={0} style={{ padding: "0px" }}>
              {/* Replace 'your-image-url' with the actual URL of your image */}
              <img
                src={investor_hand}
                alt="Joint Venture Model"
                style={{ width: "500px", height: "300px" }}
              />
            </Paper>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={3}
          style={{ paddingTop: "30px", paddingBottom: "30px" }}
        >
          {/*2nd  Left side */}
          <Grid item xs={12} md={6}>
            <Paper elevation={0} style={{ padding: "20px" }}>
              <Typography variant="h5" gutterBottom>
                ► Build-Operate and Transfer Model
              </Typography>
              <List>
                <ListItem>
                  <Typography component="span" variant="body1">
                    • Join us under the Joint Venture Model for 30 years
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography component="span" variant="body1">
                    • You bring in the investment; Land will be our equity
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography component="span" variant="body1">
                    • Dividends shared as per agreed terms
                  </Typography>
                </ListItem>
              </List>
            </Paper>
          </Grid>

          {/*2nd  Right side */}
          <Grid item xs={12} md={6}>
            <Paper elevation={0} style={{ padding: "0px" }}>
              {/* Replace 'your-image-url' with the actual URL of your image */}
              <img
                src={investor_chart}
                alt="Joint Venture Model"
                style={{ width: "500px", height: "300px" }}
              />
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          {/* 3rd Left side */}
          <Grid item xs={12} md={6}>
            <Paper elevation={0} style={{ padding: "20px" }}>
              <Typography variant="h5" gutterBottom>
                ► Investor Model
              </Typography>
              <List>
                <ListItem>
                  <Typography component="span" variant="body1">
                    • Join us under the Joint Venture Model for 30 years
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography component="span" variant="body1">
                    • You bring in the investment; Land will be our equity
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography component="span" variant="body1">
                    • Dividends shared as per agreed terms
                  </Typography>
                </ListItem>
              </List>
            </Paper>
          </Grid>

          {/* 3rd Right side */}
          <Grid item xs={12} md={6}>
            <Paper elevation={0} style={{ padding: "0px" }}>
              {/* Replace 'your-image-url' with the actual URL of your image */}
              <img
                src={investors_tree}
                alt="Joint Venture Model"
                style={{ width: "500px", height: "300px" }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
