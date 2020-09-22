import React, {useState, useContext} from 'react';
import CourtFinder from '../apis/CourtFinder';
import {CourtsContext} from '../context/CourtsContext';
import {Box, Button, Grid, Select, TextField, FormControl, MenuItem, InputLabel, makeStyles} from '@material-ui/core/';


const AddCourt = () => {

const {addCourts} = useContext(CourtsContext);
const [name, setName] = useState('');
const [location, setLocation] = useState('');
const [priceRange, setPriceRange] = useState('Price Range');

const handleSubmit = async (event) => {
event.preventDefault();
try {
const response = await CourtFinder.post('/', {
name,
location,
price_range: priceRange
});
console.log(response.data.data);
addCourts(response.data.data.court);
} catch (err) {
console.log(err);
}
};



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  const classes = useStyles();



return (

/* <Grid container direction="column" justify="center" spacing={0} alignItems="center" item xs={4} > */
/* <form noValidate autoComplete='off' className={classes.root} alignItems="center"> */
<FormControl alignItems="center" style={{'width': '100%'}} >
<TextField id="standard-basic" label="Court Name" type="text" value={name} placeholder="Court Name" onChange={(event) => setName(event.target.value)}/>
<TextField id="standard-basic" type="text" value={location}  placeholder="Location" onChange={(event) => setLocation(event.target.value)}/>
<InputLabel id="demo-simple-select-label">Price Range</InputLabel>
<Select value={priceRange} onChange={event => setPriceRange(event.target.value)} style={{'width': '20%'}}>
<MenuItem value={1}>$</MenuItem>
<MenuItem value={2}>$$</MenuItem>
<MenuItem value={3}>$$$</MenuItem>
<MenuItem value={4}>$$$$</MenuItem>
<MenuItem value={5}>$$$$$</MenuItem>
</Select>

<Button style={{'width': '20%'}} onClick={handleSubmit} variant="contained" color="primary">Add</Button>
</FormControl>
/* </form> */

)
}

export default AddCourt;