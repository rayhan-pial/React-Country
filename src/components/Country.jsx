import React from 'react'

import './country.css'

export default function Country(props) {

    const{name,flags, capital,population, area} = props.country.country;

    const handleRemoveCounty=(name)=>{
        props.onRemoeCountry(name);
    }
    return (
    <article>
        <div>
            <img src={flags.png} alt={name.common} />
            <h3>Name : {name.common} </h3>
            <h3>Population : {population} </h3>
            <h3>Capital : {capital} </h3>
            <h3>Area : {area} </h3>
            <button onClick={()=>{
                handleRemoveCounty(name.common)
            }}>Remove Country</button>
        </div>
    </article>
  )
}
