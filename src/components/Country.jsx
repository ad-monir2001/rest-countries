import { useState } from 'react';
import './Style.css';
const Country = ({ country , handleVisitedCountry, handleAddFlags }) => {
  const [visited, setVisited] = useState(false);
  const { name, flags, population } = country;

  const handleVisit = () => {
    setVisited(!visited);
  };



  return (
    <div
      id="countryDetails"
      className={`country ${visited ? `visited` : `nonVisited`}`}
    >
      <h4>{name?.common}</h4>
      <img src={flags?.png}></img>
      <p>Population: {population}</p>
      <button onClick={() => handleVisitedCountry(country)}>Mark as visited</button> <br /> <br />

      <button onClick={() => handleAddFlags(country.flags.png)}>Add flag</button> <br /> <br />

      <button onClick={handleVisit}>
        {visited ? 'Visited' : 'Going'}
      </button>
      <br />
      {visited ? 'I have visited this country' : 'I want to go.'}
      
    </div>
  );
};

export default Country;
