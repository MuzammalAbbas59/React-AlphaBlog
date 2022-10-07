import './App.css';
import Users from './components/users';
import Categories from './components/categories';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import NewArticle from './components/articles/new';
import React from 'react'
import NewCategory from './components/categories/new';
import EditArticle from './components/articles/edit';
import EditCategory from './components/categories/edit';
import DeleteCategory from './components/categories/delete';
import ShowCategory from './components/categories/show';
import DeleteArticle from './components/articles/delete';
import ShowArticle from './components/articles/show';
import ShowUser from './components/users/show';
import DeleteUser from './components/users/delete';
import EditUser from './components/users/edit';
import Login from './components/sessions/signin';
import NewUser from './components/users/new';
import Navigation from './components/navigation';
import Data from './components/data';
import Footer from './components/footer';
import Articles from './components/articles';
import { AuthenticatedRoutes, UnauthenticatedRoutes } from './components/routes';
import axios from 'axios';
import { useEffect } from 'react';
import Appbar from './components/Appbar';



function App() {

	const [loggedin, setloggedin] = React.useState(false);
    const [logged, setlogged] = React.useState(false);
      
	useEffect(() => {
		axios.get("http://localhost:4000/loggedin",
			{ withCredentials: true }
		).then(response => {

			setloggedin(crr => true);
			setlogged(crr => true);

		})
			.catch(err => {
				setlogged(crr => true);
			})
	});

	return (
		<div className="App">
		  <Appbar></Appbar>
			{logged &&
			<>
			{!loggedin? <UnauthenticatedRoutes /> : <AuthenticatedRoutes/>}
			</>
}
			<Footer></Footer>
		</div>
	);
}

export default App;
