import React, {useState, createContext} from 'react';

export const CourtsContext = createContext();

export const CourtsContextProvider = (props) => {
const [courts, setCourts] = useState([]);
const [selectedCourt, setSelectedCourt] = useState(null);

const addCourts = (court) => {
setCourts([...courts, court]);
};


return (
<CourtsContext.Provider
value={{
courts, 
setCourts,
addCourts,
selectedCourt,
setSelectedCourt
}}>
{props.children}
</CourtsContext.Provider>
)

}