import { Box, Typography, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import "./Navbar.css";

const Navbar = ({scrollv}) => {
  const [toggle, setToggle] = useState(false);
  const isNonMobile = useMediaQuery("(min-width:1100px)");
  const navigate = useNavigate();

  // function for goes on which page that is clicked on navigation
  const handleClick = (ref) =>{
      scrollv(ref);
  }

  // handle scroll behaviour of the browser
  window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    if (window.scrollY > 0) {
      // manipulating class on dom by using classlist.add
      nav.classList.add("sticky-nav");
    } else {
      nav.classList.remove("sticky-nav");
    }
  });

  return (
    <nav id="navbar" component={"nav"}>
      <Box
        component={"div"}
        className={isNonMobile ? "nav-main" : "nav-main-small"}
        position="sticky"
        overflow={"auto"}
        px={2}
        m={"8px 0px"}
        bgcolor="transparent"
        zIndex={1000}
        top={0}
      >
        <div
          onClick={() => navigate("/")}
          style={{
            display: "flex",
            marginRight: "29px",
            justifyContent: "center",
            alignItems: "center",
            float: "left",
            top: "0px",
          }}
        >
          <h3
            className="text-focus-in"
            style={{
              fontSize: "30px",
              textAlign: "center",
              textDecoration: "none",
              color: "#388E3C",
            }}
          >
            Sumit arts
          </h3>
        </div>

        {isNonMobile ? (
          <Box
            component={"div"}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Typography component={"p"} className="nav-para">
              <a href="#home" onClick={()=>handleClick('homeRef')}>home</a>
            </Typography>
            <Typography component={"p"} className="nav-para">
              <a href="#about" onClick={()=>handleClick('aboutRef')}>about us</a>
            </Typography>
            <Typography component={"p"} className="nav-para">
              <a href="#services" onClick={()=>handleClick('serviceRef')}>services</a>
            </Typography>
            <Typography component={"p"} className="nav-para">
              <a href="#work" onClick={()=>handleClick('workRef')}>work process</a>
            </Typography>
            <Typography component={"p"} className="nav-para">
              <a href="#portfolio" onClick={()=>handleClick('portfolioRef')}>portfolio</a>
            </Typography>
            <Typography component={"p"} className="nav-para">
              <a href="#team" onClick={()=>handleClick('ourTeamRef')}>our team</a>
            </Typography>
            <Typography component={"p"} className="nav-para">
              <a href="#contacts" onClick={()=>handleClick('contactRef')}>contact</a>
            </Typography>
          </Box>
        ) : (
          <Box component={"div"} sx={{ float: "right" }}>
            {!toggle ? (
              <MenuIcon
                sx={{
                  color: "lightblue",
                  cursor: "pointer",
                  fontSize: "39px",
                  marginTop: "10px",
                }}
                onClick={() => setToggle(true)}
              />
            ) : (
              <CloseIcon
                sx={{
                  fontSize: "35px",
                  cursor: "pointer",
                  color: "lightblue",
                  marginTop: "10px",
                }}
                onClick={() => setToggle(false)}
              />
            )}
            {toggle && (
              <Box
                className="nav-para-small-overlay"
                sx={{ bgcolor: "white", marginTop: "33px" }}
              >
                <Box
                  sx={{ marginTop: "1.5rem", alignItems: "center" }}
                  className="nav-para-list-container"
                  component={"div"}
                >
                  <Typography component={"p"} className="nav-para-small">
                    <a className="nav-para-a-small" href="#home" onClick={()=>handleClick('homeRef')}> 
                      home
                    </a>
                  </Typography>
                  <Typography component={"p"} className="nav-para-small">
                    <a className="nav-para-a-small" href="#about" onClick={()=>handleClick('aboutRef')}>
                      about us
                    </a>
                  </Typography>
                  <Typography component={"p"} className="nav-para-small">
                    <a className="nav-para-a-small" href="#services" onClick={()=>handleClick('servicesRef')}>
                      services
                    </a>
                  </Typography>
                  <Typography component={"p"} className="nav-para-small">
                    <a className="nav-para-a-small" href="#work" onClick={()=>handleClick('workRef')}>
                      work process
                    </a>
                  </Typography>
                  <Typography component={"p"} className="nav-para-small">
                    <a className="nav-para-a-small" href="#portfolio" onClick={()=>handleClick('portfolioRef')}>
                      portfolio
                    </a>
                  </Typography>
                  <Typography component={"p"} className="nav-para-small">
                    <a className="nav-para-a-small" href="#ourteam" onClick={()=>handleClick('ourTeamRef')}>
                      our team
                    </a>
                  </Typography>
                  <Typography component={"p"} className="nav-para-small">
                    <a className="nav-para-a-small" href="#contact" onClick={()=>handleClick('contactRef')}>
                      contact
                    </a>
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
        )}
        <AccountCircleRoundedIcon
          onClick={() => navigate("/login")}
          sx={{
            fontSize: "35px",
            cursor: "pointer",
            color: "grey",
            display: { md: "inline-block", xs: "none" },
          }}
        />
      </Box>
    </nav>
  );
};

export default Navbar;
