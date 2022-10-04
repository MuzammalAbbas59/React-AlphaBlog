import React from 'react'
import axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom';
import '../sessions/login.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Alert, Grid } from '@mui/material';

function NewUser() {
  let history = useHistory();
  const [hasError, setError] = React.useState(false);
  const [response, setResponse] = React.useState(false);


  const [formValue, setformValue] = React.useState({
    username: '',
    email: '',
    password: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(("http://localhost:4000/users/"), {
      username: formValue.username,
      email: formValue.email,
      password: formValue.password

    },
      { withCredentials: true }
    ).then(response => {
      setResponse(crr => true);
    })
      .catch(err => {
        setError(crr => true);
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
        <Grid id="errors" >
          <Alert severity="error" onClose={() => { }}>
            User cannot be created,try again
          </Alert>

        </Grid>
      }

      {response &&
        <Grid container justifyContent="center" id="errors" >
          <Alert severity="success" onClose={() => { }}>
            User Created , Congratulations
          </Alert>
          <Redirect to="/articles"></Redirect>
        </Grid>

      }


      <h1 class="loginheading">SignUp</h1>
      <Grid container id="login" >

        <Box
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 4,
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
