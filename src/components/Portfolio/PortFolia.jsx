import React,{useEffect, useState} from 'react';
import { Box } from '@mui/material';
import {PostCard} from '../../component'

const PortFolia = () => {
    const [post,setPost] = useState([])
    const allPosts = async()=>{
      try {
        
        const posts = await fetch('http://localhost:5000/post/getallposts',{
            method:"GET",
            headers:{"Content-Type":"application/json"},
        });
        if(!posts.ok){
            throw new Error({Error:"Error during fetching"})
        }
       
        const postSuccess = await posts.json();

        console.log(postSuccess);
        // here we use redux for state management
        setPost(postSuccess)
      } catch (error) {
        console.error("Error during get post",error)
      }
    }


    useEffect(()=>{
       allPosts();
    },[])
  return (
    <Box component={'div'}
    display={"flex"} flexWrap={"wrap"} alignItems={"center"} justifyContent={"center"}
    float={"right"} gap={"40px"}
    sx={{overflowY:"auto",mb:"19px"}}
    >
      {post?.map((posts)=>{
        return <PostCard key={posts._id}
        id={posts._id}

        imageUrl={posts?.imageurl}
        title={posts.title}/>
      })}
    </Box>
  )
}

export default PortFolia
