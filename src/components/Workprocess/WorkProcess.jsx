import React, { useState, useRef } from "react";
import { Box } from "@mui/material";
import { aeroplane, heart, pencil, whatsapp } from "../../assets";
import "./Workprocess.css";
const WorkProcess = () => {
  // useState hook to change the heading text when clicked
  
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [heading, setHeading] = useState("");

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
          setHeading("hello meri rani");
          setText1("alksjdfa;lkjasl;fdkjsakfl;asflkjasdklf;sdalfjak");
          setText2(
            "Etiam sit amet libero consequat, convallis odio ac, vestibulum urna. Donec ut finibus urna, nec aliquet arcu. Praesent a dapibus dui libero ornare nec."
          );
          break;
        case Cref.current:
          setHeading("ranu thk hai ke");
          setText1("alksjdfa;lkjasl;fdkjsakfl;asflkjasdklf;sdalfjak");
          setText2(
            "Etiam sit amet libero consequat, convallis odio ac, vestibulum urna. Donec ut finibus urna, nec aliquet arcu. Praesent a dapibus dui libero ornare nec."
          );
          break;
        case Pref.current:
          setHeading("Loda Lashan");
          setText1("maa ka loda gandva");
          setText2("Bhosdi ke gandve chutiya ke paathe gandu");
          break;
        case Href.current:
          setHeading("Gandu Person");
          setText1("Gandu person is a very best person in the woprld");
          setText2(
            "hello gandu are you currently fucked by me if yes then comes one mmopre time"
          );
          break;
        default:
          break;
      }
    }
  };
  return (
    <Box
      id="#work"
      className="workspace-main"
      sx={{ bgcolor: "whitesmoke", height: "auto" }}
      component={"div"}
    >
      <Box component={"div"} className="workspace-main-text1">
        <h2>WORK PROCESS</h2>
        <p>
          Duis non condimentum nunc . Nunc quis turpis eu est tincidunt rutrum.
          <br />
          Cras a purus quis sem tincidunt egestav vel id lacus
        </p>
      </Box>
      <Box component={"div"} className="workspace-main-icons">
        <div className="workspace-main-icons-bt">
          <div
            className="workspace-main-icons-btn show-progress"
            onClick={handleonClick}
            ref={Dref}
          >
            <img src={whatsapp} alt="wths" />
            <p>Discuss</p>

            <div className="number">
              <p className="skill first">1</p>
            </div>
          </div>
          <div
            ref={Cref}
            className="workspace-main-icons-btn show-progress"
            onClick={handleonClick}
          >
            <img src={pencil} />
            <p>CREATIVE CONCEPT</p>
            <div className="number">
              <p className="skill second">2</p>
            </div>
          </div>
          <div
            ref={Pref}
            type="button"
            className="workspace-main-icons-btn show-progress"
            onClick={handleonClick}
          >
            <img src={aeroplane} />
            <p>PRODUCTION</p>
            <div className="number">
              <p className="skill third">3</p>
            </div>
          </div>
          <div
            ref={Href}
            type="button"
            className="workspace-main-icons-btn show-progress"
            onClick={handleonClick}
          >
            <img src={heart} />
            <p>HAPPY CLIENT</p>
            <div className="number">
              <p className="skill fourth">4</p>
            </div>
          </div>
        </div>
        <div
          style={{ color: "#333", width: "10px", height: "3px" }}
          className="progress-bar"
        ></div>
      </Box>
      <Box component={"div"} className="workspace-main-text2">
        <h4>
          {heading}
          <br />
        </h4>
        <p>{text1}</p>
        <p>{text2}</p>
      </Box>
    </Box>
  );
};

export default WorkProcess;
