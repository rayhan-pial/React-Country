import React,{ useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countries from './components/Countries';
import Search from './components/Search';

const url ="https://restcountries.com/v3.1/all";

function App() {

  const[isLoading, setIsLoading] = useState(true);
  const[error, setError] = useState(null);
  const[countries, setCountries] = useState([]);
  const[filteredcountries, setfilteredcountries] = useState(countries);

  const fetchData= async (url)=>{
    setIsLoading(true);

    try{
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setfilteredcountries(data)
      setIsLoading(false);
      setError(null);
    } catch(error){
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);

  }, []);

  const removeCountry=(name)=>{
    const filtered = filteredcountries.filter((country)=>
      country.name.common !== name);
    setfilteredcountries(filtered);
  };

  const handleSearch =(searchValue)=>{
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter((country)=>{
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value)
    });
    setfilteredcountries(newCountries);
  }



  return (
    <>
      <h1>Country App</h1>
      <Search onSearch={handleSearch}/>
      {isLoading && <h2>Loading ....</h2> }
      {error && <h2>{error.message}</h2> }
      {countries && <Countries countrries={filteredcountries}
      onRemoeCountry={removeCountry} /> }
    </>
  )
}

export default App



