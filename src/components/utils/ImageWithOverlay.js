import { Typography } from "@mui/material";
import Card from "react-bootstrap/Card";

function ImgOverlayExample({
  image,
  text,
  height,
  titlePartOne,
  titlePartTwo,
  titlePartThree,
  titlePartFour,
}) {
  return (
    <Card className="bg-dark text-white" style={{ marginTop: "100px" }}>
      <Card.Img src={image} alt="Card image" height={height} />
      <Card.ImgOverlay
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(2, 15, 35, 0.5), rgba(2, 15, 35, 0.5))`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 0,
        }}
      >
        <Card.Title style={{ color: "white" }}>
          <Typography
            fontFamily="Poppins"
            variant="h3"
            style={{
              textAlign: "center",
              display: "block",
              fontSize: "35px",
              lineHeight: "46px",
              letterSpacing: ".01em",
              fontWeight: 800,
            }}
            sx={{ marginTop: { xs: "100px", md: "100px" } }}
          >
            {titlePartOne}{" "}
            <span
              style={{
                WebkitTextStroke: "1px",
                WebkitTextFillColor: "transparent", // Use camelCase for CSS property names in inline styles
              }}
            >
              {titlePartTwo}
            </span>
            <div
              style={{
                fontSize: "35px",
                color: "white",
              }}
            >
              {titlePartThree}
            </div>
            <div style={{ fontSize: "25px", color: "darkgray" }}>
              {titlePartFour}
            </div>
          </Typography>
        </Card.Title>
        <Card.Text></Card.Text>
        <Card.Text color="primary">{text}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlayExample;
