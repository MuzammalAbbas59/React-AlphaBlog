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
import Navigation from './navigation';
import Appbar from './Appbar';
import axios from 'axios';
import { useEffect } from 'react';
import { AuthenticatedRoutes, UnauthenticatedRoutes } from './routes';
import ProtectedRoute from "./requireslogin";

function Data() {


	return (
		<div>

			<div>
			</div>
			
		</div>
	)
}

export default Data;
