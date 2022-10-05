import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
const articles_URL = "http://[::1]:4000/articles";
function get_articles_data() {

	return axios.get(articles_URL).then((response) => response.data)

}
function Articles() {
	const [articles, setArticles] = useState([]);


	const [CurrentUser, setCurrentUser] = useState([]);
	const [admin, setadmin] = useState([false]);
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
				setadmin(crr=>true);
			}

		})
	}, []);

	useEffect(() => {
		let mounted = true;
		get_articles_data().then((items) => {
			if (mounted) {
				setArticles(items);
			}
		});
		return () => { (mounted = false) };
	}, []);

	var flag = true;
	return (
		<div>
			<h1>Articles from api are </h1>
			<Container>
				{articles.map((article) => {

					return (
						<div key={article.id}>
							<Grid container justifyContent="center" alignItems="center">
								<Grid xs={8}>
									<Card variant="outlined" >
										<CardContent>
											<Typography variant="h5" component="div">
												<strong>{article.title}</strong>
											</Typography>
											<Typography variant="p" component="div">
												{article.description}
											</Typography>
										
											<br></br>
											<Button href={'/articles/' + article.id + '/show'}
												variant="outlined" color="success">View</Button>&nbsp;

											  {(admin || article.user_id == CurrentUser) &&
												<>
													<Button href={"/articles/" + article.id + "/edit"}
														variant="outlined">Edit</Button>

													<Button href={"/articles/" + article.id + "/delete"}
														variant="outlined" >	Delete</Button>
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



export default Articles;