import { Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

function loguserout() {
	axios.delete("http://localhost:4000/logout",
		{ withCredentials: true }
	)
}

function Appbar() {
	const [loggedin, setloggedin] = React.useState(false);
	const [admin, setadmin] = React.useState(false);

	useEffect(() => {
		axios.get("http://localhost:4000/loggedin",
			{ withCredentials: true }
		).then(response => {

			if (response.data.user.admin) {
				setadmin(true);
			}
			setloggedin(true)

		})

			.catch(err => {
				// setError(error=> true);
			})
	});



	console.log("app", loggedin);
	return (
		<div>
			<BrowserRouter>
				<nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
					<ul className="navbar-nav mr-auto ">
						<Button href='/' variant="text" color="success">Alpha-Blog</Button>&nbsp;
	      		<li className="nav-item dropdown" >
							<a className="nav-link dropdown-toggle" href="/articles" id="navbar-dropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Articles
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
								<Button href='/articles' variant="text" color="success">All Articles</Button>&nbsp;
	 
								{loggedin &&
									<>
										<Button href='/articles/new' variant="text" color="success">New Article</Button>&nbsp;
	 
										
									</>
								}
							</ul>

						</li>

						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Categories
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
							<Button href='/categories'  color="success">All Categories</Button>&nbsp;
	           	{loggedin && admin &&
									<>
							<Button href='/categories/new' variant="text" color="success">New Category</Button>&nbsp;
	 
									</>
	
								}
							</ul>
						</li>

						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Users
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<Button href='/users' variant="text" color="success">List of users</Button>
								
								{/* <li><Link to="/users/new" className= "dropdown-item" >Create new Category</Link></li> */}
							</ul>
						</li>
						<li className="nav-item dropdown">
						{!loggedin &&
							<>
								<Button href='/login' variant="text" color="success">login</Button>
								<Button href='/signup' variant="text" color="success">SignUp</Button>
								
							</>
						}
						{loggedin &&
							<Button href='/login' onClick={loguserout} variant="text" color="success">Logout</Button>
						}
						</li>
					</ul>
					{admin &&
						<p1 className="nav-link">(Admin)</p1>
					}

					<form class="d-flex mx-auto" id="search">
						<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
						<button class="btn btn-outline-success" type="submit">Search</button>
					</form>
				</nav>
			</BrowserRouter>
		</div>
	)
}

export default Appbar
