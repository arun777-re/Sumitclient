import React, { useState, useRef } from "react";
import { Box } from "@mui/material";
import { aeroplane, heart, pencil, whatsapp } from "../../assets";
import "./Workprocess.css";
const WorkProcess = () => {
  // useState hook to change the heading text when clicked
  
  const [text1, setText1] = useState("I start by engaging with clients to understand their vision");
  const [text2, setText2] = useState("Through thorough discussions, I clarify project objectives, ensuring every design decision supports the client's brand and message.");
  const [heading, setHeading] = useState("Discussion");

  const Dref = useRef();
  const Cref = useRef();
  const Pref = useRef();
  const Href = useRef();

  const handleonClick = (e) => {
    e.preventDefault();

    const target = e.currentTarget;
  

    // using of ref for targeting particular button when clicked
    const ref =
      target === Dref.current
        ? "Dref"
        : target === Cref.current
        ? "Cref"
        : target === Pref.current
        ? "Pref"
        : target === Href.current
        ? "Href"
        : null;

    if (ref) {
      switch (target) {
        case Dref.current:
          setHeading("Discussion");
          setText1("I start by engaging with clients to understand their vision");
          setText2(
            "Through thorough discussions, I clarify project objectives, ensuring every design decision supports the client's brand and message."
          );
          break;
        case Cref.current:
          setHeading("Creativity");
          setText1("I channel creativity to craft unique concepts that resonate visually and emotionally");
          setText2(
            "Turning ideas into impactful visuals, I bring conceptual designs to life, ensuring each element tells a compelling story."
          );
          break;
        case Pref.current:
          setHeading("Productivity");
          setText1("With a structured workflow, I prioritize tasks effectively");
          setText2("Iterative refinement is key; I continuously review and enhance designs to achieve polished, impactful outcomes.");
          break;
        case Href.current:
          setHeading("Happy Client");
          setText1("I foster collaboration and transparency, keeping clients informed");
          setText2(
            "Ultimately, my goal is to exceed expectations, delivering designs that not only meet but surpass client satisfaction."
          );
          break;
        default:
          break;
      }
    }
  };
  return (
    <Box
      id="work"
      className="workspace-main"
      sx={{ bgcolor: "whitesmoke", height: "auto" }}
      component={"div"}
    >
      <Box component={"div"} className="workspace-main-text1">
        <h2>WORK PROCESS</h2>
        <p>
           Begin by engaging with clients to understand their goals, target audience, and project requirements.
          <br />
          Conduct research into the industry, competitors, and design trends to inform the creative direction.
        </p>
      </Box>
      <Box component={"div"} className="workspace-main-icons">
        <div className="workspace-main-icons-bt">
          <div
            className="workspace-main-icons-btn"
            onClick={handleonClick}
            ref={Dref}
          >
            <img src={whatsapp} alt="wths" />
            <p>DISCUSS</p>

           
          </div>
          <div
            ref={Cref}
            className="workspace-main-icons-btn"
            onClick={handleonClick}
          >
            <img src={pencil} alt="pencil"/>
            <p>CREATIVE CONCEPT</p>
           
          </div>
          <div
            ref={Pref}
            type="button"
            className="workspace-main-icons-btn"
            onClick={handleonClick}
          >
            <img src={aeroplane} alt="aeroplane"/>
            <p>PRODUCTION</p>
          </div>
          <div
            ref={Href}
            type="button"
            className="workspace-main-icons-btn "
            onClick={handleonClick}
          >
            <img src={heart} alt="heart"/>
            <p>HAPPY CLIENT</p>
         
          </div>
        </div>
      
      </Box>
      <Box component={"div"} className="workspace-main-text2">
        <h4>
          {heading}
          <br/>
        </h4>
        <p>{text1}</p>
        <p>{text2}</p>
      </Box>
    </Box>
  );
};

export default WorkProcess;
