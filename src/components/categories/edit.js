import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './category.css'
import { Alert, Button, Grid } from '@mui/material';

function get_category_data(category_URL) {
  console.log(category_URL);
  return axios.get(category_URL).then((response) => response.data)
}


function Edit() {
  const params = useParams();
  const category_URL = ("http://[::1]:4000/categories/" + params.id);
  const [hasError, setError] = React.useState(false);
  const [response, setResponse] = React.useState(false);
  const [category, setcategory] = useState([]);

  useEffect(() => {
    let mounted = true;
    get_category_data(category_URL).then((item) => {
      if (mounted) {
        setcategory(item);
      }
    });
    return () => { (mounted = false) };
  }, []);

  useEffect(() => {
    setformValue(category)
  }, [category]);


  console.log(params.id)
  const [formValue, setformValue] = React.useState({
    name: category.name
  });
  // const id=props.match.params.id
  const handleSubmit = (event) => {

    const loginFormData = new FormData();
    loginFormData.append("name", formValue.name)

    axios.put(("http://localhost:4000/categories/" + params.id), {
      name: formValue.name
    },
    { withCredentials: true }
    ).then(response => {   
      setResponse(crr=>true); 
    })
    .catch(err=>{
      setError(crr=> true);
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
        <Grid  id="errors" >
           <Alert  severity="error" onClose={() => { }}>
            Sorry cannot be saved,try again
          </Alert>
        
        </Grid>
      }
      
        {response &&
        <Grid container justifyContent="center" id="errors" >
          <Alert severity="success" onClose={() => { }}>
            You have done it  , Congratulations
          </Alert>
          <Redirect to="/categories"></Redirect>
        </Grid>

      }

      <h1 class="loginheading">Update Category
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

export default Edit
