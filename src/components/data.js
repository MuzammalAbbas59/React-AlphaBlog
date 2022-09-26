import '../stylesheets/data.css'
import axios from 'axios';
import Articles from './articles';
import Users from './users';
import Categories from './categories';
import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import NewArticle from './articles/new';
import React from 'react'
import NewCategory from './categories/new';
import EditArticle from './articles/edit';
import EditCategory from './categories/edit';
import DeleteCategory from './categories/delete';
import ShowCategory from './categories/show';
import DeleteArticle from './articles/delete';



function Data() {
	return (
		<div>
			<BrowserRouter>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<ul className="navbar-nav mr-auto">
						<li><Link to="/articles" className="nav-link">Articles</Link></li>
						<li><Link to="/categories" className="nav-link">Categories</Link></li>
						<li><Link to="/users" className="nav-link">Users</Link></li>
					</ul>

				</nav>
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

					<Route path="/articles">
						<Articles />
					</Route>


					<Route path="/categories/new">
						<NewCategory />
					</Route>
					<Route path="/categories/:id">
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
					<Route path="/users">
						<Users/>

					</Route>

				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default Data;
