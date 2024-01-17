import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useWindowScrollPositions } from "../hooks/getScrollPositions";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

import CancelIcon from "@mui/icons-material/Cancel";
import WHITE_LOGO from "../../public/logo/WHITE_LOGO.png";
import COLORED_LOGO from "../../public/logo/COLORED_LOGO.png";
import { styled } from "@mui/system";

import "../../../src/App.css"; // Adjust the path if the CSS file is in a different directory

const drawerWidth = 300;

const navItems = [
  { id: 1, title: "Home", link: "home1" },
  { id: 2, title: "About", link: "about" },
  {
    id: 6,
    title: "Services",
    link: "services",
    subItems: [
      { id: 8, title: "LIMS", link: "Lims" },
      { id: 9, title: "Water Management", link: "water-management" },
      { id: 10, title: "Agri Malls", link: "agri-malls" },
      { id: 11, title: "Agri Services", link: "agri-services" },
    ],
  },
  { id: 7, title: "Projects", link: "projects" },
  { id: 3, title: "Contact us", link: "contact" },
  { id: 4, title: "Download PDF", link: "download-pdf" },
  { id: 5, title: "Book Appointment", link: "book-appointment" },
];

const redirectToLinkedin = () => {
  // window.location.href = 'https://www.linkedin.com/company/limscoe/';
};
const redirectToInsta = () => {
  // window.location.href = 'https://instagram.com/lims_coe?igshid=MzMyNGUyNmU2YQ==';
};

