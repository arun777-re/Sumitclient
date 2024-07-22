import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Home from './Home/Home'
import { About, Contact, OurTeam, Portfolio, Services, WorkProcess } from './index.jsx';
const Footer = () => {

  return (
    <Box>
      <Home/>
      <About/>
       
    </Box>
  )
}

export default Footer
