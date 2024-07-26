import React from "react";
import cover2 from "../../assets/img1.avif";
import cover1 from "../../assets/img22.avif";
import { Box, Typography } from "@mui/material";
import "./Home.css";
const Home = () => {
  return (
    <Box
      sx={{
        sx: { width: "200px" },
        sm: { width: "400px" },
        md: { md: { width: "600px" }, backgroundColor: "white" },
      }}
      className="home-main"
      component={"div"}
      id="home"
    >
      <Box className="home-img">
        <img src={cover1} 
        alt="image1" 
        style={{height:"470px", width:"500px"}} />
      </Box>
      <Box component="div" className="home-center">
        <Box component={"div"} sx={{ gap:"9px" }} 
        className="home-center-box">
          <Typography variant="h5">
            Hello <br />
            Strangers
          </Typography>
          <Typography variant="h2">
            WE <br />
            ARE <br />
            AGY
            <br />
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: "16px",
              width: { sm: "100%", md: "100%" },
              lineHeight: "1.2  em",
            }}
          >
            Creative Digital & <br />
            Marketting Agency
          </Typography>
        </Box>
      </Box>
      <Box className="home-img1">
        <img src={cover2} 
        alt="image2"
      style={{height:"580px", width:"500px"}} />
      </Box>
    </Box>
  );
};

export default Home;
