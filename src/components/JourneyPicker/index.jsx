import React, { useEffect, useState } from 'react';
import './style.css';

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('Praha');
  const [toCity, setToCity] = useState('Liberec');
  const [date, setDate] = useState('');

  const handleFromCity = (e) => {
    setFromCity(e.target.value);
  };

  const handleToCity = (e) => {
    setToCity(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //Ošetřete, aby prohlížeč sám neodesílal formulář
    console.log('Odesílám formulář s cestou');
    console.log('vybrané výchozí město: ', fromCity);
    console.log('vybrané cílové město: ', toCity);
  };

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form className="journey-picker__form">
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select
              onChange={(e) => {
                handleFromCity(e);
              }}
            >
              <option value="">Vyberte</option>
              <option value="mesto01">Město 01</option>
              <option value="mesto02">Město 02</option>
              <option value="mesto03">Město 03</option>
              <option value="mesto04">Město 04</option>
              <option value="mesto05">Město 05</option>
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select
              onChange={(e) => {
                handleToCity(e);
              }}
            >
              <option value="">Vyberte</option>
              <option value="mesto01">Město 01</option>
              <option value="mesto02">Město 02</option>
              <option value="mesto03">Město 03</option>
              <option value="mesto04">Město 04</option>
              <option value="mesto05">Město 05</option>
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select>
              <option value="">Vyberte</option>
              <option value="datum01">Datum 01</option>
              <option value="datum02">Datum 02</option>
              <option value="datum03">Datum 03</option>
              <option value="datum04">Datum 04</option>
              <option value="datum05">Datum 05</option>
            </select>
          </label>
          <div className="journey-picker__controls">
            <button
              className="btn"
              type="submit"
              onClick={() => {
                handleSubmit(event);
              }}
            >
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src="/map.svg" />
      </div>
    </div>
  );
};
