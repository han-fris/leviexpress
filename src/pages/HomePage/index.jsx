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

  const handleBuy = () => {
    fetch('https://apps.kodim.cz/daweb/leviexpress/api/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'create',
        seat: journey.autoSeat,
        journeyId: journey.journeyId,
      }),
    });
  };

  return (
    <>
      <main>
        <JourneyPicker onJourneyChange={handleJourneyChange} />
        {journey && <JourneyDetail journey={journey} />}
        {journey && <SelectedSeat number={journey.autoSeat} />}
        <div className="controls container">
          <button
            className="btn btn--big"
            type="button"
            onClick={() => {
              handleBuy();
              navigate(`/reservation/${journey.journeyId}`);
            }}
          >
            Rezervovat
          </button>
        </div>
      </main>
    </>
  );
};
