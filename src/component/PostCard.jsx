import React from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {Card,Typography} from '@mui/material'

const PostCard = ({id,imageUrl,title}) => {
  const imageurl = imageUrl[0]

console.log(`${imageurl}`);
  return (
  
    <Link to={`/card/${id}`} style={{textDecoration:"none"}} className='postcard'>

    <Card

    sx={{height:"260px",width:"390px",gap:"30px",bgcolor:"#888"}} className='postcard-card'>
      {
        imageurl && (

      <img src={imageurl } style={{height:"inherit",width:"100%",objectFit:"cover"}} alt='imag'/>
 
  )
}
 
  </Card>
  
  <Typography component='h6' sx={{fontSize:"16px",textDecoration:"none",fontWeight:"600",
  textAlign:"end",color:"#888",lineHeight:"30px",letterSpacing:"2px"}}>
      {title}
    </Typography>
  </Link>


  )
}

export default PostCard;
