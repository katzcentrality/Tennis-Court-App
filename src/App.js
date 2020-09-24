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
import { Container } from "@material-ui/core";



toast.configure();


function App() {

const [isAuth, setIsAuth] = useState(false);

const [isLoading, setIsLoading] = useState(true);

const setAuth = boolean => {
    setIsAuth(boolean);
  };
  



async function isAuthenticated() {
try {
  const response = await CourtFinder.get('/is-verified', {headers: {token: localStorage.token}})
  console.log(response)
  response.data === true ? setIsAuth(true) : setIsAuth(false)
  setIsLoading(false);
} 
catch (err) {
console.log(err);
}
}

useEffect(() => {
isAuthenticated();
}, []);


// const reviewCheck = () => {
//   if (isLoading) return "Please wait."
//   if (!isAuth) return <Redirect to="/login" />
//   if (isAuth) return <Route exact path="/courts/:id/addReview" component={AddReview} />
// }

  
  return (
    
    <CourtsContextProvider>
      <Container>
    <Router>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/courts/:id/update" component={UpdatePage} />
    <Route exact path="/courts/:id" component={CourtdetailPage} /> 
    

    <Route
  exact
  path="/courts/:id/addReview"
  render={(props) =>
    !isAuth ? (
      <Login {...props} setAuth={setAuth} />
    ) : (
      <>
      <Switch>
        <Redirect exact from="/" to="/courts/:id/addReview" />
        <Route exact path="/courts/:id/addReview">
          <AddReview />
        </Route>
        </Switch>
      </>
    )
  }
/>

    {/* test route */}
    {/* <Route exact path="/courts/:id/addReview" component={AddReview}/> */}

    <Route exact path="/login" render={props => !isAuth ? (<Login {...props} setAuth={setAuth} />) : ( <Redirect to="/dashboard" />)} />
    <Route exact path="/register" render={props => !isAuth ? (<Register {...props} setAuth={setAuth} /> ) : ( <Redirect to="/dashboard" />)} />
    <Route path="/dashboard" render={props => isAuth ? ( <Dashboard {...props} setAuth={setAuth} />) : ( <Redirect to="/login" />)} />
    </Switch>
    </Router>
    </Container>
    </CourtsContextProvider>
 

  );
}

export default App;
