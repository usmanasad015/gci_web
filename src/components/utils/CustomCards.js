import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
// basiCardMaxWidth = 300
// basicCardBorderRadius = 25%
// basicCardBoxShadow = none
const BasicCard = ({
  basicCardText,
  basiCardMaxWidth,
  basicCardBorderRadius,
  basicCardBoxShadow,
}) => {
  return (
    <Card
      sx={{
        maxWidth: basiCardMaxWidth,
        borderRadius: basicCardBorderRadius,
        boxShadow: basicCardBoxShadow,
      }}
    >
      <CardContent>
        <Typography
          align="center"
          sx={{ fontSize: 18 }}
          gutterBottom
          fontFamily="Poppins"
        >
          {basicCardText}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default function ActionAreaCard({
  mainCardImage,
  mainCardImageHeight,
  mainCardMaxWidth,
  mainCardBoxShadow,
  mainCardHeight,
  mainCardMaxHeight,
  mainCardBorderRadius,
  mainCardIcon,
  mainCardWriteOnImage,
  basicCard,
  basicCardText, 
  basiCardMaxWidth,
  basicCardBorderRadius,
  basicCardBoxShadow,
}) {
  return (
    <div style={{ height: mainCardHeight }}>
      <Card 
        sx={{
          maxWidth: mainCardMaxWidth,
          maxHeight: mainCardMaxHeight,
          boxShadow: mainCardBoxShadow,
          borderRadius: mainCardBorderRadius,
          position: "relative",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height={mainCardImageHeight}
            image={mainCardImage}
          />
          {mainCardWriteOnImage == null ? null : (
            <CardContent
              style={{
                position: "absolute",
                bottom: "-48px",
                left: "0",
                right: "0",
                backgroundColor: "rgba(255, 255, 255, 0)",
              }}
            >
              <Typography
                style={{
                  fontSize: "90px",
                  fontWeight: "900px",
                  color: "white",
                }}
              >
                {mainCardWriteOnImage}
              </Typography>
            </CardContent>
          )}
          <CardContent
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              right: "0",
              backgroundColor: "rgba(255, 255, 255, 0)",
            }}
          >
            {mainCardIcon}
          </CardContent>
        </CardActionArea>
      </Card>
      {basicCard && <BasicCard basicCardText={basicCardText} basiCardMaxWidth={basiCardMaxWidth} basicCardBorderRadius={basicCardBorderRadius} basicCardBoxShadow={basicCardBoxShadow} />}
    </div>
  );
}
