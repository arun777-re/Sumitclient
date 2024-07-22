import React, { useState, useRef } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { br1, br2, br3, br4, br5, br6 } from "../../assets/index";
import services from "../../assets/services.avif";
import "./Services.css";

const Services = () => {
  // to change the text state
  const [text, setText] = useState(
    "hello beta sumit what are you doing now fucn "
  );
  const [heading, setHeading] = useState("BRANDING DESIGN");
  const BDref = useRef();
  const WDref = useRef();
  const VPref = useRef();
  const Mref = useRef();
  const Dref = useRef();
  const Pref = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    const target = e.currentTarget;

    // use of ref to handle functionallity when particullary button clicked
    const ref =
      target === BDref.current
        ? "BDref"
        : target === WDref.current
        ? "WDref"
        : target === VPref.current
        ? "VPref"
        : target === Mref.current
        ? "Mref"
        : target === Dref.current
        ? "Dref"
        : target === Pref.current
        ? "Pref"
        : null;

    // use of switch to handle onClick functionallity
    if(ref){

    switch (target) {
      case BDref.current:
        setHeading("BRANDING DESIGN");
        setText("Hello meri rani how are you what are you doing now");
        e.target.style.color = "#000";
        break;
      case WDref.current:
        setHeading("WEB DESIGN");
        setText(
          " I AM TEXT BLOCK. CLICK EDIT BUTTON TO CHANGE THIS TEXT LOREM IPSUM COLOR"
        );
        e.target.style.color = "#000";
        break;
      case VPref.current:
        setHeading("VIDEO PRODUCTION");
        setText(
          " HELLO SUMIT BETA PLEASE ENTER HERE YOUR PERSONAL TEXT ABOUT VIDEO PRODUCTION"
        );
        e.target.style.color = "#000";
        break;
      case Mref.current:
        setHeading("MARKETING");
        setText("hello meri beti kya kar rahi ho tum or sunai");
        e.target.style.color = "#000";
        break;
      case Dref.current:
        setHeading("DEVELOPMENT");
        setText("hello meri rani what are you doing now how are you");
        e.target.style.color = "#000";
        break;
      case Pref.current:
        setHeading("PHOTOGRAPHY");
        setText(
          "hello meri rani kya kar rahi ho tum but i think someyhing is owkward about situation"
        );
        e.target.style.color = "#000";
        break;
      default:
        break;
    }
  }

  };

  return (
    <Box
      id="#services"
      component={"div"}
      className="service-main"
      sx={{ height: { md: "650px", sm: "600px", xs: "auto" } }}
    >
      <Box component={"div"} className="service-main-img">
        <Box className="service-main-img-1" component={"div"}>
          <img src={services} alt="ServiceImage" />
        </Box>
        <Box component={"div"} className="service-main-img-overlay"></Box>
        <Box className="service-main-img-box-wb" component={"div"}>
          <Box
            padding={"79px 40px"}
            bgcolor={"transparent"}
            component={"div"}
            className="service-main-img-box-wb-text"
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: "28px",
                fontWeight: "800",
                margin: "6px 4px",
              }}
            >
              {heading}
            </Typography>
            <Typography
              sx={{ fontSize: "14px", letterSpacing: "1px", lineHeight: "1em" }}
            >
              {text}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box component={"div"} className="service-main-icon">
        <Box
          className="service-main-icon-grid"
          component={"div"}
          sx={{ gap: { xs: "65px 90px", sm: "100px 150px" } }}
        >
          <Typography
            ref={BDref}
            className="service-main-icon-grid-item"
            onClick={handleClick}
          >
            {" "}
            <img src={br1} ref={BDref} />
            BRANDING&nbsp;DESIGN
          </Typography>

          <Typography
            ref={WDref}
            className="service-main-icon-grid-item"
            onClick={handleClick}
          >
            <img src={br2} style={{ fontSize: "45px" }} />
            WEB&nbsp;DESIGN
          </Typography>

          <Typography
            ref={VPref}
            className="service-main-icon-grid-item"
            onClick={handleClick}
          >
            <img src={br3} />
            VIDEO&nbsp;PRODUCTION
          </Typography>
          <Typography
            ref={Mref}
            className="service-main-icon-grid-item"
            onClick={handleClick}
          >
            <img src={br4} />
            MARKETING
          </Typography>

          <Typography
            ref={Dref}
            className="service-main-icon-grid-item"
            onClick={handleClick}
          >
            <img src={br5} />
            DEVELOPMENT
          </Typography>
          <Typography
            ref={Pref}
            className="service-main-icon-grid-item"
            onClick={handleClick}
          >
            <img src={br6} />
            PHOTOGRAPHY
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
