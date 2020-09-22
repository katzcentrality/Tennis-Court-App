import React, {useState} from 'react'
import {Button, FormControl, InputLabel, Input, TextField, Container, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CourtFinder from '../../apis/CourtFinder';
import {Link} from 'react-router-dom';

 
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
localStorage.setItem("token", response.data.token);
setAuth(true);
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
        marginTop: '15px',
        width: '100%'
        },
        align: {
        justifyContent: 'center',
        alignItems: 'center'
        },
        header: {
        
        }
      }));
    
      const classes = useStyles();
    

    return (
        <div>
        <Typography className={classes.header} variant="h4" component="h4">Register</Typography>
        <FormControl className={classes.align}>
        <TextField type="text" label="Username" placeholder="Username" className={classes.forms} value={displayname} onChange={(event) => setDisplayName(event.target.value)}/>
        <TextField type="email" label="Email" placeholder="Email" className={classes.forms} value={email} onChange={(event) => setEmail(event.target.value)}/>
        <TextField type="password" label="Password" placeholder="Password" className={classes.forms} value={password} onChange={(event) => setPassword(event.target.value)} />
        <TextField type="password" label="Confirm Password" placeholder="Confirm Password" className={classes.forms}  value={passwordCheck} onChange={(event) => setPasswordCheck(event.target.value)}/>
        <Button variant="contained" className={classes.button} color="primary" onClick={event=> onSubmit(event)}>Register</Button>
            </FormControl>
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Register
