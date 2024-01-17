import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function DownloadPDF(){
  const [text, setText] = useState("");

  const handleDownload = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const downloadLink = document.createElement("a");

    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.download = "downloaded_text.txt";

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
      <Container>
        <Card
          style={{
            marginTop: "40px",
            background: "#f5f7fb",
            border: "1px solid #ecedf2",
            borderRadius: "10px",
            fontFamily: "Poppins",
          }}
        >
          <Card.Body>
            <Row>
              <Col xs={10}>
                <Card.Title>File Name</Card.Title>
                <Card.Text>{text}</Card.Text>
              </Col>
              <Col>
                <Button
                  onClick={handleDownload}
                  style={{
                    background: "#372d21",
                    border: "none",
                    boxShadow: "none",
                  }}
                >
                  Download File 1
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "40px",
            background: "#f5f7fb",
            border: "1px solid #ecedf2",
            borderRadius: "10px",
            fontFamily: "Poppins",
          }}
        >
          <Card.Body>
            <Row>
              <Col xs={10}>
                <Card.Title>File Name</Card.Title>
                <Card.Text>{text}</Card.Text>
              </Col>
              <Col >
                <Button
                  onClick={handleDownload}
                  style={{
                    background: "#372d21",
                    border: "none",

                    boxShadow: "none",
                  }}
                >
                  Download File 2
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
  );
};

export default DownloadPDF;
