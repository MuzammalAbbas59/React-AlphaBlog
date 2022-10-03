import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../sessions/login.css'
import { Grid } from '@mui/material';

function get_user_data(user_URL) {
 return axios.get(user_URL).then((response) => response.data)
}

function Edit() {
  const params=useParams();
  const user_URL = ("http://[::1]:4000/users/"+params.id);

  const [user, setuser] = useState([]);

useEffect(() => {
  let mounted = true;
  get_user_data(user_URL).then((item) => {
    if (mounted) {
      setuser(item);
    }
  });
  return () => { (mounted = false) };
}, []);
 let history=useHistory();
  console.log(user);
  console.log(user.username);

  useEffect(() => {
    setformValue(user)
  }, []);
  
    const [formValue, setformValue] = React.useState({
        username: (user.username),
        email: user.email,
        password:'*****'
      });

 
      const handleSubmit = (event) => {
          // we will fill this in the coming paragraph
          const loginFormData = new FormData();
  loginFormData.append("username", formValue.username)
  loginFormData.append("email", formValue.email)
  loginFormData.append("password", formValue.password)

  axios.put(("http://localhost:4000/users/"+params.id), {
    username:formValue.username,
    email:formValue.email,
    password:formValue.password

  },
    { withCredentials: true }
  ).then(response => {
    console.log("registation response", response)
    if (response.status === "201" || response.statusText === 'Created') { 
      console.log("success")
      // setCurrentUser(response.data.user)
          //  history.push('/articles')   
    }
  })
}          
      
      const handleChange = (event) => {
          setformValue({
            ...formValue,
            [event.target.name]: event.target.value
          });
        }
  
  return (
    <div>
        <h1 class="loginheading">Edit User</h1>
        <Grid container  id="login" >  
       <Box
      sx={{
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:4,
        width: 700,
        maxWidth: '100%',
      }}
    >

     <h1 class="col-1 col-form-label text-light">Username:</h1>
      <form onSubmit={handleSubmit}>
      <TextField fullWidth
        id="fullWidth"
        type="string"
        name="username"
        placeholder="username"
        value={formValue.username}
        onChange={handleChange}
      />
      <h1 class="col-1 col-form-label text-light">Email:</h1>
      <TextField fullWidth
        id="fullWidth"
        type="email"
        name="email"
        placeholder="email"
        value={formValue.email}
        onChange={handleChange}
      />
     <h1 class="col-1 col-form-label text-light">Password:</h1>
     <TextField fullWidth
        id="fullWidth"
        type="password"
        name="password"
        placeholder="password"
        value={formValue.password}
        onChange={handleChange}
      />
      <button class="btn btn-outline-light btn-lg mt-4"
        type="submit"
      >
        Update User
      </button>
     
    </form>
    </Box>
    
    </Grid>
    </div>
  )
}


export default Edit
