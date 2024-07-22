import { Box, Typography } from '@mui/material'
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { dev1,dev2,dev3 } from '../../assets';
import './OurTeam.css'
const OurTeam = () => {
  return (
    <Box height={'650px'} id='#team'
    m={"13px 0px"}
    component={'div'}
    className='team-main'>
      <Box component={'div'}
      sx={{marginBottom:"19px"}}
      className='team-main-1'>
        <p>
          MEET WITH<br/>
          OUR CREATIVE TEAM
          </p>
      </Box>
      <Box className='team-main-2' component={'div'} >
<Box component={'div'} className='team-main-2-wrapper'>
  <Box component={'div'} className='team-main-2-wrapper-icon'>

<a href='/' ><FacebookIcon/></a>
<a href='/' ><XIcon/></a>
<a href='/' ><LinkedInIcon/></a>
</Box>


<img className='team-main-2-wrapper-img' src={dev1} alt='alt1'/>
<div style={{color:"#333",textAlign:"center"}}>

<h5 style={{textAlign:"center"}}>john Capone</h5>
<p>brand an web art director</p>
</div>
</Box>
<Box component={'div'} className='team-main-2-wrapper'>
  <Box component={'div'} className='team-main-2-wrapper-icon'>

<a href='/' ><FacebookIcon/></a>
<a href='/' ><XIcon/></a>
<a href='/' ><LinkedInIcon/></a>
</Box>


<img className='team-main-2-wrapper-img' src={dev1} alt='alt1'/>
<div style={{color:"#333",textAlign:"center"}}>

<h5 style={{textAlign:"center"}}>john Capone</h5>
<p>brand an web art director</p>
</div>
</Box>
<Box component={'div'} className='team-main-2-wrapper'>
  <Box component={'div'} className='team-main-2-wrapper-icon'>

<a href='/' ><FacebookIcon/></a>
<a href='/' ><XIcon/></a>
<a href='/' ><LinkedInIcon/></a>
</Box>


<img className='team-main-2-wrapper-img' src={dev1} alt='alt1'/>
<div style={{color:"#333",textAlign:"center"}}>

<h5 style={{textAlign:"center"}}>john Capone</h5>
<p>brand an web art director</p>
</div>
</Box>
<Box component={'div'} className='team-main-2-wrapper'>
  <Box component={'div'} className='team-main-2-wrapper-icon'>

<a href='/' ><FacebookIcon/></a>
<a href='/' ><XIcon/></a>
<a href='/' ><LinkedInIcon/></a>
</Box>


<img className='team-main-2-wrapper-img' src={dev1} alt='alt1'/>
<div style={{color:"#333",textAlign:"center"}}>

<h5 style={{textAlign:"center"}}>john Capone</h5>
<p>brand an web art director</p>
</div>
</Box>


      </Box>

     
    </Box>
  )
}

export default OurTeam
