import React, { useState } from 'react';
import './TimeRangeSlider.css';

export default function TimeRangeSlider({max_year,min_year}) {
  const [startYear, setStartYear] = useState(min_year); 
  const [currentYear, setCurrentYear] = useState(); 
  const [endYear, setEndYear] = useState(max_year);

  return (
    <div className='slider'>
      {/* Starting Year Input */}
      <div>
        <label htmlFor="start-year">Starting Year:</label>
        <input
          id="start-year"
          type="number"
          value={startYear}
          onChange={(e) => setStartYear(Number(e.target.value))}
          min="1900"
          max={endYear - 1} // Ensure valid range
          style={{ marginLeft: '8px' }}
        />
      </div>

      {/* Ending Year Input */}
      <div>
        <label htmlFor="end-year">Ending Year:</label>
        <input
          id="end-year"
          type="number"
          value={endYear}
          onChange={(e) => setEndYear(Number(e.target.value))}
          min={startYear + 1} // Ensure valid range
          style={{ marginLeft: '8px' }}
        />
      </div>

      {/* Slider */}
      <div style={{ marginTop: '16px' }}>
        <label htmlFor="year-slider">Select Year: {currentYear}</label>
        <input
          id="year-slider"
          type="range"
          min={startYear}
          max={endYear}
          value={currentYear}
          onChange={(e) => setCurrentYear(Number(e.target.value))}
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
}
