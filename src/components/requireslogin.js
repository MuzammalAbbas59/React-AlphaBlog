import { Redirect,BrowserRouter as Router, } from "react-router-dom";
import { BrowserRouter , Switch, Route} from "react-router-dom";


const Protected = ({ isLoggedIn, children }) => {  
    <Route
    render={() => {
      return isLoggedIn === true ? (
        children
      ) : (
        <Redirect to="/login" />
      );
    }}
  />
}
export default Protected;