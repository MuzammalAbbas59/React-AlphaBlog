import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom';
import EditCategories from './categories/edit';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { Container } from "@mui/system";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";


const categories_URL = "http://[::1]:4000/categories";

function get_categories_data() {

	return axios.get(categories_URL).then((response) => response.data)
}
// function DeleteCategory(props){

// 	console.log({props});
// 	useEffect(() => {
// 		// DELETE request using axios with error handling
// 		axios.delete('http://[::1]:4000/categories/'+{props})

// }, []);
// }
function Categories(props) {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		let mounted = true;
		get_categories_data().then((items) => {
			if (mounted) {
				setCategories(items);
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
		<div>

<h1>Categories:</h1>
      <Container>
        {categories.map((category) => {
          return (
                  <div key={category.id}>
                    <Grid container justifyContent="center" alignItems="center">
                      <Grid xs={8}>
                        <Card variant = "outlined">
                          <CardContent>
                            <Typography variant="h5" component="div">
                              <strong>{category.id}</strong>
                            </Typography>
                            <Typography variant="p" component="div">
                              {category.name}
                            </Typography>
                            <br></br>
                            {/* <Button href={'/categories/' + category.id + '/view'}
							 variant="outlined" color="success">View</Button>&nbsp;
                            <Button href={'/categories/' + category.id + '/edit'}
							 variant="outlined" color="info">Edit</Button>&nbsp;
							 <Button href={'/categories/' + category.id + '/delete'}
							 variant="outlined" color="error">Delete</Button>&nbsp;
							  */}
                			<Button href={'/categories/' + category.id+ '/show'}
											 variant="outlined" color="success">View</Button>&nbsp;
            {admin && 
            <>
											<Button href={'/categories/' + category.id + '/edit'} 
											variant="outlined" color="info">Edit</Button>&nbsp;
        			<Button href={'/categories/' + category.id + '/delete'}
											 variant="outlined" color="error">Delete</Button>&nbsp; 
            </>
        }

                          </CardContent>
                        </Card>
                      </Grid>
                      </Grid>
                      <br></br><br></br>
                  </div>
          )
        })}
      </Container>
		</div>


	)
}





export default Categories
