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

function App() {

  return (
    <div className="App">
        <Data />
    
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

      <Footer></Footer>
    </div>
  );
}

export default App;
