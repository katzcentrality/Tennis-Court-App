import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from './routes/Home';
import UpdatePage from './routes/UpdatePage';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import { CourtsContextProvider } from './context/CourtsContext';
import CourtdetailPage from './routes/CourtdetailPage';
import AddReview from './components/AddReview';
import Dashboard from './components/Auth/Dashboard';
import CourtFinder from './apis/CourtFinder';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();


function App() {

const [isAuth, setIsAuth] = useState(false);

  const setAuth = boolean => {
    setIsAuth(boolean);
  };
  



async function isAuthenticated() {
try {
  const response = await CourtFinder.get('/is-verified', {headers: {token: localStorage.token}})
  // const setter = response.data;
  response.data === true ? setIsAuth(true) : setIsAuth(false)
} 
catch (err) {
console.log(err);
}
}

useEffect(() => {
isAuthenticated()
}, []);


  
  return (
    
    <CourtsContextProvider>
    <Router>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/courts/:id/update" component={UpdatePage} />
    <Route exact path="/courts/:id" component={CourtdetailPage} /> 
    <Route exact path="/courts/:id/addReview" component={AddReview} />
    <Route exact path="/login" render={props => !isAuth ? (<Login {...props} setAuth={setAuth} />) : ( <Redirect to="/dashboard" />)} />
    <Route exact path="/register" render={props => !isAuth ? (<Register {...props} setAuth={setAuth} /> ) : ( <Redirect to="/dashboard" />)} />
    <Route path="/dashboard" render={props => isAuth ? ( <Dashboard {...props} setAuth={setAuth} />) : ( <Redirect to="/login" />)} />
    </Switch>
    </Router>
    </CourtsContextProvider>
 

  );
}

export default App;
