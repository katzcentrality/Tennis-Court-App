import React, {useEffect, useContext} from 'react'
import CourtFinder from '../apis/CourtFinder';
import { CourtsContext } from '../context/CourtsContext';
import { useHistory } from 'react-router-dom';
import BallRating from './BallRating';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import {Spacing, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Button, Paper} from '@material-ui/core/';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



const Courtlist = (props) => {
const {courts, setCourts} = useContext(CourtsContext);
let history = useHistory();
useEffect(() => {
const fetchData = async () => {
try {
const response = await CourtFinder.get('/');
console.log(response.data.data.courts);
setCourts(response.data.data.courts);
} catch(err) {
console.log(err); }
};
fetchData();
}, []);

const handleDelete = async (event, id) => {
event.stopPropagation();

try {
const response = await CourtFinder.delete(`/${id}`);
setCourts(
courts.filter((court) => {
return court.id !== id;
})
);
}
catch (err) {
console.log(err);
}
}

const handleUpdate = (event, id) => {
event.stopPropagation();
history.push(`/courts/${id}/update`);
};

const handleCourtSelect = (id) => {
history.push(`/courts/${id}`);
}

const renderRating = (court) => {
if (!court.count) {
return <span className="text-warning">No Reviews</span>;
}
return (
<>
<BallRating rating={court.id} />
<span className="text-warning ml-1">({court.count})</span>
</>
);
};


const classes = useStyles();


// this is for the dummy data
const ballLoop = [<i className="fas fa-tennis-ball text-warning"></i>, <i className="fas fa-tennis-ball text-warning"></i>, <i className="fas fa-tennis-ball text-warning"></i>, <i className="fas fa-tennis-ball text-warning"></i>]


    return (
    <TableContainer  component={Paper} style={{'marginTop': '20px', 'width': '90%'}}>
    <Table className={classes.table} aria-label="tennis table">
    <TableHead>
    <TableRow>
      <TableCell>Court</TableCell>
      <TableCell>Location</TableCell>
      <TableCell>Price Range</TableCell>
      <TableCell>Ratings</TableCell>
      <TableCell>Edit</TableCell>
      <TableCell>Delete</TableCell>
    </TableRow>
    </TableHead>
    <TableBody>
    {courts &&
                courts.map((court) => {
                  return (
                    <tr
                      onClick={() => handleCourtSelect(court.id)}
                      key={court.id}
                    >
                      <TableCell>{court.name}</TableCell>
                      <TableCell>{court.location}</TableCell>
                      <TableCell>{"$".repeat(court.price_range)}</TableCell>
                      <TableCell>{renderRating(court)}</TableCell>
                      <TableCell><Button variant="contained" color="primary" disableElevation
                          onClick={(event) => handleUpdate(event, court.id)}>
                          Update
                        </Button></TableCell>

                      <TableCell>
                        <Button variant="contained" color="primary" disableElevation
                          onClick={(event) => handleDelete(event, court.id)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </tr>
                  );
                })}
    </TableBody>
    </Table>
    </TableContainer>

    );
    };


export default Courtlist;
