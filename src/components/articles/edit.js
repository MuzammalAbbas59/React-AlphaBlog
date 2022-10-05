import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './articles.css'
import { Alert, Button, Grid,FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const categories_URL = "http://[::1]:4000/categories";

function get_article_data(article_URL) {
  console.log(article_URL);
  return axios.get(article_URL).then((response) => response.data)
}

function get_categories_data() {

  return axios.get(categories_URL).then((response) => response.data)
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
        setarticle(item.article);
      }
    });
    return () => { (mounted = false) };
  }, []);


  useEffect(() => {
    setformValue(article)
  }, [article]);


  const [formValue, setformValue] = useState({
    title: article.title,
    description: article.description
  });

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }


  const [selectedCategory, setSelectedCategory] = useState([]);

  const handleChangeCategory = (e) => {
    setSelectedCategory(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(("http://localhost:4000/articles/" + params.id), {
      title: formValue.title,
      description: formValue.description,
      category_ids: selectedCategory,
    },

      { withCredentials: true }
    ).then(response => {
      setResponse(crr => true);
    })
      .catch(err => {
        setError(crr => true);
      })

  }

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    let mounted = true;
    get_categories_data().then((items) => {
      if (mounted) {
        setCategories(items);
      }
    });
    return () => { (mounted = false) };
  }, [categories]);


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
              <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">Categories</InputLabel>

              <Select
                labelId="country-label"
                id="country"
                // value={selectedCategory}
                value={[selectedCategory]}
                onChange={handleChangeCategory}
                SelectProps={{
                  multiple: true
                }}
                defaultValue=" ">

                {categories.map((data, index) => (
                  <MenuItem
                    key={data.id}
                    value={data.id}
                  >
                    {data.name}
                  </MenuItem>
                  //  </div>
                ))}
              </Select>
            </FormControl>

            <h1></h1>

          <Button type="submit" sx={{m:4}} variant="contained" color="info">Submit</Button>
								
          </form>
        </Box>
      </Grid>
    </div>
  )
}


export default Edit
