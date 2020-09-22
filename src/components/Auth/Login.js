 import React, {useState} from 'react'
 import {Button, TextField, Typography} from '@material-ui/core';
 import { makeStyles } from '@material-ui/core/styles';
 import CourtFinder from '../../apis/CourtFinder';
 import {Link} from 'react-router-dom';

 






 const Login = ({setAuth}) => {

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
    


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
        const body = {email, password}
        const response = await CourtFinder.post('http://localhost:3001/api/v1/courts/login', body)
        localStorage.setItem("token", response.data.token);
        setAuth(true);
        } 
        
        catch (err) {
        console.log(err);
        }
        
        }


     return (
         <div>
        <form>
        <Typography>Login</Typography>  
        <TextField type="email" label="Email" placeholder="Email" className={classes.forms} value={email} onChange={(event) => setEmail(event.target.value)}/>
        <TextField type="password" label="Password" placeholder="Password" className={classes.forms} value={password} onChange={(event) => setPassword(event.target.value)} />
        <Button variant="contained" className={classes.button} color="primary" onClick={event=> onSubmit(event)}>Login</Button>
        <Link to="/register">Register</Link>
        </form>
         </div>
        
     ) 
 }
 
 export default Login
 