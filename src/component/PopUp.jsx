import { Box, Card, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

const PopUp = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const fetchpost = async () => {
    try {
      const post = await fetch(`http://localhost:5000/post/getpost/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!post.ok) {
        throw new Error({ Error: "error during fetch" });
      }

      const response = await post.json();
      setPost(response);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchpost();
  }, [id]);

  console.log(post);
  return (
    <Box
      component={"div"}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "#fff",
        m: "12px 0px",
        gap: "40px",
        float: "center",
        height: "550px",
        width: { md: "100%", xs: "100%" },
      }}
    >
      <Typography variant="h3" sx={{ letterSpacing: "2px", fontSize: "28px" }}>
        {post.title}
      </Typography>
      <ReactPlayer
        url={post?.videourl}
        controls
        playing
        height="300px"
        width={"90%"}
      />
      <Typography variant="p" sx={{ fontSize: "19px" }}>
        {post?.description}
      </Typography>
    </Box>
  );
};

export default PopUp;
