import { Box,CardMedia, Typography } from '@mui/material'
import React from 'react';
import './About.css';
import about1 from '../../assets/agency.jpg';

const AboutUs = () => {
  return (
    <Box component='div' className='about-main' 
    sx={{bgcolor:"#lightblue"}} id='about'>
      <Box component='div'
      className='about-main-img'>
        <img src={about1} alt='about1'/>

      
      </Box>
      <Box component='div'
      className='about-main-text'>
        <Box component={'div'}
        className='about-main-text1'>

      <h3
      >
       ABOUT AGENCY
      </h3>
      <p>
      Designing print collateral such as brochures, posters, and business cards, as well as digital assets like website interfaces, mobile apps, and social media graphics.
      Designing packaging solutions that not only protect products but also communicate brand values and attract consumers on store shelves.
      </p>
      </Box>

      </Box>
    </Box>
  )
}

export default AboutUs
