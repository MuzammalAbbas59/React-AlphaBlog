import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid} from '@mui/material';

function get_user_data(user_URL) {
  console.log(user_URL);
  return axios.get(user_URL).then((response) => response.data)
}

function Show() {
  const params = useParams();
  const user_URL = ("http://[::1]:4000/users/" + params.id);

  <h1>Show user</h1>
  const [user, setuser] = useState([]);

  useEffect(() => {
    let mounted = true;
    get_user_data(user_URL).then((item) => {
      if (mounted) {
        setuser(item);
      }
    });
    return () => { (mounted = false) };
  }, []);

  const [CurrentUser, setCurrentUser] = useState([]);
  const [admin, setadmin] = useState([]);
  // const [check,setCheck] = useState([false]);

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
var check=false;
  if (CurrentUser === user.id) {
     check=true;
   }

  return (
    <div>
    <Grid container justifyContent="center" id="card">

<Card sx={{ minWidth: 445, m: 5 }}>
  <CardMedia
    component="img"
    alt="alphablog.jpg"
    height="140"
    image={require('./afridi.jpg')}
  />
  <div key={user.id}>
    {/* {console.log(category.id)} */}
    <div>

    </div>
  </div>

  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      <p className="card-text">{user.username}</p>
    </Typography>
    <Typography variant="body2" color="text.secondary">
      <p className="card-text">{user.email}</p>
    </Typography>
  </CardContent>
  <CardActions>
    {(admin || user.id == CurrentUser) &&

      <>
        <Button href={"/users/" + params.id + "/edit"} 
        size="small">Edit</Button>
        
          <Button href={"/users/" + params.id + "/delete"} 
          size="small">Delete</Button>
      </>

    }            
  </CardActions>
</Card>
</Grid>
</div>
  )

}

export default Show