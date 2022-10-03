import React from 'react'
import axios from 'axios';
import { useHistory} from 'react-router-dom';
import '../sessions/login.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
function NewUser() {
 let history=useHistory();
  
    const [formValue, setformValue] = React.useState({
        username: '',
        email: '',
        password:''
      });
  
      const handleSubmit = (event) => {
          // we will fill this in the coming paragraph
          const loginFormData = new FormData();
  loginFormData.append("username", formValue.username)
  loginFormData.append("email", formValue.email)
  loginFormData.append("password", formValue.password)


  axios.post(("http://localhost:4000/users/"), {
    username:formValue.username,
    email:formValue.email,
    password:formValue.password

  },
    { withCredentials: true }
  ).then(response => {
          history.push('/articles');         
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
       <h1 class="loginheading">SignUp</h1>
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
        placeholder="enter username"
        value={formValue.username}
        onChange={handleChange}
      />
       <h1 class="col-1 col-form-label text-light">Email:</h1>
    
       <TextField fullWidth
        id="fullWidth"
        type="email"
        name="email"
        placeholder="enter email"
        value={formValue.email}
        onChange={handleChange}
      />
       <h1 class="col-1 col-form-label text-light">Password:</h1>
    
       <TextField fullWidth
        id="fullWidth"
        type="password"
        name="password"
        placeholder="enter password"
        value={formValue.password}
        onChange={handleChange}
      />
      <button className="btn btn-outline-light btn-lg mt-4"
        type="submit"
      >
        SignUp
      </button>
    </form>
    </Box>
    </Grid>
    </div>
  )
}


export default NewUser