export default function limsServicesHeader(props) {
  // const useStyles = makeStyles(() => ({
  //   dropdownToggle: {
  //     "&::after": {
  //       color: "#c62c2c",
  //     },
  //   },
  // }));
  // const classes = useStyles();

  const StyledNavDropdownToggle = styled(Button)({
    ".dropdown-toggle::after": {
      color: (props) => (props.home && props.scrollY === 0 ? "white" : "black"),
    },
  });

  const { scrollY } = useWindowScrollPositions();
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        onClick={() => navigate("/home1")}
        variant="h6"
        sx={{ my: 2 }}
      >
        <img
          src={COLORED_LOGO}
          alt="LIMS"
          style={{
            width: "70px",
            height: "70px",
          }}
        />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) =>
          item.title !== "Book Appointment" ? (
            <ListItem key={item}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <Link to={`/${item.link.toLowerCase()}`}>
                  {" "}
                  <ListItemText
                    primary={item.title}
                    style={{ color: "#372d21" }}
                  />
                </Link>
              </ListItemButton>
            </ListItem>
          ) : null
        )}
      </List>
      {/* <Divider />
      <List>
        <ListItem>
          <ListItemButton sx={{ justifyContent: "center" }}>
            <FacebookIcon />
            <TwitterIcon />
            
          </ListItemButton>
        </ListItem>
      </List> */}

      {/* Mobile Menu added by HAMMMMAD */}

      <hr></hr>
      <Button
        style={{
          backgroundColor: "#372d21",
          borderRadius: "10px",
          boxShadow: "none",
          color: "#fff",
          fontSize: "13px",
          fontWeight: "400",
          margin: "0",
          padding: "9px 8px",
          textAlign: "center",
          width: "85%",
        }}
      >
        <Link
          to={
            "https://mail.google.com/mail/?view=cm&fs=1&to=info@gcipakistan.com"
          }
          style={{ color: "#fff" }}
        >
          {" "}
          Book Appointment{" "}
        </Link>
      </Button>
      <List>
        <ListItem>
          <ListItemButton sx={{ justifyContent: "space-evenly" }}>
            <svg
              width="26"
              height="26"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={redirectToLinkedin}
              cursor={"pointer"}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.5,12h-3C9.224,12,9,12.224,9,12.5v11C9,23.776,9.224,24,9.5,24h3c0.276,0,0.5-0.224,0.5-0.5v-11
            C13,12.224,12.776,12,12.5,12z M12,23h-2V13h2V23z"
                fill="#372d21"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11,7C9.897,7,9,7.897,9,9s0.897,2,2,2s2-0.897,2-2S12.103,7,11,7z M11,10c-0.552,0-1-0.449-1-1
            s0.448-1,1-1s1,0.449,1,1S11.552,10,11,10z"
                fill="#372d21"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.515,11.986c-0.534,0-1.097,0.119-1.554,0.32C17.886,12.126,17.707,12,17.5,12h-3
		c-0.276,0-0.5,0.224-0.5,0.5v11c0,0.276,0.224,0.5,0.5,0.5h3c0.276,0,0.5-0.224,0.5-0.5l-0.002-6.661
		c0-0.003-0.012-0.336,0.2-0.565C18.365,16.092,18.65,16,19.044,16C19.696,16,20,16.279,20,16.879V23.5c0,0.276,0.224,0.5,0.5,0.5h3
		c0.276,0,0.5-0.224,0.5-0.5v-6.842C24,13.21,21.584,11.986,19.515,11.986z M23,23h-2v-6.121C21,15.72,20.251,15,19.044,15
		c-0.684,0-1.216,0.2-1.581,0.595c-0.507,0.549-0.468,1.246-0.463,1.284V23h-2V13h2v0.355c0,0.276,0.224,0.5,0.5,0.5
		c0.245,0,0.448-0.176,0.491-0.408c0.134-0.146,0.722-0.46,1.523-0.46c0.817,0,3.485,0.265,3.485,3.671V23z"
                fill="#372d21"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16-0.035C7.158-0.035-0.034,7.159-0.034,16S7.158,32.035,16,32.035S32.034,24.841,32.034,16
		S24.842-0.035,16-0.035z M16,30.965C7.748,30.965,1.034,24.252,1.034,16S7.748,1.035,16,1.035S30.966,7.748,30.966,16
		S24.252,30.965,16,30.965z"
                fill="#372d21"
              ></path>
            </svg>
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={redirectToInsta}
              cursor={"pointer"}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.5676 0.0747927C11.4868 0.086013 11.2112 0.119037 10.9552 0.14819C9.10475 0.358681 7.11381 1.10877 5.47844 2.2115C4.27817 3.02083 2.95368 4.34561 2.14332 5.54745C1.04849 7.17107 0.350475 9.01448 0.0704576 11.0216C-0.0148951 11.6334 -0.0148951 13.5456 0.0704576 14.1574C0.474829 17.0559 1.71078 19.5301 3.75855 21.5407C5.72838 23.4748 8.15127 24.6535 10.9552 25.0416C11.5654 25.1261 13.4808 25.1261 14.091 25.0416C16.9596 24.6445 19.4358 23.416 21.4271 21.4018C22.8444 19.9683 23.8085 18.398 24.431 16.5092C24.7603 15.51 25.0139 14.2524 25.0164 13.6062C25.0169 13.4781 25.0393 13.3734 25.0663 13.3734C25.0971 13.3734 25.115 13.0596 25.1145 12.5282C25.114 11.9644 25.098 11.7075 25.0663 11.7565C25.0321 11.8095 25.0183 11.7615 25.0171 11.5851C25.0105 10.5948 24.5271 8.69257 23.965 7.44481C22.9974 5.29703 21.3692 3.39869 19.3736 2.09185C18.37 1.4346 17.5931 1.06081 16.4428 0.68162C15.1376 0.251378 14.201 0.0970373 12.7436 0.0719999C12.1776 0.0622985 11.6485 0.0635234 11.5676 0.0747927ZM11.5921 0.664471C7.37149 1.05047 3.78776 3.45127 1.86766 7.1791C0.0930451 10.6245 0.153605 14.9125 2.02475 18.2976C2.60855 19.3538 3.18901 20.1295 4.03539 20.9847C5.89007 22.8586 8.19233 24.0215 10.8572 24.4305C11.6425 24.5511 13.4036 24.5511 14.189 24.4305C16.8673 24.0195 19.1577 22.8631 21.011 20.9861C22.8457 19.1279 23.9594 16.8925 24.3641 14.2554C24.4846 13.4701 24.4846 11.7089 24.3641 10.9236C23.9594 8.28643 22.8457 6.05104 21.011 4.19284C19.1709 2.32929 16.856 1.15503 14.238 0.757173C13.7424 0.681865 12.0502 0.622578 11.5921 0.664471ZM9.87562 6.12253C8.37985 6.23179 7.35968 6.75395 6.71807 7.73879C6.11384 8.66611 6.00795 9.38955 6.00795 12.5895C6.00795 14.5619 6.05935 15.6379 6.17802 16.1497C6.46514 17.3877 7.21504 18.293 8.31566 18.7304C8.83914 18.9384 9.20941 19.0048 10.1712 19.063C11.259 19.1288 15.1638 19.0898 15.7079 19.0077C17.1256 18.7939 18.1855 18.0011 18.6643 16.796C18.972 16.0217 19.0382 15.2773 19.0382 12.5895C19.0382 10.6171 18.9868 9.54105 18.8681 9.02923C18.5057 7.46691 17.4612 6.4955 15.8138 6.18887C15.467 6.12434 14.9372 6.10729 12.915 6.09558C11.5542 6.08774 10.1864 6.09985 9.87562 6.12253ZM9.92624 6.71353C8.83086 6.78752 8.16005 7.05122 7.57243 7.63884C6.73228 8.47899 6.59699 9.16549 6.59699 12.5895C6.59699 16.0135 6.73228 16.7 7.57243 17.5401C8.41258 18.3803 9.09907 18.5156 12.5231 18.5156C15.9471 18.5156 16.6336 18.3803 17.4737 17.5401C18.3139 16.7 18.4492 16.0135 18.4492 12.5895C18.4492 9.16549 18.3139 8.47899 17.4737 7.63884C16.8652 7.03035 16.2255 6.78997 14.9974 6.70849C14.1927 6.65508 10.7412 6.65851 9.92624 6.71353ZM9.87724 7.24716C8.65952 7.34745 7.89889 7.79063 7.49888 8.63289C7.17148 9.32228 7.16144 9.44041 7.16144 12.5895C7.16144 15.0614 7.17168 15.4547 7.24513 15.7974C7.43229 16.6708 7.8816 17.2884 8.56647 17.6137C9.25483 17.9405 9.37409 17.9507 12.5231 17.9507C15.6721 17.9507 15.7913 17.9405 16.4797 17.6137C17.1646 17.2884 17.6142 16.6703 17.8008 15.7974C17.874 15.4551 17.8843 15.0582 17.8843 12.5895C17.8843 10.1207 17.874 9.72385 17.8008 9.38156C17.6141 8.50844 17.1647 7.89063 16.4793 7.56515C15.8275 7.25558 15.6747 7.24118 12.8661 7.22413C11.4782 7.21575 10.1332 7.22609 9.87724 7.24716ZM9.92624 7.83551C8.90382 7.92062 8.37406 8.21103 8.04637 8.86607C7.76072 9.43707 7.74587 9.62076 7.74587 12.5895C7.74587 15.5582 7.76072 15.7419 8.04637 16.3129C8.2404 16.7008 8.45412 16.907 8.86193 17.0998C9.39315 17.3511 9.61334 17.3668 12.5721 17.3652C14.9055 17.3639 15.3405 17.3524 15.6375 17.284C16.3462 17.1208 16.7336 16.845 16.9987 16.3151C17.2856 15.7417 17.3003 15.56 17.3003 12.5895C17.3003 9.62076 17.2854 9.43707 16.9998 8.86607C16.8134 8.49354 16.612 8.29128 16.2392 8.1024C15.7271 7.84291 15.5448 7.82718 12.8661 7.81136C11.5052 7.80332 10.1822 7.8142 9.92624 7.83551ZM15.3705 8.35914C14.647 8.74063 14.6294 9.80406 15.3404 10.1771C15.8992 10.4702 16.5906 10.2075 16.8163 9.61621C17.0514 9.00066 16.5738 8.29535 15.8845 8.24008C15.68 8.22372 15.5862 8.24542 15.3705 8.35914ZM15.6344 8.87346C15.4753 8.96866 15.4171 9.07469 15.4155 9.27215C15.412 9.68598 15.9051 9.86149 16.1738 9.54212C16.4053 9.26706 16.2588 8.88944 15.9009 8.83868C15.8082 8.82554 15.6883 8.84118 15.6344 8.87346ZM11.7146 9.20267C10.1466 9.59024 9.04429 10.9883 9.04429 12.5895C9.04429 14.5081 10.6045 16.0683 12.5231 16.0683C13.0718 16.0683 13.5438 15.9536 14.091 15.6873C14.4792 15.4983 14.6259 15.3913 14.9754 15.0418C15.3249 14.6923 15.4319 14.5456 15.6209 14.1574C16.135 13.101 16.135 12.078 15.6209 11.0216C15.4319 10.6333 15.3249 10.4866 14.9754 10.1371C14.6259 9.7877 14.4792 9.68064 14.091 9.49171C13.835 9.36711 13.4668 9.23041 13.2729 9.18793C12.8194 9.08861 12.1505 9.09498 11.7146 9.20267ZM11.798 9.79446C11.278 9.93547 10.8802 10.1665 10.4776 10.5614C9.87734 11.15 9.58982 11.9158 9.64593 12.7766C9.67586 13.2362 9.81349 13.6854 10.0483 14.0898C10.2437 14.4264 10.7798 14.938 11.127 15.1191C11.6563 15.3953 11.9048 15.4551 12.5231 15.4551C13.141 15.4551 13.3888 15.3955 13.9195 15.1193C14.3012 14.9207 14.8539 14.3671 15.0601 13.9768C15.2655 13.5882 15.4139 13.0062 15.4139 12.5895C15.4139 12.1723 15.2653 11.5902 15.0599 11.2025C14.8709 10.8457 14.3612 10.3108 14.0234 10.1147C13.3523 9.72508 12.5039 9.60298 11.798 9.79446ZM11.8013 10.3372C11.157 10.547 10.5585 11.1123 10.3157 11.7407C10.1503 12.1685 10.1283 12.8228 10.2643 13.2704C10.4685 13.9426 11.0262 14.5464 11.6743 14.7969C12.102 14.9623 12.7563 14.9842 13.204 14.8482C13.8762 14.6441 14.48 14.0863 14.7305 13.4383C14.8958 13.0105 14.9178 12.3562 14.7818 11.9086C14.5778 11.2367 14.0209 10.6335 13.3719 10.3816C12.9599 10.2216 12.2206 10.2007 11.8013 10.3372ZM11.9498 10.9139C11.4606 11.0886 11.1144 11.4074 10.8929 11.8874C10.8043 12.0795 10.7837 12.2116 10.7837 12.5895C10.7837 12.9968 10.8003 13.0889 10.9168 13.3259C11.1188 13.7374 11.3581 13.9856 11.7282 14.1676C12.0293 14.3157 12.0942 14.3289 12.5223 14.3289C12.9248 14.3289 13.0266 14.311 13.2666 14.1985C13.6376 14.0246 13.9438 13.7333 14.1188 13.3876C14.2492 13.1302 14.2625 13.0587 14.2625 12.614C14.2625 12.1854 14.2461 12.0891 14.1316 11.8449C13.9639 11.487 13.6219 11.1462 13.2676 10.9839C12.8945 10.8128 12.3187 10.7823 11.9498 10.9139ZM0 12.5895C0 13.0611 0.00734954 13.254 0.016365 13.0182C0.0253314 12.7824 0.0253314 12.3965 0.016365 12.1608C0.00734954 11.925 0 12.1179 0 12.5895Z"
                fill="#372d21"
              ></path>
            </svg>
          </ListItemButton>
        </ListItem>
      </List>
      <CancelIcon
        style={{
          backgroundColor: "#372d21",
          borderRadius: "50px",
          boxShadow: "none",
          color: "#fff",
        }}
      />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="fixed"
        sx={{
          height: "100px",
          display: "flex",
          justifyContent: "center",
          bgcolor:
            props.home == true
              ? scrollY === 0
                ? "transparent"
                : "white"
              : "white",
          boxShadow: "none",
          transition: "background-color 0.3s ease-in-out",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              color:
                props.home == true
                  ? scrollY === 0
                    ? "white"
                    : "black"
                  : "black",
              display: { lg: "none" },
            }}
          >
            <MenuIcon />
            {scrollY === 0 && props.home == true ? (
              <img
                src={WHITE_LOGO}
                alt="LIMS"
                style={{
                  width: "50px",
                  height: "50px",
                  marginLeft: "5px",
                }}
              />
            ) : (
              <img
                src={COLORED_LOGO}
                alt="LIMS"
                style={{
                  width: "50px",
                  height: "50px",
                  marginLeft: "5px",
                }}
              />
            )}
          </IconButton>
          <Typography
            onClick={() => navigate("/home1")}
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", lg: "block" },
              cursor: "pointer",
            }}
          >
            {scrollY === 0 && props.home == true ? (
              <img
                src={WHITE_LOGO}
                alt="LIMS"
                style={{
                  width: "70px",
                  height: "70px",
                  marginLeft: "10px",
                }}
              />
            ) : (
              <img
                src={COLORED_LOGO}
                alt="LIMS"
                style={{
                  width: "70px",
                  height: "70px",
                  marginLeft: "10px",
                }}
              />
            )}
          </Typography>

          {/* old navbar */}
          {/* <Box sx={{ display: { xs: "none", lg: "block" } }}>
            {navItems.map((item) => (
              <>
                {" "}
                {item.title === "Book Appointment" ? (
                  <Link
                    to={`https://mail.google.com/mail/?view=cm&fs=1&to=info@gcipakistan.com`}
                    key={item.id}
                  >
                    <Button
                      sx={{
                        color:
                          props.home == true
                            ? scrollY === 0
                              ? "#a19c0c"
                              : "black"
                            : "black",
                        padding: { lg: "10px", xl: "15px" },

                        background:
                          props.home == true
                            ? scrollY === 0
                              ? "white"
                              : "white"
                            : "white",
                        border:
                          props.home == true
                            ? scrollY === 0
                              ? " "
                              : "1px solid #a19c0c !important"
                            : " ",
                        borderRadius: "10px !important",
                        fontSize: "15px !important",
                        padding: "7px 23px !important",
                      }}
                    >
                      <strong>{"Book Appointment"}</strong>
                    </Button>
                  </Link>
                ) : (
                  <Link to={`/${item.link.toLowerCase()}`} key={item.id}>
                    <Button
                      sx={{
                        color:
                          props.home == true
                            ? scrollY === 0
                              ? "white"
                              : "black"
                            : "black",
                        padding: { lg: "10px", xl: "15px" },
                      }}
                    >
                      <strong>{item.title}</strong>
                    </Button>
                  </Link>
                )}
              </>
            ))}
          </Box> */}

          {/* new nav bar */}
          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            <Nav className="mr-auto">
              {navItems.map((item) => (
                <React.Fragment key={item.id}>
                  {item.title === "Services" ? (
                    <NavDropdown
                      title={
                        <Link to={`/${item.link.toLowerCase()}`} key={item.id}>
                          <Button
                            sx={{
                              color:
                                props.home && scrollY === 0 ? "white" : "black",
                              padding: { lg: "10px", xl: "7px" },
                              fontWeight: "bold",
                            }}
                            // className={classes.dropdownToggle} // Apply the styles to the dropdownToggle class
                          >
                            {item.title}
                          </Button>
                        </Link>
                      }
                      id={item.title.toLowerCase()}
                    >
                      {item.subItems.map((subItem) => (
                        <NavDropdown.Item key={subItem.id} href={subItem.link}>
                          {subItem.title}
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  ) : (
                    // </Link>
                    <>
                      {item.title === "Book Appointment" ? (
                        <Link
                          to={`https://mail.google.com/mail/?view=cm&fs=1&to=info@gcipakistan.com`}
                          key={item.id}
                        >
                          <Button
                            sx={{
                              color:
                                props.home == true
                                  ? scrollY === 0
                                    ? "#a19c0c"
                                    : "black"
                                  : "black",
                              padding: { lg: "10px", xl: "15px" },

                              background:
                                props.home == true
                                  ? scrollY === 0
                                    ? "white"
                                    : "white"
                                  : "white",
                              border:
                                props.home == true
                                  ? scrollY === 0
                                    ? " "
                                    : "1px solid #a19c0c !important"
                                  : " ",
                              borderRadius: "10px !important",
                              fontSize: "15px !important",
                              padding: "13px 23px !important",
                            }}
                          >
                            <strong>{"Book Appointment"}</strong>
                          </Button>
                        </Link>
                      ) : (
                        <Link to={`/${item.link.toLowerCase()}`} key={item.id}>
                          <Button
                            sx={{
                              color:
                                props.home == true
                                  ? scrollY === 0
                                    ? "white"
                                    : "black"
                                  : "black",
                              padding: { lg: "10px", xl: "15px" },
                            }}
                          >
                            <strong>{item.title}</strong>
                          </Button>
                        </Link>
                      )}
                    </>
                    // <Link to={`/${item.link.toLowerCase()}`} key={item.id}>
                    //   <Button
                    //     sx={{
                    //       color:
                    //         props.home && scrollY === 0 ? "#a19c0c" : "black",
                    //       padding: { lg: "10px", xl: "15px" },
                    //       background:
                    //         props.home && scrollY === 0 ? "white" : "white",
                    //       border:
                    //         props.home && scrollY === 0
                    //           ? ""
                    //           : "1px solid #a19c0c !important",
                    //       borderRadius: "10px !important",
                    //       fontSize: "15px !important",
                    //       padding: "7px 23px !important",
                    //     }}
                    //   >
                    //     <strong>{item.title}</strong>
                    //   </Button>
                    // </Link>
                  )}
                </React.Fragment>
              ))}
            </Nav>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
