import React, { useState } from "react";
import { Formik } from "formik";
import Dropzone from "react-dropzone";
import * as yup from "yup";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, sendPost } from "../state";

// formik initial values
const initialLogin = {
  email: "",
  password: "",
};

const initialCard = {
  title: "",
  description: "",
  imageUrl: "",
  videoUrl: "",
};

//validation schema for login using yup
const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email type")
    .required("Email required"),
  password: yup.string().required("Enter a valid password"),
});

const postSchema = yup.object().shape({
  title: yup.string().required("Enter Title here"),
  description: yup.string().required("Enter description"),
  imageUrl: yup.string().required("Please enter imageUrl"),
  videoUrl: yup.string(),
});
// we will make a dynamically form using formik
const User = () => {
  const [pagetype, setPagetype] = useState("login");

  const isLogin = pagetype === "login";
  const isForm = pagetype === "sendPost";
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);

  // you must have to knoe that when using fetch then use try
  // catch block
  const Login = async (values, onSubmitProps) => {
    try {
      const loginowner = await fetch("http://localhost:5000/owner/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!loginowner.ok) {
        throw new Error("Failed to login. Please try again.");
      }
      const data = await loginowner.json();
      console.log(data);
      if (!data.token) {
        throw new Error("Token not received");
      }
      dispatch(
        loginSuccess({
          user: data.user,
          token: data.token,
        })
      );
      setPagetype("sendPost");
      onSubmitProps.resetForm();
      console.log("User logged in successfully");
    } catch (error) {
      console.error(error.message);
    }
  };

  const ownerPost = async (values, onSubmitProps) => {
    //   handling file uploads
    try {
      //   Creating a new formData object
      const formData = new FormData();
      // appending each value in the formdata
      for (let value in values) {
        // if we use return here then loop will exit after first iteration
        formData.append(value, values[value]);
      }

      const post = await fetch("http://localhost:5000/post/createpost", {
        method: "POST",
        body: formData,
        
      });
      console.log("Fetch response", post);
      console.log("FormData:", formData);

      if (!post.ok) {
        console.log("error during fetching");
      }
      const postSuccess = await post.json();
      console.log(postSuccess);
      dispatch(
        sendPost({
          posts: postSuccess.posts,
        })
      );

      onSubmitProps.resetForm();
    } catch (error) {
      console.error(error.message);
    }
  };

  //   handling submit functionallity for Formik
  const handleOnSubmit = async (values, onSubmitProps) => {
    try {
      if (isLogin) {
        await Login(values, onSubmitProps);
        onSubmitProps.resetForm();
      } else {
        await ownerPost(values, onSubmitProps);
        onSubmitProps.resetForm();
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <Formik
      onSubmit={handleOnSubmit}
      initialValues={isLogin ? initialLogin : initialCard}
      validationSchema={isLogin ? loginSchema : postSchema}
    >
      {({
        values,
        onSubmitProps,
        errors,
        handleSubmit,
        handleChange,
        handleBlur,
        touched,
        setFieldValue,
      }) => (
        <form
          target="/upload"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <Box
            sx={{
              display: "grid",
              mx:"20px",
              gap: "20px",
              "& > div": { gridTemplateColumns: "(100px,1fr)" },
            }}
          >
            {isForm && (
              <>
                <TextField
                  label="Title"
                  name="title"
                  value={values.title}
                  onSubmit={handleSubmit}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={Boolean(errors.title) && Boolean(touched.title)}
                  helperText={errors.title && touched.title ? errors.title : ""}
                />
                <TextField
                  label="Description"
                  name="description"
                  value={values.description}
                  onSubmit={handleSubmit}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={
                    Boolean(errors.description) && Boolean(touched.description)
                  }
                  helperText={
                    errors.description && touched.description
                      ? errors.description
                      : ""
                  }
                />
                <Box
                  sx={{
                    border: "2px solid #888",
                    padding: "19px 20px",
                    borderRadius: "24px",
                    cursor: "pointer",
                  }}
                >
                  <Dropzone
                    multiple={false}
                    acceptedFiles=".png,.jpeg,.jpg"
                    onDrop={(acceptedFiles) => {
                      // update form field value with the dropped file
                      setFieldValue("imageUrl", acceptedFiles[0]);
                    }}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <Box {...getRootProps()}>
                        <input {...getInputProps()} />
                        {!values.imageUrl ? (
                          <p>Drag and Drop image Here here</p>
                        ) : (
                          <p>{values.imageUrl.name}</p>
                        )}
                      </Box>
                    )}
                  </Dropzone>
                </Box>
                <Box
                  sx={{
                    border: "2px solid #888",
                    padding: "19px 20px",
                    borderRadius: "24px",
                    cursor: "pointer",
                  }}
                >
                  <Dropzone
                    multiple={false}
                    acceptedFiles={[".mp4"]}
                    onDrop={(acceptedFiles) => {
                      // update form field value with the dropped file
                      setFieldValue("videoUrl", acceptedFiles[0]);
                    }}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <Box {...getRootProps()}>
                        <input {...getInputProps()} />
                        {!values.videoUrl ? (
                          <p>Drag and Drop Video here</p>
                        ) : (
                          <p>{values.videoUrl.name}</p>
                        )}
                      </Box>
                    )}
                  </Dropzone>
                </Box>
              </>
            )}
            {isLogin && (
              <>
                <TextField
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onSubmit={handleSubmit}
                  error={Boolean(errors.email) && Boolean(touched.email)}
                  helperText={errors.email && touched.email ? errors.email : ""}
                />
                <TextField
                  label="Password"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onSubmit={handleSubmit}
                  error={Boolean(errors.password) && Boolean(touched.password)}
                  helperText={
                    errors.password && touched.password ? errors.password : ""
                  }
                />
              </>
            )}

            <Button variant="contained" type="submit">{isLogin ? "Login" : "Submit"}</Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default User;
