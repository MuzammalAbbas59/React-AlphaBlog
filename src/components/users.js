import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "@mui/system";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";

const users_URL = "http://[::1]:4000/users";



function get_users_data() {

	return axios.get(users_URL).then((response) => response.data)

}

function Users(props) {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		let mounted = true;
		get_users_data().then((items) => {
			if (mounted) {
				setUsers(items);
			}
		});
		return () => { (mounted = false) };
	}, []);

	const [CurrentUser, setCurrentUser] = useState([]);
	const [admin, setadmin] = useState([]);
	const history=useHistory();
	const check = false;
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
				setadmin(cr => true);
			}

		})
		
	}, []);


	return (

		<div>
			<h1>Users from api are </h1>

			<Container>
				{users.map((user) => {



					return (
						<div key={user.id}>
							<Grid container justifyContent="center" alignItems="center">
								<Grid xs={8}>
									<Card variant="outlined">
										<CardContent>
											<Typography variant="h5" component="div">
												<strong>{user.username}</strong>
											</Typography>
											<Typography variant="p" component="div">
												{user.email}
											</Typography>
											<br></br>

											<Button href={'/users/' + user.id + '/show'}
												variant="outlined" color="success">Show</Button>
									  {(admin || user.id == CurrentUser) &&
											<>
													<Button href={'/users/' + user.id + '/edit'}
														variant="outlined" color="info">Edit</Button>          				
														
														<Button href={'/users/' + user.id + '/delete'}
														 variant="outlined" color="error">Delete</Button>
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
export default Users;
