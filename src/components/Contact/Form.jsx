import React from 'react';
import {Formik} from 'formik'
import * as yup from 'yup';
import { Box, Button, TextField } from '@mui/material';

const initialRegister = {
    name:"",
    email:"",
    subject:"",
    phone:"",
    message:""
}

const registerSchema = yup.object().shape({
    name:yup.string().required('Name is required'),
    email:yup.string().email('enter a valid email').required('email is required'),
    subject:yup.string().required('Enter a subject'),
    phone:yup.string().required('Please enter a valid mobile no'),
    message:yup.string().required('Leave a message here'),
})




const Form = () => {

    const register = async(values,onSubmitProps)=>{
    try {
      const registerUser = await fetch('http://localhost:5000/user/register',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(values)

      });

      if(registerUser.ok){
        const registerSucc = await registerUser.json();
        console.log(registerSucc)
        console.log("user registeration success")
        

      }
      onSubmitProps.resetForm();

      
    } catch (error) {
      console.error({Error:"error during registration",error})
    }

    }


    const handleFormSubmit = async(values,onSubmitProps)=>{
      await register(values,onSubmitProps)
    }


  return (
    <Formik
    initialValues={initialRegister}
    validationSchema={registerSchema}
    onSubmit={handleFormSubmit}
    >
{({values,onSubmitProps,handleChange,handleBlur,
handleSubmit,errors,touched,resetForm})=>(
<form onSubmit={handleSubmit}>
  <>
<Box 
gap={'1rem'}
sx={{display:"grid",
 gridTemplateColumns:"1fr 1fr",
  gridTemplateRows:"auto auto",

}}
>
    <TextField
    fullWidth
    type='text'
    label='Name'
    name='name'
    value={values.name}
    onBlur={handleBlur}
    onChange={handleChange}
    error={Boolean(touched.name) && Boolean(errors.name)}
    helperText={touched.name && errors.name}
    />
    <TextField
    fullWidth
    label='Email'
    name='email'
    value={values.email}
    onBlur={handleBlur}
    onChange={handleChange}
    error={Boolean(touched.email) && Boolean(errors.email)}
    helperText={touched.email && errors.email}
    />
  
    <TextField
  fullWidth
    label='Subject'
    name='subject'
    value={values.subject}
    onBlur={handleBlur}
    onChange={handleChange}
    error={Boolean(touched.subject) && Boolean(errors.subject)}
    helperText={touched.subject && errors.subject}
    />
    <TextField
    fullWidth
    label='Contact'
    name='phone'
    value={values.phone}
    onBlur={handleBlur}
    onChange={handleChange}
    error={Boolean(touched.phone) && Boolean(errors.phone)}
    helperText={touched.phone && errors.phone}
    />
</Box>
<Box component={'div'}
sx={{marginTop:"18px",display:"flex",alignItems:"center",justifyContent:"center",
flexDirection:"column"}}>

    <TextField
    multiline={true}
    fullWidth
    rows={7}
    label='Message'
    name='message'
    value={values.message}
    onBlur={handleBlur}
    onChange={handleChange}
    error={Boolean(touched.message) && Boolean(errors.message)}
    helperText={touched.message && errors.message}
    sx={{gridTemplateColumns:"span4"}}
    />
  
  <Button type='submit'
  sx={{marginTop:"12px",bgcolor:"whitesmoke"}}>
   Submit&nbsp;
  </Button>
</Box>

</>

</form>

)}
    </Formik>
  )
}

export default Form;
