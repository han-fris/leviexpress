import React from 'react';
import { JourneyPicker } from '../JourneyPicker';

export const CityOptions = ({ cities }) => {
  return cities.map(({ code, name }) => (
    <option key={code} value={code}>
      {name}
    </option>
  ));
};
