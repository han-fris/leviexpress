import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JorneyDetail';
import { SelectedSeat } from '../../components/SelectedSeat';

export const HomePage = () => {
  let navigate = useNavigate();
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journeyData) => {
    // console.log('předávám data', journeyData);
    setJourney(journeyData);
  };

  const handleBuy = async () => {
    const response = await fetch(
      'https://apps.kodim.cz/daweb/leviexpress/api/reservation',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'create',
          seat: journey.autoSeat,
          journeyId: journey.journeyId,
        }),
      },
    );
    if (!response.ok) {
      console.log('nepovedlo se handleBuy');
      return;
    }
    const data = await response.json();
    console.log('data jsou:', data);
    const reservation = data.results;
    navigate(`/reservation/${reservation.reservationId}`);
  };

  return (
    <>
      <main>
        <JourneyPicker onJourneyChange={handleJourneyChange} />
        {journey && <JourneyDetail journey={journey} />}
        {journey && <SelectedSeat number={journey.autoSeat} />}
        <div className="controls container">
          <button className="btn btn--big" type="button" onClick={handleBuy}>
            Rezervovat
          </button>
        </div>
      </main>
    </>
  );
};
