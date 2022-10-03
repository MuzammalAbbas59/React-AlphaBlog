import React from 'react'
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './category.css'
import { Grid } from '@mui/material';
import { useHistory } from 'react-router-dom';

function New() {
const history=useHistory();
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
    console.log("registation response", response)
    if (response.status === "201" || response.statusText === 'Created') {
      console.log("success")
      // setCurrentUser(response.data.user)
      history.push('/categories')   
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
       <h1 class="loginheading">Create New Category
    </h1>
    <Grid container  id="category" >  
     
        <Box
      sx={{
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:4,
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
      <button class="btn btn-outline-light btn-lg mt-4"
        type="submit"
      >
        Create Category
      </button>
    </form>
    </Box>
    </Grid>
    </div>
  )
}

export default New
