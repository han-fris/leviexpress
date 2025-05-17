import './style.css';
import { BusStop } from '../BusStop';

export const JourneyDetail = ({ journey }) => {
  const listStops = journey.stops.map((stop) => (
    <BusStop
      key={stop.code}
      name={stop.name}
      station={stop.station}
      time={stop.time}
    />
  ));

  return (
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">{listStops}</div>
    </div>
  );
};
