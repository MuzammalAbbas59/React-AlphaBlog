import React from 'react'
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './articles.css'
import { Grid } from '@mui/material';
import {useHistory} from 'react-router-dom'
function New() {
const history=useHistory();
  const [formValue, setformValue] = React.useState({
    title: '',
    description: ''
  });
  const [hasError, setError] = React.useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, description } = formValue;

    const loginFormData = {
      title,
      description
    }
    axios.post("http://localhost:4000/articles", {
      title:formValue.title,
      description:formValue.description
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

      <h1 class="loginheading">Create New Article</h1>

      <Grid container  id="login" >  
         <Box
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 4,
            width: 700,
            maxWidth: '100%',
          }}
        >

          <h1 class="col-1 col-form-label text-light">Title:</h1>

          <form onSubmit={handleSubmit}>
            <TextField fullWidth
              id="fullWidth"
              type="string"
              name="title"
              placeholder="enter title"
              value={formValue.title}
              onChange={handleChange}
            />
            <h1 class="col-1 col-form-label text-light">Description:</h1>

            <TextField fullWidth
              id="fullWidth"
              type="text"
              name="description"
              placeholder="enter description"
              value={formValue.description}
              onChange={handleChange}
            />
            <button class="btn btn-outline-light btn-lg mt-4"
              type="submit"
            >
              Create Article
            </button>
          </form>
        </Box>
      </Grid>
    </div>
  )
}

export default New
