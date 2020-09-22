import React, {useState, useEffect} from 'react'
import {Typography, Button} from '@material-ui/core';
import CourtFinder from '../../apis/CourtFinder';
import {toast} from 'react-toastify';

const Dashboard = ({setAuth}) => {

const [name, setName] = useState('');

async function getName() {
try {
const response = await CourtFinder.get('/dashboard', {headers: {token: localStorage.token}})
setName(response.data.displayname);
} 
catch (err) {
console.log(err);
}
}

const logout = (event) => {
event.preventDefault();
// localStorage.removeItem('token')
localStorage.clear();
setAuth(false);
toast.success('Successfully logged out');
}

useEffect(() => {
getName();
}, []);


    return (
        <div>
        <Typography>
        User Dashboard
        </Typography>
        {/* {name.length > 0  ? <h1>Welcome {name}</h1> : <h1>Hello</h1>} */}
        <Button onClick={(event) => logout(event)}>Log Out</Button>
        </div>
    )
}

export default Dashboard;
