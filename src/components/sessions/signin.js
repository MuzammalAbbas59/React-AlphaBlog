import React, { createContext } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './login.css'
import { Alert, Grid } from '@mui/material';
// const AuthContext = createContext({});
import CSRFToken from './cookies';

function Login() {
  const AuthContext = createContext({});
  // const instance = axios.create({
  //   httpAgent
  // });

  const [currentUser, setCurrentUser] = React.useState();

  let history = useHistory();
  const [hasError, setError] = React.useState(false);
  const [formValue, setformValue] = React.useState({
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const loginFormData = new FormData();
    loginFormData.append("email", formValue.email)
    loginFormData.append("password", formValue.password)

	axios.post("http://localhost:4000/login", {
		email: formValue.email,
		password: formValue.password,
	},
		{ withCredentials: true }
	).then(response => {

		if (response.status === "201" || response.statusText === 'Created') {
            history.push("/articles");
         }
	})
    .catch(err => {
        setError(error=> true);
    })
}
  

     console.log("user",currentUser);
  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }

  return (
    <div>
      {/* <AuthContext.Provider value={{currentUser}} > <Data /> </AuthContext.Provider> */}
      {console.log(currentUser)}
      {hasError &&
        <Grid container justifyContent="center" id="errors" >
          <Alert severity="error" onClose={() => { }}>
            Login  Failed , Credentials  are  incorrect!, Please  Try  again
          </Alert>
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
            {/* <button class="btn btn-outline-light btn-lg mt-4"
              type="submit"
              sx={{
                backgroundColor: "info.main"
              }}
            >
              Login
            </button> */}
            <button class="btn btn-outline-light btn-lg mt-4"onClick={handleSubmit}>singin</button>


          </form>
        </Box>
      </Grid>
    </div>

    // </div>
  )
}

// const useAuth = () => React.useContext(AuthContext);

export default Login; 