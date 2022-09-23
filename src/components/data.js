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

const articles_URL = "http://[::1]:4000/articles";
const users_URL = "http://[::1]:4000/users";
const categories_URL = "http://[::1]:4000/categories";

function get_categories_data() {

	return axios.get(categories_URL).then((response) => response.data)
}
function get_articles_data() {

	return axios.get(articles_URL).then((response) => response.data)

}

function get_users_data() {

	return axios.get(users_URL).then((response) => response.data)

}

function Data() {
	const [articles, setArticles] = useState([]);
	const [users, setUsers] = useState([]);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		let mounted = true;
		get_articles_data().then((items) => {
			if (mounted) {
				setArticles(items);
			}
		});
		return () => { (mounted = false) };
	}, []);

	useEffect(() => {
		let mounted = true;
		get_users_data().then((items) => {
			if (mounted) {
				setUsers(items);
			}
		});
		return () => { (mounted = false) };
	}, []);

	useEffect(() => {
		let mounted = true;
		get_categories_data().then((items) => {
			if (mounted) {
				setCategories(items);
			}
		});
		return () => { (mounted = false) };
	}, []);

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

					<Route path="/articles">
						<Articles articles={articles} />
					</Route>


					<Route path="/categories/new">
						<NewCategory />
					</Route>

					<Route path="/categories">
						<Categories categories={categories} />

					</Route>
					<Route path="/users">
						<Users users={users} />

					</Route>

				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default Data;
