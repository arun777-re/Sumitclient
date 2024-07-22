import { Box,CardMedia, Typography } from '@mui/material'
import React from 'react';
import './About.css';
import about1 from '../../assets/about1.jpg';
import about2 from '../../assets/about2.jpg';

const AboutUs = () => {
  return (
    <Box component='div' className='about-main' 
    sx={{bgcolor:"#lightblue"}}>
      <Box component='div'
      className='about-main-img'>
        <Box component={'div'} className='about-main-img1'>
        <img src={about1} />

        </Box>
        <Box component={'div'} className='about-main-img2'>
        <img src={about2}/>

        </Box>
      </Box>
      <Box component='div'
      className='about-main-text'>
        <Box component={'div'}
        className='about-main-text1'>

      <Typography 
      className='about-main-text1-p1'
      variant='h3'
      sx={{fontSize:"40px",
      marginBottom:"26px",
      fontWeight:"600",color:"#35373e"}}>
       ABOUT AGENCY
      </Typography>
      <Typography className='about-main-text1-p2'
       variant='h6'
       sx={{fontSize:"16px",mb:"45px",lineHeight:"1.5em"}}>
      10. “No design works unless it embodies ideas that are held common by the people for whom the object is intended.” - Adrian Forty

      </Typography>
      </Box>

      </Box>
    </Box>
  )
}

export default AboutUs
