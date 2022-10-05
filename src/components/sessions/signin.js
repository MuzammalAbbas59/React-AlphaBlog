import React, { createContext } from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Redirect, useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './login.css'
import { Alert, Grid } from '@mui/material';

function Login() {

  const [response, setResponse] = React.useState(false);

  let history = useHistory();
  const [hasError, setError] = React.useState(false);


  const [formValue, setformValue] = React.useState({
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

	axios.post("http://localhost:4000/login", {
		email: formValue.email,
		password: formValue.password,
	},
		{ withCredentials: true }
	).then(response => {

		if (response.status === "201" || response.statusText === 'Created') {
            setResponse(error=> true);
         }
	})
    .catch(err => {
        setError(error=> true);
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

      {hasError &&
        <Grid container justifyContent="center" id="errors" >
          <Alert severity="error" onClose={() => { }}>
            Login  Failed , Credentials  are  incorrect!, Please  Try  again
          </Alert>
        </Grid>

      }

     {response &&
        <Grid container justifyContent="center" id="errors" >
          <Alert severity="success" onClose={() => { }}>
            Login Successful , Congratulations
          </Alert>
          <Redirect to="/"></Redirect>
        </Grid>

      }
     
      <h1 class="loginheading">Login</h1>

      {/* <div class="container bg-info rounded" id="login"> */}
      <Grid container id="login" >
        <Box
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 4,
            height: '5%',
            width: 700,
            maxWidth: '100%',
          }}
        >
          <form>
            <h1 class="col-1  col-form-label text-light">Email:</h1>
            <TextField fullWidth
              id="fullWidth"
              type="email"
              name="email"
              placeholder="enter your email"
              value={formValue.email}
              onChange={handleChange}
              sx={{
                backgroundColor: "white"
              }}
            />
            <h1 class="col-1 col-form-label text-light">Password:</h1>

            <TextField fullWidth
              id="fullWidth"
              type="password"
              name="password"
              placeholder="enter password"
              value={formValue.password}
              onChange={handleChange}
              sx={{
                backgroundColor: "white"
              }}
            />
            
            <button class="btn btn-outline-light btn-lg mt-4" onClick={handleSubmit}>singin</button>
            
          </form>
        </Box>
      </Grid>
    </div>

    // </div>
  )
}

// const useAuth = () => React.useContext(AuthContext);

export default Login; 