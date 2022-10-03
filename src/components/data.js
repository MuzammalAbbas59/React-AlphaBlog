import './data.css'
import Articles from './articles';
import Users from './users';
import Categories from './categories';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import NewArticle from './articles/new';
import React from 'react'
import NewCategory from './categories/new';
import EditArticle from './articles/edit';
import EditCategory from './categories/edit';
import DeleteCategory from './categories/delete';
import ShowCategory from './categories/show';
import DeleteArticle from './articles/delete';
import ShowArticle from './articles/show';
import ShowUser from './users/show';
import DeleteUser from './users/delete';
import EditUser from './users/edit';
import Login from './sessions/signin';
import NewUser from './users/new';
import { AppBar, Typography, Toolbar, Tabs, Tab } from '@mui/material';
import { Box } from '@mui/system';

import Navigation from './navigation';
import axios from 'axios';
import Navbar from './Navbar';
import { AuthenticatedRoutes, UnauthenticatedRoutes } from "./routes";
import { useAuth } from '../context/authcontext';
import Appbar from './Appbar';


function Data() {
	// const value = React.useContext(AuthContext);
	// const ab = useAuth();

	return (
		<div>
			
<Appbar></Appbar>
			<BrowserRouter>
				<Switch>

					<Route path="/articles/new">
						<NewArticle />
					</Route>
					<Route path="/articles/:id/edit">
						<EditArticle />
					</Route>
					<Route path="/articles/:id/delete">
						<DeleteArticle />
					</Route>
					<Route path="/articles/:id/show">
						<ShowArticle />
					</Route>
					<Route path="/articles">
						<Articles />
					</Route>


					<Route path="/categories/new">
						<NewCategory />
					</Route>
					<Route path="/categories/:id/show">
						<ShowCategory />
					</Route>
					<Route path="/categories/:id/edit">
						<EditCategory />
					</Route>
					<Route path="/categories/:id/delete">
						<DeleteCategory />
					</Route>
					<Route path="/categories">
						<Categories />


					</Route>
					<Route path="/users/:id/show">
						<ShowUser />
					</Route>
					<Route path="/users/:id/delete">
						<DeleteUser />
					</Route>
					<Route path="/users/:id/edit">
						<EditUser />
					</Route>
					<Route path="/signup">
						<NewUser />
					</Route>

					<Route path="/users">
						<Users />
					</Route>

					<Route path="/login">
						<Login />
					</Route>

	
					<Route path="/">
						<Navigation />
					</Route>
				</Switch>

			</BrowserRouter>
		</div>
	)
}

export default Data;
