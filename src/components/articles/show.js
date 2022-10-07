import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip, Grid } from '@mui/material';

function get_article_data(article_URL) {
  console.log(article_URL);
  return axios.get(article_URL).then((response) => response.data)
}

function ShowArticle() {
  const params = useParams();
  const article_URL = ("http://[::1]:4000/articles/" + params.id);

  <h1>Show Category</h1>
  const [article, setArticle] = useState([]);

  const [CurrentUser, setCurrentUser] = useState([]);
  const [admin, setadmin] = useState(false);
  var check = false;
  useEffect(() => {
    axios.get("http://localhost:4000/loggedin",
      { withCredentials: true }
    ).then(response => {

      console.log("get response", response.data.user.admin)
      if (response.data.user) {
        console.log("responseuser", response.data.user);
        setCurrentUser(response.data.user.id);
      }
      if (response.data.user.admin) {
        setadmin(true);
      }

    })
  }, []);
  if (article.user_id === CurrentUser) {
    check = true;
  }

  const [CategoryArticle, setcategoryArticle] = useState(["zero"]);

  useEffect(() => {
    let mounted = true;
    get_article_data(article_URL).then((item) => {
      if (mounted) {
        setArticle(item.article);
        setcategoryArticle(item.category[0].name);
      }
    });
    return () => { (mounted = false) };
  }, []);

  var flag = true;
  return (

    <Grid container justifyContent="center" id="card">
      <Card sx={{ minWidth: 445, m: 5 }}>
        <CardMedia
          component="img"
          alt="alphablog.jpg"
          height="140"
          image={require('./articles.jpg')}
        />
        <div key={article.id}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <p className="card-text">{article.title}</p>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p className="card-text">{article.description}</p>
          </Typography>
          
          <Typography variant="p" component="div">
          <Chip sx={{m:4}} label={CategoryArticle} color="success"></Chip>
						</Typography>
        </CardContent>
        <CardActions>
        {((article.user_id == CurrentUser) || (admin)) &&
									     <>
              <Button href={"/articles/" + params.id + "/edit"} size="small">Edit</Button>

              <Button href={"/articles/" + params.id + "/delete"} size="small">Delete</Button>
           
            </>
              }
        </CardActions>

        </div>
      </Card>
    </Grid>
  )

}

export default ShowArticle