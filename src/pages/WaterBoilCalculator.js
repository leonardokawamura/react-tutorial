import React, { useState } from 'react'

function TemperatureInput({temperature, scale, onChange}) {
  const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  }

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input value={temperature} onChange={onChange} />
    </fieldset>
  );
}

function BoilingVerdict({celsius}) {
  const BOILE_TEMPERATURE_IN_CELSIUS = 100

  return (
    <>
      {
        parseFloat(celsius) >= BOILE_TEMPERATURE_IN_CELSIUS
        ? <h1>The water would boil.</h1>
        : <h1>The water would not boil.</h1>
      }
    </>
  )
}

export default function WaterBoilCalculator() {
  const [scale, setScale] = useState('c')
  const [temperature, setTemperature] = useState('')
  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

  function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }

  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  function handleCelsiusChange(event) {
    setScale('c')
    setTemperature(event.target.value)
  }

  function handleFahrenheitChange(event) {
    setScale('f')
    setTemperature(event.target.value)
  }

  return (
    <div>
      <TemperatureInput temperature={celsius} scale="c" onChange={handleCelsiusChange} />
      <br />
      <TemperatureInput temperature={fahrenheit} scale="f" onChange={handleFahrenheitChange} />
      <br />
      <BoilingVerdict celsius={celsius} />
    </div>
  )
}
