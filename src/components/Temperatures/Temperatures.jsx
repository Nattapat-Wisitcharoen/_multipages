import { useState } from 'react';
import Variable from '../Variable/Variable';
import './Temperatures.css'
function Temperatures() {
    const [celsius, setCelsius] = useState(25)
    const [fahrenheit, setFahrenheit] = useState(77)
    const [kelvin, setKelvin] = useState(298.15)

    //function to convert between celsius, fahrenheit and kelvin
    const convertCelsiusToFahrenheit = (c) => (c * 9/5) + 32;
    const convertCelsiusToKelvin = (c) => c + 273.15;

    const convertFahrenheitToCelsius = (f) => (f - 32) * 5/9;
    const convertFahrenheitToKelvin = (f) => convertCelsiusToKelvin(convertFahrenheitToCelsius(f));

    const convertKelvinToCelsius = (k) => k - 273.15;
    const convertKelvinToFahrenheit = (k) => convertCelsiusToFahrenheit(convertKelvinToCelsius(k));

    // Update Celsius and derive other values
    const handleCelsiusChange = (value) => {
        setCelsius(value);
        setFahrenheit(convertCelsiusToFahrenheit(value));
        setKelvin(convertCelsiusToKelvin(value));
    };

    // Update Fahrenheit and derive other values
    const handleFahrenheitChange = (value) => {
        setFahrenheit(value);
        setCelsius(convertFahrenheitToCelsius(value));
        setKelvin(convertFahrenheitToKelvin(value));
    };

    // Update Kelvin and derive other values
    const handleKelvinChange = (value) => {
        setKelvin(value);
        setCelsius(convertKelvinToCelsius(value));
        setFahrenheit(convertKelvinToFahrenheit(value));
    };

    return ( 
    <div className='temperatures-container'>
        <h3 className='temperatures-title'>Temperatures</h3>
        <h3 className='temperatures-badges'>
            <span className='badge bg-primary'>{celsius.toFixed(2)} °C</span>
            <span className='badge bg-primary'>{fahrenheit.toFixed(2)} °F</span>
            <span className='badge bg-primary'>{kelvin.toFixed(2)} °K</span>
        </h3>
        <div className='temperatures-variables'>
            <Variable name={'Celsius'} value={celsius} setValue={handleCelsiusChange} />
            <Variable name={'Fahrenheit'} value={fahrenheit} setValue={handleFahrenheitChange} />
            <Variable name={'Kelvin'} value={kelvin} setValue={handleKelvinChange} />
        </div>
    </div> 
    );
}

export default Temperatures;