import React from 'react'
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './category.css'
import { Alert, Button, Grid } from '@mui/material';
import { Redirect, useHistory } from 'react-router-dom';


const categories_URL = "http://[::1]:4000/categories";


function New() {

  const [hasError, setError] = React.useState(false);
  const [response, setResponse] = React.useState(false);

  const history = useHistory();
  const [formValue, setformValue] = React.useState({
    name: ''
  });
  const handleSubmit = (event) => {
    // we will fill this in the coming paragraph
    event.preventDefault();
    const loginFormData = new FormData();
    loginFormData.append("name", formValue.name)

    axios.post(("http://localhost:4000/categories/"), {
      name: formValue.name
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
            Sorry cannot be saved,try again
          </Alert>

        </Grid>
      }

      {response &&
        <Grid container justifyContent="center" id="errors" >
          <Alert severity="success" onClose={() => { }}>
            You have done it  , Congratulations
          </Alert>
          <Redirect to="/articles"></Redirect>
        </Grid>

      }

      <h1 class="loginheading">Create New Category
      </h1>
      <Grid container id="category" >

        <Box
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 4,
            width: 700,
            maxWidth: '100%',
          }}
        >

          <h1 class="col-1 col-form-label text-light">name:</h1>
          <form onSubmit={handleSubmit}>
            <TextField fullWidth
              id="fullWidth"
              type="string"
              name="name"
              placeholder="enter name"
              value={formValue.name}
              onChange={handleChange}
            />
            <Button type="submit" sx={{m:4}} variant="contained" color="info">Submit</Button>
								
          </form>
        </Box>
      </Grid>
    </div>
  )
}

export default New
