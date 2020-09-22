import axios from 'axios';

export default axios.create({
baseURL: 'https://evening-eyrie-67618.herokuapp.com/api/v1/courts/',
});


// export default axios.create({
// baseURL: 'http://localhost:3001/api/v1/courts',
// });


