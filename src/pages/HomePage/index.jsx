import { useEffect, useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';

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
        {journey === null ? `` : `Id cesty je: ${journey.journeyId}`}
      </main>
    </>
  );
};
