import axios from 'axios'
import React, { useEffect } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

function loguserout(){
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

			if(response.data.user.admin){
				setadmin(true);
			}
			setloggedin(set => true)
		
		})
	}, []);


	return (
		<div>
			<BrowserRouter>
				<nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
					<ul className="navbar-nav mr-auto ">
						<li><Link to="/" className="nav-link" id="title" ><h5>Alpha-Blog</h5></Link></li>

						<li className="nav-item dropdown" >
							<a className="nav-link dropdown-toggle" href="/articles" id="navbar-dropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Articles
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><Link to="/articles" className="dropdown-item" >List of articles</Link></li>
								{loggedin &&
									<>
										<li><Link to="/articles/new" className="dropdown-item" >Create new article</Link></li>
									</>
								}
							</ul>

						</li>

						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Categories
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
							<li><Link to="/Categories" className="dropdown-item" >List of categories</Link></li>
							{loggedin && admin &&
									<>
							<li><Link to="/categories/new" className="dropdown-item" >Create new Category</Link></li>
							</>
							}
							</ul>
						</li>

						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Users
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><Link to="/users" className="dropdown-item" >List of Users</Link></li>
								{/* <li><Link to="/users/new" className= "dropdown-item" >Create new Category</Link></li> */}
							</ul>
						</li>
						{!loggedin &&
							<>
								<li><Link to="/login" className="nav-link">Login</Link></li>
								<li><Link to="/signup" className="nav-link">SignUp</Link></li>
							</>
						}			
						{loggedin &&
						<li><Link to="/" onClick={loguserout} className="nav-link">Logout</Link></li>
					}
						</ul>
					{admin &&
					<p1  className="nav-link">(Admin)</p1>
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
