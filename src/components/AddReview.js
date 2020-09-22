import React, {useState} from 'react'
import CourtFinder from '../apis/CourtFinder';
import {useParams, useHistory, useLocation} from 'react-router-dom';
import {Button, FormLabel, Typography, MenuItem, Select, TextField, TextareaAutosize} from '@material-ui/core';


const AddReview = () => {

const {id} = useParams();
const location = useLocation();
const history = useHistory();

const [name, setName] = useState('');
const [reviewText, setReviewText] = useState('');
const [rating, setRating] = useState('');


const handleSubmit = async (event) => {
event.preventDefault();
try {
const newResponse = await CourtFinder.post(`/${id}/addReview`, {
name,
review: reviewText,
rating
});
history.push(`/courts/{id}`);
}
catch (err) {
console.log(err)
}
}

  return (
    <div className="mb-2">
    <Typography variant="h5" component="h5" style={{'marginTop': '20px'}}>
    Add A Review
    </Typography>
     
    <form action="">
    <div className="form-row">
    <div className="form-group col-8">
    <TextField id="standard-basic" label="Enter your name" type="text" value={name} placeholder="Court Name" onChange={event => setName(event.target.value)}/>
    {/* <input value={name} onChange={setName} placeholder="Enter your name" id="" onChange={event => setName(event.target.value)} className="form-control"   /> */}
    {/* <label id="name" placeholder="name" type="text" className="form-control" />   */}
    </div> 
    <div className="form-group col-4">
    <label htmlFor="rating">Rating</label>
    {/* <select id="rating" value={rating} className="custom-select" onChange={event => setRating(event.target.value)}> */}

  <Select value={rating} onChange={event => setRating(event.target.value)}>
<MenuItem value={1}><i className="fas fa-tennis-ball text-warning"></i></MenuItem>
<MenuItem value={2}><i className="fas fa-tennis-ball text-warning"></i><i className="fas fa-tennis-ball text-warning"></i></MenuItem>
<MenuItem value={3}><i className="fas fa-tennis-ball text-warning"></i><i className="fas fa-tennis-ball text-warning"></i><i className="fas fa-tennis-ball text-warning"></i></MenuItem>
<MenuItem value={4}><i className="fas fa-tennis-ball text-warning"></i><i className="fas fa-tennis-ball text-warning"></i><i className="fas fa-tennis-ball text-warning"></i><i className="fas fa-tennis-ball text-warning"></i></MenuItem>
<MenuItem value={5}><i className="fas fa-tennis-ball text-warning"></i><i className="fas fa-tennis-ball text-warning"></i><i className="fas fa-tennis-ball text-warning"></i><i className="fas fa-tennis-ball text-warning"></i><i className="fas fa-tennis-ball text-warning"></i></MenuItem>
</Select>
    </div>
    </div>
    <div className="form-group">
      <FormLabel></FormLabel>
    <label htmlFor="Review">Review</label> 
    {/* <textarea id="Review" value={reviewText} className="form-control" onChange={event => setReviewText(event.target.value)}></textarea> */}
    <TextareaAutosize aria-label="empty textarea" placeholder="" onChange={event => setReviewText(event.target.value)} value={reviewText} style={{'width':'100%'}}/>

    </div>
<Button onClick={handleSubmit} type="submit" variant="contained" color="primary">Submit Review</Button>
    </form>
    </div>
  )
}

export default AddReview;
