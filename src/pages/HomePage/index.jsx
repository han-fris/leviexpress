import { useEffect, useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JorneyDetail';
import { SelectedSeat } from '../../components/SelectedSeat';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journeyData) => {
    console.log('předávám data', journeyData);
    setJourney(journeyData);
  };

  return (
    <>
      <main>
        <JourneyPicker onJourneyChange={handleJourneyChange} />
        {journey && <JourneyDetail journey={journey} />}
        {journey && <SelectedSeat number={journey.autoSeat} />}
      </main>
    </>
  );
};
