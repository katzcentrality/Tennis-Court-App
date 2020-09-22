import React, {useState, useContext, useEffect} from 'react';
import {CourtsContext} from '../context/CourtsContext';
import { useParams, useHistory } from 'react-router-dom';
import CourtFinder from '../apis/CourtFinder';

const UpdateCourt = () => {
  const {id} = useParams();
  const {courts} = useContext(CourtsContext);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  let history = useHistory();

  const handleSubmit = async (event) => {
  event.preventDefault();
  const updatedCourt = await CourtFinder.put(`/${id}`, {
  name,
  location,
  price_range: priceRange
  });
  history.push('/');
  }
  

  // review later
  useEffect(() => {
  const fetchData = async () => {
  const response = await CourtFinder.get(`/${id}`);
  setName(response.data.data.court.name);
  setLocation(response.data.data.court.location);
  setPriceRange(response.data.data.court.price_range);
  }
  fetchData();
  }, []);

  return (
  <div>
  <form action="">
  <div className="form-group">
  <label htmlFor="name">Name</label>
  <input id="name" className="form-control" type="text" placeholder="Court Name" onChange={event => setName(event.target.value)} value={name} />
  </div>
  
  <div className="form-group">
  <label htmlFor="location">Location</label>
  <input id="location" className="form-control" type="text" placeholder="Location" onChange={event => setLocation(event.target.value)} value={location} />
  </div>
  
  <div className="form-group">
  <label htmlFor="price_range">Price Range ($-$$$$$)</label>
  <input id="price_range" className="form-control" type="number" placeholder="Price Range" onChange={event => setPriceRange(event.target.value)} value={priceRange} />
  </div>

  <button className="btn btn-info" onClick={handleSubmit}>Submit</button>
  </form>
  </div>
  ) 
}

export default UpdateCourt;
