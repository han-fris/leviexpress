import React from 'react';
import './style.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const ReservationPage = () => {
  const { id } = useParams();
  const [reservation, setReservation] = useState(null);
  console.log(id);

  useEffect(() => {
    const fetchReservation = async () => {
      const response = await fetch(
        `https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=${id}`,
      );
      if (!response.ok) {
        console.log('nepovedlo se fetchReservation', response);
        return;
      } else {
        const data = await response.json();
        const reservations = data.results;
        setReservation(reservations);
      }
    };
    fetchReservation();
  }, []);
  console.log(reservation);

  return (
    <div className="reservation container">
      <h2>Vaše e-jízdenka č. {id}</h2>
      <div className="reservation__body">
        <div className="reservation__headings">
          <p>Datum cesty:</p>
          <p>Odjezd:</p>
          <p>Příjezd:</p>
          <p>Sedadlo:</p>
        </div>
        <div className="reservation__info">
          <p>sobota 18. května 2024</p>
          <p>Bratislava, 21:15</p>
          <p>Budapest, 23:55</p>
          <p>18</p>
        </div>
      </div>
    </div>
  );
};
