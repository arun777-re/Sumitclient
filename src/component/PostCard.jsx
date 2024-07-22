import React from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {Card,CardMedia,CardContent,Typography, Box} from '@mui/material'

const PostCard = ({id,imageUrl,title}) => {
  const navigate = useNavigate();
  const imageurl = imageUrl[0]

console.log(`${imageurl}`)
  return (
  
    <Link to={`/card/${id}`} style={{textDecoration:"none"}}>

    <Card

    sx={{height:"260px",width:"390px",gap:"30px",bgcolor:"#888"}}>
      {
        imageurl && (

      <img src={imageurl } style={{height:"inherit",width:"100%",objectFit:"cover"}} alt='image of project'/>
 
  //     <CardMedia component={'img'}
  //  height={'140'}
  //  image={`${imageurl}`} alt='card image'/>
  )
}
 
  </Card>
  
  <Typography sx={{fontSize:"16px",textDecoration:"none",fontWeight:"600",
  textAlign:"end",color:"#888",lineHeight:"30px",letterSpacing:"2px"}}>
      {title}
    </Typography>
  </Link>


  )
}

export default PostCard;
