import React, { useState } from 'react'

function BoilingVerdict({value, scale}) { 
  const BOIL_TEMPERATURE_IN_CELSIUS = 100

  function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  /*function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }*/

  function calculateTemperature(temperature, scale) {
    if (scale === 'f') {
      return toCelsius(value)
    }
    return temperature
  }  

  return (
    <>
      {
        calculateTemperature(value, scale) >= BOIL_TEMPERATURE_IN_CELSIUS
        ? <p>The water would boil.</p>
        : <p>The water would not boil.</p>
      }
    </>
  )
}

function TemperatureInput({temperature, scale, onChange}) {
  const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  }

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input value={temperature} onChange={(e) => onChange(e.target.value)} />
      <BoilingVerdict value={parseFloat(temperature)} scale={scale} />
    </fieldset>
  );
}

export default function WaterBoilCalculator() {
  const [celsius, setCelsius] = useState('')
  const [fahrenheit, setFahrenheit] = useState('')  

  return (
    <div>
      <TemperatureInput temperature={celsius} scale="c" onChange={setCelsius} />
      <br/>
      <TemperatureInput temperature={fahrenheit} scale="f" onChange={setFahrenheit} />
    </div>
  )
}
