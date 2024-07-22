import React from 'react'
import Form from './Form'
import { Box, Typography } from '@mui/material'
import './Contact.css'
const Contact = () => {
  return (
    <Box sx={{backgroundColor:"whitesmoke"}}>

    <Box className='contact-main' height={'700px'}
    id='contact' >

      <Box component={'div'} className='contact-main-1'> 
<Typography variant='h4'
sx={{letterSpacing:"3px",color:"#333",fontWeight:"800",
fontSize:"40px",lineHeight:"1.7em",marginBottom:"12px"}}
>
HOW&nbsp;FIND&nbsp;US
</Typography>
<p>
 there are some ways by which you can contact us. Contact us via socialmedia,
 mobileno or leave a query about your work
</p>
      </Box>
      <Box component={'div'} className='contact-main-2'> 
      <Box component={'div'} className='contact-main-2-text'
      sx={{flex:"1"}}>

      <Box component={'div'} className='contact-main-2-text1'>
        <h5>ADDRESS</h5>
        <p>sUMIT ARTS SONIPAT,HARYANA</p>
      </Box>
      <Box component={'div'} className='component-main-text2'>
     <h5>CALL US</h5>
     <p>+8607013940</p>
      </Box>
      <Box component={'div'} className='component-main-text3'>
<h5>EMAIL</h5>
<p>sumitjamdagni@gmail.com</p>
      </Box>
      </Box>
<Box component={'div'} className='contact-main-2-form'
sx={{flex:"1.5"}}>
      <Form/>

</Box>

      </Box>
    </Box>
    </Box>

  )
}

export default Contact
