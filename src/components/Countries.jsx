import { useEffect, useState } from 'react';
import Country from './Country';
import './Style.css';
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [addFlag, setAddflags] = useState([])


  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleAddFlags  = flag =>{
    const newVisitedFlags = [...addFlag, flag]
    setAddflags(newVisitedFlags)
  }

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <div>
        <h4>Visited Countries: {visitedCountries.length}</h4>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>

        {/* show flag here */}
        <div className='addFlag'>
          {
            addFlag.map(flag => <img src={flag}></img>)
          }
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleAddFlags = {handleAddFlags}
            country={country}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
