import { BrowserRouter, useParams, Route, Switch } from 'react-router-dom';
import './App.css';
import Data from './components/data';
import ShowArticle from './components/articles/show';
import ShowUser from './components/users/show';
import Articles from './components/articles';
import Footer from './components/footer';
import Navbar from './components/Navbar';
const show_articles_URL = "http://[::1]:4000/articles/id";

function ProductWrapper() {
  const { id } = useParams();
  return <ShowArticle id={id} />
};

function App() {

  return (
    <div className="App">
			{/* <Navbar></Navbar> */}

      <BrowserRouter>
        <Switch>
          {/* <Route path='/articles/${articles?.id}'>
            <ShowArticle />

          </Route> */}
          <Route path="/categories">

          </Route>
          <Route path="/users">

          </Route>
        </Switch>
      </BrowserRouter>
      <Data />
      <Footer></Footer>
    </div>
  );
}

export default App;
