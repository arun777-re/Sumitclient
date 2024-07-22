import { Box, Typography,useMediaQuery } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import "./Navbar.css";


const Navbar = () => {

  const [toggle,setToggle] = useState(false);
  const isNonMobile = useMediaQuery('(min-width:1100px)')
  const isMobile = useMediaQuery('(max-width:900px)')
const navigate = useNavigate()

// handle scroll behaviour of the browser
 window.addEventListener('scroll',()=>{
  const nav = document.getElementById('navbar')
  if(window.scrollY>0){
    // manipulating class on dom by using classlist.add
   nav.classList.add('sticky-nav')
  }else{
    nav.classList.remove('sticky-nav');
  }
 })


  return (
    <nav id="navbar"
    component={"nav"}
    
     >

    <Box
    component={'div'}
    className={isNonMobile ? "nav-main" :"nav-main-small"}
      position='sticky'
      overflow={'auto'}
      px={2} m={"8px 0px"}  bgcolor="transparent"
      zIndex={1000}
      top={0}
   
    >
      <div onClick={()=>navigate("/home")} style={{display:"flex",marginRight:"29px",
    justifyContent:"center",alignItems:"center",float:"left",
    top:"0px"}}>

        <h3 className="text-focus-in" style={{fontSize:"30px",
      textAlign:"center",textDecoration:"none"}}>SumitArts</h3>
      
      </div>

    {isNonMobile ?
      <Box component={"div"} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography component={"p"} className="nav-para">
          <a className="nav-para-a" href="/home">
            home
          </a>
        </Typography>
        <Typography component={"p"} className="nav-para">
          <a className="nav-para-a" href="/about">
            about us
          </a>
        </Typography>
        <Typography component={"p"} className="nav-para">
          <a className="nav-para-a" href="/services">
            services
          </a>
        </Typography>
        <Typography component={"p"} className="nav-para">
          <a className="nav-para-a" href="/work">
            work process
          </a>
        </Typography>
        <Typography component={"p"} className="nav-para">
          <a className="nav-para-a" href="/portfolio">
            portfolio
          </a>
        </Typography>
        <Typography component={"p"} className="nav-para">
          <a className="nav-para-a" href="/team">
            our team
          </a>
        </Typography>
        <Typography component={"p"} className="nav-para">
          <a className="nav-para-a" href="/contacts">
            contact
          </a>
        </Typography>
      </Box>:(
        <Box component={'div'} sx={{float:"right"}}>
        {!toggle ?
        <MenuIcon sx={{color:"black",cursor:"pointer"
        ,fontSize:"39px"}} onClick={()=>setToggle(true)}/>
:        <CloseIcon sx={{fontSize:"35px",
cursor:"pointer",
color:"#000"}} onClick={()=>setToggle(false)}/>

        }
        {toggle &&
        
         <Box className='nav-para-small-overlay' sx={{bgcolor:"white",marginTop:"33px"}}> 

      <Box sx={{marginTop:"1rem",alignItems:"center"}} className="nav-para-list-container" component={"div"} >
      <Typography component={'p'} className="nav-para-small">
        <a className="nav-para-a-small" href="/home">
          home
        </a>
      </Typography>
      <Typography component={"p"} className="nav-para-small">
        <a
         className="nav-para-a-small" href="/about">
          about us
        </a>
      </Typography>
      <Typography component={"p"} className="nav-para-small">
        <a className="nav-para-a-small" href="/services">
          services
        </a>
      </Typography>
      <Typography component={"p"} className="nav-para-small">
        <a className="nav-para-a-small" href="/work">
          work process
        </a>
      </Typography>
      <Typography component={"p"} className="nav-para-small">
        <a className="nav-para-a-small" href="/home">
          portfolio
        </a>
      </Typography>
      <Typography component={"p"} className="nav-para-small">
        <a className="nav-para-a-small" href="/home">
          our team
        </a>
      </Typography>
      <Typography component={"p"} className="nav-para-small">
        <a className="nav-para-a" href="/home">
          contact
        </a>
      </Typography>
    </Box>
    </Box>

}
    </Box>

      )
}  
<AccountCircleRoundedIcon 
onClick={()=>navigate('/login')} 
sx={{fontSize:"35px",cursor:"pointer",
color:"grey",
display:{md:"inline-block",xs:"none"}}}/>
  

    </Box>
      
    </nav>

   

  );
};

export default Navbar;
