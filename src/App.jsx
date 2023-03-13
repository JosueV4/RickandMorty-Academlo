import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Location from './components/Location';
import ResidentList from './components/ResidentList';
import { getRandomNumber } from './utils/getRandomNumber';
import banner from '/banner.png';

const App = () => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [idLocationValue, setIdLocationValue] = useState('');

  const getIdLocationRandom = () => getRandomNumber(1, 126);

  const loadLocationInfo = async (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${getIdLocationRandom()}`;

    try {
      const res = await axios.get(url);
      setLocationInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const idLocationHandleChange = (e) => {
    const newValue = e.target.value;

    if (/^\d{0,3}$/.test(newValue)) setIdLocationValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (idLocationValue) loadLocationInfo(idLocationValue);
    else loadLocationInfo(getIdLocationRandom());
  };

  useEffect(() => {
    loadLocationInfo();
  }, []);

  return (
    <div className="bg-teal-800 h-full flex flex-col justify-center items-center text-white">
      <div>
        <img className="w-full" src={banner} alt="banner" />
      </div>
      <form className='my-10' onSubmit={handleSubmit}>
        <input
          className="text-black"
          type="search"
          name="id-location"
          value={idLocationValue}
          onChange={idLocationHandleChange}
          placeholder="Type a number between 1 and 126"
        />
        <input type="submit" value="Search" />
      </form>

      {locationInfo && <Location {...locationInfo} />}
      {locationInfo && <ResidentList residents={locationInfo.residents} />}
    </div>
  );
};

export default App;
