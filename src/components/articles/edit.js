import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './articles.css'
import { Alert, Grid } from '@mui/material';

function get_article_data(article_URL) {
  console.log(article_URL);
  return axios.get(article_URL).then((response) => response.data)
}

function Edit() {
  const params = useParams();
  const article_URL = ("http://[::1]:4000/articles/" + params.id);

  const [article, setarticle] = useState([]);
  const [hasError, setError] = React.useState(false);
  const [response, setResponse] = React.useState(false);


  useEffect(() => {
    let mounted = true;
    get_article_data(article_URL).then((item) => {
      if (mounted) {
        setarticle(item);
      }
    });
    return () => { (mounted = false) };
  }, []);

  const [formValue, setformValue] = useState({
    title: article.title,
    description: article.description
  });

  useEffect(() => {

    setformValue(article)
  }, [article]);


  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(("http://localhost:4000/articles/" + params.id), {
      title: formValue.title,
      description: formValue.description
    },

      { withCredentials: true }
    ).then(response => {
      setResponse(crr => true);
    })
      .catch(err => {
        setError(crr => true);
      })

  }



  return (
    <div>


      {hasError &&
        <Grid id="errors" >
          <Alert severity="error" onClose={() => { }}>
            Article cannot be created,try again
          </Alert>

        </Grid>
      }

      {response &&
        <Grid container justifyContent="center" id="errors" >
          <Alert severity="success" onClose={() => { }}>
            Article Created , Congratulations
          </Alert>
          <Redirect to="/articles"></Redirect>
        </Grid>

      }



      <h1 class="loginheading">Update Article</h1>
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
              Update Article
            </button>
          </form>
        </Box>
      </Grid>
    </div>
  )
}


export default Edit
