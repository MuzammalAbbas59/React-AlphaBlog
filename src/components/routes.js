import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Articles from './articles';
import Users from './users';
import Categories from './categories';
import NewArticle from './articles/new';
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
import ProtectedRoute from "./requireslogin";


export const AuthenticatedRoutes = () => {
    return (
        <Router>
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
        </Router>
    );
};

export const UnauthenticatedRoutes = () => {
    return (
        <Router>

            <Switch>
               
					<Route path="/signup">
						<NewUser />
					</Route>

					<Route path="/users">
						<Users />
					</Route>
                     
                    <Route path="/articles">
						<Users />
					</Route>
                     
                    <Route path="/categories">
						<Users />
					</Route>

					<Route path="/login">
						<Login />
					</Route>

	
					<Route path="/">
						<Navigation />
					</Route>

            </Switch>

        </Router>
    );
};
