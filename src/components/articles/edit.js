import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './articles.css'
import { Grid } from '@mui/material';

function get_article_data(article_URL) {
  console.log(article_URL);
 return axios.get(article_URL).then((response) => response.data)
}

function Edit() {
  const params=useParams();
  const article_URL = ("http://[::1]:4000/articles/"+params.id);

  const [article, setarticle] = useState([]);

useEffect(() => {
  let mounted = true;
  get_article_data(article_URL).then((item) => {
    if (mounted) {
      setarticle(item);
    }
  });
  return () => { (mounted = false) };
}, []);

  useEffect(() => {
    setformValue(article)
  }, []);
 
let history=useHistory();
    const [formValue, setformValue] = React.useState({
        title: article.title,
        description: article.description
      });
  
      const handleSubmit = (event) => {
          // we will fill this in the coming paragraph
          const loginFormData = new FormData();
  loginFormData.append("title", formValue.title)
  loginFormData.append("description", formValue.description)

  axios.put(("http://localhost:4000/articles/"+params.id), {
    title:formValue.title,
    description:formValue.description
  },
    { withCredentials: true }
  ).then(response => {
    console.log("registation response", response)
    if (response.status === "201" || response.statusText === 'Created') { 
      console.log("success")
      // setCurrentUser(response.data.user)
          //  history.push('/articles')   
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
    
    <h1 class="loginheading">Update Article</h1>
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
