import React, {useState} from 'react'
import {Box, CssBaseline, Checkbox, Button, Grid, FormControlLabel, Avatar, FormControl, InputLabel, Input, TextField, Container, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CourtFinder from '../../apis/CourtFinder';
import {Link} from 'react-router-dom';
import SportsTennisIcon from '@material-ui/icons/SportsTennis';
import {toast} from 'react-toastify';


 
const Register = ({setAuth}) => {

// useState hooks for login
const [email, setEmail] = useState('');
const [displayname, setDisplayName] = useState('');
const [password, setPassword] = useState('');
const [passwordCheck, setPasswordCheck] = useState('');


// On submit handler 
const onSubmit = async (event) => {
event.preventDefault();
try {
const body = {email, password, displayname, passwordCheck}
const response = await CourtFinder.post('/register', body)
if(response.data.token) {
localStorage.setItem("token", response.data.token);
setAuth(true);
toast.success('Successfully signed up');
} else {
setAuth(false);
toast.err();
}
}
catch (err) {
console.log(err);
}
}

    const useStyles = makeStyles((theme) => ({
        forms: {
          marginTop: '5px',
          marginBottom: '5px',
        },
        button : {
        marginTop: '20px',
        width: '100%'
        },
        align: {
        justifyContent: 'center',
        alignItems: 'center'
        },
        container: {
        marginTop: '10%'
        }
      }));
    
      const classes = useStyles();
    

    return (
   
            <div>
            <Container component="main" maxWidth="xs" className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        <SportsTennisIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="Username"
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="Username"
                autoFocus
                value={displayname}
                onChange={(event) => setDisplayName(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email} onChange={(event) => setEmail(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password} onChange={(event) => setPassword(event.target.value)} 
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirm-password"
                label="Confirm Password"
                type="password"
                id="confirm-password"
                autoComplete="current-password"
                value={passwordCheck} onChange={(event) => setPasswordCheck(event.target.value)}
              />
            </Grid>
          </Grid>
          <Button
          className={classes.button}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={event=> onSubmit(event)}
          >
            Sign Up
          
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </div>
    )
          }

export default Register
