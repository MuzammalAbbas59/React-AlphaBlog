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
        <Router forceRefresh={true} >
            <Switch>
					<Route exact path="/articles/new">
						<NewArticle />
					</Route>
					<Route exact path="/articles/:id/edit">
						<EditArticle />
					</Route>
					<Route exact path="/articles/:id/delete">
						<DeleteArticle />
					</Route>
					<Route exact path="/articles/:id/show">
						<ShowArticle />
					</Route>
					<Route exact path="/articles">
						<Articles />
					</Route>

					<Route exact path="/categories/new">
						<NewCategory />
					</Route>
					<Route exact path="/categories/:id/show">
						<ShowCategory />
					</Route>
					<Route  path="/categories/:id/edit">
						<EditCategory />
					</Route>
					<Route exact path="/categories/:id/delete">
						<DeleteCategory />
					</Route>
					<Route exact path="/categories">
						<Categories />


					</Route>
					<Route exact path="/users/:id/show">
						<ShowUser />
					</Route>
					<Route exact path="/users/:id/delete">
						<DeleteUser />
					</Route>
					<Route exact  path="/users/:id/edit">
						<EditUser />
					</Route>
					<Route  exact path="/signup">
						<NewUser />
					</Route>

					<Route path="/users">
						<Users />
					</Route>

					<Route  exact path="/login">
						<Login />
					</Route>
					<Route exact path="/">
						<Navigation />
					</Route>
            </Switch>
        </Router>
    );
	
};

export const UnauthenticatedRoutes = () => {
    return (
        <Router forceRefresh={true}>

            <Switch>
		         	<Route exact path="/">
						<Navigation />
					</Route>

					<Route exact path="/signup">
						<NewUser />
					</Route>

					<Route exact path="/users">
						<Users />
					</Route>
                     
                    <Route exact path="/articles">
						< Articles />
					</Route>
                     
                    <Route exact path="/categories">
						<Categories />
					</Route>

					<Route exact path="/login">
						<Login />
					</Route>

					<Route exact path="*" >
					<Login />
					</Route> 

            </Switch>

        </Router>
    );
};
