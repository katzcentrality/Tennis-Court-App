import React, { useContext, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom'; 
import {CourtsContext} from '../context/CourtsContext';
import CourtFinder from '../apis/CourtFinder';
import BallRating from '../components/BallRating';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';
import {Button, Typography} from '@material-ui/core';
import styled from 'styled-components';


const CourtdetailPage = () => {
        const history = useHistory();
        const {id} = useParams();
        const {selectedCourt, setSelectedCourt} = useContext(CourtsContext);

useEffect(() => {
const fetchData = async () => {
try {
const response = await CourtFinder.get(`/${id}`); 
// console.log(response);
// console.log(response.data.data.court);
setSelectedCourt(response.data.data);
}
catch(err) {
console.log(err);
}
}
fetchData();
},[]);



const addReviewLink = () => {
        history.push(`/courts/${id}/addReview`);
        }
        const Container = styled.div`
        text-align: center;
        margin-top: 20px;
        color: blue;
       `;

       const Text = styled.div`
        font-weight: 300;
       `;
       
       const Yellow = styled.div`
        color: #CCCC00	
       `;
return (
<div>
{selectedCourt && (
<>
<Typography variant="h2" component="h2" align="center"><Text>{selectedCourt.court.name}</Text></Typography>
<Typography variant="h6" align="center">
<Text>Average Court Rating:<Yellow><BallRating rating={selectedCourt.court.average_rating} /></Yellow></Text>
</Typography>
<Container mt={4}>
<div>
<Button variant="contained" align="center" color="primary" onClick={addReviewLink} >Review {selectedCourt.court.name}</Button>
</div>
</Container>
<div className="mt-3"> 
<Reviews reviews={selectedCourt.reviews} />
</div>
</>
)}
</div>
);
}


export default CourtdetailPage;

