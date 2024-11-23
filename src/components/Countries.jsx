import React from 'react'

import {v4 as uuidv4} from 'uuid'
import Country from './Country';

export default function Countries(props) {
  return (
    <section>
        {props.countrries.map((country)=>{
            const newCountry = {country, id : uuidv4};
            return <Country country={newCountry} key = {newCountry.id}
            onRemoeCountry={props.onRemoeCountry} />
        })}
    </section>
  )
}
