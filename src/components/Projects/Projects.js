import { Grid, Box, Typography, Button, Fab } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useWindowScrollPositions } from "../hooks/getScrollPositions";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useWindowDimensions from "../hooks/getScreenDimensions";
import React from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import Projects_1 from "../../../src/public/home/projects_1.png";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import home_image_1 from "../../public/home/home_image_1.jpeg";
import home_image_2 from "../../public/home/home_image_2.jpeg";
import TableComp from "./Table";
export default function Main() {
  const [selectedOption, setSelectedOption] = useState("");
  const [tableData, setTableData] = useState([]);
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

  const options = ["Location 1", "Location 2", "Location 3"];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    // Update table data based on the selected option
    // You need to implement the logic to fetch or generate data based on the selected option
    // For now, I'll use a simple example with hardcoded data
    if (event.target.value === "location1") {
      setTableData([
        createData("Item1", 100, 10, 20, 30),
        createData("Item2", 150, 15, 25, 35),
        // Add more rows as needed
      ]);
    } else if (event.target.value === "location2") {
      setTableData([
        createData("ItemA", 200, 20, 30, 40),
        createData("ItemB", 250, 25, 35, 45),
        // Add more rows as needed
      ]);
    } else if (event.target.value === "location3") {
      setTableData([
        createData("ItemX", 300, 30, 40, 50),
        createData("ItemY", 350, 35, 45, 55),
        // Add more rows as needed
      ]);
    }
  };

  const getImagePath = () => {
    if (selectedOption === "location1") {
      return Projects_1;
    } else if (selectedOption === "location2") {
      return home_image_1;
    } else if (selectedOption === "location1") {
      return home_image_2;
    }

    return home_image_2;
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  return (
    <>
      <Grid container spacing={2} sx={{ p: 7 }}>
        {/* ... (rest of the code) */}
        <Grid item xs={12} md={9} sx={{ order: { xs: 2, md: 1 } }}>
          <img
            src={getImagePath()}
            alt="Your Image"
            style={{ width: "100%", height: "600px" }}
          />
        </Grid>

        <Grid item xs={12} md={3} sx={{ order: { xs: 1, md: 2 } }}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="dropdown-label">Select Option</InputLabel>
            <Select
              labelId="dropdown-label"
              label="Select Option"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              {options.map((option, index) => (
                <MenuItem
                  key={index}
                  value={option.toLowerCase().replace(/\s+/g, "")}
                >
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Table Component */}
          <Grid item xs={12} md={12} sx={{ order: { xs: 3, md: 3 } }}>
            <TableComp data={tableData} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
