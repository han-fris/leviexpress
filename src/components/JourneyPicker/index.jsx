import React, { useEffect, useState } from 'react';
import './style.css';
import { CityOptions } from '../CityOptions';
import { DateOptions } from '../DatesOptions';

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [cities, setCities] = useState([]);
  const [date, setDate] = useState('');
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch(
        'https://apps.kodim.cz/daweb/leviexpress/api/cities',
      );
      if (!response.ok) {
        console.log('nepovedlo se fetchCities');
      } else {
        const responseData = await response.json();
        //console.log('vypis mest: ', responseData);
        setCities(responseData.results);
      }
    };
    const fetchDates = async () => {
      const response = await fetch(
        'https://apps.kodim.cz/daweb/leviexpress/api/dates',
      );
      if (!response.ok) {
        console.log('nepovedlo se fetchDates');
      } else {
        const responseData = await response.json();
        //   console.log('vypis dates: ', responseData);
        setDates(responseData.results);
      }
    };
    fetchCities();
    fetchDates();
  }, []);

  const handleSubmit = async () => {
    const response = await fetch(
      `https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`,
    );
    const responseData = await response.json();
    const results = responseData.results;
    onJourneyChange(results);
  };

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form
          className="journey-picker__form"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(
              `Odesílám formulář s cestou z ${fromCity} do ${toCity} dne ${date}`,
            );
          }}
        >
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select
              value={fromCity}
              onChange={(e) => {
                setFromCity(e.target.value);
              }}
            >
              <option value="">Vyberte</option>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select
              value={toCity}
              onChange={(e) => {
                setToCity(e.target.value);
              }}
            >
              <option value="">Vyberte</option>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            >
              <option value="">Vyberte</option>
              <DateOptions dates={dates} />
            </select>
          </label>
          <div className="journey-picker__controls">
            <button
              className="btn"
              type="submit"
              disabled={!(fromCity && toCity && date)}
              onClick={() => {
                handleSubmit();
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
