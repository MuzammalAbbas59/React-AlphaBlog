import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import "./category.css"
function get_category_data(category_URL) {
    console.log(category_URL);
   return axios.get(category_URL).then((response) => response.data)
}


function Show() {
    const params=useParams();
    const category_URL = ("http://[::1]:4000/categories/"+params.id);
	
    <h1>Show Category</h1>
    const [category, setCategory] = useState([]);

	useEffect(() => {
		let mounted = true;
		get_category_data(category_URL).then((item) => {
			if (mounted) {
				setCategory(item);
			}
		});
		return () => { (mounted = false) };
	}, []);


 const [admin, setadmin] = useState(false);

 useEffect(() => {
  axios.get("http://localhost:4000/loggedin",
   { withCredentials: true }
  ).then(response => {
 
   if(response.data.user.admin){
    setadmin(true);
   }
  
  })
 }, []);

        return (
          // <Grid container id="card">
               <Grid container justifyContent="center" id="card">
    
                    <Card sx={{ minWidth: 445,m:5 }}>      
           <CardMedia
          component="img"
          alt="alphablog.jpg"
          height="200"
          image={require('./card.webp')}
        />   
       <div key={category.id}>
  {/* {console.log(category.id)} */}
  <div>
       
         </div>
    </div>
  
    <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <p className="card-text">{category.id}</p>  
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <p className="card-text">{category.name}</p>  
          </Typography>
        </CardContent>
        <CardActions>
          {admin && 
          <>
          <Button href={"/categories/"+params.id+"/edit"} size="small">Edit</Button>
          <Button href={"/categories/"+params.id+"/delete"} size="small">Delete</Button>
          </>
          }
        </CardActions>
      </Card>
      
      </Grid>
  )
       
}

export default Show